import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    console.log('Sending email to:', to)
    console.log('Form data:', formData)
    console.log('Record ID:', recordId)

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; padding: 20px; text-align: center; }
    .content { background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #495057; }
    .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #dee2e6; }
    .footer { text-align: center; padding: 20px; color: #6c757d; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <h2>Jedlik Motors</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${formData.name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${formData.email}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${formData.phone || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Subject:</div>
        <div class="value">${formData.subject}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="field">
        <div class="label">Database Record ID:</div>
        <div class="value">${recordId}</div>
      </div>
      <div class="field">
        <div class="label">Timestamp:</div>
        <div class="value">${new Date().toISOString()}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent automatically from the Jedlik Motors contact form.</p>
    </div>
  </div>
</body>
</html>
    `

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (resendApiKey) {
      const emailResponse = await resend.emails.send({
        from: 'Jedlik Motors <noreply@jedlik.in>',
        to: [to],
        subject: `New Contact Form: ${formData.subject}`,
        html: emailContent,
      })

      if (emailResponse.error) {
        throw new Error(`Email sending failed: ${emailResponse.error.message}`)
      }

      console.log('Email sent successfully:', emailResponse)
    } else {
      console.log('RESEND_API_KEY not found, email not sent')
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email notification sent successfully' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})