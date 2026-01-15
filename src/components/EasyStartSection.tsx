'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function EasyStartSection() {
  return (
    <>
      {/* Easy Start Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
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
              It&apos;s easy to start selling
            </h2>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img
                  src="/images/step-1.jpg"
                  alt="Add your first product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-green-600">01</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Add your first product</h3>
                  <p className="text-gray-600">
                    Upload product images, write descriptions, and set prices in minutes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img
                  src="/images/step-2.jpg"
                  alt="Customize your store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-green-600">02</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Customize your store</h3>
                  <p className="text-gray-600">
                    Choose from beautiful themes or build your own unique design.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img
                  src="/images/step-3.jpg"
                  alt="Set up payments"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-green-600">03</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Set up payments</h3>
                  <p className="text-gray-600">
                    Connect your payment processor and start accepting orders.
                  </p>
                </div>
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
              href="/signup"
              className="inline-flex items-center justify-center px-10 py-5 bg-black text-white text-xl font-medium rounded-full hover:bg-gray-900 transition-all hover:shadow-2xl hover:scale-105 transform"
            >
              Take your shot
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Index 101 Column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-400 text-sm uppercase tracking-wider">Index 101</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investors</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Affiliates</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Service Status</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-400 text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Merchant Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Index 101 Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hire a Partner</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Index 101 Academy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Index 101 Community</a></li>
              </ul>
            </div>

            {/* Developers Column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-400 text-sm uppercase tracking-wider">Developers</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Index 101 dev</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dev Degree</a></li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-400 text-sm uppercase tracking-wider">Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Index 101 Pay</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Index 101 Plus</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Index 101 for Enterprise</a></li>
              </ul>
            </div>

            {/* Global Impact Column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-400 text-sm uppercase tracking-wider">Global impact</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Build Black</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-400 text-sm uppercase tracking-wider">Solutions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Store Builder</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Website Builder</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ecommerce Website</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 50 50" fill="none">
                  <path
                    d="M38.5 11.5c-.3 0-2.7-.1-2.7-.1s-2.2-2.2-2.4-2.4c-.3-.3-.8-.2-1 0l-1.4.4c-.5-1.4-1.3-2.7-2.5-2.7h-.2c-.7-1-1.6-1.5-2.5-1.5-6.2 0-9.2 7.8-10.1 11.8l-4.7 1.5c-1.5.5-1.5.5-1.7 2-.2.9-4.4 34-4.4 34L33.5 45l16-3.5S38.8 11.6 38.5 11.5z"
                    fill="#95BF47"
                  />
                </svg>
                <span className="text-sm text-gray-400">© 2026</span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">English</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  Your Privacy Choices
                  <span className="text-xs bg-blue-500 px-2 py-0.5 rounded">🔒</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
