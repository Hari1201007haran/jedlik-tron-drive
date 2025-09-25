import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="tron-glass border-t border-primary/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Jedlik Motors. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              DPIIT Recognised Startup • Chennai, India
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:info@jedlik.in" 
              className="text-sm text-muted-foreground hover:text-primary hover:tron-glow-text transition-colors"
            >
              info@jedlik.in
            </a>
            <a 
              href="tel:+919790678445" 
              className="text-sm text-muted-foreground hover:text-primary hover:tron-glow-text transition-colors"
            >
              +91 9790678445
            </a>
            <a 
              href="https://www.jedlik.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary hover:tron-glow-text transition-colors"
            >
              www.jedlik.in
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-primary/20">
          <p className="text-xs text-center text-muted-foreground">
            
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
