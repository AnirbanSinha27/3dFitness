'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Vel Bates',
    role: 'Owners/Head Trainers',
    bio: 'With over 20 years combined experience in fitness training, Chris and Nancy founded 3D Fitness to create a gym that embodies their core values of Drive, Dedication, and Discipline.',
    image: '/vel.png'
  },
  {
    name: 'Lex C',
    role: 'Certified Personal Trainer',
    bio: 'Specializing in strength training and mobility, Lex helps members build functional strength while preventing injuries.',
    image: '/chris.png'
  },
  {
    name: 'Chris Nino',
    role: 'Client Success Manager',
    bio: 'a Purdue business student and lifelong soccer enthusiast, is our friendly Client Success Manager who loves fitness, family, and being part of the 3D Fitness team.',
    image: '/nino.png'
  }
  // Add more team members as needed
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Our Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our certified trainers are dedicated to helping you achieve your fitness goals through personalized guidance and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900/50 border border-black rounded-sm overflow-hidden transition-colors group"
            >
              <div className="relative h-70 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover  transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-red-500 font-medium mb-4">{member.role}</div>
                <p className="text-gray-300">{member.bio}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-800 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}