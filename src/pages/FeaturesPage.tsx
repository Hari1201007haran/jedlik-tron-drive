import React from 'react'
import { Zap, Settings, Leaf, Volume2, Puzzle, Shield } from 'lucide-react'

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Airbags for Safety',
      description: 'Advanced airbag system – uncommon in two-wheelers, providing car-level safety protection.',
      color: 'primary'
    },
    {
      icon: Settings,
      title: 'Pushback Seats',
      description: 'Ergonomically designed pushback seats for maximum comfort during urban commutes.',
      color: 'accent'
    },
    {
      icon: Volume2,  
      title: 'Full Weather Protection',
      description: 'Complete weather protection with fully enclosed design – no helmets required.',
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Superior Maneuverability',
      description: 'Outstanding maneuverability in congested city traffic, combining motorcycle agility with car comfort.',
      color: 'accent'
    },
    {
      icon: Puzzle,
      title: 'Docking Capability',
      description: 'Innovative docking feature allowing multi-unit travel for enhanced versatility.',
      color: 'primary'
    },
    {
      icon: Leaf,
      title: 'Extended Range',
      description: '200 km range with rapid charging in just 4 hours for efficient urban mobility.',
      color: 'accent'
    }
  ]

  const cuttingEdgeFeatures = [
    {
      icon: Settings,
      title: 'Crab Walking Technology',
      description: 'Revolutionary lateral movement capability using opposed front & rear wheel steering.',
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Shared Powertrain',
      description: 'Scalable powertrain technology that can be adapted to 4-wheel, 4-person configurations.',
      color: 'accent'
    },
    {
      icon: Leaf,
      title: 'Compact Design',
      description: 'Optimized for short urban commutes (0–20 km) with reduced congestion impact.',
      color: 'primary'
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

      {/* Cutting-Edge Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            CUTTING-EDGE <span className="text-accent">TECHNOLOGIES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cuttingEdgeFeatures.map((feature, index) => (
              <div
                key={index}
                className="tron-glass-strong p-8 rounded-lg border border-accent/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 group"
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
                  <span className="font-semibold">TRL Achievement</span>
                  <span className="text-accent font-orbitron font-bold">TRL 4</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[80%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Engineering Expertise</span>
                  <span className="text-accent font-orbitron font-bold">Multi-disciplinary</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[95%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Commercialization Readiness</span>
                  <span className="text-accent font-orbitron font-bold">High</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="tron-glass p-6 rounded-lg border border-accent/30">
                <h4 className="text-lg font-orbitron font-bold mb-3 text-accent">
                  AUTOMOTIVE & EV PRINCIPLES
                </h4>
                <p className="text-muted-foreground">
                  Engineered with advanced automotive and EV design principles, 
                  ensuring industry-standard quality and performance.
                </p>
              </div>
              
              <div className="tron-glass p-6 rounded-lg border border-primary/30">
                <h4 className="text-lg font-orbitron font-bold mb-3 text-primary">
                  EXPERT ENGINEERING TEAM
                </h4>
                <p className="text-muted-foreground">
                  Built by a dedicated team of engineers with expertise in mechanical, 
                  electrical, and fabrication projects.
                </p>
              </div>
              
              <div className="tron-glass p-6 rounded-lg border border-accent/30">
                <h4 className="text-lg font-orbitron font-bold mb-3 text-accent">
                  COMMERCIALIZATION ROADMAP
                </h4>
                <p className="text-muted-foreground">
                  Achieved TRL 4 Proof of Concept with a clear and structured 
                  roadmap to commercialization and market entry.
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