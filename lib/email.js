import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send an email using Resend
 * Remove this file if not using email functionality
 */
export async function sendEmail({ to, subject, html, text }) {
  if (!process.env.RESEND_API_KEY) {
    // Mock mode for development
    console.log('📧 Email (mock mode):', { to, subject })
    return { id: 'mock-email-id', success: true }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Change this to your verified domain
      to,
      subject,
      html,
      text,
    })

    if (error) {
      console.error('Resend error:', error)
      throw error
    }

    return { id: data.id, success: true }
  } catch (error) {
    console.error('Email send error:', error)
    throw error
  }
}

/**
 * Example email templates
 */
export const emailTemplates = {
  welcome: (name) => ({
    subject: 'Welcome!',
    html: `<h1>Welcome, ${name}!</h1><p>Thanks for signing up.</p>`,
    text: `Welcome, ${name}! Thanks for signing up.`,
  }),
  
  passwordReset: (resetLink) => ({
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    text: `Click here to reset your password: ${resetLink}`,
  }),
}

