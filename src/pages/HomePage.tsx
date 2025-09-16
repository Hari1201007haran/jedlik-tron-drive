import React from 'react'
import { ArrowRight, Zap, Cog, Leaf, Shield, Users, MapPin, Phone, Mail, ChevronDown } from 'lucide-react'
import heroBackgroundImage from '@/assets/tron-hero-bg.jpg'
import founderImage from '@/assets/founder.jpg'
import coFounder1Image from '@/assets/co-founder-1.jpg'
import coFounder2Image from '@/assets/co-founder-2.jpg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import LaunchCountdown from '@/components/LaunchCountdown'

type HomePageProps = {
  onNavigate: (page: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Global Startup Summit Logo
  const logoImage = "/lovable-uploads/d27e743e-23dc-4d96-8f3c-02b03ea9d052.png";
  
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
      icon: Shield,
      title: 'Airbags for Safety',
      description: 'Advanced airbag system uncommon in two-wheelers, providing car-level safety protection.'
    },
    {
      icon: Cog,
      title: 'Full Weather Protection',
      description: 'Complete weather protection with fully enclosed design – no helmets required.'
    },
    {
      icon: Leaf,
      title: 'Superior Maneuverability',
      description: 'Outstanding maneuverability in congested city traffic with innovative docking capability.'
    },
    {
      icon: Zap,
      title: 'Extended Range',
      description: '200 km range with rapid charging in just 4 hours for efficient urban mobility.'
    }
  ]

  const techSpecs = [
    { label: 'Seating Capacity', value: '2', unit: 'Persons' },
    { label: 'Top Speed', value: '120', unit: 'km/h' },
    { label: 'Range per Charge', value: '200', unit: 'km' },
    { label: 'Charging Time', value: '4', unit: 'Hours' },
    { label: 'Vehicle Type', value: 'Enclosed', unit: 'Two-wheeler' },
    { label: 'USP', value: 'Car + Bike', unit: 'Hybrid Safety' }
  ]

  const faqs = [
    {
      question: 'What is Jedlik Motors?',
      answer: 'Jedlik Motors was founded by passionate adventurers and engineers on a mission to redefine urban commuting with safety, comfort, and maneuverability. Born from the personal experiences of riders facing daily risks and inefficiencies.'
    },
    {
      question: 'What types of motors do you offer?',
      answer: 'We offer a range of high-efficiency electric motors designed for urban mobility applications, featuring adaptive power delivery, intelligent battery management, and modular design.'
    },
    {
      question: 'When will you reveal the product?',
      answer: 'We are gonna reveal the product on October 9 at Codissia Trade Fair Complex, Coimbatore.'
    },
    {
      question: 'How can we contact you?',
      answer: 'You can contact us via email: info@jedlik.in and via phone: +91 9790678445.'
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
      {/* Launch Countdown Timer */}
      <LaunchCountdown />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rotate-45 animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/40 rotate-12 animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-primary/20 animate-pulse-glow" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 tron-glow-text">
            DRIVING THE <span className="text-accent">FUTURE</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-orbitron font-bold mb-8 text-primary">
            OF URBAN COMMUTING
          </h2>
          <p className="text-lg md:text-xl font-inter mb-12 text-muted-foreground max-w-2xl mx-auto">
            Electrifying tomorrow's journeys with next-generation motor technology. 
            DPIIT recognised startup from Chennai, India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('features')}
              size="lg"
              className="tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold text-lg px-8 py-4 group"
            >
              EXPLORE OUR MOTORS
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('techspecs')}
              variant="outline"
              size="lg"
              className="tron-glass border-accent hover:bg-accent hover:text-accent-foreground font-orbitron font-bold text-lg px-8 py-4"
            >
              TECH SPECIFICATIONS
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary/60" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            NEXT-GEN <span className="text-accent">INNOVATION</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                onClick={() => onNavigate(highlight.link)}
                className="tron-glass-strong p-6 rounded-lg border border-primary/30 hover:border-primary/60 hover:tron-glow transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4 group-hover:bg-accent/20 transition-colors">
                  <highlight.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:tron-glow-text transition-all">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            ABOUT <span className="text-accent">JEDLIK MOTORS</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-orbitron font-bold tron-glow-text">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a DPIIT recognised startup based in the automobile capital of India, Chennai. 
                We're a group of mechanical engineers working on the next generation of urban commuting. 
                We're supported by Anna Incubator and iCreate.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="tron-glass p-6 rounded-lg border border-accent/30">
                <h4 className="text-xl font-orbitron font-bold text-accent mb-3">DPIIT Recognised</h4>
                <p className="text-muted-foreground">Officially recognized startup by the Department for Promotion of Industry and Internal Trade.</p>
              </div>
              <div className="tron-glass p-6 rounded-lg border border-primary/30">
                <h4 className="text-xl font-orbitron font-bold text-primary mb-3">Chennai Based</h4>
                <p className="text-muted-foreground">Located in India's automobile capital, leveraging decades of automotive expertise.</p>
              </div>
              <div className="tron-glass p-6 rounded-lg border border-accent/30">
                <h4 className="text-xl font-orbitron font-bold text-accent mb-3">Expert Team</h4>
                <p className="text-muted-foreground">Mechanical engineers dedicated to revolutionizing urban mobility solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            CUTTING-EDGE <span className="text-accent">FEATURES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="tron-glass-strong p-8 rounded-lg border border-primary/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/20 group-hover:bg-accent/20 transition-colors mr-4">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold group-hover:tron-glow-text transition-all">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section id="techspecs" className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            TECHNICAL <span className="text-accent">SPECIFICATIONS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSpecs.map((spec, index) => (
              <div
                key={index}
                className="tron-glass-strong p-6 rounded-lg border border-primary/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 text-center group"
              >
                <h3 className="text-lg font-orbitron font-bold text-muted-foreground mb-2 group-hover:text-foreground transition-colors">
                  {spec.label}
                </h3>
                <div className="text-3xl font-orbitron font-black text-primary group-hover:tron-glow-text transition-all mb-1">
                  {spec.value}
                </div>
                <p className="text-accent font-medium">{spec.unit}</p>
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
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anna incubator, Second Floor, Platinum Jubilee building, AC Tech Campus, 
                  Anna University, Guindy, Chennai, Tamil Nadu 600025
                </p>
                <Button
                  onClick={() => {
                    const address = "Anna incubator, Second Floor, Platinum Jubilee building, AC Tech Campus, Anna University, Guindy, Chennai, Tamil Nadu 600025";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
                  }}
                  className="w-full tron-glass border-accent hover:bg-accent hover:text-accent-foreground font-orbitron font-bold"
                  variant="outline"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  GET DIRECTIONS
                </Button>
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

      {/* Founders Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            OUR <span className="text-accent">LEADERSHIP</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 text-center group">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/30 group-hover:border-accent/60 transition-all">
                <img
                  src={founderImage}
                  alt="John Smith - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:tron-glow-text transition-all">
                John Smith
              </h3>
              <p className="text-accent font-medium mb-3">FOUNDER</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Visionary leader driving next-generation urban mobility solutions
              </p>
            </div>

            {/* Co-founders */}
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 text-center group">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/30 group-hover:border-accent/60 transition-all">
                <img
                  src={coFounder1Image}
                  alt="Michael Johnson - Co-Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:tron-glow-text transition-all">
                Michael Johnson
              </h3>
              <p className="text-accent font-medium mb-3">CO-FOUNDER</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expert in mechanical engineering and innovative design solutions
              </p>
            </div>

            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 text-center group">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/30 group-hover:border-accent/60 transition-all">
                <img
                  src={coFounder2Image}
                  alt="David Wilson - Co-Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:tron-glow-text transition-all">
                David Wilson
              </h3>
              <p className="text-accent font-medium mb-3">CO-FOUNDER</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technology specialist focused on sustainable transportation
              </p>
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
