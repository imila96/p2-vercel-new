'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Shield } from 'lucide-react';

export default function CheckoutPerformanceSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background Globe */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] rounded-full border-2 border-white/20" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-white/20" />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            There&apos;s no better place
            <br />
            for you to build
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Checkout Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold mb-8">The world&apos;s best-converting checkout</h3>

            <div className="space-y-8">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-7xl font-bold">15</span>
                  <span className="text-4xl">%</span>
                </div>
                <p className="text-cyan-200 text-sm uppercase tracking-wider mb-2">Higher conversions</p>
                <p className="text-cyan-100">
                  <strong>Index 101 Checkout</strong> converts 15% higher on average than other
                  <br />
                  commerce platforms and exposes your brand to 150 million buy-
                  <br />
                  ready shoppers.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-7xl font-bold">150M</span>
                  <span className="text-4xl">+</span>
                </div>
                <p className="text-cyan-200 text-sm uppercase tracking-wider">Shop account members</p>
              </div>
            </div>

            <p className="text-xs text-cyan-200 mt-8">
              Based on external study with a leading global consulting firm in April 2023.
            </p>
          </motion.div>

          {/* Checkout Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-400 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-12 -right-12 w-32 h-32 bg-pink-400 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 -right-16 w-20 h-20 bg-blue-400 rounded-full opacity-80"
              />

              {/* Checkout card mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 w-96 relative z-10">
                <img
                  src="/images/checkout-preview.jpg"
                  alt="Checkout interface"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Index 101 Capital Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/capital-image.jpg"
                alt="Index 101 Capital"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-8">Index 101 is here to help</h3>
              <p className="text-xl text-cyan-100 mb-8">
                Whether you need help executing the team, ramping up marketing,
                <br />
                or keeping surprise bestsellers in stock, <strong>Index 101 Capital</strong> is here to
                <br />
                lend a hand.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">$5B US loaned out so far</h4>
                    <p className="text-cyan-100">Invested in Index 101 merchants</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Loans up to $5M US</h4>
                    <p className="text-cyan-100">Offers tailored to meet your needs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">0% equity</h4>
                    <p className="text-cyan-100">No stake taken—ever</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
