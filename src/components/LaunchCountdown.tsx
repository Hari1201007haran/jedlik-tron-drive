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
    <div className="w-full bg-gradient-to-r from-background via-background/95 to-background py-8 border-b border-border/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-accent mb-6">
          Time Left Until Project Launch Event
        </h2>
        
        <div className="flex justify-center items-center gap-4 md:gap-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <Card key={item.label} className="tron-glass border-accent/30 p-4 md:p-6 min-w-[80px] md:min-w-[120px]">
              <div className="text-3xl md:text-5xl font-orbitron font-bold text-accent animate-pulse">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium mt-2">
                {item.label}
              </div>
            </Card>
          ))}
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mt-6 font-medium">
          October 9, 2025 - Don't miss the future of urban mobility!
        </p>
      </div>
    </div>
  );
};

export default LaunchCountdown;