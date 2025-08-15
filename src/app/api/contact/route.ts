import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Utilisation de Resend (service gratuit pour 100 emails/mois)
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Fridget Contact <noreply@fridget.com>',
        to: 'contact.fridget@gmail.com',
        subject: `Nouveau message de contact : ${subject}`,
        html: `
          <h2>Nouveau message de contact Fridget</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }

    return NextResponse.json(
      { message: 'Message envoyé avec succès !' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur contact:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
