'use client';

import { motion } from 'framer-motion';

export default function EntrepreneursSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            For everyone from entrepreneurs
            <br />
            to enterprise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Millions of merchants of every size have collectively made over
            <br />
            $1,000,000,000,000 in sales on Index 101.
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Get started fast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/entrepreneur-1.jpg"
                alt="Solo entrepreneur"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Get started fast</h3>
              <p className="text-gray-600 mb-4">
                Solo seller Morgan Dire Camp started <strong>Organic Essentials</strong>, a company to sell their organic
                candles and skincare online and at local farmers' markets.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:underline inline-flex items-center">
                Read their story →
              </a>
            </div>
          </motion.div>

          {/* Grow as big as you want */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/entrepreneur-2.jpg"
                alt="Athletic brand team"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Grow as big as you want</h3>
              <p className="text-gray-600 mb-4">
                Athleisure brand <strong>FitPro Athletics</strong> grew from working out of a garage to the global juggernaut
                it is today, with US$500M+ in revenue.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:underline inline-flex items-centers">
                Read their story →
              </a>
            </div>
          </motion.div>

          {/* Raise the bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/entrepreneur-3.jpg"
                alt="Global toy company headquarters"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Raise the bar</h3>
              <p className="text-gray-600 mb-4">
                With the help of Index 101 for enterprise, <strong>Iconic Toys Inc</strong> sells their iconic toys direct to
                customers around the world.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:underline inline-flex items-centers">
                Read their story →
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-900 transition-all hover:shadow-xl"
          >
            Pick a plan that fits
          </a>
        </motion.div>
      </div>
    </section>
  );
}
