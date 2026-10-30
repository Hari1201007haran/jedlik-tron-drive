import React, { useEffect, useState } from 'react'

/**
 * ValidationPage — the wall of real reactions to the e-POD.
 *
 * Every tile on this page is a real screenshot: LinkedIn comments and
 * inbound emails captured from actual conversations. Nothing here is
 * re-typed copy, so there are no claims to keep in sync and no invented
 * statistics — the pixels are the evidence.
 *
 * The screenshots come in very different shapes. Some are a single thin
 * LinkedIn line, others are a tall thread of replies or a full email body.
 * A normal grid would leave large holes whenever a tall image shares a row
 * with a short one.
 *
 * CSS columns would fix the holes but they fill strictly top-to-bottom in
 * each column, which starves the last column and leaves a ragged bottom
 * edge. So this page lays the wall out itself:
 *
 *   1. Every tile's height is known ahead of time from its intrinsic aspect
 *      ratio, so nothing has to be measured on screen and the layout never
 *      jumps before the images load.
 *   2. Each tile is placed into whichever column is currently shortest
 *      (classic greedy masonry balance).
 *   3. The starting column is rotated per tile, so the collage does not
 *      read as a set of vertical stripes.
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
   * When true the tile is laid out on its own full-width row instead of
   * inside a masonry column.
   *
   * A very wide screenshot (a long LinkedIn comment) cannot be read inside
   * a ~290px column: the box height works out to a few dozen pixels and the
   * text shrinks to an illegible strip. Giving those tiles the full width
   * of the collage lets the image render at close to its natural size.
   */
  wide?: boolean
}

/** Gap between tiles, in px. */
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

const ValidationPage: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0)

  // Measure the container so the wall can be balanced against the real
  // column width rather than a guess.
  useEffect(() => {
    const el = document.getElementById('validation-collage')
    if (!el) return

    const measure = () => setContainerWidth(el.clientWidth)
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Every tile is rendered full-width, one per row.
  //
  // A masonry column squeezes a screenshot down to a fraction of its
  // width, which shrinks the comment text to a few pixels tall and makes
  // it unreadable. Stacking the tiles keeps each one at the full column
  // width, so every comment is legible and every photo is visible.
  const laidOut = containerWidth > 0 ? validationTiles : []

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-6 ">
            VALIDATION
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real reactions from the people who found us — every comment and email below
            is a captured screenshot, unedited and unretouched.
          </p>
        </div>
      </section>

      {/* Collage Section */}
      <section id="validation" className="pb-24 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div id="validation-collage" className="w-full">
            {containerWidth > 0 && (
              <div className="flex flex-col" style={{ gap: GAP }}>
                {/* Every tile sits on its own full-width row. The picture
                    keeps its own aspect ratio, so the box is exactly as
                    tall as the image needs and the comment text stays at
                    full size instead of being shrunk into a narrow
                    column. */}
                {laidOut.map((tile) => (
                  <figure
                    key={tile.src}
                    className="group relative overflow-hidden border border-primary/30 bg-white/95 transition-colors duration-300 hover:border-primary"
                  >
                    {/* Red hairline that fills on hover. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      style={{ background: 'hsl(var(--primary))' }}
                    />

                    {/* The intrinsic ratio reserves the exact box before the
                        image loads, so the wall never reflows. The box is
                        sized with aspect-ratio rather than width/height
                        attributes, because those attributes together with a
                        full-width image collapse the height and knock the
                        image out of the column. */}
                    <div
                      style={{ aspectRatio: `${tile.ratio}` }}
                      className="w-full overflow-hidden bg-white"
                    >
                      <img
                        src={tile.src}
                        alt={tile.alt}
                        loading="lazy"
                        decoding="async"
                        className="block h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ValidationPage