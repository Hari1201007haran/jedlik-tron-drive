import React from 'react'
import { Award, MapPin, Users, Lightbulb, Target, Zap, Shield, Trophy, Star, CheckCircle, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import circuitBoardBg from '../assets/circuit-board-bg.jpg'
import codeMonitorBg from '../assets/code-monitor-bg.jpg'
import matrixBg from '../assets/matrix-bg.jpg'

const AboutUsPage: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: 'POC Development',
      description: 'Developed 1:6 scale Proof of Concept for e-POD with patent filed under Startup India.',
      metric: '1:6 Scale',
      color: 'primary'
    },
    {
      icon: Trophy,
      title: 'TEC Grants Received',
      description: 'Secured grants of ₹50,000 from iCreate, ₹9,00,000 from Nidhi Prayas, and ₹15,00,000 from SIFSC.',
      metric: '₹24L+',
      color: 'accent'
    },
    {
      icon: Lightbulb,
      title: 'Full Scale Model',
      description: 'Built fully 3D-printed CAD-based functional model and full scale single-seat prototype.',
      metric: 'Full Scale',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Industry Recognition',
      description: 'Featured across industry networks with growing recognition and early tester collaborations.',
      metric: '100+',
      color: 'accent'
    },
  ]

  const milestones = [
    { year: '2022', title: 'Company Founded', desc: 'Jedlik Motors inception' },
    { year: '2023', title: 'POC Development', desc: '1:6 scale prototype' },
    { year: '2024', title: 'Full Scale Model', desc: 'Complete functional prototype' },
    { year: '2025', title: 'Market Launch', desc: 'Commercial production ready' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and sustainable solutions'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Prioritizing rider safety with advanced protection systems'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Delivering superior performance and efficiency in urban mobility'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Commitment to quality and excellence in every aspect'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${matrixBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 tron-grid-bg opacity-30 animate-grid-flow" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 animate-float">
          <Rocket className="h-8 w-8 text-primary/40" />
        </div>
        <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <Target className="h-10 w-10 text-accent/40" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <Star className="h-6 w-6 text-primary/40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fadeIn">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Lightbulb className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Revolutionizing Urban Mobility</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-8 tron-glow-text animate-pulse-glow">
              ABOUT <span className="text-accent">JEDLIK MOTORS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Redefining urban commuting with safety, comfort, and maneuverability through the revolutionary e-POD
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission Card */}
            <Card className="tron-glass-strong border-primary/40 hover:border-primary/60 transition-all duration-500 animate-fadeIn">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-orbitron font-bold text-primary tron-glow-text flex items-center">
                  <Target className="h-6 w-6 mr-3" />
                  OUR MISSION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  Jedlik Motors was founded by <span className="text-primary font-semibold">passionate adventurers and engineers</span> on a mission to redefine urban commuting with safety, comfort, and maneuverability.
                </p>
                <p className="text-muted-foreground">
                  We're creating a revolutionary new mobility solution — the <span className="text-accent font-semibold">e-POD</span>, a fully enclosed, two-wheeled electric vehicle combining the agility of a motorcycle with the safety and comfort of a car.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 tron-glass rounded-lg border border-accent/20">
                    <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium">Safety</div>
                  </div>
                  <div className="text-center p-3 tron-glass rounded-lg border border-primary/20">
                    <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Performance</div>
                  </div>
                  <div className="text-center p-3 tron-glass rounded-lg border border-accent/20">
                    <Star className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium">Innovation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visual Innovation Card */}
            <Card className="tron-glass-strong border-accent/40 hover:border-accent/60 transition-all duration-500 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 border-2 border-primary rounded-full flex items-center justify-center tron-glow animate-pulse-glow">
                    <Lightbulb className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary tron-glow-text">
                    INNOVATION DRIVEN
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Transforming ideas into reality through cutting-edge engineering and sustainable technology
                  </p>
                  
                  {/* Key stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 tron-glass rounded-lg border border-primary/20">
                      <div className="text-2xl font-orbitron font-bold text-primary">3+</div>
                      <div className="text-sm text-muted-foreground">Years R&D</div>
                    </div>
                    <div className="text-center p-4 tron-glass rounded-lg border border-accent/20">
                      <div className="text-2xl font-orbitron font-bold text-accent">₹24L+</div>
                      <div className="text-sm text-muted-foreground">Funding</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${circuitBoardBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/90 to-background/98" />
        <div className="absolute inset-0 tron-grid-bg opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 tron-glow-text">
              OUR <span className="text-accent">VALUES</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that drive our innovation and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="tron-glass-strong border-primary/40 hover:border-primary/60 transition-all duration-500 hover:scale-105 text-center group animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 tron-glow">
                    <value.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 group-hover:tron-glow-text transition-all">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 tron-glow-text">
              OUR <span className="text-accent">ACHIEVEMENTS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that mark our journey towards revolutionizing urban mobility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`tron-glass-strong border-${achievement.color}/40 hover:border-${achievement.color}/60 transition-all duration-500 hover:scale-105 text-center group animate-fadeIn`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-${achievement.color}/20 mx-auto mb-4 group-hover:bg-${achievement.color}/30 transition-all duration-300 tron-glow`}>
                    <achievement.icon className={`h-10 w-10 text-${achievement.color} transition-all duration-300`} />
                  </div>
                  
                  <div className={`text-3xl font-orbitron font-bold text-${achievement.color} mb-2`}>
                    {achievement.metric}
                  </div>
                  
                  <h3 className="text-lg font-orbitron font-bold mb-3 group-hover:tron-glow-text transition-all">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url(${codeMonitorBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/95" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 tron-glow-text">
              OUR <span className="text-accent">JOURNEY</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our path to revolutionizing urban transportation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fadeIn`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="tron-glass-strong border-primary/40 hover:border-primary/60 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-orbitron font-bold text-accent mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-orbitron font-bold text-primary mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background tron-glow animate-pulse-glow z-10"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 tron-glow-text">
              SUPPORTED BY <span className="text-accent">INDUSTRY LEADERS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Backed by premier institutions and innovation ecosystems driving our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="tron-glass-strong border-accent/40 hover:border-accent/60 transition-all duration-500 hover:scale-105 animate-fadeIn">
              <CardHeader>
                <CardTitle className="text-xl font-orbitron font-bold text-accent flex items-center justify-center">
                  <Award className="h-6 w-6 mr-2" />
                  ANNA INCUBATION
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Currently incubated at Anna University's premier incubation center, 
                  leveraging their expertise and resources for technological development.
                </p>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm font-medium text-accent">Active Partnership</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="tron-glass-strong border-accent/40 hover:border-accent/60 transition-all duration-500 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-xl font-orbitron font-bold text-accent flex items-center justify-center">
                  <Trophy className="h-6 w-6 mr-2" />
                  iCREATE
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Grant support and partnership with iCreate's innovation ecosystem 
                  to accelerate our cutting-edge solutions to market.
                </p>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm font-medium text-accent">₹50K Grant Received</span>
                </div>
              </CardContent>
            </Card>

            <Card className="tron-glass-strong border-accent/40 hover:border-accent/60 transition-all duration-500 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-xl font-orbitron font-bold text-accent flex items-center justify-center">
                  <Star className="h-6 w-6 mr-2" />
                  STARTUP INDIA
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Patent recognition and support under the Startup India initiative, 
                  validating our innovative approach to urban mobility.
                </p>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm font-medium text-accent">Patent Filed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Recognition */}
          <div className="mt-16">
            <Card className="tron-glass-strong border-primary/30 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron font-bold text-center tron-glow-text">
                  RECOGNITION & <span className="text-accent">FUNDING</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="p-6 tron-glass rounded-lg border border-primary/20">
                    <div className="text-3xl font-orbitron font-black text-primary mb-2">₹24L+</div>
                    <div className="text-sm text-muted-foreground">Total Funding Secured</div>
                  </div>
                  <div className="p-6 tron-glass rounded-lg border border-accent/20">
                    <div className="text-3xl font-orbitron font-black text-accent mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Grant Partners</div>
                  </div>
                  <div className="p-6 tron-glass rounded-lg border border-primary/20">
                    <div className="text-3xl font-orbitron font-black text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">DPIIT Recognized</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage