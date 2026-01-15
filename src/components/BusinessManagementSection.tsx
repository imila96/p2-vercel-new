'use client';

import { motion } from 'framer-motion';

export default function BusinessManagementSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-gray-700 rounded-full text-sm font-medium text-gray-300">
            Desktop and mobile
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Take care of business</h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Admin Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl overflow-hidden hover:bg-gray-800 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 p-8">
              <img
                src="/images/admin-dashboard.jpg"
                alt="Index 101 Admin dashboard"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">Manage everything in one place</h3>
              <p className="text-gray-300 mb-6 text-lg">
                From back office to front of store, you're always in control with the
                <br />
                fully centralized <strong>Index 101 Admin</strong>.
              </p>
              <a href="#" className="text-white font-semibold hover:underline inline-flex items-center">
                Learn about Index 101 Admin →
              </a>
            </div>
          </motion.div>

          {/* Mobile App */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl overflow-hidden hover:bg-gray-800 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 p-8 flex items-center justify-center">
              <img
                src="/images/mobile-app.jpg"
                alt="Index 101 mobile app"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">Run your store from anywhere</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Do it all right from your pocket with the full-featured
                <br />
                <strong>Index 101 mobile app</strong>.
              </p>
              <a href="#" className="text-white font-semibold hover:underline inline-flex items-center">
                Download the Index 101 app →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
