import OverlayTile from './OverlayTile'

const tiles = [
  {
    id: 'A',
    src: 'https://picsum.photos/seed/feat1/1000/1000',
    title: 'Top Product Of the Week',
    cta: 'Explore items',
    extra: 'lg:col-span-2 lg:row-span-2',   // big one
  },
  {
    id: 'B',
    src: 'https://picsum.photos/seed/feat2/500/500',
    title: 'Top Product Of the Week',
    cta: 'Explore items',
  },
  {
    id: 'C',
    src: 'https://picsum.photos/seed/feat3/500/500',
    title: 'Top Product Of the Week',
    cta: 'Explore items',
  },
]

export default function FeaturedGrid() {
  return (
    <section className="px-4 sm:px-8 py-12">
      <div
        className="
          flex flex-wrap gap-4
          lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-6
        "
      >
        {tiles.map(({ id, extra, ...tile }) => (
          <div
            key={id}
            className={`
              flex-1 basis-full sm:basis-[48%]
              ${extra ?? ''}
            `}
          >
            <OverlayTile {...tile} />
          </div>
        ))}
      </div>
    </section>
  )
}
