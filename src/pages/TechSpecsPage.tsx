import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Zap, Gauge, Battery, Thermometer } from 'lucide-react'
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
        'Seating Capacity': '2 persons',
        'Top Speed': '120 km/h',
        'Range per Charge': '200 km',
        'Charging Time': '4 hours',
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
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${matrixBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 tron-grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-6 tron-glow-text">
              TECHNICAL <span className="text-accent">SPECIFICATIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete technical specifications for the revolutionary e-POD urban mobility solution
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${circuitBoardBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            {motorModels.map((model) => (
              <div
                key={model.id}
                className="tron-glass-strong rounded-lg border border-primary/30 overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(model.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                      <model.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-orbitron font-bold text-primary tron-glow-text">
                        {model.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{model.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-accent font-semibold">
                      {expandedSection === model.id ? 'Collapse' : 'Expand'}
                    </span>
                    {expandedSection === model.id ? (
                      <ChevronUp className="h-5 w-5 text-accent" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-accent" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedSection === model.id && (
                  <div className="px-6 pb-6 border-t border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      {Object.entries(model.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="tron-glass p-4 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
                        >
                          <div className="text-sm text-muted-foreground mb-1">{key}</div>
                          <div className="text-lg font-orbitron font-bold text-accent">{value}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Additional Info */}
                    <div className="mt-6 p-4 tron-glass rounded-lg border border-primary/20">
                      <h4 className="text-lg font-orbitron font-bold mb-2 text-primary">
                        Key Advantages
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Superior maneuverability in congested city traffic</li>
                        <li>• Docking capability for multi-unit travel</li>
                        <li>• Combines safety of a car with agility of motorcycle</li>
                        <li>• Zero helmet requirement with full weather protection</li>
                        <li>• Advanced safety features uncommon in two-wheelers</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url(${codeMonitorBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            INDUSTRY <span className="text-accent">STANDARDS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-primary tron-glow-text">
                CERTIFICATIONS
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  ISO 9001:2015 Quality Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  IEC 60034 Standards Compliance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  CE Marking for European Market
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  BIS Certification for Indian Market
                </li>
              </ul>
            </div>
            
            <div className="tron-glass-strong p-8 rounded-lg border border-accent/30">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-accent">
                TESTING PROTOCOLS
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Endurance Testing (10,000+ hours)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Environmental Stress Testing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  EMC/EMI Compliance Testing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Safety and Performance Validation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechSpecsPage