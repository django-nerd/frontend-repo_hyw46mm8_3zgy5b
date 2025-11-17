import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                I’m Muhammad Ahmad, a Pakistani graphic designer specializing in brand identity, illustration, and high-impact visuals.
                With deep expertise in Adobe Photoshop and Adobe Illustrator, I help brands look world‑class across print and digital.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Whether you need a bold new logo, packaging that pops, or social content that converts, I bring precision,
                color mastery, and storytelling to every pixel.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4 text-sm">
                <li className="p-4 rounded-lg bg-gray-50">
                  <span className="block text-gray-500">Experience</span>
                  <span className="font-semibold">7+ years</span>
                </li>
                <li className="p-4 rounded-lg bg-gray-50">
                  <span className="block text-gray-500">Specialty</span>
                  <span className="font-semibold">Photoshop, Illustrator</span>
                </li>
                <li className="p-4 rounded-lg bg-gray-50">
                  <span className="block text-gray-500">Clients</span>
                  <span className="font-semibold">Startups & Agencies</span>
                </li>
                <li className="p-4 rounded-lg bg-gray-50">
                  <span className="block text-gray-500">Availability</span>
                  <span className="font-semibold">Open for projects</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Skills />
        <Work />
        <Contact />
      </main>
      <footer className="py-10 border-t border-gray-200 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Muhammad Ahmad — Graphic Designer</p>
        <p className="mt-1">Email: <a href="mailto:Asifbutt111971@gmail.com" className="underline">Asifbutt111971@gmail.com</a> · Phone: <a className="underline" href="tel:+923207669402">+92 320 766 9402</a></p>
      </footer>
    </div>
  )
}

export default App
