import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle2, Clock, BookOpen } from 'lucide-react'
import { education, credentials, type CredentialStatus } from '../data/portfolio'

type StatusCfg = { icon: typeof CheckCircle2; accentColor: string; label: string }
const statusConfig: Record<CredentialStatus, StatusCfg> = {
  CERTIFIED: { icon: CheckCircle2, accentColor: '#2997ff', label: 'Certified'     },
  'IN VIEW': { icon: Clock,        accentColor: '#34aadc', label: 'In Progress'   },
  INFORMAL:  { icon: BookOpen,     accentColor: '#98989d', label: 'Self-Directed' },
}

/* Apple product-tile-dark-3 (#252527): deepest dark tile */
export default function Education() {
  return (
    <section id="education" className="tile-dark-3" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[980px] px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="t-caption-strong mb-4"
            style={{ color: '#2997ff' }}
          >
            Education & Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="t-display-lg"
            style={{ color: '#ffffff' }}
          >
            Academic Foundation.
          </motion.h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="lg:col-span-5"
            style={{
              background: '#2a2a2c',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 18,
              padding: 24,
            }}
          >
            <div
              style={{ width: 40, height: 40, background: '#0066cc', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}
            >
              <GraduationCap size={20} color="#fff" />
            </div>
            <h3 className="t-tagline mb-1" style={{ color: '#ffffff' }}>{education.degree}</h3>
            <p className="t-caption-strong mb-1" style={{ color: '#2997ff' }}>{education.institution}</p>
            <p className="t-caption mb-8" style={{ color: '#7a7a7a' }}>{education.period}</p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
              <p className="t-caption-strong mb-4" style={{ color: '#2997ff' }}>Core Modules</p>
              <ul className="flex flex-col" style={{ gap: 8 }}>
                {education.courses.map(c => (
                  <li key={c} className="flex items-start gap-2.5 t-caption" style={{ color: '#cccccc' }}>
                    <span className="shrink-0 rounded-full" style={{ width: 4, height: 4, background: '#0066cc', marginTop: 6 }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Credentials list */}
          <div className="lg:col-span-7">
            <p className="t-caption-strong mb-5" style={{ color: '#2997ff' }}>Professional Credentials</p>
            <div className="flex flex-col" style={{ gap: 8 }}>
              {credentials.map((cred, i) => {
                const cfg = statusConfig[cred.status]
                const Icon = cfg.icon
                return (
                  <motion.div
                    key={cred.name}
                    initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="flex items-center justify-between"
                    style={{
                      background: '#2a2a2c',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 12,
                      padding: '14px 18px',
                    }}
                  >
                    <div className="flex items-center" style={{ gap: 12 }}>
                      <Icon size={16} style={{ color: cfg.accentColor, flexShrink: 0 }} />
                      <span className="t-body" style={{ color: '#ffffff' }}>{cred.name}</span>
                    </div>
                    <span
                      className="t-caption"
                      style={{
                        color: cfg.accentColor,
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 9999,
                        padding: '4px 10px',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {cfg.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
