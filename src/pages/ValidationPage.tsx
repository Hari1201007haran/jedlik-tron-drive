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
  /** Small red group badge shown on the tile. */
  group: 'LinkedIn' | 'Email'
  /** Intrinsic width / height of the source screenshot. */
  ratio: number
}

/** Gap between tiles, in px. */
const GAP = 12

/** Height of the red hover hairline reserved at the top of each tile. */
const HAIRLINE = 3

/**
 * Number of masonry columns at each breakpoint. The page measures the
 * container so it can rebalance on resize.
 */
const COLUMN_COUNTS: { minWidth: number; columns: number }[] = [
  { minWidth: 1024, columns: 4 },
  { minWidth: 640, columns: 3 },
  { minWidth: 0, columns: 2 },
]

function columnsFor(width: number): number {
  for (const c of COLUMN_COUNTS) {
    if (width >= c.minWidth) return c.columns
  }
  return 2
}

/**
 * Spread the tiles across columns so every column ends at roughly the same
 * height. Greedy shortest-column placement, but the starting column is
 * rotated per tile so tall and short tiles interleave instead of stacking
 * into predictable stripes.
 */
function balance(
  tiles: ValidationTile[],
  columns: number,
  containerWidth: number
): ValidationTile[][] {
  const colWidth = (containerWidth - GAP * (columns - 1)) / columns
  const heights = new Array(columns).fill(0) as number[]
  const result: ValidationTile[][] = Array.from({ length: columns }, () => [])

  tiles.forEach((tile, i) => {
    // Rotate the starting point so successive tiles do not all compete for
    // the same column and end up forming visible vertical runs.
    const start = i % columns
    let best = start
    for (let k = 0; k < columns; k++) {
      const idx = (start + k) % columns
      if (heights[idx] < heights[best]) best = idx
    }
    result[best].push(tile)
    // Height the tile will occupy: image height at this column width, plus
    // the hairline and the gap beneath it.
    heights[best] += colWidth / tile.ratio + HAIRLINE + GAP
  })

  return result
}

const validationTiles: ValidationTile[] = [
  {
    src: '/validation/linkedin-1.png',
    alt: 'LinkedIn comment describing the enclosed electric two-wheeler as a game-changer for city commuting',
    group: 'LinkedIn',
    ratio: 647 / 143,
  },
  {
    src: '/validation/linkedin-2.png',
    alt: 'LinkedIn comment congratulating the team',
    group: 'LinkedIn',
    ratio: 675 / 135,
  },
  {
    src: '/validation/linkedin-3.png',
    alt: 'LinkedIn comment encouraging the team to take the vehicle to the MVP and production, and asking for a roof for heat, sun and dust protection',
    group: 'LinkedIn',
    ratio: 647 / 262,
  },
  {
    src: '/validation/linkedin-4.png',
    alt: 'LinkedIn comment on the e-POD challenging the assumption that urban mobility must choose between two-wheeler agility and four-wheeler protection',
    group: 'LinkedIn',
    ratio: 670 / 312,
  },
  {
    src: '/validation/linkedin-5.png',
    alt: 'LinkedIn comment saying the product is great',
    group: 'LinkedIn',
    ratio: 646 / 117,
  },
  {
    src: '/validation/linkedin-6.png',
    alt: 'LinkedIn comment noting price is key and that Europe and cold-winter countries need the product',
    group: 'LinkedIn',
    ratio: 693 / 183,
  },
  {
    src: '/validation/linkedin-7.png',
    alt: 'LinkedIn comment saying the next generation will love this product',
    group: 'LinkedIn',
    ratio: 697 / 152,
  },
  {
    src: '/validation/linkedin-8.png',
    alt: 'LinkedIn comment saying the vehicle helps with traffic congestion and pollution, and calling it a great innovation',
    group: 'LinkedIn',
    ratio: 696 / 477,
  },
  {
    src: '/validation/linkedin-10.png',
    alt: 'LinkedIn comments with a mix of reactions, one calling the product much needed and a Gr8 news, one calling it a nice concept, and one calling it amazing for police patrol, delivery professionals and micro ambulance use cases',
    group: 'LinkedIn',
    ratio: 550 / 442,
  },
  {
    src: '/validation/linkedin-12.png',
    alt: 'LinkedIn comments reacting to the launch with hearts and the word amazing',
    group: 'LinkedIn',
    ratio: 618 / 167,
  },
  {
    src: '/validation/linkedin-13.png',
    alt: 'LinkedIn comment saying offering the battery as a service instead of bundling it into the sticker price is what actually gets the on-road cost down to something a daily commuter will consider',
    group: 'LinkedIn',
    ratio: 972 / 204,
  },
  {
    src: '/validation/mail-9.png',
    alt: "Inbound email from an industry reader who saw the vision and wants to be on the line for a collaboration, with the sender's address blurred",
    group: 'Email',
    ratio: 933 / 400,
  },
  {
    src: '/validation/mail-10.png',
    alt: "Inbound email congratulating the team on the product and looking forward to the launch, with the sender's address blurred",
    group: 'Email',
    ratio: 935 / 473,
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

  const columns = columnsFor(containerWidth)
  const laidOut = containerWidth > 0 ? balance(validationTiles, columns, containerWidth) : []

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-6 tron-glow-text">
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
              <div className="flex items-start" style={{ gap: GAP }}>
                {laidOut.map((col, ci) => (
                  <div
                    key={ci}
                    className="flex min-w-0 flex-1 flex-col"
                    style={{ gap: GAP }}
                  >
                    {col.map((tile, i) => (
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

                        {/* Group badge — red accent, bottom-left of the tile. */}
                        <span className="absolute bottom-2 left-2 z-10 font-orbitron text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-primary px-2 py-0.5 rounded">
                          {tile.group}
                        </span>

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
