import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation de l'email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Vérifier si les variables d'environnement Supabase sont configurées
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Variables d\'environnement Supabase non configurées');
      
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

    // Import dynamique de Supabase seulement si configuré
    const { supabase } = await import('@/lib/supabase');

    // Vérifier si l'email existe déjà
    const { data: existingUser } = await supabase
      .from('notifications')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit à la liste de notification' },
        { status: 400 }
      );
    }

    // Insérer l'email dans Supabase
    const { error } = await supabase
      .from('notifications')
      .insert([
        { 
          email, 
          created_at: new Date().toISOString(),
          status: 'active'
        }
      ])
      .select();

    if (error) {
      console.error('Erreur Supabase:', error);
      throw new Error('Erreur lors de l\'inscription');
    }

    // Envoyer un email de confirmation via Resend (optionnel)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
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
          console.log('Email de confirmation envoyé avec succès à:', email);
        } else {
          console.warn('Erreur Resend, mais l\'inscription est réussie');
        }
      } catch (resendError) {
        console.warn('Erreur Resend, mais l\'inscription est réussie:', resendError);
      }
    }

    return NextResponse.json(
      { 
        message: 'Inscription réussie ! Vérifiez votre email pour la confirmation.',
        email: email 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur notification:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription à la liste de notification' },
      { status: 500 }
    );
  }
}
