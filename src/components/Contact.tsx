import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight, MessageSquare, Check, Loader2 } from 'lucide-react'
import { identity } from '../data/portfolio'

/* Apple product-tile-parchment (#f5f5f7) */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1400))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="tile-parchment" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[980px] px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="t-caption-strong mb-4"
              style={{ color: '#0066cc' }}
            >
              Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}
              className="t-display-lg"
              style={{ color: '#1d1d1f' }}
            >
              Let's Work Together.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="t-body lg:pt-8"
            style={{ color: '#6e6e73' }}
          >
            Open to Financial Analyst, Audit, and Advisory roles. Response within 24 hours.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact cards — store-utility-card style */}
          <div className="lg:col-span-2 flex flex-col" style={{ gap: 8 }}>

            <a href={`mailto:${identity.email}`} className="apple-card flex items-center gap-4 no-underline hover:bg-[#ebebed] transition-colors">
              <div style={{ width: 40, height: 40, background: '#0066cc', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={18} color="#fff" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="t-caption" style={{ color: '#6e6e73' }}>Email</p>
                <p className="t-caption-strong truncate" style={{ color: '#1d1d1f' }}>{identity.email}</p>
              </div>
              <ArrowUpRight size={14} style={{ color: '#0066cc', flexShrink: 0 }} />
            </a>

            {identity.phones.map(p => (
              <a key={p} href={`tel:${p.replace(/\s/g,'')}`} className="apple-card flex items-center gap-4 no-underline hover:bg-[#ebebed] transition-colors">
                <div style={{ width: 40, height: 40, background: '#0066cc', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={18} color="#fff" />
                </div>
                <div>
                  <p className="t-caption" style={{ color: '#6e6e73' }}>Phone</p>
                  <p className="t-caption-strong" style={{ color: '#1d1d1f' }}>{p}</p>
                </div>
              </a>
            ))}

            <div className="apple-card flex items-center gap-4">
              <div style={{ width: 40, height: 40, background: '#f0f0f0', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={18} style={{ color: '#0066cc' }} />
              </div>
              <div>
                <p className="t-caption" style={{ color: '#6e6e73' }}>Location</p>
                <p className="t-caption-strong" style={{ color: '#1d1d1f' }}>{identity.location}</p>
              </div>
            </div>

            <a
              href="https://wa.me/2348142078768"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-card flex items-center gap-4 no-underline hover:bg-[#e8f0fb] transition-colors"
              style={{ borderColor: '#0066cc33' }}
            >
              <div style={{ width: 40, height: 40, background: '#0066cc', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MessageSquare size={18} color="#fff" />
              </div>
              <div>
                <p className="t-caption-strong" style={{ color: '#0066cc' }}>WhatsApp</p>
                <p className="t-caption" style={{ color: '#1d1d1f' }}>Message me directly</p>
              </div>
              <ArrowUpRight size={14} style={{ color: '#0066cc', flexShrink: 0, marginLeft: 'auto' }} />
            </a>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="lg:col-span-3 apple-card"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div style={{ width: 56, height: 56, background: '#0066cc', borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={24} color="#fff" />
                </div>
                <p className="t-display-md" style={{ color: '#1d1d1f' }}>Message Received.</p>
                <p className="t-caption" style={{ color: '#6e6e73' }}>Response within 24 hours.</p>
                <button type="button" onClick={() => setStatus('idle')} className="btn-primary mt-4" style={{ padding: '8px 18px', fontSize: 14 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <div className="flex flex-col" style={{ gap: 16 }}>
                <div className="grid sm:grid-cols-2" style={{ gap: 12 }}>
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', key: 'name', placeholder: 'Jane Smith' },
                    { id: 'email-c', label: 'Email', type: 'email', key: 'email', placeholder: 'jane@firm.com' },
                  ].map(f => (
                    <div key={f.id} className="flex flex-col" style={{ gap: 6 }}>
                      <label htmlFor={f.id} className="t-caption" style={{ color: '#6e6e73' }}>{f.label}</label>
                      <input
                        id={f.id}
                        type={f.type}
                        required
                        value={form[f.key as 'name' | 'email']}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        className="t-body focus:outline-none focus:border-[#0066cc] transition-colors"
                        style={{
                          border: '1px solid #e0e0e0',
                          borderRadius: 9999,
                          padding: '10px 18px',
                          fontSize: 15,
                          color: '#1d1d1f',
                          background: '#ffffff',
                        }}
                        placeholder={f.placeholder}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col" style={{ gap: 6 }}>
                  <label htmlFor="msg" className="t-caption" style={{ color: '#6e6e73' }}>Message</label>
                  <textarea
                    id="msg"
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className="t-body focus:outline-none focus:border-[#0066cc] transition-colors resize-none"
                    style={{
                      border: '1px solid #e0e0e0',
                      borderRadius: 11,
                      padding: '12px 18px',
                      fontSize: 15,
                      color: '#1d1d1f',
                      background: '#ffffff',
                    }}
                    placeholder="I'd like to discuss a Financial Analyst opportunity..."
                  />
                </div>
                <div className="flex justify-end">
                  <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ opacity: status === 'loading' ? 0.6 : 1 }}>
                    {status === 'loading'
                      ? <><Loader2 size={14} className="animate-spin" /> Sending…</>
                      : <>Send Message <ArrowUpRight size={14} /></>
                    }
                  </button>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
