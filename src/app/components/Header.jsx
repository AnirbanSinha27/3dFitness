'use client'

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Programs', href: '#programs' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Results', href: '#results' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="#home" className="flex items-center">
          <div className="relative w-16 h-16">
            <Image 
              src="/logo.png" 
              alt="3D Fitness Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            3D FITNESS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium hover:text-red-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link 
          href="#contact" 
          className="hidden md:block red-gradient px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
        >
          Book Consultation
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-200 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-lg pt-24">
          <div className="container-custom flex flex-col space-y-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium hover:text-red-400 transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="red-gradient px-6 py-4 rounded-lg font-bold text-center mt-8"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}