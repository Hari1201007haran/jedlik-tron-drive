import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQPage: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>('what-is-jedlik')

  const faqs = [
    {
      id: 'what-is-jedlik',
      question: 'What is Jedlik Motors?',
      answer: 'Jedlik Motors was founded by passionate adventurers and engineers on a mission to redefine urban commuting with safety, comfort, and maneuverability. Born from the personal experiences of riders facing daily risks and inefficiencies.'
    },
    {
      id: 'motor-types',
      question: 'Who are the founders of Jedlik Motors?',
      answer: 'Mr.Raguram SK, Mr.Muthuram B, Mr.Nishanthraj GV.'
    },
    {
      id: 'purchase',
      question: 'How can I purchase a product?',
      answer: 'You can contact us directly through our contact form, email us at info@jedlik.in, or call us at +91 9790678445. Our team will discuss your requirements and provide customized solutions based on your specific needs.'
    },
    {
      id: 'warranty',
      question: 'When are you going to reveal the product?',
      answer: 'We are going to reveal the product on TNGSS Summit on October 9th 2025 at Codissia Trade Fair Complex, Coimbatore.'
    },
    {
      id: 'customization',
      question: 'Do you offer customization services?',
      answer: 'Yes, we offer extensive customization services. Our modular design approach allows us to adapt our motors to specific voltage requirements, power outputs, and integration needs. Contact our engineering team to discuss your custom requirements.'
    },
    {
      id: 'support',
      question: 'What kind of technical support do you provide?',
      answer: 'We provide 24/7 online technical support, phone support during business hours (9 AM - 8 PM), and emergency support for critical applications. Our support includes installation guidance, troubleshooting, maintenance recommendations, and performance optimization.'
    },
    {
      id: 'efficiency',
      question: 'Where is the location of your Company?',
      answer: 'We are currently located at Anna Incubator,Anna University,Chennai.'
    },
    {
      id: 'certifications',
      question: 'How Can I contact you?',
      answer: 'You can contact us via email: info@jedlik.in and via phone: +91 9790678445.'
    },
    {
      id: 'delivery',
      question: 'When did you start the company?',
      answer: 'We started the company at November 2023.'
    },
    {
      id: 'maintenance',
      question: 'How do I maintain the motors?',
      answer: 'Our motors are designed for minimal maintenance. Regular maintenance includes visual inspections, cleaning, connection checks, and performance monitoring. We provide detailed maintenance guides and can arrange for professional maintenance services if required.'
    }
  ]

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 tron-grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-6 tron-glow-text">
              FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about Jedlik Motors' products, services, and technology
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="tron-glass-strong rounded-lg border border-primary/30 overflow-hidden"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-primary hover:tron-glow-text transition-all">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-accent" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-accent" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6 border-t border-primary/20">
                    <div className="pt-6 pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 tron-glow-text">
              STILL HAVE <span className="text-accent">QUESTIONS?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our technical experts are here to help you find the perfect electric motor solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="tron-glass p-6 rounded-lg border border-accent/20">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-orbitron font-bold mb-2 text-accent">Email Us</h3>
                <p className="text-sm text-muted-foreground">info@jedlik.in</p>
              </div>
              
              <div className="tron-glass p-6 rounded-lg border border-primary/20">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-orbitron font-bold mb-2 text-primary">Call Us</h3>
                <p className="text-sm text-muted-foreground">+91 9790678445</p>
              </div>
              
              <div className="tron-glass p-6 rounded-lg border border-accent/20">
                <div className="text-2xl mb-2">🌐</div>
                <h3 className="font-orbitron font-bold mb-2 text-accent">Visit Us</h3>
                <p className="text-sm text-muted-foreground">Anna University, Chennai</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              <strong>Support Hours:</strong> 24/7 Online Support • Phone Support 9 AM - 8 PM IST
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            ADDITIONAL <span className="text-accent">RESOURCES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="tron-glass-strong p-6 rounded-lg border border-primary/30 hover:border-primary/60 hover:tron-glow transition-all duration-300 text-center group">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:tron-glow-text transition-all">
                Technical Manuals
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Comprehensive documentation for installation, operation, and maintenance
              </p>
            </div>
            
            <div className="tron-glass-strong p-6 rounded-lg border border-accent/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 text-center group">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:tron-glow-text transition-all">
                Training Programs
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Professional training for technicians and engineers
              </p>
            </div>
            
            <div className="tron-glass-strong p-6 rounded-lg border border-primary/30 hover:border-primary/60 hover:tron-glow transition-all duration-300 text-center group">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:tron-glow-text transition-all">
                Service Support
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                On-site service and remote diagnostic capabilities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
