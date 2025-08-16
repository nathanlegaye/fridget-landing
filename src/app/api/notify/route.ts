import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🚀 [NOTIFY API] Début de la requête POST');
  
  try {
    const { email } = await request.json();
    console.log('📧 [NOTIFY API] Email reçu:', email);

    // Validation de l'email
    if (!email || !email.includes('@')) {
      console.log('❌ [NOTIFY API] Email invalide:', email);
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Vérifier si les variables d'environnement Supabase sont configurées
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    console.log('🔧 [NOTIFY API] Variables d\'environnement:');
    console.log('  - NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'MISSING');
    console.log('  - NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'MISSING');
    console.log('  - RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'PRESENT' : 'MISSING');

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('⚠️ [NOTIFY API] Variables d\'environnement Supabase non configurées');
      
      // Fallback : simuler une inscription réussie
      return NextResponse.json(
        { 
          message: 'Inscription réussie ! Vérifiez votre email pour la confirmation.',
          email: email,
          note: 'Mode développement - Supabase non configuré'
        },
        { status: 200 }
      );
    }

    console.log('✅ [NOTIFY API] Variables d\'environnement OK, import de Supabase...');
    
    // Import dynamique de Supabase seulement si configuré
    let supabase;
    try {
      const supabaseModule = await import('@/lib/supabase');
      supabase = supabaseModule.supabase;
      console.log('✅ [NOTIFY API] Supabase importé avec succès');
    } catch (importError) {
      console.error('❌ [NOTIFY API] Erreur lors de l\'import Supabase:', importError);
      throw new Error(`Erreur import Supabase: ${importError}`);
    }

    console.log('🔍 [NOTIFY API] Vérification si l\'email existe déjà...');
    
    // Vérifier si l'email existe déjà
    let existingUser;
    try {
      const { data, error: selectError } = await supabase
        .from('notifications')
        .select('email')
        .eq('email', email)
        .single();
      
      if (selectError && selectError.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('❌ [NOTIFY API] Erreur lors de la vérification email:', selectError);
        throw new Error(`Erreur vérification: ${selectError.message}`);
      }
      
      existingUser = data;
      console.log('✅ [NOTIFY API] Vérification email terminée, utilisateur existant:', !!existingUser);
    } catch (checkError) {
      console.error('❌ [NOTIFY API] Erreur lors de la vérification email:', checkError);
      throw new Error(`Erreur vérification email: ${checkError}`);
    }

    if (existingUser) {
      console.log('⚠️ [NOTIFY API] Email déjà inscrit:', email);
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit à la liste de notification' },
        { status: 400 }
      );
    }

    console.log('💾 [NOTIFY API] Insertion de l\'email dans Supabase...');
    
    // Insérer l'email dans Supabase
    let insertResult;
    try {
      const { data, error } = await supabase
        .from('notifications')
        .insert([
          { 
            email, 
            created_at: new Date().toISOString(),
            status: 'active'
          }
        ])
        .select();
      
      insertResult = { data, error };
      console.log('📊 [NOTIFY API] Résultat insertion:', { 
        success: !error, 
        dataCount: data?.length || 0,
        error: error ? error.message : null
      });
    } catch (insertError) {
      console.error('❌ [NOTIFY API] Erreur lors de l\'insertion:', insertError);
      throw new Error(`Erreur insertion: ${insertError}`);
    }

    if (insertResult.error) {
      console.error('❌ [NOTIFY API] Erreur Supabase après insertion:', insertResult.error);
      console.error('  - Code:', insertResult.error.code);
      console.error('  - Message:', insertResult.error.message);
      console.error('  - Details:', insertResult.error.details);
      console.error('  - Hint:', insertResult.error.hint);
      throw new Error(`Erreur Supabase: ${insertResult.error.message}`);
    }

    console.log('✅ [NOTIFY API] Email inséré avec succès dans Supabase');

    // Envoyer un email de confirmation via Resend (optionnel)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      console.log('📧 [NOTIFY API] Envoi email de confirmation via Resend...');
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Fridget <onboarding@resend.dev>',
            to: email,
            subject: '🎉 Bienvenue sur la liste de notification Fridget !',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="text-align: center; padding: 20px; background-color: #FF9030; color: white;">
                  <h1 style="margin: 0; font-size: 28px;">🎉 Bienvenue sur la liste Fridget !</h1>
                </div>
                
                <div style="padding: 30px; background-color: #f8f9fa;">
                  <h2 style="color: #333; margin-bottom: 20px;">Merci de votre inscription !</h2>
                  
                  <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
                    Vous êtes maintenant inscrit à notre liste de notification et serez parmi les premiers 
                    informés de la sortie de l'application Fridget !
                  </p>
                  
                  <div style="background-color: #FF9030; color: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h3 style="margin: 0 0 15px 0;">🎁 Bonus exclusifs réservés aux premiers inscrits :</h3>
                    <ul style="margin: 0; padding-left: 20px; text-align: left;">
                      <li>Accès prioritaire à l'application</li>
                      <li>Promotions exclusives au lancement</li>
                      <li>Fonctionnalités premium gratuites</li>
                      <li>Support prioritaire</li>
                    </ul>
                  </div>
                  
                  <p style="color: #666; line-height: 1.6;">
                    Nous vous tiendrons informés des avancées du développement et de la date de sortie !
                  </p>
                  
                  <p style="color: #999; font-size: 14px; margin-top: 30px;">
                    L'équipe Fridget 🍎
                  </p>
                </div>
              </div>
            `,
          }),
        });

        if (resendResponse.ok) {
          console.log('✅ [NOTIFY API] Email de confirmation envoyé avec succès à:', email);
        } else {
          const resendError = await resendResponse.text();
          console.warn('⚠️ [NOTIFY API] Erreur Resend, mais l\'inscription est réussie:', resendError);
        }
      } catch (resendError) {
        console.warn('⚠️ [NOTIFY API] Erreur Resend, mais l\'inscription est réussie:', resendError);
      }
    } else {
      console.log('⚠️ [NOTIFY API] Pas de clé Resend configurée, email de confirmation ignoré');
    }

    console.log('🎉 [NOTIFY API] Inscription terminée avec succès pour:', email);
    
    return NextResponse.json(
      { 
        message: 'Inscription réussie ! Vérifiez votre email pour la confirmation.',
        email: email 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 [NOTIFY API] Erreur notification:', error);
    console.error('  - Type:', error.constructor.name);
    console.error('  - Message:', error.message);
    console.error('  - Stack:', error.stack);
    
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription à la liste de notification' },
      { status: 500 }
    );
  }
}
