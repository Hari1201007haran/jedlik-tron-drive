import React, { useState } from 'react'
import {
  Zap,
  Settings,
  Leaf,
  Volume2,
  Puzzle,
  Shield,
  ChevronDown,
  ChevronUp,
  Gauge,
  Battery,
  Star,
  CheckCircle,
  Cpu
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const FeaturesPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('e-pod')

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
    },
    {
      icon: Cpu,
      title: 'Autonomous Drive Stack',
      description: 'Our in-house drive-by-wire electronics (throttle-by-wire, steer-by-wire, and our own motors and controllers) are the foundation for the autonomous driving capability now in development, building toward progressively more capable self-driving as the system matures.',
      color: 'accent'
    }
  ]

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
        'Weather Protection': 'Full protection - no helmets required',
        'Autonomy': 'In-house autonomous drive stack (in development)'
      }
    }
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <div className="min-h-screen pt-24">
      {/* ── Page Title ── */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-orbitron font-black text-center">
            FEATURES &amp; <span className="text-accent">TECH SPECS</span>
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mt-6 leading-relaxed">
            The e-POD is built on drive-by-wire electronics developed in-house (our own motors, controllers and steer-by-wire), which also form the foundation of an autonomous drive stack now in development.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-10 ">
            CUTTING-EDGE <span className="text-accent">FEATURES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...features, ...cuttingEdgeFeatures].map((feature, index) => (
              <div
                key={index}
                className="tron-glass-strong p-8 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 group"
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all duration-300 ${
                  feature.color === 'primary'
                    ? 'bg-primary/20 group-hover:bg-primary/30 '
                    : 'bg-accent/20 group-hover:bg-accent/30 '
                }`}>
                  <feature.icon className={`h-8 w-8 transition-colors ${
                    feature.color === 'primary'
                      ? 'text-primary group-hover:text-primary'
                      : 'text-accent group-hover:text-accent'
                  }`} />
                </div>

                <h3 className="text-xl font-orbitron font-bold mb-4 transition-all">
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



      {/* Vehicle Specifications Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-10">
            VEHICLE <span className="text-accent">SPECIFICATIONS</span>
          </h2>

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
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all duration-300 ">
                      <model.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-orbitron font-black text-primary mb-2">
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

      {/* ── Future Autonomy Roadmap ── */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="tron-glass-strong border border-primary/30 rounded-lg p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🧭</span>
              <h2 className="text-xl md:text-2xl font-orbitron font-bold text-primary">
                TOWARDS LEVEL 4 AUTONOMY
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The e-POD is built on a patented steer-by-wire architecture with safety redundancy and
              autonomous standing capability. These foundations are the platform we intend to build
              upon to introduce Level 4 autonomous driving in future.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Level 4 autonomy is a future objective for the e-POD. The vehicle as currently offered
              requires an active driver, and we will bring higher levels of autonomous capability in
              future as the relevant systems complete further development, validation and regulatory
              approval.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Steer-by-Wire', value: 'Patented' },
                { label: 'Safety Redundancy', value: 'Built-in' },
                { label: 'Prototype Stage', value: 'TRL 5' }
              ].map((item) => (
                <div key={item.label} className="tron-glass rounded-lg border border-primary/20 p-4 text-center">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-orbitron font-bold text-primary">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8">
              <span className="text-primary ">TECHNICAL</span>
              <br />
              <span className="text-accent ">EXCELLENCE</span>
            </h2>

            <div className="flex justify-center mb-6">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-3 h-3 bg-primary rounded-full mx-6 animate-pulse"></div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Pioneering next-generation mobility through cutting-edge engineering and innovative design principles
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
            {/* Enhanced Performance Metrics */}
            <div className="relative group">
              <div className="relative tron-glass-strong p-8 lg:p-10 rounded-xl border border-primary/40 hover:border-primary/70 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                  <h3 className="text-2xl lg:text-3xl font-orbitron font-bold text-primary ">
                    PERFORMANCE METRICS
                  </h3>
                </div>

                <div className="space-y-8">
                  {[
                    { label: 'TRL Achievement', value: 'TRL 5', progress: 88, color: 'primary' },
                    { label: 'Engineering Expertise', value: 'Multi-disciplinary', progress: 95, color: 'accent' },
                    { label: 'Commercialization Readiness', value: 'High', progress: 85, color: 'primary' },
                    { label: 'Innovation Index', value: 'Breakthrough', progress: 90, color: 'accent' }
                  ].map((metric, index) => (
                    <div key={index} className="group/metric">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-foreground group-hover/metric:text-primary transition-colors">
                          {metric.label}
                        </span>
                        <span className={`font-orbitron font-bold ${metric.color === 'primary' ? 'text-primary' : 'text-accent'} `}>
                          {metric.value}
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-muted/50 h-3 rounded-full overflow-hidden">
                          <div
                            className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                              metric.color === 'primary'
                                ? 'bg-gradient-to-r from-primary via-primary/80 to-primary/60'
                                : 'bg-gradient-to-r from-accent via-accent/80 to-accent/60'
                            }`}
                            style={{ width: `${metric.progress}%`, animationDelay: `${index * 0.2}s` }}
                          ></div>
                        </div>
                        <div className={`absolute right-0 top-0 w-1 h-3 ${metric.color === 'primary' ? 'bg-primary' : 'bg-accent'} rounded-full animate-pulse`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Enhanced Excellence Cards */}
            <div className="space-y-6">
              {[
                {
                  title: 'AUTOMOTIVE & EV PRINCIPLES',
                  description: 'Engineered with advanced automotive and EV design principles, ensuring industry-standard quality and performance with next-generation mobility solutions.',
                  color: 'accent',
                  icon: '⚡'
                },
                {
                  title: 'EXPERT ENGINEERING TEAM',
                  description: 'Built by a dedicated team of engineers with expertise in mechanical, electrical, and fabrication projects, bringing decades of combined experience.',
                  color: 'primary',
                  icon: '🔧'
                },
                {
                  title: 'COMMERCIALIZATION ROADMAP',
                  description: 'Achieved TRL 5 with a validated prototype and a clear, structured roadmap to commercialization and market entry, backed by rigorous testing.',
                  color: 'accent',
                  icon: '🚀'
                },
                {
                  title: 'INNOVATION PIPELINE',
                  description: 'Continuous R&D pipeline with breakthrough technologies in development, positioning us at the forefront of urban mobility innovation.',
                  color: 'primary',
                  icon: '💡'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color === 'primary' ? 'from-primary/10' : 'from-accent/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>

                  <div className={`relative tron-glass p-6 lg:p-8 rounded-lg border ${item.color === 'primary' ? 'border-primary/30 hover:border-primary/60' : 'border-accent/30 hover:border-accent/60'} transition-all duration-500 group-hover:scale-[1.02] `}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${item.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg lg:text-xl font-orbitron font-bold mb-3 ${item.color === 'primary' ? 'text-primary' : 'text-accent'}  transition-all`}>
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {item.description}
                    </p>

                    {/* Animated accent line */}
                    <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${item.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary/60' : 'bg-gradient-to-r from-accent to-accent/60'} mt-4`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 p-6 lg:p-8 tron-glass-strong rounded-xl border border-primary/40 hover:border-accent/60 transition-all duration-500 group hover:scale-105">
              <div className="w-3 h-3 bg-accent rounded-full animate-ping"></div>
              <span className="text-lg lg:text-xl font-orbitron font-bold text-foreground transition-all">
                Ready to revolutionize urban mobility
              </span>
              <div className="w-3 h-3 bg-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage
