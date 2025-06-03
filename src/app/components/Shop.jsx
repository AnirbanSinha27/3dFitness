'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ShopGuideSection() {
  return (
    <section className="relative min-h-[80vh] bg-black text-white flex items-center justify-center">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/veggies.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 container-custom text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
          Shop for Food Like a Fitness Pro
        </h2>
        <p className="text-lg md:text-md text-gray-200 max-w-3xl mx-auto mb-8">
          Download our guide to navigating the grocery store like a pro. Discover the top tips and tricks for smarter shopping, healthier choices, and stress-free food runs.
        </p>
        <Link
          href="#"
          className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 transition-colors font-bold text-lg"
        >
          Get My Guide
          <ArrowRight className="ml-3 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
