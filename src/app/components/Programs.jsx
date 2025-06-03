'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Utensils, CalendarCheck, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const programs = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your fitness goals with expert coaches ensuring proper form and maximum results.',
    highlight: 'Effective & efficient workouts',
  },
  {
    icon: Utensils,
    title: 'Nutrition Coaching',
    description: 'Personalized nutritional guidance and meal planning to complement your fitness routine and optimize results.',
    highlight: 'Sustainable eating habits',
  },
  {
    icon: CalendarCheck,
    title: '6-Week Kickstart',
    description: 'Structured program designed for rapid yet sustainable transformation through intensive training and nutrition.',
    highlight: 'Jumpstart your fitness journey',
  },
  {
    icon: Clock,
    title: '24-Hour Access',
    description: 'Round-the-clock gym access with state-of-the-art security systems for ultimate flexibility in your schedule.',
    highlight: 'Workout on your time',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/gym-program.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Programs & Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to meet you at your current level and take you to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-900 hover:black border-gray-900 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-red-900/30 group-hover:bg-red-500/20 transition-colors flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{program.description}</p>
                  <div className="inline-block px-3 py-1 bg-red-900/30 text-red-400 text-sm rounded-full">
                    {program.highlight}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Semi-Private Training</h3>
              <p className="text-gray-300 mb-4">
                Experience personalized attention in a small group setting (1-3 people) at an affordable price point. Perfect for those who thrive with both coach guidance and peer motivation.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-red-900/30 rounded-full text-red-400 font-medium">
                Starting at just $49/month
              </div>
            </div>
            <div className="bg-gray-900 text-gray-300 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-red-400">Benefits Include:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Personalized coaching in a small group</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Cost-effective alternative to 1-on-1 training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Community support and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
