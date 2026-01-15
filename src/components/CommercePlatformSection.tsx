'use client';

import { motion } from 'framer-motion';

export default function CommercePlatformSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            The one commerce platform
            <br />
            behind it all
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            <span className="text-gray-300">Sell online and in person. Sell locally and globally.</span>{' '}
            <span className="text-gray-300">Sell direct and wholesale.</span>{' '}
            <span className="font-semibold text-white">Sell on desktop and mobile.</span>
          </p>
        </motion.div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src="/images/product-1.jpg"
              alt="Fashion e-commerce store"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src="/images/product-2.jpg"
              alt="Mobile shopping experience"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src="/images/product-3.jpg"
              alt="Business dashboard"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
