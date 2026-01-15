'use client';

import { motion } from 'framer-motion';

export default function SellEverywhereSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-900 to-cyan-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/30 rounded-full text-sm font-medium text-cyan-100">
            Online and in person
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Sell here, there, and
            <br />
            everywhere
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl">
            Get a stunning store that&apos;s made to sell. Design fast with AI, choose a
            <br />
            stylish theme, or build completely custom from full control.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Website Builder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/15 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/20 to-transparent p-8">
              <img
                src="/images/website-builder.jpg"
                alt="Website builder interface"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Design fast, launch faster</h3>
              <p className="text-cyan-100 mb-4">
                Build your online store with our drag-and-drop editor, customize with code, or use AI to generate a
                site in seconds.
              </p>
              <a href="#" className="text-white font-semibold hover:underline inline-flex items-center">
                Explore Online Store Builder →
              </a>
            </div>
          </motion.div>

          {/* POS System */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/15 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/20 to-transparent p-8">
              <img
                src="/images/pos-system.jpg"
                alt="Point of sale system"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">In-person point of sale</h3>
              <p className="text-cyan-100 mb-4">
                Sell face-to-face and keep your online and offline sales in sync with{' '}
                <strong>Index 101 POS</strong>.
              </p>
              <a href="#" className="text-white font-semibold hover:underline inline-flex items-center">
                Learn about Index 101 POS →
              </a>
            </div>
          </motion.div>

          {/* Multi-channel Selling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/15 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/20 to-transparent p-8 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-4">
                {['Platform 1', 'Platform 2', 'Platform 3', 'Platform 4', 'Platform 5', 'Platform 6', 'Platform 7', 'Platform 8'].map(
                  (platform, i) => (
                    <div key={i} className="w-16 h-16 bg-white rounded-xl shadow-lg" />
                  )
                )}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Publish across channels</h3>
              <p className="text-cyan-100 mb-4">
                Show up where shoppers scroll, search, and shop with{' '}
                <strong>multichannel integration</strong>.
              </p>
              <a href="#" className="text-white font-semibold hover:underline inline-flex items-center">
                Learn about sales channels →
              </a>
            </div>
          </motion.div>

          {/* Checkout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/15 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-white/20 to-transparent p-8">
              <img
                src="/images/checkout.jpg"
                alt="Checkout experience"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Powered by the world&apos;s best checkout</h3>
              <p className="text-cyan-100 mb-4">
                <strong>Index 101 Checkout</strong> is fast, fully customizable, and optimized to close more sales.
              </p>
              <a href="#" className="text-white font-semibold hover:underline inline-flex items-center">
                Learn about Index 101 Pay →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
