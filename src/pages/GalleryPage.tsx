import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Grid3x3, Package, Users, Calendar } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Import gallery images
import eventBoothCrowd from '@/assets/gallery-event-booth-crowd.jpg'
import epodDisplay from '@/assets/gallery-epod-display.jpg'
import workshopTeam from '@/assets/gallery-workshop-team.jpg'
import epodOutdoor from '@/assets/gallery-epod-outdoor.jpg'
import boothPresentation from '@/assets/gallery-booth-presentation.jpg'
import vehicleChassis from '@/assets/gallery-vehicle-chassis.jpg'
import teamDiscussion from '@/assets/gallery-team-discussion.jpg'
import eventVehicle from '@/assets/gallery-event-vehicle.jpg'
import teamPhoto from '@/assets/gallery-team-photo.jpg'
import eventDuo from '@/assets/gallery-event-duo.jpg'
import epodPrototype from '@/assets/gallery-epod-prototype.jpg'
import chassisWorkshop from '@/assets/gallery-chassis-workshop.jpg'
import epodSideView from '@/assets/gallery-epod-side-view.jpg'
import epodFullView from '@/assets/gallery-epod-full-view.jpg'
import teamBooth from '@/assets/gallery-team-booth.jpg'

interface GalleryImage {
  src: string
  title: string
  category: string
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const galleryImages: GalleryImage[] = [
    { src: eventBoothCrowd, title: 'Global Startup Summit Exhibition', category: 'Events' },
    { src: epodDisplay, title: 'E-POD Display at Summit', category: 'Events' },
    { src: epodOutdoor, title: 'E-POD Outdoor Testing', category: 'Vehicle' },
    { src: teamPhoto, title: 'Team at Exhibition Booth', category: 'Team' },
    { src: vehicleChassis, title: 'E-POD Chassis Development', category: 'Manufacturing' },
    { src: workshopTeam, title: 'Workshop Development Session', category: 'Manufacturing' },
    { src: boothPresentation, title: 'Product Presentation', category: 'Events' },
    { src: teamDiscussion, title: 'Team Discussion at Event', category: 'Team' },
    { src: eventVehicle, title: 'E-POD at Global Summit', category: 'Events' },
    { src: eventDuo, title: 'Team Members at Exhibition', category: 'Team' },
    { src: epodPrototype, title: 'E-POD Prototype Development', category: 'Vehicle' },
    { src: chassisWorkshop, title: 'Chassis Assembly in Workshop', category: 'Manufacturing' },
    { src: epodSideView, title: 'E-POD Side Profile', category: 'Vehicle' },
    { src: epodFullView, title: 'E-POD Complete Vehicle', category: 'Vehicle' },
    { src: teamBooth, title: 'Team at Innovation Summit', category: 'Team' },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const filteredImages = selectedCategory === 'All' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory)
    
    const currentFilteredIndex = filteredImages.findIndex((_, idx) => 
      galleryImages.indexOf(filteredImages[idx]) === selectedImage
    )
    
    if (direction === 'prev') {
      const newIndex = currentFilteredIndex === 0 ? filteredImages.length - 1 : currentFilteredIndex - 1
      setSelectedImage(galleryImages.indexOf(filteredImages[newIndex]))
    } else {
      const newIndex = currentFilteredIndex === filteredImages.length - 1 ? 0 : currentFilteredIndex + 1
      setSelectedImage(galleryImages.indexOf(filteredImages[newIndex]))
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      
      if (e.key === 'ArrowLeft') {
        navigateImage('prev')
      } else if (e.key === 'ArrowRight') {
        navigateImage('next')
      } else if (e.key === 'Escape') {
        closeLightbox()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const categories = ['All', 'Events', 'Vehicle', 'Team', 'Manufacturing']
  const categoryIcons = {
    All: Grid3x3,
    Events: Calendar,
    Vehicle: Package,
    Team: Users,
    Manufacturing: Package,
  }

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
            <span className="text-sm font-medium text-accent">Our Journey</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 tron-glow-text animate-fade-in">
            GALLERY
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore our journey from concept to reality, showcasing the innovation behind Jedlik E-POD
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              const isActive = selectedCategory === category
              return (
                <Button
                  key={category}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`gap-2 transition-all duration-300 ${
                    isActive 
                      ? 'tron-glow shadow-lg scale-105' 
                      : 'hover:border-primary/60 hover:scale-105'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category === 'All' 
                      ? galleryImages.length 
                      : galleryImages.filter(img => img.category === category).length}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => {
              const originalIndex = galleryImages.indexOf(image)
              return (
              <div
                key={originalIndex}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-primary/20 hover:border-primary/60 transition-all duration-500 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(originalIndex)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <Badge className="mb-2 bg-primary/20 border-primary/40 hover:bg-primary/30">
                      {image.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground tron-glow-text">
                      {image.title}
                    </h3>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-lg transition-all duration-500 tron-glow opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] md:max-w-7xl w-full h-[95vh] md:h-[90vh] p-0 bg-background/98 backdrop-blur-md border-primary/40 overflow-hidden tron-glass">
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 md:top-4 md:right-4 z-50 tron-glass hover:tron-glow border border-primary/40 hover:border-primary/60 transition-all duration-300"
                onClick={closeLightbox}
                title="Close (Esc)"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </Button>

              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 tron-glass hover:tron-glow border border-primary/40 hover:border-primary/60 hover:scale-110 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                title="Previous (←)"
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </Button>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 tron-glass hover:tron-glow border border-primary/40 hover:border-primary/60 hover:scale-110 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                title="Next (→)"
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </Button>

              {/* Image Container */}
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="relative flex-1 w-full flex items-center justify-center mb-4">
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].title}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl animate-scale-in"
                  />
                  {/* Image frame corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/60"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/60"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/60"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/60"></div>
                </div>
                
                {/* Image Info */}
                <div className="text-center pb-2 flex-shrink-0 space-y-2">
                  <Badge className="bg-primary/20 border-primary/40 hover:bg-primary/30">
                    {galleryImages[selectedImage].category}
                  </Badge>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground tron-glow-text">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {filteredImages.findIndex(img => galleryImages.indexOf(img) === selectedImage) + 1} / {filteredImages.length}
                    {selectedCategory !== 'All' && (
                      <span className="ml-2 text-primary/60">({selectedImage + 1} of {galleryImages.length} total)</span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Use arrow keys to navigate • Press Esc to close
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default GalleryPage
