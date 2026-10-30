import { useState } from "react";
import { Calendar, Bell, Users, Zap, ArrowRight, Play } from "lucide-react";

const FREE_TRIAL_VIDEO_ID = "yf2NwVTYO6w";
const FREE_TRIAL_VIDEO_THUMB = "/pre-booking-video-thumb.jpg";

const FreeTrialPage = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent animate-fade-in">
                Pre-Booking
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent animate-fade-in">
                Now Open
              </span>
            </h1>
            
          </div>

        </div>
      </section>

      {/* ── YouTube Video Section ── */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">
              Watch How It Works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30">
                <div className="aspect-video">
                  {videoPlaying ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${FREE_TRIAL_VIDEO_ID}?autoplay=1&rel=0`}
                      title="Jedlik Motors Pre MVP Test Runs"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setVideoPlaying(true)}
                      className="w-full h-full relative group/play"
                      aria-label="Play the Jedlik Motors pre-MVP test run video"
                    >
                      <img
                        src={FREE_TRIAL_VIDEO_THUMB}
                        alt="Jedlik Motors e-POD pre-MVP test run"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute inset-0 bg-background/40 group-hover/play:bg-background/20 transition-colors"></span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/90 group-hover/play:scale-110 transition-transform duration-300 shadow-[0_0_40px_hsl(var(--primary)/0.6)]">
                          <Play className="w-8 h-8 text-primary-foreground translate-x-0.5" fill="currentColor" />
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Everything You Need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Reserve Your Place",
                description: "Register your interest and hold a place in the first allocation",
                gradient: "from-primary/20 to-accent/20"
              },
              {
                icon: Bell,
                title: "Stay Updated",
                description: "Get milestone updates as the e-POD moves toward delivery",
                gradient: "from-accent/20 to-accent/20"
              },
              {
                icon: Users,
                title: "Talk to the Team",
                description: "Share your use case and speak directly with the team",
                gradient: "from-accent/20 to-primary/20"
              },
              {
                icon: Zap,
                title: "No Payment Today",
                description: "The form records your interest — nothing is charged here",
                gradient: "from-accent/20 to-primary/20"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/90 to-background/50 border-2 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center border border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <benefit.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main CTA */}
            <div className="relative inline-block mb-8">
              <h2 className="relative text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">
                Reserve Your e-POD
              </h2>
            </div>
            
            {/* Animated prompt */}
            <a 
              href="https://forms.gle/TxD4V4fQ8SGfxyRCA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Zap className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pre-Book Now
                </span>
                <div className="relative">
                  <ArrowRight className="w-8 h-8 text-accent animate-pulse group-hover:translate-x-2 transition-transform" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Fill in the form — about a minute</p>
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTrialPage;