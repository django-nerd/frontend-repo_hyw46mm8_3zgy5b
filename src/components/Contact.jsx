import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s work together</h2>
          <p className="mt-3 text-gray-600">Tell me about your project or just say salam — I’ll reply within 24 hours.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <a href="mailto:Asifbutt111971@gmail.com" className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-gray-900 text-white flex items-center justify-center">
              <Mail size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Email</h3>
            <p className="mt-1 text-sm text-gray-600 break-all">Asifbutt111971@gmail.com</p>
            <p className="mt-2 text-xs text-gray-500">Tap to email</p>
          </a>

          <a href="tel:+923207669402" className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-gray-900 text-white flex items-center justify-center">
              <Phone size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Phone</h3>
            <p className="mt-1 text-sm text-gray-600">+92 320 766 9402</p>
            <p className="mt-2 text-xs text-gray-500">Tap to call</p>
          </a>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="w-11 h-11 rounded-lg bg-gray-900 text-white flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Location</h3>
            <p className="mt-1 text-sm text-gray-600">Pakistan</p>
            <p className="mt-2 text-xs text-gray-500">Available worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
