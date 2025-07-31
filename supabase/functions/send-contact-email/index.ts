import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { to, formData, recordId } = await req.json()

    // For now, we'll just log the email data
    // You can integrate with email services like Resend, SendGrid, etc.
    console.log('Sending email to:', to)
    console.log('Form data:', formData)
    console.log('Record ID:', recordId)

    const emailContent = `
New Contact Form Submission - Jedlik Motors

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

Database Record ID: ${recordId}
Timestamp: ${new Date().toISOString()}
    `

    // Here you would integrate with your preferred email service
    // Example with Resend (you'd need to add Resend API key to secrets):
    /*
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@jedlik.in',
          to: [to],
          subject: `New Contact Form: ${formData.subject}`,
          text: emailContent,
        }),
      })
      
      if (!res.ok) {
        throw new Error('Failed to send email')
      }
    }
    */

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email notification logged (email service integration needed)' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})