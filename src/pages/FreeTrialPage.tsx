import { Scan, Gift, CheckCircle2, Clock, Zap, Shield, Sparkles, ArrowRight, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeTrialPage = () => {
  // Mock credits data - replace with actual data from your backend
  const remainingCredits = 450;
  const totalCredits = 500;
  const creditsPercentage = (remainingCredits / totalCredits) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Credits Display - Top Right */}
      <div className="fixed top-24 right-4 z-50 animate-fade-in">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative bg-background/95 backdrop-blur-xl rounded-2xl p-4 border border-primary/30 group-hover:border-accent/50 transition-all duration-300 min-w-[200px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <Award className="w-6 h-6 text-accent" />
                <div className="absolute inset-0 bg-accent/20 blur-md rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground font-medium">Trial Credits</p>
                <p className="text-lg font-bold text-foreground">
                  {remainingCredits}
                  <span className="text-sm text-muted-foreground font-normal">/{totalCredits}</span>
                </p>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="relative h-2 bg-background/50 rounded-full overflow-hidden border border-primary/20">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${creditsPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-3 h-3 text-accent" />
              <p className="text-[10px] text-muted-foreground">
                {creditsPercentage.toFixed(0)}% remaining
              </p>
            </div>
          </div>
        </div>
      </div>

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
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/3 to-transparent"></div>
        
        {/* Refined animated orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-tron-glow/8 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
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

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent/15 via-accent/8 to-accent/15 border border-accent/25 mb-10 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-bold tracking-wide text-accent/90">Limited Time Exclusive Offer</span>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 relative leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent/80 bg-clip-text text-transparent animate-fade-in">
                Free Trial
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent/80 via-primary/80 to-primary bg-clip-text text-transparent animate-fade-in">
                Experience
              </span>
              {/* Refined glowing underline */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent blur-sm"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
              Step into the future of <span className="text-primary font-medium">urban mobility</span> with a 
              <span className="text-accent/90 font-medium"> complimentary month</span> of premium access
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative group">
              {/* Refined outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-[2rem] opacity-40 blur-2xl group-hover:opacity-60 transition-all duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-background/80 via-background/90 to-background/80 rounded-[2rem] p-12 md:p-16 border border-primary/20 overflow-hidden animate-fade-in backdrop-blur-2xl shadow-2xl">
                {/* Subtle corner accents */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-accent/30 rounded-tl-[2rem]"></div>
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent/30 rounded-tr-[2rem]"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-accent/30 rounded-bl-[2rem]"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-accent/30 rounded-br-[2rem]"></div>
                
                {/* Refined background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 mb-8 relative">
                    <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full"></div>
                    <Zap className="w-9 h-9 text-primary relative z-10 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-bold relative z-10 bg-gradient-to-r from-primary via-primary/90 to-accent/80 bg-clip-text text-transparent">
                      Instant Access
                    </h2>
                    <Sparkles className="w-9 h-9 text-accent/80 relative z-10 animate-pulse" style={{animationDelay: '0.5s'}} />
                  </div>
                  <p className="text-lg text-foreground/60 max-w-lg mx-auto leading-relaxed">
                    Click the button below to begin your premium journey
                  </p>
                </div>

                {/* Enhanced CTA Button */}
                <div className="flex justify-center mb-16">
                  <div className="relative group/btn">
                    {/* Refined outer glow */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl opacity-50 blur-2xl group-hover/btn:opacity-80 transition-all duration-700"></div>
                    
                    <a 
                      href="https://forms.zohopublic.in/raguramkarthikeyan/form/FreeTrialregistration/formperma/2bMMbZJGO4RLOYFPV4fUSG3wyByX9FcnfLsl8TuYYWs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        size="lg"
                        className="relative px-16 py-8 text-xl md:text-2xl font-bold rounded-2xl bg-gradient-to-r from-primary/90 via-accent/80 to-primary/90 hover:from-primary hover:via-accent/90 hover:to-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group-hover/btn:scale-105 border border-primary/30"
                      >
                        <Zap className="w-7 h-7 mr-3 animate-pulse" />
                        Start Free Trial
                        <ArrowRight className="w-7 h-7 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Refined Instructions */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { num: 1, icon: Zap, title: "Click Button", desc: "Press the button above to open the form", color: "primary" },
                    { num: 2, icon: Shield, title: "Secure Registration", desc: "Complete the quick registration form", color: "accent" },
                    { num: 3, icon: CheckCircle2, title: "Instant Access", desc: "Start your premium trial immediately", color: "primary" }
                  ].map((step, i) => (
                    <div key={i} className="relative group/step">
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl opacity-0 group-hover/step:opacity-100 blur-xl transition-all duration-500"></div>
                      <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-background/70 to-background/50 border border-primary/15 backdrop-blur-md hover:border-primary/30 transition-all duration-300 h-full">
                        <div className="relative mb-6 inline-block">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl blur-lg"></div>
                          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center border border-primary/20 group-hover/step:scale-110 group-hover/step:rotate-3 transition-all duration-300">
                            <step.icon className={`w-10 h-10 text-${step.color}`} />
                          </div>
                          <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-gradient-to-br from-accent/90 to-primary/90 flex items-center justify-center text-sm font-bold shadow-lg border border-primary/20">
                            {step.num}
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed">{step.desc}</p>
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
                description: "Scan and ride",
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
