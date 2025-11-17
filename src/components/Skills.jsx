import { motion } from 'framer-motion'
import { PenTool, Image, Layers, Palette, Sparkles } from 'lucide-react'

const skills = [
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Logos, guidelines, and complete visual systems that scale.'
  },
  {
    icon: Image,
    title: 'Photo Manipulation',
    desc: 'High-end retouching, composites, and visual storytelling.'
  },
  {
    icon: Layers,
    title: 'Layout & Print',
    desc: 'Brochures, posters, packaging, and editorial design.'
  },
  {
    icon: Palette,
    title: 'Art Direction',
    desc: 'Mood boards, color strategy, and creative direction.'
  },
  {
    icon: Sparkles,
    title: 'Social Content',
    desc: 'Thumb-stopping posts, ads, and campaign visuals.'
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Expertise</h2>
          <p className="mt-3 text-gray-600">Mastery across Adobe Photoshop and Adobe Illustrator with a refined eye for detail.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
