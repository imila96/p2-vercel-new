'use client';

import { motion } from 'framer-motion';
import { Code2, Blocks, Paintbrush } from 'lucide-react';

export default function DeveloperSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">By developers, for developers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong>APIs, primitives, and tools</strong> empower devs and{' '}
            <strong>partners</strong> to build the apps,
            <br />
            themes, and custom storefronts businesses are looking for.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Extend Checkout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Code2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Extend checkout</h3>
            <p className="text-blue-100 mb-6">
              Add custom functionality to Index 101&apos;s high-converting checkout with checkout extensions.
            </p>
          </motion.div>

          {/* Build Apps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Blocks className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Build apps</h3>
            <p className="text-purple-100 mb-6">
              Create apps that extend Index 101&apos;s functionality or integrate with external services.
            </p>
          </motion.div>

          {/* Create Custom Storefronts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-3xl p-8 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Paintbrush className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Create custom storefronts</h3>
            <p className="text-pink-100 mb-6">
              Build unique shopping experiences with Index 101 Builder, our React-based framework.
            </p>
          </motion.div>
        </div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-950 rounded-3xl overflow-hidden border border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <div className="space-y-6">
                <button className="w-full text-left px-6 py-4 bg-cyan-500/20 text-cyan-300 rounded-xl font-mono text-sm hover:bg-cyan-500/30 transition-colors">
                  Extend checkout
                </button>
                <button className="w-full text-left px-6 py-4 bg-gray-800 text-gray-400 rounded-xl font-mono text-sm hover:bg-gray-700 transition-colors">
                  Create custom storefronts
                </button>
                <button className="w-full text-left px-6 py-4 bg-gray-800 text-gray-400 rounded-xl font-mono text-sm hover:bg-gray-700 transition-colors">
                  Build apps
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-gray-400 text-xs">index-101 — zsh — 100×30</span>
                </div>
                <pre className="text-green-400">
                  <code>{`> npm your new Index 101 Builder storefront:

  import your new Index 101 Builder storefront:
  ✓ index101-app

  index101-app is ready to build!

  Next steps
    • Run 'cd index101-app' to start your local dev
      server and start building

  Reference
    • Your project displays inventory from 10s
      of 1000s of real stores using Index 101's
      Mock Shop template.`}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-lg font-medium rounded-full hover:bg-gray-100 transition-all hover:shadow-xl"
          >
            Explore dev tools
          </a>
        </motion.div>
      </div>
    </section>
  );
}
