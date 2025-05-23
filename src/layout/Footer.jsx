import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      {/* top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {/* column 1 */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold">Bandage</h3>
          <p className="text-sm leading-relaxed">
            4517 Washington Ave.<br />
            Manchester, Kentucky 39495
          </p>

          {/* social icons */}
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary transition"
                  aria-label="social link"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* column 2 — links */}
        <nav className="flex flex-col gap-2">
          <h4 className="text-white font-semibold mb-3">Company</h4>
          {['About Us', 'Careers', 'We are Hiring', 'Blog'].map((t) => (
            <a key={t} href="#" className="hover:text-white text-sm">
              {t}
            </a>
          ))}
        </nav>

        {/* column 3 — links */}
        <nav className="flex flex-col gap-2">
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          {['Terms & Conditions', 'Privacy Policy', 'Licenses'].map((t) => (
            <a key={t} href="#" className="hover:text-white text-sm">
              {t}
            </a>
          ))}
        </nav>

        {/* column 4 — newsletter */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h4 className="text-white font-semibold">Join Our Newsletter</h4>
          <p className="text-sm">
            Get exclusive offers &amp; updates – straight to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-stretch"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="
                flex-1 px-4 py-2 text-sm rounded-l-lg
                bg-white/10 placeholder-gray-400 outline-none
                focus:bg-white focus:text-neutral-900
              "
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 text-sm font-medium rounded-r-lg hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-neutral-800 text-xs py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2025 Bandage. All rights reserved.</span>
          <span>Powered by React & Vite</span>
        </div>
      </div>
    </footer>
  )
}
