'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Shannon',
    achievement: 'Lost 70 pounds, lowered body fat by over 20%',
    quote: 'Gained strength & mobility! Feeling empowered & confident!',
    full: 'Lost 70 Pounds Lowered Body Fat by over 20%, Gained Strength & Mobility! Feeling Empowered & Confident!'
  },
  {
    name: 'Anita Cuatle',
    achievement: 'Lost 100 pounds, improved upper body strength & balance',
    quote: 'Feeling confident & strong!',
    full: 'Lost 100 Pounds Improved Upper Body Strength & Balance Feeling Confident & Strong!'
  },
  {
    name: 'Mitch',
    achievement: 'Lost 21.4 pounds, decreased body fat from 24.4% to 16.2%',
    quote: 'Feeling happier & more confident!',
    full: 'Lost 21.4 Pounds Body Fat: 24.4➡️16.2 Feeling Happier & More Confident!'
  },
  {
    name: 'Julie & Jan',
    achievement: 'Couple fitness transformation',
    quote: 'The dedicated and friendly owners make it a comfortable experience',
    full: 'The best thing about 3D Fitness is we are able to train together and equally be challenged. The dedicated and friendly owners, trainers and members of 3D Fitness make it a comfortable and welcoming experience.'
  },
  {
    name: 'Mabel & Sherwin',
    achievement: 'Consistent members for over a year',
    quote: 'Literally hooked! I hate missing a day!',
    full: "I have never committed to any workouts, gym, or hobby for more than a few months. It's been a year and a half since I started working out at 3D Fitness, and I'm literally hooked! I hate missing a day!"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="results" className="section-padding bg-gradient-to-br from-gray-950 to-black relative overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Transformations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join hundreds of members who have transformed their bodies and lives at 3D Fitness.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-black  rounded-2xl p-8 text-center"
            >
              <div className="flex flex-col items-center mb-6">
  <div className="w-12 h-12 flex items-center justify-center mr-2">
    <Quote className="w-5 h-5 text-red-500 rotate-180" />
  </div>
  <div className="w-12 h-12 rounded-full overflow-hidden mt-3">
    <img
      src={`/${index + 1}.png`} // you can replace with actual file names like `/avatars/shannon.jpg`
      alt={testimonials[index].name}
      className="w-full h-full object-cover"
    />
  </div>
</div>

              <h3 className="text-xl font-bold">{testimonials[index].name}</h3>
              <p className="text-red-400 text-sm mb-4">{testimonials[index].achievement}</p>
              <p className="text-gray-300 italic mb-4">"{testimonials[index].quote}"</p>
              <p className="text-gray-500 text-sm">{testimonials[index].full}</p>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? 'bg-red-500' : 'bg-gray-600'
                } transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
