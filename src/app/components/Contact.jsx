'use client'
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-black relative">
      <div className="absolute inset-0 opacity-5 bg-[url('/grid-pattern.svg')] bg-cover"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Started Today</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visit our premier gym in Fort Wayne and take the first step toward your fitness transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-black"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Our Location</h4>
                  <p className="text-gray-300">
                    4830 Jean Dr, Fort Wayne, IN 46825 :cite[5]
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">
                    (260) 203-4993
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-300">
                    admin@3dfitnessgym.net :cite[5]
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Hours</h4>
                  <p className="text-gray-300">
                    24/7 Access for Members :cite[8]
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Staffed Hours: Mon-Fri 6AM-8PM, Sat 8AM-2PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/3d_fitness_gym/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-700 hover:bg-red-600 flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/3Dfitnessgym/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-700 hover:bg-red-600 flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden h-96">
              {/* Map implementation would go here */}
              <iframe
  title="3D Fitness Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8886108180377!2d-85.13693908459388!3d41.12032727928842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815ef2df515fb71%3A0x1cf989f1c8bff5c!2s3D%20Fitness!5e0!3m2!1sen!2sus!4v1717410900000!5m2!1sen!2sus"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-full rounded-2xl"
/>

            </div>
            
            <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-black">
              <h3 className="text-2xl font-bold mb-6">Book Your Free Consultation</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-700 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-gray-700 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Goals</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-gray-700 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="What are your fitness goals?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="red-gradient w-full py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform border-red"
                >
                  Book Free Session
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}