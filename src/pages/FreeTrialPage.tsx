import { Scan, Gift, CheckCircle2, Clock } from "lucide-react";
import qrCode from "@/assets/free-trial-qr.png";

const FreeTrialPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tron-grid/20 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Gift className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Limited Time Offer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Free Trial Month
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of electric mobility with a full month of free trial
            </p>
          </div>

          {/* QR Code Card */}
          <div className="max-w-2xl mx-auto">
            <div className="tron-glass rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden animate-fade-in">
              {/* Background glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Scan className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold">Scan to Book</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Use your phone camera to scan the QR code below
                  </p>
                </div>

                {/* QR Code */}
                <div className="flex justify-center mb-8">
                  <div className="bg-white p-6 rounded-2xl shadow-2xl">
                    <img 
                      src={qrCode} 
                      alt="Free Trial QR Code" 
                      className="w-64 h-64 md:w-80 md:h-80"
                    />
                  </div>
                </div>

                {/* Instructions */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 rounded-xl bg-background/50 border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Scan QR Code</h3>
                    <p className="text-sm text-muted-foreground">Open your camera app and scan the code</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-background/50 border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-accent">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Fill Details</h3>
                    <p className="text-sm text-muted-foreground">Complete the registration form</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-background/50 border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-tron-glow/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-tron-glow">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Start Riding</h3>
                    <p className="text-sm text-muted-foreground">Enjoy your free trial month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get full access to all features during your free trial month
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "30 Days Free",
                description: "Full month of unlimited riding"
              },
              {
                icon: CheckCircle2,
                title: "All Features",
                description: "Access to complete ecosystem"
              },
              {
                icon: Gift,
                title: "No Payment",
                description: "Completely free, no card required"
              },
              {
                icon: Scan,
                title: "Easy Booking",
                description: "Simple QR code registration"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl tron-glass border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Scan the QR code above and start your free trial journey today
          </p>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Scan className="w-5 h-5 animate-pulse" />
            <span className="font-medium">Scan now to get started</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTrialPage;
