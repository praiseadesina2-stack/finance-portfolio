import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Mail, Phone, X, MessageSquare, Copy, Check, FileText } from 'lucide-react'
import { identity, heroContent, stats } from '../data/portfolio'

/* Apple product-tile-light: white canvas, full-bleed, 80px section padding */
/* Hero follows the apple tile pattern: large display headline + tagline + 2 pill CTAs */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as any },
})

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)
  const [copied, setCopied]       = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(identity.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <>
      {/* ── TILE: White canvas (product-tile-light) ───── */}
      {/* Hero height is driven by viewport to push next section down */}
      <section id="top" className="tile-light relative overflow-hidden flex flex-col flex-1" style={{ paddingTop: 44 }}>

        {/* Main grid — copy LEFT, photo RIGHT */}
        <div className="my-auto mx-auto w-full max-w-[1200px] px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-32 pb-8">

          {/* ── LEFT: Copy ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >

            {/* Hero headline */}
            <motion.h1 {...fade(0.2)} className="t-hero" style={{ color: '#1d1d1f', maxWidth: 480 }}>
              {heroContent.headline}
            </motion.h1>

            {/* Tagline */}
            <motion.p {...fade(0.3)} className="t-lead mt-3" style={{ color: '#0066cc' }}>
              {heroContent.sub}
            </motion.p>

            {/* Body copy */}
            <motion.p {...fade(0.38)} className="t-body mt-5" style={{ color: '#6e6e73', maxWidth: 400 }}>
              {heroContent.body}
            </motion.p>

            {/* Two pill CTAs */}
            <motion.div {...fade(0.46)} className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                {heroContent.cta} <ArrowUpRight size={14} />
              </button>
              <a href="/Omotola-Sina-Elijah-CV.pdf" download className="btn-secondary">
                <FileText size={14} /> {heroContent.cv}
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-end"
          >
            <div className="relative w-full max-w-[360px] xl:max-w-[400px]">
              <img
                src="/shina.png"
                alt="Finance professionals reviewing documents"
                draggable={false}
                className="w-full object-cover object-center select-none"
                style={{
                  maxHeight: '62vh',
                  borderRadius: 16,
                  filter: 'drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Stats strip — parchment band ─────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full tile-parchment mt-auto"
        >
          <div className="mx-auto max-w-[980px] px-6 grid grid-cols-2 md:grid-cols-4 gap-0"
            style={{ borderTop: '1px solid #e0e0e0', padding: '8px 24px' }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="px-6 py-2 flex flex-col"
                style={{ borderRight: i < stats.length - 1 ? '1px solid #e0e0e0' : 'none' }}
              >
                <span className="t-display-md" style={{ color: '#1d1d1f' }}>{s.value}</span>
                <span className="t-caption mt-1" style={{ color: '#6e6e73' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Hire Modal ─────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0"
              style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22 }}
              className="relative z-10 w-full max-w-md apple-card"
              style={{ backgroundColor: '#ffffff' }}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5"
                style={{ color: '#7a7a7a' }}
              >
                <X size={18} />
              </button>

              <p className="t-caption-strong mb-1" style={{ color: '#0066cc' }}>Direct Inquiries</p>
              <h3 className="t-display-md mb-1" style={{ color: '#1d1d1f' }}>Hire Omotola</h3>
              <p className="t-caption mb-6" style={{ color: '#6e6e73' }}>
                Available for Financial Analyst, Audit, and Advisory roles.
              </p>

              <div className="flex flex-col gap-2">
                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-apple-sm" style={{ background: '#f5f5f7' }}>
                  <div className="flex items-center gap-3">
                    <Mail size={16} style={{ color: '#0066cc' }} />
                    <div>
                      <p className="t-caption" style={{ color: '#7a7a7a' }}>Email</p>
                      <p className="t-caption-strong" style={{ color: '#1d1d1f' }}>{identity.email}</p>
                    </div>
                  </div>
                  <button onClick={copy} className="t-caption link-light flex items-center gap-1.5">
                    {copied ? <><Check size={11} /> Copied</> : <><Copy size={11} /> Copy</>}
                  </button>
                </div>

                {/* Phones */}
                {identity.phones.map(p => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g,'')}`}
                    className="flex items-center gap-3 p-4 rounded-apple-sm transition-colors hover:bg-[#f0f0f0]"
                    style={{ background: '#f5f5f7' }}
                  >
                    <Phone size={16} style={{ color: '#0066cc' }} />
                    <div>
                      <p className="t-caption" style={{ color: '#7a7a7a' }}>Phone</p>
                      <p className="t-caption-strong" style={{ color: '#1d1d1f' }}>{p}</p>
                    </div>
                  </a>
                ))}

                {/* WhatsApp */}
                <a
                  href="https://wa.me/2348142078768?text=Hello%20Omotola%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-apple-sm transition-colors hover:bg-[#e8f0fb]"
                  style={{ background: '#f0f5ff', border: '1px solid #0066cc22' }}
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare size={16} style={{ color: '#0066cc' }} />
                    <div>
                      <p className="t-caption-strong" style={{ color: '#0066cc' }}>WhatsApp</p>
                      <p className="t-caption" style={{ color: '#1d1d1f' }}>Start a conversation</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} style={{ color: '#0066cc' }} />
                </a>
              </div>

              <div className="mt-6 pt-5 flex justify-between items-center" style={{ borderTop: '1px solid #e0e0e0' }}>
                <a href="#contact" onClick={() => setModalOpen(false)} className="t-caption link-light">
                  Full contact form →
                </a>
                <a href="/Omotola-Sina-Elijah-CV.pdf" download className="btn-primary" style={{ padding: '8px 18px', fontSize: 14 }}>
                  <FileText size={13} /> CV
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
