import React from 'react'
import { Newspaper, Linkedin, ExternalLink, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MediaItem {
  title: string
  source: string
  date: string
  description: string
  url: string
  icon: React.ElementType
}

const mediaItems: MediaItem[] = [
  {
    title: "இருசக்கர வாகனத்தின் வேகம் + காரின் பாதுகாப்பு: 'ஜெட்லிக் மோட்டார்ஸ்'-ன் புரட்சிகரமான e-POD!",
    source: 'Startup News Tamil',
    date: '23 January 2026',
    description:
      'A feature covering how Jedlik Motors is building the e-POD to bridge the gap between unsafe two-wheelers and space-consuming cars on Indian city roads, backed by Steer-by-Wire technology and a car-grade safety cabin.',
    url: 'https://startupnewstamil.com/news/jedlik-motors-electric-vehicle/',
    icon: Newspaper,
  },
  {
    title: 'Jedlik Motors Featured on LinkedIn',
    source: 'LinkedIn',
    date: '',
    description: 'Jedlik Motors and the e-POD were featured in a LinkedIn post. View the full post for details.',
    url: 'https://lnkd.in/gtw7zF2W',
    icon: Linkedin,
  },
]

const MediaCoveragePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
            <span className="text-sm font-medium text-accent">In The News</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 tron-glow-text animate-fade-in">
            MEDIA COVERAGE
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            See what the press and community are saying about Jedlik Motors and the e-POD
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </section>

      {/* Media Items */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {mediaItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-tron-glow rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background/90 to-background/50 border-2 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center tron-glow">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-sm font-orbitron font-bold text-accent">
                          {item.source}
                        </span>
                        {item.date && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl md:text-2xl font-orbitron font-bold mb-3 tron-glow-text">
                        {item.title}
                      </h2>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <Button
                        onClick={() => window.open(item.url, '_blank')}
                        variant="outline"
                        className="tron-glass border-primary hover:bg-primary hover:text-primary-foreground font-orbitron font-bold group/btn"
                      >
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default MediaCoveragePage
