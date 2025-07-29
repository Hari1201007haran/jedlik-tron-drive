import React from 'react'
import { MapPin, Navigation, Clock, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LocateUsPage: React.FC = () => {
  const landmarks = [
    {
      icon: Car,
      title: 'By Car',
      description: 'Take the Guindy - Velachery Road and enter Anna University campus through the main gate.',
      time: '15 mins from Chennai Airport'
    },
    {
      icon: Navigation,
      title: 'Public Transport',
      description: 'Take the Chennai Metro to Guindy Station, then auto-rickshaw to Anna University campus.',
      time: '5 mins from Guindy Metro'
    },
    {
      icon: Clock,
      title: 'Visiting Hours',
      description: 'Best time to visit is between 10:00 AM - 5:00 PM on weekdays for business meetings.',
      time: 'Mon - Fri preferred'
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
              LOCATE <span className="text-accent">US</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your way to Jedlik Motors at Anna University, Chennai - the heart of India's automotive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Map and Address Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-primary tron-glow-text">
                  INTERACTIVE MAP
                </h2>
                
                <div className="w-full h-96 tron-glass rounded-lg border border-primary/20 relative overflow-hidden">
                  {/* Animated Grid Background */}
                  <div className="absolute inset-0 tron-grid-bg animate-grid-flow opacity-30" />
                  
                  {/* Map Content */}
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <MapPin className="h-16 w-16 text-primary mx-auto mb-4 tron-glow animate-pulse-glow" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                      </div>
                      <h3 className="text-xl font-orbitron font-bold mb-2 text-primary">
                        JEDLIK MOTORS
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Anna University Campus
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Guindy, Chennai
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border border-accent/40 rotate-45"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border border-primary/40 rotate-12"></div>
                  <div className="absolute top-1/3 right-8 w-4 h-4 border border-accent/30"></div>
                </div>
                
                <Button
                  size="lg"
                  className="w-full mt-6 tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold group"
                >
                  <Navigation className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  GET DIRECTIONS
                </Button>
              </div>
            </div>

            {/* Address Information */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="tron-glass-strong p-8 rounded-lg border border-accent/30">
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-accent">
                  OUR LOCATION
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 tron-glow">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold mb-2">
                        FULL ADDRESS
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Anna incubator, Second Floor,<br />
                        Platinum Jubilee building,<br />
                        AC Tech Campus, Anna University,<br />
                        Guindy, Chennai, Tamil Nadu 600025
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-primary/20 pt-6">
                    <h3 className="text-lg font-orbitron font-bold mb-4 text-primary">
                      QUICK DETAILS
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="tron-glass p-4 rounded border border-primary/20">
                        <div className="text-sm text-muted-foreground">State</div>
                        <div className="font-semibold text-accent">Tamil Nadu</div>
                      </div>
                      <div className="tron-glass p-4 rounded border border-primary/20">
                        <div className="text-sm text-muted-foreground">PIN Code</div>
                        <div className="font-semibold text-accent">600025</div>
                      </div>
                      <div className="tron-glass p-4 rounded border border-primary/20">
                        <div className="text-sm text-muted-foreground">District</div>
                        <div className="font-semibold text-accent">Chennai</div>
                      </div>
                      <div className="tron-glass p-4 rounded border border-primary/20">
                        <div className="text-sm text-muted-foreground">Campus</div>
                        <div className="font-semibold text-accent">Anna University</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Quick Access */}
              <div className="tron-glass-strong p-6 rounded-lg border border-primary/30">
                <h3 className="text-xl font-orbitron font-bold mb-4 text-primary tron-glow-text">
                  QUICK CONTACT
                </h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+919790678445"
                    className="flex items-center space-x-3 p-3 tron-glass rounded border border-accent/20 hover:border-accent/40 hover:tron-glow transition-all group"
                  >
                    <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                      <span className="text-accent font-orbitron font-bold text-sm">📞</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-accent transition-colors">
                      +91 9790678445
                    </span>
                  </a>
                  
                  <a 
                    href="mailto:info@jedlik.in"
                    className="flex items-center space-x-3 p-3 tron-glass rounded border border-primary/20 hover:border-primary/40 hover:tron-glow transition-all group"
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                      <span className="text-primary font-orbitron font-bold text-sm">✉</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      info@jedlik.in
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            HOW TO <span className="text-accent">REACH US</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {landmarks.map((landmark, index) => (
              <div
                key={index}
                className="tron-glass-strong p-6 rounded-lg border border-primary/30 hover:border-primary/60 hover:tron-glow transition-all duration-300 text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 group-hover:bg-accent/20 group-hover:tron-glow transition-all">
                  <landmark.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:tron-glow-text transition-all">
                  {landmark.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-4">
                  {landmark.description}
                </p>
                <div className="text-sm text-accent font-semibold">
                  {landmark.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            NEARBY <span className="text-accent">LANDMARKS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="tron-glass p-6 rounded-lg border border-primary/30">
              <h3 className="text-lg font-orbitron font-bold mb-3 text-primary">
                EDUCATIONAL INSTITUTIONS
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Anna University Main Campus</li>
                <li>• AC Tech Campus</li>
                <li>• CEG Campus</li>
                <li>• SAP Campus</li>
              </ul>
            </div>
            
            <div className="tron-glass p-6 rounded-lg border border-accent/30">
              <h3 className="text-lg font-orbitron font-bold mb-3 text-accent">
                TRANSPORT HUBS
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Guindy Metro Station (1 km)</li>
                <li>• Guindy Railway Station (2 km)</li>
                <li>• Chennai Airport (8 km)</li>
                <li>• Kathipara Junction (3 km)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LocateUsPage