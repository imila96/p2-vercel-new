'use client';

import { motion } from 'framer-motion';

export default function AppsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Apps for anything else</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Index 101 offers all the essentials out of the box, but if your business calls
            <br />
            for something extra you have the <strong>Index 101 App Store</strong>—with 14,000+
            <br />
            commerce apps for whatever specialized features you might need.
          </p>
        </motion.div>

        {/* App Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 p-12 backdrop-blur-sm">
            {/* App Icons Grid - Multiple rows */}
            <div className="grid grid-cols-8 md:grid-cols-12 gap-4 mb-4">
              {Array.from({ length: 48 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.01 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-white rounded-xl shadow-lg hover:scale-110 transition-transform cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#"
            className="text-white font-semibold text-lg hover:underline inline-flex items-center"
          >
            Browse the Index 101 App Store →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
