import { motion } from 'framer-motion'
import { practiceAreas, chartData } from '../data/portfolio'

function BarChart() {
  const max = Math.max(...chartData.map(d => d.v))
  return (
    <div className="flex items-end gap-1.5 mt-5" style={{ height: 100 }}>
      {chartData.map((d, i) => (
        <motion.div
          key={d.q}
          initial={{ height: 0 }}
          whileInView={{ height: `${(d.v / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.65, ease: 'easeOut' }}
          className="flex-1 relative group"
          style={{ background: '#0066cc', borderRadius: '4px 4px 0 0' }}
        >
          <span
            className="absolute t-caption text-center w-full"
            style={{ top: -20, fontSize: 10, color: '#2997ff', opacity: 0, transition: 'opacity 0.2s' }}
          >
            {d.v}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

/* Apple product-tile-dark-2 (#2a2a2c) */
export default function Analysis() {
  return (
    <section id="analysis" className="tile-dark-2" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[980px] px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="t-caption-strong mb-4"
              style={{ color: '#2997ff' }}
            >
              Practice Areas
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}
              className="t-display-lg"
              style={{ color: '#ffffff' }}
            >
              Where Expertise<br />Meets Execution.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="t-body lg:pt-8"
            style={{ color: '#cccccc' }}
          >
            Quantified proficiency across core finance and accounting disciplines.
          </motion.p>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Competency bars */}
          <div className="flex flex-col" style={{ gap: 20 }}>
            {practiceAreas.map((area, i) => (
              <div key={area.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="t-caption" style={{ color: '#ffffff' }}>{area.label}</span>
                  <span className="t-caption" style={{ color: '#2997ff' }}>{area.pct}%</span>
                </div>
                <div style={{ height: 2, background: 'rgba(255,255,255,0.12)', borderRadius: 9999 }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
                    style={{ height: '100%', background: '#0066cc', borderRadius: 9999 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            style={{
              background: '#272729',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 18,
              padding: 24,
            }}
          >
            <div className="flex items-center justify-between">
              <p className="t-caption" style={{ color: '#cccccc' }}>Performance Index</p>
              <span className="t-caption italic" style={{ color: '#7a7a7a' }}>Illustrative</span>
            </div>
            <p className="t-body-strong mt-1" style={{ color: '#ffffff' }}>Analytical Consistency</p>
            <BarChart />
            <div className="flex items-center justify-between mt-2">
              {chartData.map(d => (
                <span key={d.q} className="flex-1 text-center t-caption" style={{ color: '#7a7a7a', fontSize: 10 }}>{d.q}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
