export default function PromoSplit() {
    return (
      <section className="px-4 sm:px-8 py-16">
        <div
          className="
            flex flex-col lg:flex-row items-center gap-8
            bg-gray-50 rounded-lg overflow-hidden
          "
        >
          {/* left image */}
          <div className="flex-1 min-h-[260px] lg:min-h-[340px] bg-cover bg-center"
               style={{ backgroundImage: 'url(https://picsum.photos/seed/promo/800/600)' }} />
  
          {/* right copy */}
          <div className="flex-1 p-6 sm:p-10 lg:p-14">
            <h3 className="text-primary uppercase text-sm font-semibold mb-2">
              Featured Products
            </h3>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              We love what&nbsp;we&nbsp;do
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Problems trying to resolve the conflict between
              the two major realms of Classical physics:
              Newtonian mechanics and quantum physics.
            </p>
            <button className="border border-primary text-primary rounded px-6 py-2 hover:bg-primary hover:text-white transition">
              Our Story
            </button>
          </div>
        </div>
      </section>
    )
  }
  