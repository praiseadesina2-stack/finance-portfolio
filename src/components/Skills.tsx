import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

/* Apple product-tile-light: white canvas */
export default function Skills() {
  return (
    <section id="skills" className="tile-light" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[980px] px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="t-caption-strong mb-4"
            style={{ color: '#0066cc' }}
          >
            Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="t-display-lg"
            style={{ color: '#1d1d1f' }}
          >
            Tools of the Trade.
          </motion.h2>
        </div>

        {/* Apple store-utility-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20 }}>
          {skills.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: gi * 0.1, duration: 0.55 }}
              className="apple-card flex flex-col"
            >
              <p className="t-caption-strong mb-5" style={{ color: '#0066cc' }}>{group.group}</p>
              <ul className="flex flex-col" style={{ gap: 10 }}>
                {group.items.map(item => (
                  <li key={item} className="flex items-start gap-2.5 t-body" style={{ color: '#1d1d1f' }}>
                    <span className="shrink-0 rounded-full" style={{ width: 4, height: 4, background: '#0066cc', marginTop: 8 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
