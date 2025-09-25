
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LaunchCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to October 9, 2025 at 12:00 AM (since 2024 has passed)
    const targetDate = new Date('2025-10-09T00:00:00').getTime();
    
    console.log('Target date:', new Date(targetDate));
    console.log('Current date:', new Date());

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      console.log('Time difference (ms):', difference);

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        console.log('Calculated time:', { days, hours, minutes, seconds });
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        console.log('Event has passed!');
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately on mount
    calculateTimeLeft();

    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-background via-background/95 to-background/90 py-16 md:py-20 border-b border-border/20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 tron-grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent via-transparent to-accent/10"></div>
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent rounded-full animate-ping"></div>
            <span className="text-accent font-orbitron text-sm uppercase tracking-widest">Live Event</span>
            <div className="w-3 h-3 bg-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
            <span className="text-primary tron-glow-text">REVEAL</span>
            <br />
            <span className="text-accent tron-glow-text">COUNTDOWN</span>
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 bg-primary rounded-full mx-4 animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            Our exclusive launch event at Codissia Trade Fair Complex, Coimbatore
          </p>
        </div>
        
        {/* Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 max-w-4xl mx-auto">
          {[
            { label: 'DAYS', value: timeLeft.days, color: 'from-primary via-primary/80 to-primary/60', accent: 'primary' },
            { label: 'HOURS', value: timeLeft.hours, color: 'from-accent via-accent/80 to-accent/60', accent: 'accent' },
            { label: 'MINUTES', value: timeLeft.minutes, color: 'from-primary via-primary/80 to-primary/60', accent: 'primary' },
            { label: 'SECONDS', value: timeLeft.seconds, color: 'from-accent via-accent/80 to-accent/60', accent: 'accent' },
          ].map((item, index) => (
            <Card key={item.label} className="relative group bg-background/40 backdrop-blur-sm border border-border/40 hover:border-accent/60 transition-all duration-500 hover:scale-105 hover:bg-background/60">
              {/* Card background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent === 'primary' ? 'from-primary/5' : 'from-accent/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Card content */}
              <div className="p-4 md:p-6 lg:p-8 relative z-10">
                {/* Number display */}
                <div className={`text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-2 md:mb-3 leading-none`}>
                  {item.value.toString().padStart(2, '0')}
                </div>
                
                {/* Label */}
                <div className="text-xs md:text-sm font-medium text-muted-foreground tracking-wider uppercase">
                  {item.label}
                </div>
                
                {/* Animated accent line */}
                <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${item.color} mt-3 mx-auto`}></div>
              </div>
              
              {/* Corner accents */}
              <div className={`absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 ${item.accent === 'primary' ? 'border-primary/60' : 'border-accent/60'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 ${item.accent === 'primary' ? 'border-primary/60' : 'border-accent/60'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 ${item.accent === 'primary' ? 'border-primary/60' : 'border-accent/60'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 ${item.accent === 'primary' ? 'border-primary/60' : 'border-accent/60'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>
        
        {/* Event Details */}
        <div className="bg-background/20 backdrop-blur-sm border border-border/30 rounded-lg p-6 md:p-8 max-w-2xl mx-auto tron-glass">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent"></div>
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">
              October 9, 2025
            </h3>
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary"></div>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Join us for an exclusive unveiling of revolutionary urban mobility solutions that will transform how we navigate tomorrow's cities.
          </p>
          
          {/* Status indicator */}
          <div className="flex justify-center items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
              <span className="text-sm text-accent font-medium uppercase tracking-wider">Event Active</span>
            </div>
            <div className="w-px h-4 bg-border/50"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Live Updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCountdown;
