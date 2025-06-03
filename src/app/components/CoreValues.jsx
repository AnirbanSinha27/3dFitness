'use client'

import { motion } from 'framer-motion';
import { Target, HeartPulse, Gem } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Drive',
    description: 'The inner force that initiates your fitness journey. We ignite that spark through personalized challenges and goal-setting.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: HeartPulse,
    title: 'Dedication',
    description: 'Consistent commitment to your fitness goals. Our coaches provide the accountability needed to stay on track through every workout.',
    color: 'from-red-600 to-pink-600'
  },
  {
    icon: Gem,
    title: 'Discipline',
    description: 'The power to push through when motivation fades. We cultivate mental toughness through structured programs that deliver results.',
    color: 'from-red-700 to-purple-700'
  }
];

export default function CoreValues() {
  return (
    <section className="section-padding bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 "></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">3D Philosophy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-bold">
            At 3D Fitness, we believe true transformation comes from embracing these three core values that define our training philosophy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-black hover:border-black transition-all hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-md text-gray-300 max-w-3xl mx-auto">
            "Our mission is to transform, enhance, and elevate the health and fitness of men, women, and children in the Fort Wayne area not just for themselves but for their loved ones so they can live a longer and healthier lifestyle."
          </p>
        </div>
      </div>
    </section>
  );
}