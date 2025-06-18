import { Resend } from 'resend'
import { prisma } from './prisma'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendVerificationEmail(email: string) {
  const verificationCode = Math.floor(1000 + Math.random() * 9000).toString() // 4-cijferige code
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000) // 15 minuten geldig

  try {
    // Sla de verificatiecode op in de database
    await prisma.verificationCode.create({
      data: {
        email,
        code: verificationCode,
        expiresAt
      }
    })

    await resend.emails.send({
      from: 'UNDSQVRD <info@undsqvrd.nl>',
      to: email,
      subject: 'Verifieer je e-mailadres',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a56db; margin-bottom: 20px;">Welkom bij UNDSQVRD!</h1>
          <p style="color: #374151; margin-bottom: 20px;">Gebruik de volgende code om je e-mailadres te verifiëren:</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <span style="font-size: 32px; letter-spacing: 5px; font-weight: bold; color: #1a56db;">${verificationCode}</span>
          </div>
          <p style="color: #6b7280; font-size: 14px;">Deze code is 15 minuten geldig.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 12px;">Dit is een automatisch gegenereerde e-mail. Reageer niet op dit bericht.</p>
        </div>
      `
    })

    return true
  } catch (error) {
    console.error('Failed to send verification email:', error)
    throw error
  }
} 