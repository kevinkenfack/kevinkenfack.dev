import { Resend } from 'resend'
import type { H3Event } from 'h3'
import type { ContactEmail } from '~/types/ContactEmail'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail
    const { email, subject, message, phone, fullname } = body

    // Envoi de l'email au propriétaire du site
    await resend.emails.send({
      from: 'Kenfack Folio <noreply@kevinkenfack.com>',
      to: ['kevinkenfackjoel@gmail.com'],
      subject: 'Nouveau message de Kenfack Folio',
      html: `
  <!DOCTYPE html>
      <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau message de contact</title>
  </head>

  <body style="background-color:#ffffff;font-family:Helvetica,Arial,sans-serif;margin:0;padding:0">
    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff;padding:20px;">
      <tr>
        <td>
          <table align="center" width="100%" style="max-width:600px;border:1px solid #ddd;border-radius:8px;padding:20px;background-color:#ffffff;">
            <tr>
              <td style="text-align:center;padding-bottom:20px;">
                <h1 style="font-size:24px;color:#333;margin:0;">Nouveau Message 📥</h1>
                <p style="font-size:16px;color:#555;margin-top:8px;">Un nouveau message a été envoyé depuis le formulaire de contact de Kenfack Folio.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="font-size:16px;color:#333;margin-bottom:16px;">Voici les détails du message :</p>
                <ul style="list-style:none;padding:0;color:#555;font-size:14px;">
                  <li style="padding:8px 0;border-bottom:1px solid #ddd;"><strong>Nom :</strong> ${fullname}</li>
                  <li style="padding:8px 0;border-bottom:1px solid #ddd;"><strong>Email :</strong> ${email}</li>
                  <li style="padding:8px 0;border-bottom:1px solid #ddd;"><strong>Téléphone :</strong> ${phone}</li>
                  <li style="padding:8px 0;border-bottom:1px solid #ddd;"><strong>Sujet :</strong> ${subject}</li>
                  <li style="padding:8px 0;"><strong>Message :</strong>
                    <pre style="white-space:pre-wrap;font-size:14px;color:#333;background-color:#f7f7f7;padding:10px;border-radius:5px;border:1px solid #ddd;">${message}</pre>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="text-align:center;padding-top:20px;">
                <p style="font-size:14px;color:#888;">Envoyer depuis <a href="https://kevinkenfack.com" style="color:#5e6ad2;text-decoration:none;">Kenfackfolio</a>.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>

</html>
      `,
    })

    // Envoi de l'email de remerciement à l'utilisateur avec le template HTML personnalisé
    await resend.emails.send({
      from: 'Kevin Kenfack <noreply@kevinkenfack.com>',
      to: [email],  // Envoi à l'email soumis dans le formulaire
      subject: 'Message reçu 😊',
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="en">
      
        <head>
          <link rel="preload" as="image" href="https://i.imgur.com/tEIVPTC.png" />
          <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
          <meta name="x-apple-disable-message-reformatting" /><!--$-->
        </head>
      
        <body style="background-color:#ffffff;font-family:HelveticaNeue,Helvetica,Arial,sans-serif">
          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:360px;background-color:#ffffff;border:1px solid #eee;border-radius:5px;box-shadow:0 5px 10px rgba(20,50,70,.2);margin-top:20px;margin:0 auto;padding:68px 0 130px">
            <tbody>
              <tr style="width:100%">
                <td>
                  <img alt="Kenfack Folio" height="88" src="https://i.imgur.com/tEIVPTC.png" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="212" />
                  
                  <p style="font-size:11px;line-height:16px;margin:16px 8px 8px 8px;color:#0a85ea;font-weight:700;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;height:16px;letter-spacing:0;text-transform:uppercase;text-align:center">
                    Merci pour votre message !
                  </p>
                  
                  <h1 style="color:#000;display:inline-block;font-family:HelveticaNeue-Medium,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;line-height:24px;margin-bottom:0;margin-top:0;text-align:center">
                    Bonjour <strong>${fullname}</strong>, merci de m'avoir contactés.
                  </h1>
                  
                  <p style="font-size:15px;line-height:23px;margin:16px 40px;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;text-align:center">
                    J'ai bien reçu votre message et je vous repondrais dès que possible.
                  </p>
                  
                  <p style="font-size:15px;line-height:23px;margin:0;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;text-align:center">
                    Si vous avez des questions supplémentaires, n'hésitez pas à me contacter à 
                    <a href="mailto:contact@kevinkenfack.com" style="color:#444;text-decoration:underline" target="_blank">contact@kevinkenfack.com</a>.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style="font-size:12px;line-height:23px;margin:0;color:#000;font-weight:800;letter-spacing:0;margin-top:20px;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;text-align:center;text-transform:uppercase">
            Cordialement, Kevin Kenfack.
          </p><!--/$-->
        </body>
      
      </html>
      `,
    })

    return { success: true }
  }
  catch (error) {
    return { error }
  }
})
