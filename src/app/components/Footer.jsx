'use client'

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-12 h-12">
                <img 
                  src="/logo.png" 
                  alt="3D Fitness Logo" 
                  className="object-contain"
                />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                3D FITNESS
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Fort Wayne's premier gym helping individuals achieve their physical and mental fitness goals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/3d_fitness_gym/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/3Dfitnessgym/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-gray-400 hover:text-red-500 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="text-gray-400 hover:text-red-500 transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-gray-400 hover:text-red-500 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-red-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">4830 Jean Dr, Fort Wayne, IN 46825</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">(260) 203-4993</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">admin@3dfitnessgym.net</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">24/7 Member Access</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6AM - 8PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8AM - 2PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
              <li className="pt-4 text-sm">
                * Staffed hours. Members have 24/7 access with key fob.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} 3D Fitness. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}