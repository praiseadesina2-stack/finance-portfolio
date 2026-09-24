import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarketTicker from './components/MarketTicker'
import About from './components/About'
import Experience from './components/Experience'
import Analysis from './components/Analysis'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
  Apple design: each tile manages its own canvas (light/dark).
  No global dark-mode class needed — the section background IS the divider.

  Tile rhythm (per DESIGN.md):
    Hero       → tile-light    (#ffffff)
    Ticker     → tile-parchment(#f5f5f7) — between white and dark
    About      → tile-dark     (#272729)
    Experience → tile-parchment(#f5f5f7)
    Analysis   → tile-dark-2   (#2a2a2c)
    Skills     → tile-light    (#ffffff)
    Education  → tile-dark-3   (#252527)
    Contact    → tile-parchment(#f5f5f7)
    Footer     → tile-parchment(#f5f5f7)
*/
export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <Navbar />
      <main>
        <div className="flex flex-col min-h-[100svh]">
          <Hero />
          <MarketTicker />
        </div>
        <About />
        <Experience />
        <Analysis />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
