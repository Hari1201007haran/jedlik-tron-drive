
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
    <div className="w-full bg-gradient-to-br from-background via-background/98 to-background/95 py-12 border-b border-border/30 tron-grid-bg relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold text-accent mb-4 tron-glow-text animate-pulse">
            LAUNCH COUNTDOWN
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Time Left Until Project Launch Event
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-8">
          {[
            { label: 'DAYS', value: timeLeft.days, color: 'from-primary to-primary/70' },
            { label: 'HOURS', value: timeLeft.hours, color: 'from-accent to-accent/70' },
            { label: 'MINUTES', value: timeLeft.minutes, color: 'from-primary to-primary/70' },
            { label: 'SECONDS', value: timeLeft.seconds, color: 'from-accent to-accent/70' },
          ].map((item, index) => (
            <Card key={item.label} className="tron-glass-strong border-primary/40 p-6 md:p-8 min-w-[100px] md:min-w-[140px] lg:min-w-[160px] relative group hover:scale-105 transition-all duration-300 hover:border-accent/60">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" 
                   style={{background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`}}></div>
              
              {/* Number display */}
              <div className={`text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent animate-pulse relative z-10`}>
                {item.value.toString().padStart(2, '0')}
              </div>
              
              {/* Label */}
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium mt-3 tracking-wider uppercase relative z-10">
                {item.label}
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)', 
                           maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                           maskComposite: 'xor'}}></div>
            </Card>
          ))}
        </div>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-orbitron font-semibold">
            October 9, 2025
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't miss the future of urban mobility! Join us for the most anticipated launch event of the year.
          </p>
          
          {/* Pulse indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Live Countdown</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping animation-delay-75"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCountdown;
