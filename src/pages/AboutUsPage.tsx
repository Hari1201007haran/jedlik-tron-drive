import React from 'react'
import { Award, MapPin, Users, Lightbulb } from 'lucide-react'
import heroBackgroundImage from '@/assets/tron-hero-bg.jpg'

const AboutUsPage: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: 'POC Development',
      description: 'Developed 1:6 scale Proof of Concept for e-POD with patent filed under Startup India.',
    },
    {
      icon: Award,
      title: 'TEC Grants Received',
      description: 'Secured grants of ₹50,000 from iCreate, ₹9,00,000 from Nidhi Prayas, and ₹15,00,000 from SIFSC.',
    },
    {
      icon: Lightbulb,
      title: 'Full Scale Model',
      description: 'Built fully 3D-printed CAD-based functional model and full scale single-seat prototype.',
    },
    {
      icon: Users,
      title: 'Industry Recognition',
      description: 'Featured across industry networks with growing recognition and early tester collaborations.',
    },
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
              ABOUT <span className="text-accent">JEDLIK MOTORS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Redefining urban commuting with safety, comfort, and maneuverability through the revolutionary e-POD
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className="order-2 lg:order-1">
              <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-primary tron-glow-text">
                  OUR MISSION
                </h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-foreground">
                    Jedlik Motors was founded by <span className="text-primary font-semibold">passionate adventurers and engineers</span> on a mission to redefine urban commuting with safety, comfort, and maneuverability. Born from the personal experiences of riders facing daily risks and inefficiencies.
                  </p>
                  <p className="text-muted-foreground">
                    We're creating a revolutionary new mobility solution — the <span className="text-accent font-semibold">e-POD</span>, a fully enclosed, two-wheeled electric vehicle combining the agility of a motorcycle with the safety and comfort of a car.
                  </p>
                  <p className="text-foreground">
                    Our vision is to provide <span className="text-primary font-semibold">superior maneuverability in congested city traffic</span> while offering features like airbags, full weather protection, and innovative docking capability for multi-unit travel.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="tron-glass-strong p-8 rounded-lg border border-accent/30">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-accent">
                ANNA INCUBATION
              </h3>
              <p className="text-muted-foreground">
                Currently incubated at Anna University's premier incubation center, 
                leveraging their expertise and resources for technological development.
              </p>
            </div>
            
            <div className="tron-glass-strong p-8 rounded-lg border border-accent/30">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-accent">
                iCREATE
              </h3>
              <p className="text-muted-foreground">
                Grant support and partnership with iCreate's innovation ecosystem 
                to accelerate our cutting-edge solutions to market.
              </p>
            </div>

            <div className="tron-glass-strong p-8 rounded-lg border border-accent/30">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-accent">
                STARTUP INDIA
              </h3>
              <p className="text-muted-foreground">
                Patent recognition and support under the Startup India initiative, 
                validating our innovative approach to urban mobility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage