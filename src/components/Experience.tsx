import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experiences } from '../data/portfolio'

/* Apple product-tile-parchment (#f5f5f7): off-white tile, ink text */
export default function Experience() {
  return (
    <section id="experience" className="tile-parchment" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[980px] px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="t-caption-strong mb-4"
            style={{ color: '#0066cc' }}
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="t-display-lg"
            style={{ color: '#1d1d1f' }}
          >
            Professional Track Record.
          </motion.h2>
        </div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.65 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10"
              style={{ borderTop: '1px solid #e0e0e0' }}
            >
              {/* Index */}
              <div className="lg:col-span-1">
                <span className="t-caption-strong" style={{ color: '#0066cc' }}>{exp.index}</span>
              </div>

              {/* Role + Org */}
              <div className="lg:col-span-4">
                <h3 className="t-tagline mb-1" style={{ color: '#1d1d1f' }}>
                  {exp.title}
                </h3>
                <p className="t-caption" style={{ color: '#6e6e73' }}>{exp.org}</p>
                <div className="flex items-center gap-1 mt-1" style={{ color: '#7a7a7a' }}>
                  <MapPin size={11} />
                  <span className="t-caption">{exp.location}</span>
                </div>
              </div>

              {/* Bullets */}
              <div className="lg:col-span-7">
                <ul className="flex flex-col" style={{ gap: 10 }}>
                  {exp.bullets.map(b => (
                    <li key={b} className="flex items-start gap-3 t-body" style={{ color: '#333333' }}>
                      <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ background: '#0066cc', marginTop: 8 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                {exp.note && (
                  <p className="t-caption mt-4 italic" style={{ color: '#7a7a7a', paddingLeft: 12, borderLeft: '2px solid #e0e0e0' }}>
                    {exp.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid #e0e0e0' }} />
        </div>
      </div>
    </section>
  )
}
