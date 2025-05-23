import ProductCard from './ProductCard'

const products = [
  {
    img: 'https://picsum.photos/seed/prod1/400',
    name: 'Elegant Dress',
    price: 48,
    oldPrice: 65,
  },
  // …add 7 more placeholder items
]

export default function BestsellerSection() {
  return (
    <section className="px-4 sm:px-8 py-16">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Bestseller products
      </h2>

      <div
        className="
          flex flex-wrap gap-6
          justify-center
        "
      >
        {products.map((p, i) => (
          <div
            key={i}
            className="w-[45%] sm:w-[30%] lg:w-[22%] flex-shrink-0"
          >
            <ProductCard {...p} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="border border-primary text-primary rounded px-6 py-2 hover:bg-primary hover:text-white transition">
          See more products
        </button>
      </div>
    </section>
  )
}
