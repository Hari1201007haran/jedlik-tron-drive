import React from 'react'
import { Award, MapPin, Users, Lightbulb } from 'lucide-react'

const AboutUsPage: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: 'DPIIT Recognised',
      description: 'Department for Promotion of Industry and Internal Trade recognition for our innovative startup.',
    },
    {
      icon: MapPin,
      title: 'Chennai Based',
      description: 'Located in the automobile capital of India, leveraging the rich automotive ecosystem.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Group of dedicated mechanical engineers passionate about urban mobility solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Committed to developing next-generation technologies for sustainable transportation.',
    },
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
              ABOUT <span className="text-accent">JEDLIK MOTORS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of urban commuting through innovative electric motor technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className="order-2 lg:order-1">
              <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-primary tron-glow-text">
                  OUR MISSION
                </h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-foreground">
                    We're a <span className="text-primary font-semibold">DPIIT recognised startup</span> based 
                    in the automobile capital of India, Chennai. Our team consists of passionate mechanical engineers 
                    working on the next generation of urban commuting solutions.
                  </p>
                  <p className="text-muted-foreground">
                    We're supported by <span className="text-accent font-semibold">Anna Incubator</span> and{' '}
                    <span className="text-accent font-semibold">iCreate</span>, leveraging their expertise 
                    and resources to bring cutting-edge electric motor technology to the market.
                  </p>
                  <p className="text-foreground">
                    Our vision is to revolutionize urban transportation by creating efficient, sustainable, 
                    and intelligent motor solutions that will power the cities of tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary/30 rounded-lg rotate-12 animate-pulse-glow" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/40 rounded-lg -rotate-12 animate-pulse-glow" />
                
                <div className="tron-glass p-8 rounded-lg border border-primary/30 relative z-10">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 border-2 border-primary rounded-full flex items-center justify-center tron-glow">
                      <Lightbulb className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">
                      INNOVATION DRIVEN
                    </h3>
                    <p className="text-muted-foreground">
                      Transforming ideas into reality through cutting-edge engineering and sustainable technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            OUR <span className="text-accent">ACHIEVEMENTS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="tron-glass-strong p-6 rounded-lg border border-primary/30 hover:border-primary/60 hover:tron-glow transition-all duration-300 text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <achievement.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-orbitron font-bold mb-3 group-hover:tron-glow-text transition-all">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8 tron-glow-text">
            SUPPORTED BY INDUSTRY LEADERS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tron-glass-strong p-8 rounded-lg border border-accent/30">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-accent">
                ANNA INCUBATOR
              </h3>
              <p className="text-muted-foreground">
                Leveraging the expertise and resources of Anna University's premier incubation center 
                to accelerate our technological development.
              </p>
            </div>
            
            <div className="tron-glass-strong p-8 rounded-lg border border-accent/30">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-accent">
                iCREATE
              </h3>
              <p className="text-muted-foreground">
                Partnering with iCreate's innovation ecosystem to bring our cutting-edge solutions 
                to market with world-class mentorship and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage