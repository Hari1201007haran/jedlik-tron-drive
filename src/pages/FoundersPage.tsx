import React from 'react'
import { Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import founderImage from '@/assets/founder.jpg'
import coFounder1Image from '@/assets/co-founder-1.jpg'
import coFounder2Image from '@/assets/co-founder-2.jpg'

const FoundersPage = () => {
  const founders = [
    {
      name: "John Smith",
      role: "Founder",
      image: founderImage,
      email: "john.smith@company.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Michael Johnson",
      role: "Co-Founder",
      image: coFounder1Image,
      email: "michael.johnson@company.com",
      phone: "+1 (555) 234-5678"
    },
    {
      name: "David Wilson",
      role: "Co-Founder",
      image: coFounder2Image,
      email: "david.wilson@company.com",
      phone: "+1 (555) 345-6789"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 tron-grid-bg animate-grid-flow opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Founders
          </h1>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/30"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {founder.name}
                  </h3>
                  
                  <p className="text-lg text-primary mb-6 font-semibold">
                    {founder.role}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Mail size={18} />
                      <span>{founder.email}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Phone size={18} />
                      <span>{founder.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FoundersPage