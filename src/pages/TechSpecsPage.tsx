import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Zap, Gauge, Battery, Thermometer, Shield, Star, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import circuitBoardBg from '../assets/circuit-board-bg.jpg'
import codeMonitorBg from '../assets/code-monitor-bg.jpg'
import matrixBg from '../assets/matrix-bg.jpg'

const TechSpecsPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('e-pod')

  const motorModels = [
    {
      id: 'e-pod',
      name: 'e-POD',
      category: 'Revolutionary Urban Mobility',
      icon: Zap,
      specs: {
        'Acceleration': '0-60km/hr in 4 seconds',
        'Steering': 'All Wheel Power Steering',
        'Throttle': 'By Wire',
        'Infotainment': 'Android System',
        'Vehicle Type': 'Fully enclosed two-wheeler',
        'Key Features': 'Airbags, Weather protection',
        'USP': 'Car safety + Motorcycle maneuverability',
        'Safety Features': 'Airbags (uncommon in two-wheelers)',
        'Comfort': 'Pushback seats for ergonomic comfort',
        'Weather Protection': 'Full protection - no helmets required'
      }
    }
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${matrixBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
        <div className="absolute inset-0 tron-grid-bg opacity-30 animate-grid-flow" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        {/* Floating tech elements */}
        <div className="absolute top-20 left-20 animate-float">
          <Zap className="h-8 w-8 text-primary/40" />
        </div>
        <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <Battery className="h-10 w-10 text-accent/40" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <Gauge className="h-6 w-6 text-primary/40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fadeIn">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Star className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Next-Gen Urban Mobility</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-8 tron-glow-text animate-pulse-glow">
              TECHNICAL <span className="text-accent">SPECS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Complete technical specifications for the revolutionary e-POD urban mobility solution
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${circuitBoardBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/90 to-background/98" />
        <div className="absolute inset-0 tron-grid-bg opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 tron-glow-text">
              VEHICLE <span className="text-accent">SPECIFICATIONS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed technical specifications and performance metrics
            </p>
          </div>

          <div className="space-y-8">
            {motorModels.map((model, index) => (
              <Card
                key={model.id}
                className="tron-glass-strong border-primary/40 overflow-hidden hover:border-primary/60 transition-all duration-500 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(model.id)}
                  className="w-full p-8 flex items-center justify-between hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all duration-300 tron-glow">
                      <model.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-orbitron font-black text-primary tron-glow-text mb-2">
                        {model.name}
                      </h3>
                      <p className="text-base text-muted-foreground font-medium">{model.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-accent font-bold uppercase tracking-wider">
                      {expandedSection === model.id ? 'Collapse' : 'View Details'}
                    </span>
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/30">
                      {expandedSection === model.id ? (
                        <ChevronUp className="h-5 w-5 text-accent" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-accent" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedSection === model.id && (
                  <CardContent className="px-8 pb-8 border-t border-primary/30 animate-accordion-down">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-6">
                      <div className="text-center p-4 tron-glass rounded-lg border border-accent/20">
                        <Gauge className="h-6 w-6 text-accent mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground">Top Speed</div>
                        <div className="text-lg font-orbitron font-bold text-accent">120 km/h</div>
                      </div>
                      <div className="text-center p-4 tron-glass rounded-lg border border-primary/20">
                        <Battery className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground">Range</div>
                        <div className="text-lg font-orbitron font-bold text-primary">200 km</div>
                      </div>
                      <div className="text-center p-4 tron-glass rounded-lg border border-accent/20">
                        <Zap className="h-6 w-6 text-accent mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground">Charging</div>
                        <div className="text-lg font-orbitron font-bold text-accent">4 hours</div>
                      </div>
                      <div className="text-center p-4 tron-glass rounded-lg border border-primary/20">
                        <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground">Seating</div>
                        <div className="text-lg font-orbitron font-bold text-primary">2 persons</div>
                      </div>
                    </div>

                    {/* Detailed Specs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {Object.entries(model.specs).map(([key, value], specIndex) => (
                        <div
                          key={key}
                          className="tron-glass p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 animate-fadeIn"
                          style={{ animationDelay: `${specIndex * 0.1}s` }}
                        >
                          <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">{key}</div>
                          <div className="text-lg font-orbitron font-bold text-accent">{value}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Key Advantages */}
                    <Card className="tron-glass border border-primary/30">
                      <CardHeader>
                        <CardTitle className="text-xl font-orbitron font-bold text-primary flex items-center">
                          <Star className="h-5 w-5 mr-2" />
                          Key Advantages
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            'Superior maneuverability in congested city traffic',
                            'Docking capability for multi-unit travel',
                            'Combines safety of a car with agility of motorcycle',
                            'Zero helmet requirement with full weather protection',
                            'Advanced safety features uncommon in two-wheelers'
                          ].map((advantage, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{advantage}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default TechSpecsPage
