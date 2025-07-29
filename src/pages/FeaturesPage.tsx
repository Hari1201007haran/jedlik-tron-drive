import React from 'react'
import { Zap, Settings, Leaf, Volume2, Puzzle, Shield } from 'lucide-react'

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Adaptive Power Delivery',
      description: 'Intelligent power management system that adapts to driving conditions for optimal performance and efficiency.',
      color: 'primary'
    },
    {
      icon: Settings,
      title: 'Intelligent Battery Management',
      description: 'Advanced BMS technology that maximizes battery life while ensuring consistent power output and safety.',
      color: 'accent'
    },
    {
      icon: Puzzle,
      title: 'Modular Design',
      description: 'Flexible, modular architecture allows for easy maintenance, upgrades, and customization to specific needs.',
      color: 'primary'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Operation',
      description: 'Zero-emission operation with high energy efficiency, contributing to cleaner urban environments.',
      color: 'accent'
    },
    {
      icon: Volume2,
      title: 'Silent Performance',
      description: 'Near-silent operation reduces noise pollution while maintaining powerful performance characteristics.',
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Enhanced Safety Systems',
      description: 'Multiple safety layers including thermal protection, overload prevention, and fault detection systems.',
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
              CUTTING-EDGE <span className="text-accent">FEATURES</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the innovative technologies that power our next-generation electric motors
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="tron-glass-strong p-8 rounded-lg border border-primary/30 hover:border-primary/60 hover:tron-glow transition-all duration-300 group"
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all duration-300 ${
                  feature.color === 'primary' 
                    ? 'bg-primary/20 group-hover:bg-primary/30 group-hover:tron-glow' 
                    : 'bg-accent/20 group-hover:bg-accent/30 group-hover:tron-glow'
                }`}>
                  <feature.icon className={`h-8 w-8 transition-colors ${
                    feature.color === 'primary' 
                      ? 'text-primary group-hover:text-primary' 
                      : 'text-accent group-hover:text-accent'
                  }`} />
                </div>
                
                <h3 className="text-xl font-orbitron font-bold mb-4 group-hover:tron-glow-text transition-all">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            TECHNICAL <span className="text-accent">EXCELLENCE</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary tron-glow-text">
                PERFORMANCE METRICS
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Energy Efficiency</span>
                  <span className="text-accent font-orbitron font-bold">95%+</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[95%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Noise Reduction</span>
                  <span className="text-accent font-orbitron font-bold">90%+</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[90%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Reliability Rating</span>
                  <span className="text-accent font-orbitron font-bold">99%+</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[99%]"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="tron-glass p-6 rounded-lg border border-accent/30">
                <h4 className="text-lg font-orbitron font-bold mb-3 text-accent">
                  SMART INTEGRATION
                </h4>
                <p className="text-muted-foreground">
                  Our motors seamlessly integrate with existing systems through intelligent 
                  communication protocols and adaptive control algorithms.
                </p>
              </div>
              
              <div className="tron-glass p-6 rounded-lg border border-primary/30">
                <h4 className="text-lg font-orbitron font-bold mb-3 text-primary">
                  FUTURE-READY DESIGN
                </h4>
                <p className="text-muted-foreground">
                  Built with scalability in mind, our motors are designed to evolve with 
                  advancing technology and changing urban mobility needs.
                </p>
              </div>
              
              <div className="tron-glass p-6 rounded-lg border border-accent/30">
                <h4 className="text-lg font-orbitron font-bold mb-3 text-accent">
                  SUSTAINABLE MANUFACTURING
                </h4>
                <p className="text-muted-foreground">
                  Environmentally conscious production processes using recyclable materials 
                  and energy-efficient manufacturing techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage