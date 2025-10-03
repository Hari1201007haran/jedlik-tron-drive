import { Scan, Gift, CheckCircle2, Clock, Zap, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeTrialPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-flow 20s linear infinite'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tron-grid/30 via-accent/5 to-transparent"></div>
        
        {/* Multiple animated orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tron-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
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

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30 mb-8 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-accent">Limited Time Exclusive Offer</span>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-primary via-accent to-tron-glow bg-clip-text text-transparent animate-fade-in drop-shadow-2xl">
                Free Trial
              </span>
              <br />
              <span className="bg-gradient-to-r from-tron-glow via-accent to-primary bg-clip-text text-transparent animate-fade-in">
                Experience
              </span>
              {/* Glowing underline */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent to-transparent blur-sm"></div>
            </h1>
            
            <p className="text-xl md:text-3xl text-foreground/80 max-w-4xl mx-auto font-light leading-relaxed">
              Step into the future of <span className="text-primary font-semibold">urban mobility</span> with a 
              <span className="text-accent font-semibold"> complimentary month</span> of premium access
            </p>
          </div>

          {/* QR Code Card */}
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-tron-glow rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              
              <div className="relative tron-glass rounded-3xl p-10 md:p-14 border-2 border-primary/30 overflow-hidden animate-fade-in backdrop-blur-xl">
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/50 rounded-tl-3xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/50 rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/50 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/50 rounded-br-3xl"></div>
                
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tron-glow/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                    <Scan className="w-8 h-8 text-primary relative z-10 animate-pulse" />
                    <h2 className="text-3xl md:text-4xl font-bold relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Instant Access
                    </h2>
                    <Zap className="w-8 h-8 text-accent relative z-10 animate-pulse" style={{animationDelay: '0.5s'}} />
                  </div>
                  <p className="text-lg text-foreground/70 max-w-md mx-auto">
                    Click the button below to begin your premium journey
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mb-12">
                  <div className="relative group">
                    {/* Outer glow ring */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-tron-glow rounded-3xl opacity-30 blur-xl group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
                    
                    <a 
                      href="https://forms.zohopublic.in/raguramkarthikeyan/form/FreeTrialregistration/formperma/2bMMbZJGO4RLOYFPV4fUSG3wyByX9FcnfLsl8TuYYWs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        size="lg"
                        className="relative px-12 py-8 text-xl md:text-2xl font-bold rounded-2xl bg-gradient-to-r from-primary via-accent to-tron-glow hover:shadow-2xl hover:shadow-accent/50 transition-all duration-500 group-hover:scale-110 border-2 border-accent/30"
                      >
                        <Zap className="w-6 h-6 mr-3 animate-pulse" />
                        Start Free Trial
                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Instructions */}
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { num: 1, icon: Zap, title: "Click Button", desc: "Press the button above to open the form", color: "primary" },
                    { num: 2, icon: Shield, title: "Secure Registration", desc: "Complete the quick registration form", color: "accent" },
                    { num: 3, icon: CheckCircle2, title: "Instant Access", desc: "Start your premium trial immediately", color: "tron-glow" }
                  ].map((step, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500"></div>
                      <div className="relative text-center p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                        <div className="relative mb-4 inline-block">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                            <step.icon className={`w-8 h-8 text-${step.color}`} />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xs font-bold shadow-lg">
                            {step.num}
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-sm font-semibold text-accent">Premium Benefits</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unlock the complete suite of premium features with zero commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Clock,
                title: "30 Full Days",
                description: "Complete month of unlimited premium access",
                gradient: "from-primary/20 to-accent/20"
              },
              {
                icon: CheckCircle2,
                title: "All Features",
                description: "Every premium capability unlocked",
                gradient: "from-accent/20 to-tron-glow/20"
              },
              {
                icon: Gift,
                title: "Zero Cost",
                description: "No payment info needed",
                gradient: "from-tron-glow/20 to-primary/20"
              },
              {
                icon: Scan,
                title: "Instant Start",
                description: "Register and ride",
                gradient: "from-accent/20 to-primary/20"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-tron-glow rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/90 to-background/50 border-2 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-xl opacity-50`}></div>
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
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-accent/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main CTA */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-tron-glow blur-2xl opacity-50 animate-pulse"></div>
              <h2 className="relative text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-tron-glow bg-clip-text text-transparent">
                Start Your Journey
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands experiencing the future of urban mobility. 
              <span className="text-accent font-semibold"> Your premium trial</span> awaits.
            </p>
            
            {/* Animated prompt */}
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/30 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Zap className="w-8 h-8 text-primary animate-pulse" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Click to Register
                </span>
                <div className="relative">
                  <ArrowRight className="w-8 h-8 text-accent animate-pulse" style={{animationDelay: '0.5s'}} />
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Click the button above to get started</p>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>No payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTrialPage;
