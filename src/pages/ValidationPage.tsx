import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

/**
 * ValidationPage — the wall of real reactions to the e-POD.
 *
 * Every tile on this page is a real screenshot: LinkedIn comments and
 * inbound emails captured from actual conversations. Nothing here is
 * re-typed copy, so there are no claims to keep in sync and no invented
 * statistics — the pixels are the evidence.
 *
 * The screenshots are packed into one tight masonry collage (CSS
 * multi-column) so all sixteen read as a single wall of social proof at a
 * glance, with no empty gaps between them. Each screenshot keeps its own
 * aspect ratio: the box is reserved from that ratio before the image loads,
 * so the collage never reflows and nothing is cropped. Because the tiles
 * vary in height they pack tightly and the columns land at roughly the same
 * height — the collage look — while the column count steps up with the
 * viewport (2 → 3 → 4) so the wall stays dense on a laptop but never turns
 * the comment text into a thin, unreadable strip.
 *
 * Since a smaller tile is naturally harder to read, every tile opens a
 * full-size lightbox on click (arrows or Esc to move through the wall). That
 * is what keeps the compact collage honest: the wall shows the volume of
 * reaction, and the lightbox lets any single one be read at full size.
 *
 * The email screenshots are published with the sender's address already
 * blurred at the image level, so nothing here needs to know about redaction.
 */

type ValidationTile = {
  src: string
  alt: string
  /** Intrinsic width / height of the source screenshot. */
  ratio: number
  /**
   * Kept for source-data compatibility; the collage treats every tile the
   * same now, so this is no longer used to split the layout.
   */
  wide?: boolean
}

/** Gap between tiles, in px. Drives both the column gap and the row gap. */
const GAP = 12

const validationTiles: ValidationTile[] = [
  {
    src: '/validation/linkedin-1.png',
    alt: 'LinkedIn comment describing the enclosed electric two-wheeler as a game-changer for city commuting',
    ratio: 4.5245,
    wide: true,
  },
  {
    src: '/validation/linkedin-2.png',
    alt: 'LinkedIn comment congratulating the team',
    ratio: 5.0000,
    wide: true,
  },
  {
    src: '/validation/linkedin-3.png',
    alt: 'LinkedIn comment encouraging the team to take the vehicle to the MVP and production, and asking for a roof for heat, sun and dust protection',
    ratio: 2.4695,
  },
  {
    src: '/validation/linkedin-4.png',
    alt: 'LinkedIn comment on the e-POD challenging the assumption that urban mobility must choose between two-wheeler agility and four-wheeler protection',
    ratio: 2.1474,
  },
  {
    src: '/validation/linkedin-5.png',
    alt: 'LinkedIn comment saying the product is great',
    ratio: 5.5043,
    wide: true,
  },
  {
    src: '/validation/linkedin-6.png',
    alt: 'LinkedIn comment noting price is key and that Europe and cold-winter countries need the product',
    ratio: 3.7049,
    wide: true,
  },
  {
    src: '/validation/linkedin-7.png',
    alt: 'LinkedIn comment saying the next generation will love this product',
    ratio: 4.5855,
    wide: true,
  },
  {
    src: '/validation/linkedin-8.png',
    alt: 'LinkedIn comment saying the vehicle helps with traffic congestion and pollution, and calling it a great innovation',
    ratio: 1.4591,
  },
  {
    src: '/validation/linkedin-10.png',
    alt: 'LinkedIn comments with a mix of reactions, one calling the product much needed and a Gr8 news, one calling it a nice concept, and one calling it amazing for police patrol, delivery professionals and micro ambulance use cases',
    ratio: 1.2443,
  },
  {
    src: '/validation/linkedin-12.png',
    alt: 'LinkedIn comments reacting to the launch with hearts and the word amazing',
    ratio: 1.5090,
  },
  {
    src: '/validation/linkedin-13.png',
    alt: 'LinkedIn comment saying offering the battery as a service instead of bundling it into the sticker price is what actually gets the on-road cost down to something a daily commuter will consider',
    ratio: 4.7647,
    wide: true,
  },
  {
    src: '/validation/linkedin-14.png',
    alt: 'LinkedIn comment saying the team was expected to build something like this ten years back and is finally doing it, and that if it works well the markets of Bangalore, Mumbai, Delhi and Chennai are wide open',
    ratio: 8.9189,
    wide: true,
  },
  {
    src: '/validation/linkedin-15.png',
    alt: 'LinkedIn comment saying they would really like to buy the vehicle',
    ratio: 1.6667,
  },
  {
    src: '/validation/linkedin-16.png',
    alt: 'LinkedIn comment saying it is great to see someone attempting to solve this problem in India',
    ratio: 5.4098,
    wide: true,
  },
  {
    src: '/validation/mail-9.png',
    alt: "Inbound email from an industry reader who saw the vision and wants to be on the line for a collaboration, with the sender's address blurred",
    ratio: 2.3325,
  },
  {
    src: '/validation/mail-10.png',
    alt: "Inbound email congratulating the team on the product and looking forward to the launch, with the sender's address blurred",
    ratio: 1.9767,
  },
]

/**
 * A single screenshot tile. Clicking opens the tile full size, which is what
 * keeps the compact collage readable.
 */
const CollageTile: React.FC<{
  tile: ValidationTile
  onOpen: () => void
}> = ({ tile, onOpen }) => (
  <figure
    onClick={onOpen}
    title="Click to view full size"
    className="group relative overflow-hidden border border-primary/30 bg-white/95 cursor-zoom-in transition-colors duration-300 hover:border-primary"
  >
    {/* Red hairline that fills on hover. */}
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
      style={{ background: 'hsl(var(--primary))' }}
    />

    {/* The intrinsic ratio reserves the exact box before the image loads,
        so the collage never reflows. The box is sized with aspect-ratio
        rather than width/height attributes, because those attributes
        together with a full-width image collapse the height and knock the
        image out of the column. */}
    <div
      style={{ aspectRatio: `${tile.ratio}` }}
      className="w-full overflow-hidden bg-white"
    >
      <img
        src={tile.src}
        alt={tile.alt}
        loading="eager"
        decoding="async"
        className="block h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
      />
    </div>
  </figure>
)

const ValidationPage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = () => setLightboxIndex(null)
  const navigate = (step: 1 | -1) =>
    setLightboxIndex((current) =>
      current === null
        ? current
        : (current + step + validationTiles.length) % validationTiles.length,
    )

  const lightboxTile =
    lightboxIndex === null ? null : validationTiles[lightboxIndex]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-6 ">
            VALIDATION
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real reactions from the people who found us — every comment and email below
            is a captured screenshot, unedited and unretouched. Click any of them to
            read it full size.
          </p>
        </div>
      </section>

      {/* Collage Section */}
      <section id="validation" className="pb-24 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* CSS multi-column masonry: tiles of differing heights flow down
              one column then into the next, packing into a tight collage with
              no empty gaps. `break-inside-avoid` (on the wrapper) keeps a tile
              from being split across two columns; the wrapper's bottom margin
              is the row gap inside a column. */}
          <div
            id="validation-collage"
            className="w-full columns-2 md:columns-3 lg:columns-4"
            style={{ columnGap: GAP }}
          >
            {validationTiles.map((tile) => (
              <div
                key={tile.src}
                className="break-inside-avoid"
                style={{ marginBottom: GAP }}
              >
                <CollageTile
                  tile={tile}
                  onOpen={() => setLightboxIndex(validationTiles.indexOf(tile))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox: the compact wall stays readable because any tile opens
          here at full size. Built-in Esc and close button; arrows walk the
          wall in its visual order. */}
      <Dialog open={lightboxIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] md:max-w-6xl w-auto p-0 bg-background/98 backdrop-blur-md border-primary/40 overflow-hidden tron-glass">
          {lightboxTile && (
            <div className="flex flex-col items-center gap-3 p-4 md:p-6">
              <DialogTitle className="sr-only">{lightboxTile.alt}</DialogTitle>
              <div className="flex w-full items-center justify-center">
                <img
                  src={lightboxTile.src}
                  alt={lightboxTile.alt}
                  className="max-h-[78vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(-1)}
                  title="Previous (←)"
                  className="tron-glass border border-primary/40 hover:border-primary/60"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <span className="text-sm text-muted-foreground tabular-nums">
                  {(lightboxIndex ?? 0) + 1} / {validationTiles.length}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(1)}
                  title="Next (→)"
                  className="tron-glass border border-primary/40 hover:border-primary/60"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ValidationPage
