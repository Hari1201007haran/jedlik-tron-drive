import React from 'react';
import { Sparkles } from 'lucide-react';
import epodImage from '@/assets/epod-vehicle.jpg';

const VehicleReveal: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
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
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 group">
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
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
