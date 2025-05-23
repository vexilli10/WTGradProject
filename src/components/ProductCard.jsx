import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ img, name, price, oldPrice }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg overflow-hidden shadow-sm">
      <div
        className="aspect-square bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="p-3 flex flex-col gap-1">
        <p className="text-sm text-gray-600">{name}</p>

        <div className="flex items-center gap-2">
          <span className="text-primary font-semibold">${price}</span>
          {oldPrice && (
            <span className="text-xs line-through text-gray-400">
              ${oldPrice}
            </span>
          )}
        </div>

        <button className="mt-2 flex items-center gap-2 border border-primary text-primary rounded px-3 py-1 text-xs self-start hover:bg-primary hover:text-white transition">
          <ShoppingCart size={14} />
          Add to cart
        </button>
      </div>
    </div>
  )
}
