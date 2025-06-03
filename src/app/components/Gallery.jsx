'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Test with placeholder images first to verify if paths are the issue
const galleryImages = [
  { src: '/facility1.jpg', col: 1, rowSpan: 2, alt: 'Main gym area' },
  { src: '/facility2.jpg', col: 2, rowSpan: 1, alt: 'Cardio section' },
  { src: '/facility3.jpg', col: 2, rowSpan: 1, alt: 'Weight area' },
  { src: '/gym-program.jpg', col: 3, rowSpan: 2, alt: 'Locker room' },
  { src: '/facility5.jpg', col: 4, rowSpan: 1, alt: 'Training session' },
  { src: '/facility4.jpg', col: 4, rowSpan: 1, alt: 'Program board' },
];

// Fallback component for missing images
const ImageFallback = ({ alt }) => (
  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
    <span className="text-white">Image not found: {alt}</span>
  </div>
);

export default function Gallery() {
  return (
    <section className="py-16 bg-black">
      <div className="container-custom px-0">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Facilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our state-of-the-art equipment and welcoming training environment
          </p>
        </div>

        {/* Added fixed height to container */}
        <div className="grid grid-cols-4 grid-rows-2 w-full h-[800px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden ${
                image.rowSpan === 2 ? 'row-span-2' : 'row-span-1'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Added error boundary for images */}
              <div className="w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.parentElement.innerHTML = 
                      `<div class="w-full h-full bg-gray-800 flex items-center justify-center">
                        <span class="text-white">Image not found</span>
                       </div>`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}