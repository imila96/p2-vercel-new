'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Background video/image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <img
          src="/images/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Be the next
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              unicorn startup
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Dream big, build fast, and
            <br />
            grow far on Index 101.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="px-8 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-900 transition-all hover:shadow-2xl hover:scale-105 transform"
            >
              Start for free
            </a>
            <button className="flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-medium rounded-full hover:border-gray-400 transition-all hover:shadow-xl group">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center group-hover:bg-gray-50">
                <Play className="w-5 h-5 fill-current" />
              </div>
              Why we build Index 101
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
