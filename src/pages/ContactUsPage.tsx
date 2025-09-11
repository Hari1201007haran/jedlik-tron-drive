import React, { useState } from 'react'
import { Send, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'

const ContactUsPage: React.FC = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Store the contact form data in Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            status: 'pending'
          }
        ])
        .select()

      if (error) {
        throw error
      }

      // Send notification email using Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'hariharan0071201@gmail.com',
          formData: formData,
          recordId: data?.[0]?.id
        }
      })

      if (emailError) {
        console.error('Email sending failed:', emailError)
        // Still show success since data was saved
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      info: 'Anna incubator, Second Floor, Platinum Jubilee building, AC Tech Campus, Anna University, Guindy, Chennai, Tamil Nadu 600025',
      color: 'primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 9790678445',
      color: 'accent'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@jedlik.in',
      color: 'primary'
    },
    {
      icon: Globe,
      title: 'Website',
      info: 'www.jedlik.in',
      color: 'accent'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 tron-grid-bg opacity-30 animate-grid-flow" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <span className="text-primary font-orbitron text-sm uppercase tracking-widest">Connect With Us</span>
              <div className="w-3 h-3 bg-accent rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black mb-8">
              <span className="text-primary tron-glow-text">CONTACT</span>
              <br />
              <span className="text-accent tron-glow-text">US</span>
            </h1>
            
            <div className="flex justify-center mb-6">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-3 h-3 bg-primary rounded-full mx-6 animate-pulse"></div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team to discuss your electric motor needs and future mobility solutions
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form and Info Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative tron-glass-strong p-8 lg:p-10 rounded-xl border border-primary/40 hover:border-primary/70 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                  <h2 className="text-2xl lg:text-3xl font-orbitron font-bold text-primary tron-glow-text">
                    SEND US A MESSAGE
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group/input">
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-primary transition-colors">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="tron-glass border-primary/30 focus:border-primary focus:tron-glow hover:border-primary/50 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="group/input">
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-accent transition-colors">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="tron-glass border-accent/30 focus:border-accent focus:tron-glow hover:border-accent/50 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group/input">
                      <label htmlFor="phone" className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-primary transition-colors">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="tron-glass border-primary/30 focus:border-primary focus:tron-glow hover:border-primary/50 transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    
                    <div className="group/input">
                      <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-accent transition-colors">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="tron-glass border-accent/30 focus:border-accent focus:tron-glow hover:border-accent/50 transition-all duration-300"
                        placeholder="Inquiry subject"
                      />
                    </div>
                  </div>
                  
                  <div className="group/input">
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground group-hover/input:text-primary transition-colors">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="tron-glass border-primary/30 focus:border-primary focus:tron-glow resize-none hover:border-primary/50 transition-all duration-300"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-orbitron font-bold group disabled:opacity-50 hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
                
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="tron-glass-strong p-8 lg:p-10 rounded-xl border border-accent/40 hover:border-accent/70 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-4 h-4 bg-accent rounded-full animate-ping"></div>
                  <h2 className="text-2xl lg:text-3xl font-orbitron font-bold text-accent tron-glow-text">
                    GET IN TOUCH
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className="group/contact p-4 rounded-lg border border-muted/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                          item.color === 'primary' 
                            ? 'bg-primary/20 group-hover/contact:bg-primary/30 group-hover/contact:tron-glow' 
                            : 'bg-accent/20 group-hover/contact:bg-accent/30 group-hover/contact:tron-glow'
                        }`}>
                          <item.icon className={`h-6 w-6 ${
                            item.color === 'primary' ? 'text-primary' : 'text-accent'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-orbitron font-bold mb-2 group-hover/contact:tron-glow-text transition-all">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground group-hover/contact:text-foreground transition-colors text-sm leading-relaxed">
                            {item.info}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Map Section */}
              <div className="tron-glass-strong p-8 rounded-xl border border-primary/40 hover:border-primary/70 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                  <h3 className="text-xl font-orbitron font-bold text-primary tron-glow-text">
                    FIND US ON MAP
                  </h3>
                </div>
                
                <div className="w-full h-64 tron-glass rounded-lg border border-primary/20 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 tron-grid-bg opacity-20 animate-grid-flow" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="relative z-10 text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4 tron-glow animate-bounce" />
                    <p className="text-foreground font-orbitron font-bold text-lg tron-glow-text">
                      Interactive Map
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Anna University, Guindy
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={() => {
                    const address = "Anna incubator, Second Floor, Platinum Jubilee building, AC Tech Campus, Anna University, Guindy, Chennai, Tamil Nadu 600025";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
                  }}
                  variant="outline"
                  className="w-full mt-6 tron-glass border-accent hover:bg-accent hover:text-accent-foreground font-orbitron font-bold hover:scale-105 transition-all duration-300"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  GET DIRECTIONS
                </Button>
              </div>

              {/* Enhanced Business Hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="tron-glass-strong p-6 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 group">
                  <h3 className="text-lg font-orbitron font-bold mb-4 text-primary flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    OFFICE HOURS
                  </h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', active: true },
                      { day: 'Saturday', time: '9:00 AM - 4:00 PM', active: true },
                      { day: 'Sunday', time: 'Closed', active: false }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                        <span className="text-foreground">{schedule.day}</span>
                        <span className={schedule.active ? 'text-accent font-medium' : 'text-muted-foreground'}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="tron-glass-strong p-6 rounded-lg border border-accent/30 hover:border-accent/60 transition-all duration-300 group">
                  <h3 className="text-lg font-orbitron font-bold mb-4 text-accent flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    SUPPORT HOURS
                  </h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { service: 'Technical Support', time: '24/7 Online', active: true },
                      { service: 'Phone Support', time: '9:00 AM - 8:00 PM', active: true },
                      { service: 'Emergency', time: '24/7 Available', active: true }
                    ].map((support, index) => (
                      <div key={index} className="flex justify-between items-center p-2 rounded hover:bg-accent/5 transition-colors">
                        <span className="text-foreground">{support.service}</span>
                        <span className="text-primary font-medium">{support.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 tron-grid-bg opacity-20" />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="tron-glass-strong p-8 lg:p-12 rounded-xl border border-primary/40 hover:border-accent/60 transition-all duration-500 group hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                <span className="text-primary font-orbitron text-sm uppercase tracking-widest">Ready to Connect</span>
                <div className="w-3 h-3 bg-accent rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              <span className="text-primary tron-glow-text">LET'S BUILD THE</span>
              <br />
              <span className="text-accent tron-glow-text">FUTURE TOGETHER</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join us in revolutionizing urban mobility with cutting-edge electric motor technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-orbitron font-bold hover:scale-105 transition-all duration-300"
              >
                START A PROJECT
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="tron-glass border-accent hover:bg-accent hover:text-accent-foreground font-orbitron font-bold hover:scale-105 transition-all duration-300"
              >
                SCHEDULE A CALL
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUsPage
