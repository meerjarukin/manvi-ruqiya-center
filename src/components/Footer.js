import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">
              MANVI RUQIYA CENTER
            </h3>
            <p className="text-gray-300 mb-4">
              Authentic Islamic healing through Qur'anic treatment, Hijamah, and counseling services in Bangalore.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-green-400">Home</Link>
              <Link href="/services" className="block text-gray-300 hover:text-green-400">Our Services</Link>
              <Link href="/about" className="block text-gray-300 hover:text-green-400">About Us</Link>
              <Link href="/booking" className="block text-gray-300 hover:text-green-400">Book Appointment</Link>
              <Link href="/testimonials" className="block text-gray-300 hover:text-green-400">Testimonials</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-300 hover:text-green-400">Ruqyah Treatment</Link>
              <Link href="/services" className="block text-gray-300 hover:text-green-400">Hijamah Therapy</Link>
              <Link href="/services" className="block text-gray-300 hover:text-green-400">Islamic Counseling</Link>
              <Link href="/services" className="block text-gray-300 hover:text-green-400">Family Sessions</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <span>info@manviruqiya.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-3" />
                <span>Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-400 mr-3" />
                <span>Mon-Fri: 9AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Manvi Ruqiya Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}