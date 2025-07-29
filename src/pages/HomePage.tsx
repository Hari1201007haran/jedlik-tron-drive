import React from 'react'
import { ArrowRight, Zap, Cog, Leaf, Shield, Users, MapPin, Phone, Mail, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type HomePageProps = {
  onNavigate: (page: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const highlights = [
    {
      icon: Zap,
      title: 'Advanced Performance',
      description: 'Next-generation motor technology for superior urban mobility',
      link: 'techspecs'
    },
    {
      icon: Cog,
      title: 'Smart Engineering',
      description: 'Intelligent systems designed by mechanical engineers',
      link: 'features'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable solutions for cleaner urban environments',
      link: 'features'
    },
    {
      icon: Shield,
      title: 'Reliable & Safe',
      description: 'DPIIT recognised startup with proven technology',
      link: 'about'
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Adaptive Power Delivery',
      description: 'Intelligent power management that adapts to driving conditions for optimal performance and efficiency.'
    },
    {
      icon: Cog,
      title: 'Intelligent Battery Management',
      description: 'Advanced BMS technology for extended battery life and enhanced safety protocols.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Operation',
      description: 'Zero-emission operation with recyclable components for sustainable urban mobility.'
    },
    {
      icon: Shield,
      title: 'Modular Design',
      description: 'Flexible architecture allowing easy maintenance and customization for various applications.'
    }
  ]

  const techSpecs = [
    { label: 'Power Output', value: '5kW - 15kW', unit: 'Continuous' },
    { label: 'Torque Range', value: '50 - 120', unit: 'Nm' },
    { label: 'Efficiency', value: '95%+', unit: 'Peak' },
    { label: 'Voltage Range', value: '48V - 72V', unit: 'DC' },
    { label: 'RPM Range', value: '0 - 3000', unit: 'RPM' },
    { label: 'Protection Rating', value: 'IP65', unit: 'Sealed' }
  ]

  const faqs = [
    {
      question: 'What is Jedlik Motors?',
      answer: 'Jedlik Motors is a DPIIT recognised startup based in Chennai, India, specializing in next-generation electric motor technology for urban commuting solutions.'
    },
    {
      question: 'What types of motors do you offer?',
      answer: 'We offer a range of high-efficiency electric motors designed for urban mobility applications, featuring adaptive power delivery, intelligent battery management, and modular design.'
    },
    {
      question: 'How can I purchase a product?',
      answer: 'You can contact us through our contact form, email, or phone. Our team will help you find the right motor solution for your specific requirements.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We are supported by Anna Incubator and iCreate, providing comprehensive technical support, maintenance guidance, and consultation services.'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden tron-hero-bg">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 tron-grid-bg animate-grid-flow opacity-40" />
        
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/8" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/5 to-transparent" />
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/40 rotate-45 animate-float">
          <div className="absolute inset-2 border border-primary/20 animate-glow-rotate"></div>
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/50 rotate-12 animate-float" style={{animationDelay: '2s'}}>
          <div className="absolute inset-2 border border-accent/30 animate-glow-rotate" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary/30 animate-float" style={{animationDelay: '4s'}}>
          <div className="absolute inset-1 border border-primary/15 animate-glow-rotate" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-accent/25 rotate-45 animate-float" style={{animationDelay: '1s'}}>
          <div className="absolute inset-1 border border-accent/15"></div>
        </div>
        
        {/* Particle effects */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent/70 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-4 animate-text-glow leading-tight">
              DRIVING THE <span className="text-accent animate-pulse">FUTURE</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-primary/90 tracking-wider">
              OF URBAN COMMUTING
            </h2>
          </div>
          
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl"></div>
            <p className="relative text-xl md:text-2xl font-inter leading-relaxed text-muted-foreground backdrop-blur-sm">
              Electrifying tomorrow's journeys with next-generation motor technology. 
              <span className="text-accent font-semibold">DPIIT recognised startup</span> from Chennai, India.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection('features')}
              size="lg"
              className="tron-button tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold text-xl px-10 py-5 group relative overflow-hidden"
            >
              <span className="relative z-10">EXPLORE OUR MOTORS</span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2 relative z-10" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('techspecs')}
              variant="outline"
              size="lg"
              className="tron-button tron-glass border-2 border-accent hover:bg-accent hover:text-accent-foreground font-orbitron font-bold text-xl px-10 py-5 relative overflow-hidden"
            >
              <span className="relative z-10">TECH SPECIFICATIONS</span>
            </Button>
          </div>
          
          {/* Enhanced Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
                </div>
                <ChevronDown className="h-6 w-6 text-primary/60 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 relative tron-section-divider">
        <div className="absolute inset-0 tron-grid-bg opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6 animate-text-glow">
              NEXT-GEN <span className="text-accent">INNOVATION</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                onClick={() => onNavigate(highlight.link)}
                className="tron-card-hover tron-glass-strong p-8 rounded-xl border border-primary/30 hover:border-accent/70 cursor-pointer group relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-orbitron font-bold mb-4 group-hover:tron-glow-text transition-all duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 relative tron-section-divider">
        <div className="absolute inset-0 tron-grid-bg opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/3 to-primary/3" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6 animate-text-glow">
              ABOUT <span className="text-accent">JEDLIK MOTORS</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="tron-card-hover tron-glass-strong p-10 rounded-2xl border border-primary/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold tron-glow-text">Our Mission</h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're a <span className="text-accent font-semibold">DPIIT recognised startup</span> based in the automobile capital of India, Chennai. 
                  We're a group of mechanical engineers working on the next generation of urban commuting. 
                  We're supported by <span className="text-primary font-semibold">Anna Incubator and iCreate</span>.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="tron-card-hover tron-glass-strong p-8 rounded-xl border border-accent/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-orbitron font-bold text-accent mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-accent rounded-full"></div>
                    </div>
                    DPIIT Recognised
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">Officially recognized startup by the Department for Promotion of Industry and Internal Trade.</p>
                </div>
              </div>
              
              <div className="tron-card-hover tron-glass-strong p-8 rounded-xl border border-primary/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-orbitron font-bold text-primary mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    Chennai Based
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">Located in India's automobile capital, leveraging decades of automotive expertise.</p>
                </div>
              </div>
              
              <div className="tron-card-hover tron-glass-strong p-8 rounded-xl border border-accent/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-orbitron font-bold text-accent mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-accent rounded-full"></div>
                    </div>
                    Expert Team
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">Mechanical engineers dedicated to revolutionizing urban mobility solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative tron-section-divider">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3" />
        <div className="absolute inset-0 tron-grid-bg opacity-15" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6 animate-text-glow">
              CUTTING-EDGE <span className="text-accent">FEATURES</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="tron-card-hover tron-glass-strong p-10 rounded-2xl border border-primary/40 group relative overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300 mr-6">
                      <feature.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-orbitron font-bold group-hover:tron-glow-text transition-all duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-xl leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section id="techspecs" className="py-24 relative tron-section-divider">
        <div className="absolute inset-0 tron-grid-bg opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-primary/3" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6 animate-text-glow">
              TECHNICAL <span className="text-accent">SPECIFICATIONS</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techSpecs.map((spec, index) => (
              <div
                key={index}
                className="tron-card-hover tron-glass-strong p-8 rounded-2xl border border-primary/40 text-center group relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-bold text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                    {spec.label}
                  </h3>
                  <div className="text-4xl font-orbitron font-black text-primary group-hover:tron-glow-text transition-all duration-300 mb-2">
                    {spec.value}
                  </div>
                  <p className="text-accent font-semibold text-lg">{spec.unit}</p>
                  
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-primary/20 rotate-45 group-hover:border-accent/40 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="tron-glass-strong border border-primary/30 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-orbitron font-bold hover:text-primary hover:tron-glow-text transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            GET IN <span className="text-accent">TOUCH</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
              <h3 className="text-2xl font-orbitron font-bold mb-6 tron-glow-text">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="tron-glass border-primary/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="tron-glass border-primary/30 focus:border-accent"
                    />
                  </div>
                </div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="tron-glass border-primary/30 focus:border-accent"
                />
                <Input
                  placeholder="Subject"
                  className="tron-glass border-primary/30 focus:border-accent"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="tron-glass border-primary/30 focus:border-accent resize-none"
                />
                <Button
                  type="submit"
                  className="w-full tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold text-lg py-3"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="tron-glass-strong p-6 rounded-lg border border-accent/30">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-accent mr-4" />
                  <h4 className="text-xl font-orbitron font-bold text-accent">Location</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Anna incubator, Second Floor, Platinum Jubilee building, AC Tech Campus, 
                  Anna University, Guindy, Chennai, Tamil Nadu 600025
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="tron-glass p-6 rounded-lg border border-primary/30">
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <h4 className="text-lg font-orbitron font-bold text-primary">Phone</h4>
                  </div>
                  <p className="text-muted-foreground">+91 9790678445</p>
                </div>
                
                <div className="tron-glass p-6 rounded-lg border border-primary/30">
                  <div className="flex items-center mb-3">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <h4 className="text-lg font-orbitron font-bold text-primary">Email</h4>
                  </div>
                  <p className="text-muted-foreground">info@jedlik.in</p>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="tron-glass-strong h-64 rounded-lg border border-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground font-orbitron">Interactive Map</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Map integration placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 tron-glow-text">
            READY TO ELECTRIFY YOUR JOURNEY?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the future of urban mobility with Jedlik Motors' innovative solutions.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold text-lg px-12 py-4"
          >
            GET IN TOUCH
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage