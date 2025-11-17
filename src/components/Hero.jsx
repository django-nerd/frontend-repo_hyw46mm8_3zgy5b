import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-400/20 to-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 w-full">
        <div className="py-24">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Muhammad Ahmad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-xl text-gray-700"
          >
            Graphic Designer · Pakistan
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-gray-600 max-w-xl"
          >
            Master of Adobe Photoshop and Adobe Illustrator. I craft brand identities, packaging, social content, and eye-catching visuals that tell your story at a glance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#work" className="inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
              Contact
            </a>
          </motion.div>
        </div>

        <div className="py-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-square rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(217,70,239,0.08),transparent_25%)]" />

            <div className="absolute inset-0 p-10 grid gap-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="h-28 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-inner" />
                <div className="h-28 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-inner" />
                <div className="h-28 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-inner" />
                <div className="h-28 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 shadow-inner" />
                <div className="h-28 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-inner" />
                <div className="h-28 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-inner" />
              </div>
              <p className="text-sm text-gray-600">
                Clean geometry, bold color, and pixel-perfect craft. Bringing ideas to life with Adobe Photoshop and Illustrator.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
