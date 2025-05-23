// src/components/ServicesSection.jsx
import { Rocket, Layers, TrendingUp } from 'lucide-react'
import ServiceCard from './ServiceCard'

const items = [
  {
    Icon: Rocket,
    title: 'Easy Wins',
    blurb: 'Get your best looking smile now!',
  },
  {
    Icon: Layers,
    title: 'Concrete',
    blurb: 'Defalcate is most focused for your success.',
  },
  {
    Icon: TrendingUp,
    title: 'Hack Growth',
    blurb: 'Let’s together build a flourishing future.',
  },
]

export default function ServicesSection() {
  return (
    <section className="px-4 sm:px-8 py-16 bg-gray-50">
      <h2 className="text-center text-2xl font-bold mb-10">
        The Best Services
      </h2>

      <div
        className="
          flex flex-col sm:flex-row gap-6
          max-w-5xl mx-auto
        "
      >
        {items.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
