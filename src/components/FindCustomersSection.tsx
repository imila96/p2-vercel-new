'use client';

import { motion } from 'framer-motion';

export default function FindCustomersSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/30 rounded-full text-sm font-medium text-purple-200">
            Direct and wholesale
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Find your forever customers</h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Marketing Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/10 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8">
              <img
                src="/images/marketing.jpg"
                alt="Marketing email campaign"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Reach the right customers for less</h3>
              <p className="text-gray-300 mb-4">
                Acquire new customers and keep them coming back with <strong>integrated marketing tools</strong> you
                can use straight from Index 101.
              </p>
              <a href="#" className="text-purple-300 font-semibold hover:underline inline-flex items-center">
                Explore marketing features →
              </a>
            </div>
          </motion.div>

          {/* B2B */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/10 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8">
              <img
                src="/images/b2b.jpg"
                alt="B2B wholesale interface"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Unlock new growth with B2B</h3>
              <p className="text-gray-300 mb-4">
                Create <strong>custom experiences for wholesale buyers</strong> with flexible pricing, discounts, and
                payment terms.
              </p>
              <a href="#" className="text-cyan-300 font-semibold hover:underline inline-flex items-centers">
                Learn about B2B on Index 101 →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
