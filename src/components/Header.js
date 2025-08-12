'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-green-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Bangalore, Karnataka</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>Open: Mon-Fri 9AM-8PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-green-700">
                MANVI RUQIYA CENTER
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="src\pages\Servicespage.tsx" className="text-gray-700 hover:text-green-600 font-medium">
                Services
              </Link>
              <Link href="src\pages\Aboutuspages.tsxt" className="text-gray-700 hover:text-green-600 font-medium">
                About Us
              </Link>
              <Link href="src\pages\Bookingpage.tsx" className="text-gray-700 hover:text-green-600 font-medium">
                Book Appointment
              </Link>
              <Link href="src\pages\Testimonials.tsx" className="text-gray-700 hover:text-green-600 font-medium">
                Testimonials
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <Link href="/booking" className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-4 space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-green-600">
                  Home
                </Link>
                <Link href="\wsl.localhost\Ubuntu\home\saad\manvi-ruqiya-center\src\pages\Servicespage.tsx" className="block text-gray-700 hover:text-green-600">
                  Services
                </Link>
                <Link href="src\pages\Aboutuspages.tsx" className="block text-gray-700 hover:text-green-600">
                  About Us
                </Link>
                <Link href="src\pages\Bookingpage.tsx" className="block text-gray-700 hover:text-green-600">
                  Book Appointment
                </Link>
                <Link href="src\pages\Testimonials.tsx" className="block text-gray-700 hover:text-green-600">
                  Testimonials
                </Link>
                <Link href="/contact" className="block text-gray-700 hover:text-green-600">
                  Contact
                </Link>
                <Link href="src\pages\Bookingpage.tsx" className="block bg-green-600 text-white px-4 py-2 rounded-lg text-center">
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}