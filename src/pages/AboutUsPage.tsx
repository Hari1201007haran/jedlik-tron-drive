import React from 'react'
import { Award, MapPin, Users, Lightbulb, Cpu, Zap, Shield, Hexagon, CircuitBoard, Target, Rocket, Globe } from 'lucide-react'

const AboutUsPage: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: 'POC Development',
      description: 'Developed 1:6 scale Proof of Concept for e-POD with patent filed under Startup India.',
      value: '1:6',
      metric: 'Scale POC'
    },
    {
      icon: Target,
      title: 'TEC Grants Received',
      description: 'Secured grants of ₹50,000 from iCreate, ₹9,00,000 from Nidhi Prayas, and ₹15,00,000 from SIFSC.',
      value: '₹25L+',
      metric: 'Funding'
    },
    {
      icon: Lightbulb,
      title: 'Full Scale Model',
      description: 'Built fully 3D-printed CAD-based functional model and full scale single-seat prototype.',
      value: '100%',
      metric: 'Functional'
    },
    {
      icon: Users,
      title: 'Industry Recognition',
      description: 'Featured across industry networks with growing recognition and early tester collaborations.',
      value: '360°',
      metric: 'Network'
    },
  ]

  const techStack = [
    { icon: CircuitBoard, label: 'Advanced Engineering', color: 'primary' },
    { icon: Cpu, label: 'AI Integration', color: 'accent' },
    { icon: Shield, label: 'Safety Systems', color: 'primary' },
    { icon: Zap, label: 'Electric Powertrain', color: 'accent' },
  ]

  const timeline = [
    { year: '2022', title: 'Foundation', desc: 'Company inception with revolutionary vision', status: 'completed' },
    { year: '2023', title: 'POC Development', desc: 'Proof of concept and patent filing', status: 'completed' },
    { year: '2024', title: 'Prototype', desc: 'Full-scale prototype development', status: 'current' },
    { year: '2025', title: 'Launch', desc: 'Market launch and production scaling', status: 'future' },
  ]

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Futuristic Particle Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section with Holographic Elements */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 tron-grid-bg opacity-30 animate-grid-flow" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-accent/20" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 border border-primary/40 rotate-45 animate-float" style={{animation: 'float 6s ease-in-out infinite'}}>
          <div className="absolute inset-4 border border-primary/20 rotate-45"></div>
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-accent/40 rotate-12 animate-float" style={{animation: 'float 8s ease-in-out infinite', animationDelay: '2s'}}>
          <div className="absolute inset-3 border border-accent/20 -rotate-12"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-primary/30 animate-float" style={{animation: 'float 10s ease-in-out infinite', animationDelay: '4s'}}>
          <div className="absolute inset-2 border border-primary/10 rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            {/* Animated intro badge */}
            <div className="inline-flex items-center gap-3 mb-8 p-4 rounded-full tron-glass border border-primary/50">
              <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <span className="text-primary font-orbitron text-sm uppercase tracking-[0.3em]">About Jedlik Motors</span>
              <div className="w-3 h-3 bg-accent rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-8">
              <span className="inline-block tron-glow-text animate-fade-in">FUTURE</span>
              <br />
              <span className="inline-block text-accent tron-glow-text animate-fade-in" style={{animationDelay: '0.3s'}}>MOBILITY</span>
              <br />
              <span className="inline-block text-primary tron-glow-text animate-fade-in" style={{animationDelay: '0.6s'}}>REDEFINED</span>
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-4 h-4 bg-primary rounded-full mx-8 animate-pulse"></div>
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.9s'}}>
              Pioneering the next generation of urban transportation through revolutionary engineering and sustainable innovation
            </p>
          </div>

          {/* Tech Stack Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="group relative p-6 tron-glass border border-primary/30 rounded-lg hover:border-primary/60 transition-all duration-500 hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${tech.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} flex items-center justify-center group-hover:tron-glow transition-all duration-300`}>
                    <tech.icon className={`h-8 w-8 ${tech.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <p className="font-orbitron font-bold text-sm group-hover:tron-glow-text transition-all">
                    {tech.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with 3D Effect */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Enhanced Mission Content */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative tron-glass-strong p-10 rounded-2xl border border-primary/40 hover:border-primary/70 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-5 h-5 bg-primary rounded-full animate-ping"></div>
                  <h2 className="text-3xl lg:text-4xl font-orbitron font-black text-primary tron-glow-text">
                    OUR MISSION
                  </h2>
                </div>
                
                <div className="space-y-8 text-lg leading-relaxed">
                  <div className="relative p-6 tron-glass rounded-lg border border-primary/20 hover:border-primary/40 transition-all group/card">
                    <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity"></div>
                    <p className="text-foreground">
                      Jedlik Motors was founded by <span className="text-primary font-bold">passionate adventurers and engineers</span> on a mission to redefine urban commuting with safety, comfort, and maneuverability. Born from the personal experiences of riders facing daily risks and inefficiencies.
                    </p>
                  </div>
                  
                  <div className="relative p-6 tron-glass rounded-lg border border-accent/20 hover:border-accent/40 transition-all group/card">
                    <div className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity"></div>
                    <p className="text-muted-foreground">
                      We're creating a revolutionary new mobility solution — the <span className="text-accent font-bold">e-POD</span>, a fully enclosed, two-wheeled electric vehicle combining the agility of a motorcycle with the safety and comfort of a car.
                    </p>
                  </div>
                  
                  <div className="relative p-6 tron-glass rounded-lg border border-primary/20 hover:border-primary/40 transition-all group/card">
                    <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity"></div>
                    <p className="text-foreground">
                      Our vision is to provide <span className="text-primary font-bold">superior maneuverability in congested city traffic</span> while offering features like airbags, full weather protection, and innovative docking capability for multi-unit travel.
                    </p>
                  </div>
                </div>
                
                {/* Corner indicators */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Futuristic Visual Element */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative tron-glass-strong p-12 rounded-3xl border border-primary/40 hover:border-primary/70 transition-all duration-500 group">
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto border-4 border-primary rounded-full flex items-center justify-center tron-glow relative group-hover:scale-110 transition-transform duration-500">
                      <Rocket className="w-16 h-16 text-primary animate-pulse" />
                      <div className="absolute inset-0 border-4 border-accent rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
                      <div className="absolute -inset-4 border border-primary/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-orbitron font-black mb-6 text-primary tron-glow-text">
                    INNOVATION MATRIX
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'Safety', value: '99.9%', icon: Shield },
                      { label: 'Efficiency', value: '300km', icon: Zap },
                      { label: 'Smart AI', value: '24/7', icon: Cpu },
                      { label: 'Global', value: '∞', icon: Globe },
                    ].map((metric, index) => (
                      <div key={index} className="p-4 tron-glass rounded-lg border border-primary/20 hover:border-accent/40 transition-all group/metric">
                        <metric.icon className="h-6 w-6 text-accent mx-auto mb-2 group-hover/metric:scale-110 transition-transform" />
                        <div className="text-xl font-orbitron font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Transforming mobility through quantum leaps in engineering excellence and sustainable innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-accent/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-black mb-6 tron-glow-text">
              JOURNEY TO THE <span className="text-accent">FUTURE</span>
            </h2>
            <div className="flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-3 h-3 bg-primary rounded-full mx-6 animate-pulse"></div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-50"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-8 tron-glass-strong rounded-2xl border ${item.status === 'current' ? 'border-accent/60 tron-glow' : 'border-primary/30'} hover:border-primary/60 transition-all duration-500 group`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-orbitron font-black text-lg ${
                          item.status === 'completed' ? 'bg-primary/20 text-primary' :
                          item.status === 'current' ? 'bg-accent/20 text-accent animate-pulse' :
                          'bg-muted/20 text-muted-foreground'
                        }`}>
                          {item.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className={`text-xl font-orbitron font-bold group-hover:tron-glow-text transition-all ${
                            item.status === 'current' ? 'text-accent' : 'text-primary'
                          }`}>
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className={`w-6 h-6 rounded-full border-4 z-10 ${
                    item.status === 'completed' ? 'bg-primary border-primary/50' :
                    item.status === 'current' ? 'bg-accent border-accent/50 animate-ping' :
                    'bg-muted border-muted/50'
                  }`}></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-black mb-6 tron-glow-text">
              QUANTUM <span className="text-accent">ACHIEVEMENTS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones that define our revolutionary journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <div className="relative tron-glass-strong p-8 rounded-2xl border border-primary/40 hover:border-primary/70 transition-all duration-500 text-center group-hover:scale-105">
                  {/* Metric display */}
                  <div className="mb-6">
                    <div className="text-3xl font-orbitron font-black text-primary tron-glow-text mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-accent font-semibold tracking-wide">
                      {achievement.metric}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mx-auto mb-6 group-hover:bg-accent/20 group-hover:tron-glow transition-all duration-300">
                    <achievement.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-orbitron font-bold mb-4 group-hover:tron-glow-text transition-all">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section with Holographic Cards */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-black mb-8 tron-glow-text">
              POWERED BY <span className="text-accent">INNOVATION ECOSYSTEM</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Hexagon className="w-8 h-8 text-accent mx-6 animate-spin" style={{animationDuration: '10s'}} />
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ANNA INCUBATION',
                subtitle: 'University Excellence',
                description: 'Currently incubated at Anna University\'s premier incubation center, leveraging their expertise and resources for technological development.',
                icon: Award,
                color: 'accent'
              },
              {
                title: 'iCREATE',
                subtitle: 'Innovation Catalyst',
                description: 'Grant support and partnership with iCreate\'s innovation ecosystem to accelerate our cutting-edge solutions to market.',
                icon: Lightbulb,
                color: 'primary'
              },
              {
                title: 'STARTUP INDIA',
                subtitle: 'National Recognition',
                description: 'Patent recognition and support under the Startup India initiative, validating our innovative approach to urban mobility.',
                icon: Rocket,
                color: 'accent'
              }
            ].map((partner, index) => (
              <div key={index} className="relative group" style={{animationDelay: `${index * 0.3}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className={`relative tron-glass-strong p-10 rounded-3xl border ${partner.color === 'primary' ? 'border-primary/40 hover:border-primary/70' : 'border-accent/40 hover:border-accent/70'} transition-all duration-500 group-hover:scale-105`}>
                  <div className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${partner.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} flex items-center justify-center group-hover:tron-glow transition-all duration-300`}>
                      <partner.icon className={`h-10 w-10 ${partner.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    
                    <h3 className={`text-xl font-orbitron font-black mb-2 ${partner.color === 'primary' ? 'text-primary' : 'text-accent'} group-hover:tron-glow-text transition-all`}>
                      {partner.title}
                    </h3>
                    
                    <div className="text-sm font-semibold text-muted-foreground mb-4 tracking-wide">
                      {partner.subtitle}
                    </div>
                    
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                  
                  {/* Holographic corner effects */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage