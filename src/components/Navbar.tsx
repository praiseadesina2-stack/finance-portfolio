import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { identity, navLinks } from '../data/portfolio'

/* Apple global-nav: surface-black (#000), 44px height, 12px nav-link text */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(0,0,0,0.92)',
        backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        height: 44,
      }}
    >
      <nav className="mx-auto max-w-[980px] px-5 h-full flex items-center justify-between">

        {/* Logo */}
        <a
          href="#top"
          className="t-tagline text-white font-semibold"
          style={{ fontSize: 17, letterSpacing: '-0.022em' }}
        >
          OSE
        </a>

        {/* Desktop links — centered */}
        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="t-nav text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CV link */}
        <div className="hidden md:flex items-center">
          <a
            href="/Omotola-Sina-Elijah-CV.pdf"
            download
            className="t-nav text-apple-blue-dark hover:underline flex items-center gap-1"
            style={{ color: '#2997ff' }}
          >
            CV <ArrowUpRight size={11} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          className="md:hidden text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'rgba(0,0,0,0.96)' }}
          >
            <ul className="px-5 pb-5 pt-2 flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} className="t-body text-white/80 hover:text-white block">
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10">
                <a href="/Omotola-Sina-Elijah-CV.pdf" download className="t-body flex items-center gap-1.5" style={{ color: '#2997ff' }}>
                  Download CV <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
