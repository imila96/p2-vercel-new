'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function GlobalSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium text-blue-100">
            Local and global
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Grow around the world</h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* International Selling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/10 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent p-8">
              <img
                src="/images/global-map.jpg"
                alt="Global market map"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Sell and ship everywhere</h3>
              <p className="text-blue-100 mb-4">
                Index 101 takes the complexity out of international selling, from delivering your product to localizing
                your experience with <strong>Index 101 Shipping</strong>.
              </p>
              <a href="#" className="text-white font-semibold hover:underline inline-flex items-center">
                Explore international features →
              </a>
            </div>
          </motion.div>

          {/* Index 101 Markets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/10 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent p-8 flex items-center justify-center">
              <div className="relative w-64 h-64">
                <Globe className="w-full h-full text-blue-300/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">175+</div>
                    <div className="text-lg text-blue-200">countries</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Scale globally with Index 101 Markets</h3>
              <p className="text-blue-100 mb-4">
                Reach more customers and manage your global business from one place with{' '}
                <strong>Index 101 Markets</strong>.
              </p>
              <a href="#" className="text-white font-semibold hover:underline inline-flex items-center">
                Learn about Index 101 Markets →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
