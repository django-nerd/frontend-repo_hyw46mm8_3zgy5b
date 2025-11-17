import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-emerald-500 to-cyan-500 shadow-inner" />
            <span className="font-semibold tracking-tight text-gray-900">Muhammad Ahmad</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
            >
              Hire Me
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 text-gray-700"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
