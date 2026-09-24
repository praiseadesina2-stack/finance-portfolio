import { motion } from 'framer-motion'
import { aboutContent, identity } from '../data/portfolio'

/* Apple product-tile-dark (#272729): dark tile with white text + Sky Link Blue */
export default function About() {
  return (
    <section id="about" className="tile-dark" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[980px] px-6">

        {/* ── Top header ──────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="t-caption-strong mb-4"
              style={{ color: '#0066cc' }}
            >
              {aboutContent.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}
              className="t-display-lg"
              style={{ color: '#ffffff' }}
            >
              {aboutContent.heading}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.65 }}
            className="t-body lg:pt-8"
            style={{ color: '#cccccc' }}
          >
            {aboutContent.body}
          </motion.p>
        </div>

        {/* ── Photo + Pillars ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Photo with Apple product shadow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <img
              src={identity.photo}
              alt={identity.fullName}
              className="w-full object-cover object-top"
              style={{
                maxHeight: 500,
                filter: 'drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px)',
                borderRadius: 8,
              }}
            />
          </motion.div>

          {/* Pillars — store-utility-card style on dark */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {aboutContent.pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }}
                style={{
                  background: '#2a2a2c',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 18,
                  padding: 24,
                }}
              >
                <p className="t-caption-strong mb-1" style={{ color: '#0066cc' }}>0{i + 1}</p>
                <h3 className="t-tagline mb-2" style={{ color: '#ffffff' }}>{p.title}</h3>
                <p className="t-caption" style={{ color: '#cccccc' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Trust indicators ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mt-14 pt-10 flex flex-wrap gap-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          {['IFRS Compliant', 'Zero-Variance Audits', 'ICAN Trainee', 'B.Tech Accounting'].map(tag => (
            <span key={tag} className="t-caption-strong flex items-center gap-2" style={{ color: '#cccccc' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#0066cc', display: 'inline-block' }} />
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
