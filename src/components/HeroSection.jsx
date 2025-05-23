import Slider from './Slider'

const heroSlides = [
  {
    src: 'https://picsum.photos/seed/hero1/1600/600',
    children: (
      <div className="backdrop-brightness-50 flex flex-col gap-4 p-8 rounded-lg">
        <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-md">
          New <span className="text-primary">Winter</span> Collection
        </h2>
        <button className="self-start flex items-center gap-2 bg-primary text-white px-5 py-3 rounded">
          Shop now
        </button>
      </div>
    ),
  },
  {
    src: 'https://picsum.photos/seed/hero2/1600/600',
    children: (
      <div className="backdrop-brightness-50 flex flex-col gap-4 p-8 rounded-lg">
        <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-md">
          Up&nbsp;to&nbsp;50 % off Essentials
        </h2>
        <button className="self-start flex items-center gap-2 bg-primary text-white px-5 py-3 rounded">
          Explore
        </button>
      </div>
    ),
  },
]

export default function HeroSection() {
  return (
    <section className="w-full h-[60vh] sm:h-[70vh] overflow-hidden">
      <Slider slides={heroSlides} />
    </section>
  )
}
