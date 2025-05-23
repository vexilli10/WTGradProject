import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  X,
  Search,
  User,
  ShoppingCart,
} from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Shop', to: '/' },
    { label: 'About', to: '/' },
    { label: 'Blog', to: '/' },
    { label: 'Contact', to: '/' },
  ]

  return (
    <header className="shadow sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* logo */}
        <Link to="/" className="font-bold text-lg">
          Akardas
        </Link>

        {/* hamburger (mobile) */}
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* nav links */}
        <nav
          className={`
            ${open ? 'flex' : 'hidden'}
            absolute top-14 left-0 right-0 bg-white flex-col gap-4 px-4 py-4
            sm:static sm:flex sm:flex-row sm:gap-6 sm:py-0
          `}
        >
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.to}
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* utility icons */}
        <div className="hidden sm:flex items-center gap-4">
          <button aria-label="Search">
            <Search size={20} />
          </button>
          <button aria-label="User">
            <User size={20} />
          </button>
          <button aria-label="Cart" className="relative">
            <ShoppingCart size={20} />
            {/* future cart badge */}
          </button>
        </div>
      </div>
    </header>
  )
}
