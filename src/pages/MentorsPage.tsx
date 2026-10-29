import { Sparkles, Briefcase, MapPin } from "lucide-react";

interface ExperienceEntry {
  title: string;
  company: string;
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
    gradient: "from-primary to-accent",
    description: "Guiding the mechanical engineering vision of Jedlik Motors.",
    currentPosition: "EE-Chassis Electronics & ADAS Expert, VINFAST",
    experience: [
      { title: "Sr. Manager", company: "Ex-Stellantis" },
      { title: "Performance Manager", company: "Ex-Renault" },
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
      { title: "Research Engineer", company: "Ex-Ford Motor Company" },
      { title: "Intellectual Property Professional", company: "Ex-General Electric" },
    ],
  },
  {
    name: "Shankar Subramanian",
    role: "Business Mentor - Go-to-Market & Investor Relations",
    initials: "SS",
    photo: "/Shankar.jpg",
    gradient: "from-accent to-primary",
    description: "Steering go-to-market strategy and investor relations for Jedlik Motors.",
    currentPosition: "Strategic Advisor & Independent Director – Governance, Growth & Business Advisory",
    experience: [
      { title: "VP & Chief Risk Officer | Head of Analytics", company: "Ex-Cholamandalam Investment and Finance" },
      { title: "Director & Global Analytics Leader", company: "Ex-Concentrix" },
    ],
  },
];

const MentorsPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">
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
                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/90 to-background/50 border-2 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 text-center">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-3xl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-3xl"></div>

                    <div className="relative mx-auto mb-6 w-28 h-28">
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

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">
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
