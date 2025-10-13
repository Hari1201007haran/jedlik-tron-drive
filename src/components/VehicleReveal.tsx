import React from 'react';
import { Sparkles } from 'lucide-react';
import epodImage from '@/assets/epod-vehicle.jpg';

const VehicleReveal: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full border-2 border-primary/50 mb-10 shadow-[0_0_30px_rgba(var(--primary),0.3)] backdrop-blur-md">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Now Revealed</span>
          </div>
          
          <div className="relative inline-block mb-10">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-[100px] opacity-50" />
            
            <h1 className="relative text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] drop-shadow-[0_0_30px_rgba(var(--primary),0.5)]">
              JEDLIK E-POD
            </h1>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl opacity-30" />
            <p className="relative text-xl md:text-3xl text-foreground/90 font-light tracking-wide leading-relaxed px-8 py-6 bg-background/30 backdrop-blur-sm rounded-2xl border border-primary/20">
              The future of sustainable urban mobility has arrived
            </p>
          </div>
        </div>

        {/* Main Vehicle Image */}
        <div className="relative max-w-7xl mx-auto mb-24 animate-scale-in">
          {/* Outer Glow Container */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl scale-105" />
          
          <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-[0_0_80px_rgba(0,0,0,0.5)] group">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] opacity-30" />
            
            {/* Inner Border */}
            <div className="absolute inset-[2px] bg-background/20 backdrop-blur-xl rounded-3xl" />
            
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Corner Accents - Enhanced */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary rounded-tl-3xl shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary rounded-tr-3xl shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary rounded-bl-3xl shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary rounded-br-3xl shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
            
            {/* Inner Corner Lines */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent/50" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent/50" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-accent/50" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent/50" />
            
            <div className="relative">
              <img 
                src={epodImage} 
                alt="Jedlik E-Pod Vehicle" 
                className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-1000 relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Futuristic Design',
              description: 'Aerodynamic body with transparent cabin and cutting-edge aesthetics',
              gradient: 'from-primary/15 via-primary/5 to-transparent'
            },
            {
              title: 'Advanced Technology',
              description: 'State-of-the-art electric drivetrain with smart connectivity',
              gradient: 'from-accent/15 via-accent/5 to-transparent'
            },
            {
              title: 'Sustainable Future',
              description: 'Zero emissions, maximum efficiency for urban transportation',
              gradient: 'from-primary/15 via-primary/5 to-transparent'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border-2 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] transition-all duration-500 group animate-fade-in backdrop-blur-sm`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 rounded-2xl transition-all duration-500" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
              
              {/* Background Orb */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              
              <h3 className="text-2xl font-bold mb-3 text-foreground relative group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-muted-foreground/90 relative leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full border-2 border-primary/40 shadow-lg shadow-primary/20 backdrop-blur-sm">
            <div className="relative">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
              <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-base font-semibold text-primary uppercase tracking-wider">Vehicle Successfully Revealed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleReveal;
