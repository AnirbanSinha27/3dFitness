'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-red-800 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 lg:mt-0"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 mb-6">
            <Dumbbell className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-sm font-medium">PREMIER GYM IN FORT WAYNE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Body With 
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"> Drive</span>,
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"> Dedication</span>,
            <span className="bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent"> Discipline</span>
          </h1>
          
          <p className="hidden sm:block text-xl text-gray-300 mb-10 max-w-2xl">
            3D Fitness is Fort Wayne's premier gym, helping individuals achieve their physical and mental fitness goals through personalized training and nutritional guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#programs" 
              className="red-gradient px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:scale-105 transition-transform"
            >
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 rounded-lg font-bold border-2 border-red-600 flex items-center justify-center hover:bg-red-600/10 transition-colors"
            >
              Book Free Session
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square w-full overflow-hidden border-4 border-red-600/30 shadow-2xl">
            <div className="absolute inset-0 bg-[url('/gym-interior.png')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-950"></div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">100+</div>
                <div className="text-sm text-gray-300">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">24/7</div>
                <div className="text-sm text-gray-300">Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">70-100</div>
                <div className="text-sm text-gray-300">Pounds Lost</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
