import React from 'react'
import { ArrowRight, Zap, Cog, Leaf, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 tron-grid-bg animate-grid-flow opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        
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
              onClick={() => onNavigate('features')}
              size="lg"
              className="tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold text-lg px-8 py-4 group"
            >
              EXPLORE OUR MOTORS
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              onClick={() => onNavigate('techspecs')}
              variant="outline"
              size="lg"
              className="tron-glass border-accent hover:bg-accent hover:text-accent-foreground font-orbitron font-bold text-lg px-8 py-4"
            >
              TECH SPECIFICATIONS
            </Button>
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
            onClick={() => onNavigate('contact')}
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