import { ArrowUpRight } from 'lucide-react'
import { identity, navLinks } from '../data/portfolio'

/* Apple footer: canvas-parchment (#f5f5f7), ink-muted-80 text, dense-link columns, fine-print legal row */
export default function Footer() {
  return (
    <footer style={{ background: '#f5f5f7', borderTop: '1px solid #e0e0e0' }}>

      {/* Main link columns — apple dense-link layout */}
      <div className="mx-auto max-w-[980px] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Branding column */}
          <div>
            <a href="#top" className="t-tagline font-semibold" style={{ color: '#1d1d1f', textDecoration: 'none' }}>
              OSE
            </a>
            <p className="t-fine mt-3" style={{ color: '#6e6e73', lineHeight: 1.5 }}>
              Omotola Sina Elijah<br />
              Financial Analyst
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="t-caption-strong mb-3" style={{ color: '#1d1d1f' }}>Navigate</p>
            <ul className="flex flex-col">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="t-dense-link link-light" style={{ display: 'block', fontSize: 14, lineHeight: 2 }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="t-caption-strong mb-3" style={{ color: '#1d1d1f' }}>Contact</p>
            <ul className="flex flex-col">
              <li>
                <a href={`mailto:${identity.email}`} className="link-light" style={{ display: 'block', fontSize: 14, lineHeight: 2.41 }}>
                  Email
                </a>
              </li>
              {identity.phones.map(p => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g,'')}`} className="link-light" style={{ display: 'block', fontSize: 14, lineHeight: 2.41 }}>
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://wa.me/2348142078768" target="_blank" rel="noopener noreferrer" className="link-light" style={{ display: 'block', fontSize: 14, lineHeight: 2.41 }}>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="t-caption-strong mb-3" style={{ color: '#1d1d1f' }}>Hire</p>
            <a
              href={`mailto:${identity.email}`}
              className="btn-primary"
              style={{ fontSize: 14, padding: '8px 18px', display: 'inline-flex', marginBottom: 12 }}
            >
              Hire Me <ArrowUpRight size={13} />
            </a>
            <p className="t-caption mt-2" style={{ color: '#6e6e73' }}>{identity.location}</p>
            <a href="/Omotola-Sina-Elijah-CV.pdf" download className="t-caption link-light block mt-2">
              Download CV →
            </a>
          </div>
        </div>
      </div>

      {/* Legal row — fine-print */}
      <div style={{ borderTop: '1px solid #d2d2d7', padding: '12px 0' }}>
        <div className="mx-auto max-w-[980px] px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="t-fine" style={{ color: '#7a7a7a' }}>
            Copyright © {new Date().getFullYear()} Omotola Sina Elijah. All rights reserved.
          </p>
          <p className="t-fine" style={{ color: '#7a7a7a' }}>
            {identity.title}
          </p>
        </div>
      </div>
    </footer>
  )
}
