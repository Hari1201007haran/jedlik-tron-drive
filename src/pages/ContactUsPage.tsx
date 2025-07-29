import React, { useState } from 'react'
import { Send, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactUsPage: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Add success message or API call here
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
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 tron-grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-6 tron-glow-text">
              CONTACT <span className="text-accent">US</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team to discuss your electric motor needs and future mobility solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
              <h2 className="text-2xl font-orbitron font-bold mb-8 text-primary tron-glow-text">
                SEND US A MESSAGE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="tron-glass border-primary/30 focus:border-primary focus:tron-glow"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="tron-glass border-primary/30 focus:border-primary focus:tron-glow"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="tron-glass border-primary/30 focus:border-primary focus:tron-glow"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="tron-glass border-primary/30 focus:border-primary focus:tron-glow"
                      placeholder="Inquiry subject"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="tron-glass border-primary/30 focus:border-primary focus:tron-glow resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold group"
                >
                  SEND MESSAGE
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="tron-glass-strong p-8 rounded-lg border border-accent/30">
                <h2 className="text-2xl font-orbitron font-bold mb-8 text-accent">
                  GET IN TOUCH
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                        item.color === 'primary' 
                          ? 'bg-primary/20 group-hover:bg-primary/30 group-hover:tron-glow' 
                          : 'bg-accent/20 group-hover:bg-accent/30 group-hover:tron-glow'
                      }`}>
                        <item.icon className={`h-6 w-6 ${
                          item.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-orbitron font-bold mb-2 group-hover:tron-glow-text transition-all">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
                <h3 className="text-xl font-orbitron font-bold mb-4 text-primary tron-glow-text">
                  FIND US ON MAP
                </h3>
                
                <div className="w-full h-64 tron-glass rounded-lg border border-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 tron-grid-bg opacity-20" />
                  <div className="relative z-10 text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4 tron-glow" />
                    <p className="text-muted-foreground font-orbitron">
                      Interactive Map
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Anna University, Guindy
                    </p>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full mt-4 tron-glass border-accent hover:bg-accent hover:text-accent-foreground font-orbitron"
                >
                  GET DIRECTIONS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8 tron-glow-text">
            BUSINESS <span className="text-accent">HOURS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tron-glass-strong p-6 rounded-lg border border-primary/30">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">
                OFFICE HOURS
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-accent">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-accent">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="tron-glass-strong p-6 rounded-lg border border-accent/30">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-accent">
                SUPPORT HOURS
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Technical Support</span>
                  <span className="text-primary">24/7 Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone Support</span>
                  <span className="text-primary">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency</span>
                  <span className="text-primary">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUsPage