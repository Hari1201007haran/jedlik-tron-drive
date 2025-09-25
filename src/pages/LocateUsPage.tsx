import React from 'react'
import { MapPin, Navigation, Clock, Car, Phone, Mail, Building, Zap } from 'lucide-react'
import heroBackgroundImage from '@/assets/tron-hero-bg.jpg'
import { Button } from '@/components/ui/button'

const LocateUsPage: React.FC = () => {
  const landmarks = [
    {
      icon: Car,
      title: 'By Car',
      description: 'Take the Sardar Patel Road  and enter Anna University campus through the main gate.',
      time: '15 mins from Chennai Airport',
      color: 'primary'
    },
    {
      icon: Navigation,
      title: 'Public Transport',
      description: 'Take the Chennai Metro to Guindy Station, then auto-rickshaw to Anna University campus.',
      time: '5 mins from Guindy Metro',
      color: 'accent'
    },
    {
      icon: Clock,
      title: 'Visiting Hours',
      description: 'Best time to visit is between 10:00 AM - 5:00 PM on weekdays for business meetings.',
      time: 'Mon - Fri preferred',
      color: 'primary'
    }
  ]

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }))

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingElements.map((elem) => (
          <div
            key={elem.id}
            className="absolute rounded-full bg-primary/10 animate-float"
            style={{
              width: `${elem.size}px`,
              height: `${elem.size}px`,
              left: `${elem.x}%`,
              top: `${elem.y}%`,
              animationDelay: `${elem.delay}s`,
            }}
          />
        ))}
      </div>

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
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 tron-glow-text animate-fadeIn">
                  LOCATE <span className="text-accent animate-pulse">US</span>
                </h1>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent animate-spin" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-primary animate-pulse" />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              Navigate to the epicenter of automotive innovation at <span className="text-primary font-semibold">Anna University</span>, Chennai
            </p>
            
            {/* Status Indicators */}
            <div className="flex justify-center items-center gap-6 mt-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 px-4 py-2 tron-glass rounded-full border border-primary/30">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-orbitron">OPERATIONAL</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 tron-glass rounded-full border border-accent/30">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-orbitron">HIGH ACTIVITY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Address Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div className="tron-grid-bg opacity-15 animate-grid-flow" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Map Section */}
            <div className="order-2 lg:order-1 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                {/* Holographic Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                
                <div className="relative tron-glass-strong p-8 rounded-xl border border-primary/40 hover:border-primary/60 transition-all duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-orbitron font-bold text-primary tron-glow-text">
                      NAVIGATION HUB
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-orbitron text-muted-foreground">ACTIVE</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-96 tron-glass rounded-xl border border-primary/30 relative overflow-hidden group/map hover:border-accent/50 transition-all duration-500">
                    {/* Enhanced Grid Background */}
                    <div className="absolute inset-0 tron-grid-bg animate-grid-flow opacity-40 group-hover/map:opacity-60 transition-opacity" />
                    
                    {/* Floating Particles */}
                    <div className="absolute top-4 left-6 w-3 h-3 bg-primary/60 rounded-full animate-bounce"></div>
                    <div className="absolute top-12 right-8 w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-8 left-12 w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Central Location Display */}
                    <div className="relative z-20 h-full flex items-center justify-center">
                      <div className="text-center transform group-hover/map:scale-105 transition-transform duration-300">
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                          <MapPin className="relative h-20 w-20 text-primary mx-auto tron-glow animate-pulse-glow" />
                          <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full animate-ping"></div>
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/60 rounded-full animate-pulse"></div>
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold mb-3 text-primary tron-glow-text">
                          JEDLIK MOTORS
                        </h3>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground font-medium">
                            Anna University Campus
                          </p>
                          <p className="text-xs text-accent font-orbitron">
                            COORDINATES: 13.0067°N, 80.2206°E
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Decorative Elements */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-2 border-accent/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
                    <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-primary/40 rotate-12 animate-pulse"></div>
                    <div className="absolute top-1/3 right-12 w-6 h-6 border border-accent/40 animate-bounce"></div>
                    <div className="absolute bottom-1/3 left-8 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
                  </div>
                  
                  <Button
                    onClick={() => {
                      const address = "Anna incubator, Second Floor, Platinum Jubilee building, AC Tech Campus, Anna University, Guindy, Chennai, Tamil Nadu 600025";
                      const encodedAddress = encodeURIComponent(address);
                      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
                    }}
                    size="lg"
                    className="w-full mt-8 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent text-white font-orbitron font-bold group/btn border-0 tron-glow hover:tron-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <Navigation className="mr-3 h-6 w-6 transition-transform group-hover/btn:rotate-12" />
                    ENGAGE NAVIGATION SYSTEM
                    <div className="ml-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Address Information */}
            <div className="order-1 lg:order-2 space-y-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              {/* Location Details */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                
                <div className="relative tron-glass-strong p-8 rounded-xl border border-accent/40 hover:border-accent/60 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center tron-glow">
                      <Building className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-3xl font-orbitron font-bold text-accent tron-glow-text">
                      FACILITY COORDINATES
                    </h2>
                  </div>
                  
                  <div className="space-y-8">
                    {/* Main Address */}
                    <div className="relative">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/30 tron-glow">
                          <MapPin className="h-7 w-7 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-orbitron font-bold mb-3 text-accent">
                            PRIMARY LOCATION
                          </h3>
                          <div className="bg-gradient-to-r from-accent/10 to-transparent p-4 rounded-lg border border-accent/20">
                            <p className="text-muted-foreground leading-relaxed text-lg">
                              <span className="text-accent font-semibold">Anna incubator</span>, Second Floor<br />
                              <span className="text-primary">Platinum Jubilee Building</span><br />
                              AC Tech Campus, Anna University<br />
                              <span className="text-accent font-medium">Guindy, Chennai, Tamil Nadu 600025</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Info Grid */}
                    <div className="border-t border-primary/30 pt-8">
                      <h3 className="text-xl font-orbitron font-bold mb-6 text-primary tron-glow-text">
                        SYSTEM STATUS
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative group/card">
                          <div className="tron-glass p-5 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 group-hover/card:tron-glow">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                              <div className="text-sm text-muted-foreground font-orbitron">State</div>
                            </div>
                            <div className="font-bold text-accent text-lg">Tamil Nadu</div>
                          </div>
                        </div>
                        <div className="relative group/card">
                          <div className="tron-glass p-5 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 group-hover/card:tron-glow">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                              <div className="text-sm text-muted-foreground font-orbitron">ZIP Code</div>
                            </div>
                            <div className="font-bold text-accent text-lg">600025</div>
                          </div>
                        </div>
                        <div className="relative group/card">
                          <div className="tron-glass p-5 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 group-hover/card:tron-glow">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                              <div className="text-sm text-muted-foreground font-orbitron">District</div>
                            </div>
                            <div className="font-bold text-accent text-lg">Chennai</div>
                          </div>
                        </div>
                        <div className="relative group/card">
                          <div className="tron-glass p-5 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 group-hover/card:tron-glow">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                              <div className="text-sm text-muted-foreground font-orbitron">Campus</div>
                            </div>
                            <div className="font-bold text-accent text-lg">Anna Univ</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Contact Panel */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                
                <div className="relative tron-glass-strong p-8 rounded-xl border border-primary/40 hover:border-primary/60 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center tron-glow">
                      <Zap className="w-5 h-5 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-primary tron-glow-text">
                      DIRECT COMMUNICATION
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <a 
                      href="tel:+919790678445"
                      className="group/contact flex items-center space-x-4 p-4 tron-glass rounded-lg border border-accent/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/20 rounded-lg flex items-center justify-center group-hover/contact:from-accent/50 group-hover/contact:to-accent/40 transition-all">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground font-orbitron mb-1">VOICE CHANNEL</div>
                        <span className="text-accent font-bold text-lg group-hover/contact:tron-glow-text transition-all">
                          +91 9790678445
                        </span>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </a>
                    
                    <a 
                      href="mailto:info@jedlik.in"
                      className="group/contact flex items-center space-x-4 p-4 tron-glass rounded-lg border border-primary/30 hover:border-primary/60 hover:tron-glow transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-lg flex items-center justify-center group-hover/contact:from-primary/50 group-hover/contact:to-primary/40 transition-all">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground font-orbitron mb-1">DATA CHANNEL</div>
                        <span className="text-primary font-bold text-lg group-hover/contact:tron-glow-text transition-all">
                          info@jedlik.in
                        </span>
                      </div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Transport Routes Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="bg-gradient-to-r from-primary/8 via-accent/5 to-primary/8 opacity-80" />
          <div className="absolute top-1/4 left-8 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-8 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 tron-glow-text">
              TRANSPORT <span className="text-accent animate-pulse">MATRIX</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple pathways to reach us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {landmarks.map((landmark, index) => (
              <div
                key={index}
                className={`relative group animate-fadeIn`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Holographic Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                
                <div className="relative tron-glass-strong p-8 rounded-2xl border border-primary/40 hover:border-accent/60 hover:tron-glow transition-all duration-500 text-center transform group-hover:scale-105">
                  {/* Animated Icon Container */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 mx-auto group-hover:from-accent/40 group-hover:to-primary/40 group-hover:tron-glow transition-all duration-500">
                      <landmark.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/60 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary/60 rounded-full animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-2xl font-orbitron font-bold mb-4 group-hover:tron-glow-text transition-all">
                    {landmark.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-6 leading-relaxed">
                    {landmark.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 px-4 py-2 tron-glass rounded-full border border-accent/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-accent font-orbitron font-bold">
                      {landmark.time}
                    </span>
                  </div>
                  
                  {/* Route Indicator Lines */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1">
                    <div className="w-8 h-0.5 bg-primary/40 animate-pulse"></div>
                    <div className="w-6 h-0.5 bg-accent/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-4 h-0.5 bg-primary/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Proximity Network */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="tron-grid-bg opacity-20 animate-grid-flow" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/50" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 tron-glow-text">
              PROXIMITY <span className="text-accent animate-pulse">NETWORK</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic location within Chennai's academic and transport ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Educational Network */}
            <div className="relative group animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              
              <div className="relative tron-glass-strong p-8 rounded-2xl border border-primary/40 hover:border-primary/60 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center tron-glow">
                    <Building className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold text-primary tron-glow-text">
                      ACADEMIC CLUSTER
                    </h3>
                    <p className="text-sm text-muted-foreground font-orbitron">
                      EDUCATIONAL NETWORK
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    'Anna University Main Campus',
                    'AC Tech Campus',
                    'CEG Campus',
                    'SAP Campus'
                  ].map((institution, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 tron-glass rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group/item"
                    >
                      <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground group-hover/item:text-primary transition-colors">
                        {institution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Transport Network */}
            <div className="relative group animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              
              <div className="relative tron-glass-strong p-8 rounded-2xl border border-accent/40 hover:border-accent/60 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/30 to-accent/20 flex items-center justify-center tron-glow">
                    <Navigation className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold text-accent tron-glow-text">
                      TRANSIT NEXUS
                    </h3>
                    <p className="text-sm text-muted-foreground font-orbitron">
                      MOBILITY NETWORK
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Guindy Metro Station', distance: '2.7 km', status: 'active' },
                    { name: 'Guindy Railway Station', distance: '2.8 km', status: 'active' },
                    { name: 'Chennai Airport', distance: '8 km', status: 'operational' },
                    { name: 'Kathipara Junction', distance: '4 km', status: 'busy' }
                  ].map((hub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 tron-glass rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full animate-pulse ${
                          hub.status === 'active' ? 'bg-green-400' :
                          hub.status === 'operational' ? 'bg-blue-400' : 'bg-yellow-400'
                        }`}></div>
                        <span className="text-muted-foreground group-hover/item:text-accent transition-colors">
                          {hub.name}
                        </span>
                      </div>
                      <div className="text-xs font-orbitron text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {hub.distance}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LocateUsPage
