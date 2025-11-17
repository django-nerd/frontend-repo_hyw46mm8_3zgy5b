import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Bold Branding Suite',
    tag: 'Brand Identity',
    colors: 'from-gray-900 to-gray-700',
  },
  {
    title: 'Vibrant Poster Series',
    tag: 'Illustration & Print',
    colors: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Premium Packaging',
    tag: 'Packaging Design',
    colors: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Social Launch Kit',
    tag: 'Social Media',
    colors: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Artful Composites',
    tag: 'Photo Manipulation',
    colors: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Minimal Logo Marks',
    tag: 'Logo Design',
    colors: 'from-emerald-500 to-teal-500',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600">A curated mix of branding, illustration, print, and digital content.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.colors}`} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <span className="text-xs rounded-full bg-gray-900 text-white px-2 py-1">{p.tag}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Crafted with Photoshop & Illustrator.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
