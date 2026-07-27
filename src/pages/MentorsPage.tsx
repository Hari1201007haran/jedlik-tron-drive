import { Sparkles, Briefcase, MapPin } from "lucide-react";

interface ExperienceEntry {
  title: string;
  company: string;
  duration: string;
}

interface Mentor {
  name: string;
  role: string;
  initials: string;
  photo: string;
  gradient: string;
  description: string;
  currentPosition?: string;
  experience?: ExperienceEntry[];
}

const mentors: Mentor[] = [
  {
    name: "Swathi Thombarappu",
    role: "Mechanical Mentor",
    initials: "ST",
    photo: "/Swathi.jpg",
    gradient: "from-primary to-tron-glow",
    description: "Guiding the mechanical engineering vision of Jedlik Motors.",
    currentPosition: "EE-Chassis Electronics & ADAS Expert, VINFAST",
    experience: [
      { title: "EE-Chassis Electronics, ADAS Expert", company: "VINFAST", duration: "Sep 2023 – Jan 2026" },
      { title: "Sr. Manager", company: "Stellantis", duration: "Jun 2022 – Oct 2023" },
      { title: "Performance Manager", company: "Renault", duration: "May 2018 – May 2022" },
      { title: "Chassis ABS/VDC/TPMS Deputy Manager", company: "Nissan", duration: "Mar 2013 – May 2018" },
      { title: "Deputy Manager – Chassis, Brakes & Steering (EV PF)", company: "Mahindra Reva Electric Vehicles", duration: "Aug 2011 – Mar 2013" },
      { title: "Assistant Manager", company: "Mahindra & Mahindra Reva", duration: "Aug 2007 – Feb 2011" },
    ],
  },
  {
    name: "Srikanthan Sridharan",
    role: "Electrical Mentor",
    initials: "SS",
    photo: "/Srikanthan.jpg",
    gradient: "from-accent to-primary",
    description: "Shaping the electrical systems and power architecture of e-POD.",
    currentPosition: "Assistant Professor, Dept. of Engineering Design, IIT Madras",
    experience: [
      { title: "Assistant Professor", company: "IIT Madras – Dept. of Engineering Design", duration: "Jan 2020 – Present" },
      { title: "Research Engineer", company: "Ford Motor Company", duration: "2015 – 2020" },
      { title: "Intellectual Property Professional", company: "General Electric", duration: "2011 – 2015" },
      { title: "Research Engineer", company: "Siemens", duration: "Early career" },
    ],
  },
  {
    name: "Shankar Subramanian",
    role: "Business Mentor - Go-to-Market & Investor Relations",
    initials: "SS",
    photo: "/Shankar.jpg",
    gradient: "from-tron-glow to-primary",
    description: "Steering go-to-market strategy and investor relations for Jedlik Motors.",
    currentPosition: "Strategic Advisor & Independent Director – Governance, Growth & Business Advisory",
    experience: [
      { title: "Strategic Advisor & Independent Director", company: "Governance, Growth & Business Advisory", duration: "Oct 2025 – Present" },
      { title: "Head – Data Science & Analytics", company: "Veritas Finance Limited", duration: "Dec 2024 – Sep 2025" },
      { title: "Consultant – Risk & Credit Advisory", company: "Davinta", duration: "Apr 2024 – Nov 2024" },
      { title: "Head of Risk Management", company: "Cholamandalam MS General Insurance", duration: "Apr 2023 – Mar 2024" },
      { title: "VP & Chief Risk Officer | Head of Analytics", company: "Cholamandalam Investment and Finance", duration: "Jul 2018 – Mar 2023" },
      { title: "Director & Global Analytics Leader", company: "Concentrix", duration: "Feb 2014 – Jun 2018" },
      { title: "VP & Associate Director", company: "IBM Global Process Service", duration: "Apr 2010 – Jan 2014" },
      { title: "Chief Risk Officer / VP", company: "Cholamandalam DBS Finance (CDFL)", duration: "Jun 2007 – Apr 2010" },
      { title: "National Portfolio Manager", company: "GE Countrywide Finance / GE Money", duration: "Aug 2005 – Jun 2007" },
      { title: "Various roles – Retail, Corporate & Transaction Banking", company: "Standard Chartered Grindlays / ANZ Grindlays Bank", duration: "Feb 1995 – Jul 2003" },
    ],
  },
];

const MentorsPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "grid-flow 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tron-grid/30 via-accent/5 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30 mb-8 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent">Guiding Our Journey</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-accent to-tron-glow bg-clip-text text-transparent drop-shadow-2xl">
              Mentors
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
            The experienced minds who <span className="text-primary font-semibold">guide</span> and{" "}
            <span className="text-accent font-semibold">inspire</span> our team every step of the way.
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in w-full sm:w-80"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-tron-glow rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>

                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/90 to-background/50 border-2 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 text-center">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-3xl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-3xl"></div>

                    <div className="relative mx-auto mb-6 w-28 h-28">
                      <div className={`absolute inset-0 bg-gradient-to-br ${mentor.gradient} rounded-full blur-xl opacity-50 animate-pulse`}></div>
                      {mentor.photo ? (
                        <img
                          src={mentor.photo}
                          alt={mentor.name}
                          className="relative w-28 h-28 rounded-full object-cover border-2 border-primary/30 group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${mentor.gradient} flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-transform duration-500`}>
                          <span className="text-3xl font-bold text-white">{mentor.initials}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                      {mentor.name}
                    </h3>
                    <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${mentor.gradient} bg-clip-text text-transparent`}>
                      {mentor.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {mentor.description}
                    </p>

                    {mentor.currentPosition && (
                      <div className="mb-4 p-3 rounded-xl bg-primary/5 border border-primary/15 text-left">
                        <div className="flex items-center gap-1.5 mb-1">
                          <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Current Position</span>
                        </div>
                        <p className="text-xs text-foreground/80 font-medium leading-snug">{mentor.currentPosition}</p>
                      </div>
                    )}

                    {mentor.experience && mentor.experience.length > 0 && (
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 mb-2">
                          <Briefcase className="w-3 h-3 text-accent flex-shrink-0" />
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Experience</span>
                        </div>
                        <div className="space-y-2">
                          {mentor.experience.map((exp, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${mentor.gradient} flex-shrink-0`}></div>
                              <div>
                                <p className="text-xs font-semibold text-foreground/90 leading-tight">{exp.title}</p>
                                <p className="text-xs text-muted-foreground">{exp.company} · {exp.duration}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-tron-glow bg-clip-text text-transparent">
            Wisdom Meets Innovation.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mentors bring decades of experience that shape the foundation of Jedlik Motors' engineering excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MentorsPage;
