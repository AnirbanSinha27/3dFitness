'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black border border-black p-8 md:p-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Your Fitness?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Take the first step toward your fitness goals with our expert trainers and proven programs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="red-gradient px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:scale-105 transition-transform"
              >
                Book Free Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="tel:2602034993" 
                className="px-8 py-4 rounded-lg font-bold border-2 border-red-600 flex items-center justify-center hover:bg-red-600/10 transition-colors"
              >
                <Dumbbell className="w-5 h-5 mr-2" />
                Call Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}