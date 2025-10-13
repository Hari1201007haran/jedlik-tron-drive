import React from 'react';
import { Sparkles, Zap, Shield, Gauge } from 'lucide-react';
import epodImage from '@/assets/epod-vehicle.jpg';

const VehicleReveal: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Now Revealed</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
            JEDLIK E-POD
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The future of sustainable urban mobility has arrived
          </p>
        </div>

        {/* Main Vehicle Image */}
        <div className="relative max-w-6xl mx-auto mb-16 animate-scale-in">
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/20 group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary" />
            
            <img 
              src={epodImage} 
              alt="Jedlik E-Pod Vehicle" 
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Zap, label: 'Electric Power', value: '100%', color: 'from-primary/20 to-primary/5' },
                { icon: Shield, label: 'Safety First', value: 'Grade A', color: 'from-accent/20 to-accent/5' },
                { icon: Gauge, label: 'Top Speed', value: '60 km/h', color: 'from-primary/20 to-primary/5' },
                { icon: Sparkles, label: 'Zero Emission', value: 'Green', color: 'from-accent/20 to-accent/5' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br ${stat.color} backdrop-blur-xl border border-primary/20 rounded-xl p-4 text-center group hover:border-primary/40 transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-background/80 rounded-xl" />
                  <div className="relative">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: 'Futuristic Design',
              description: 'Aerodynamic body with transparent cabin and cutting-edge aesthetics',
              gradient: 'from-primary/10 to-transparent'
            },
            {
              title: 'Advanced Technology',
              description: 'State-of-the-art electric drivetrain with smart connectivity',
              gradient: 'from-accent/10 to-transparent'
            },
            {
              title: 'Sustainable Future',
              description: 'Zero emissions, maximum efficiency for urban transportation',
              gradient: 'from-primary/10 to-transparent'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-xl bg-gradient-to-br ${feature.gradient} border border-primary/20 hover:border-primary/40 transition-all duration-300 group animate-fade-in`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-xl font-bold mb-2 text-foreground relative">{feature.title}</h3>
              <p className="text-muted-foreground relative">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/30">
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-primary">Vehicle Successfully Revealed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleReveal;
