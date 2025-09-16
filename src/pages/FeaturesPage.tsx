import React from 'react'
import { Zap, Settings, Leaf, Volume2, Puzzle, Shield } from 'lucide-react'
import heroBackgroundImage from '@/assets/tron-hero-bg.jpg'

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
        
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
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 tron-grid-bg opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <span className="text-primary font-orbitron text-sm uppercase tracking-widest">Innovation Hub</span>
              <div className="w-3 h-3 bg-accent rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8">
              <span className="text-primary tron-glow-text">TECHNICAL</span>
              <br />
              <span className="text-accent tron-glow-text">EXCELLENCE</span>
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
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
            {/* Enhanced Performance Metrics */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative tron-glass-strong p-8 lg:p-10 rounded-xl border border-primary/40 hover:border-primary/70 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                  <h3 className="text-2xl lg:text-3xl font-orbitron font-bold text-primary tron-glow-text">
                    PERFORMANCE METRICS
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {[
                    { label: 'TRL Achievement', value: 'TRL 4', progress: 80, color: 'primary' },
                    { label: 'Engineering Expertise', value: 'Multi-disciplinary', progress: 95, color: 'accent' },
                    { label: 'Commercialization Readiness', value: 'High', progress: 85, color: 'primary' },
                    { label: 'Innovation Index', value: 'Breakthrough', progress: 90, color: 'accent' }
                  ].map((metric, index) => (
                    <div key={index} className="group/metric">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-foreground group-hover/metric:text-primary transition-colors">
                          {metric.label}
                        </span>
                        <span className={`font-orbitron font-bold ${metric.color === 'primary' ? 'text-primary' : 'text-accent'} tron-glow-text`}>
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
                  description: 'Achieved TRL 4 Proof of Concept with a clear and structured roadmap to commercialization and market entry, backed by rigorous testing.',
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
                  
                  <div className={`relative tron-glass p-6 lg:p-8 rounded-lg border ${item.color === 'primary' ? 'border-primary/30 hover:border-primary/60' : 'border-accent/30 hover:border-accent/60'} transition-all duration-500 group-hover:scale-[1.02] group-hover:tron-glow`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${item.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg lg:text-xl font-orbitron font-bold mb-3 ${item.color === 'primary' ? 'text-primary' : 'text-accent'} group-hover:tron-glow-text transition-all`}>
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
              <span className="text-lg lg:text-xl font-orbitron font-bold text-foreground group-hover:tron-glow-text transition-all">
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