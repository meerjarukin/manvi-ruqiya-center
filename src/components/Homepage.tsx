import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MessageCircle, Star, Clock, MapPin, Mail, Users, Shield, Award, Heart, Play, Menu, X } from 'lucide-react';

const ManviRuqiyaCenter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // Mock data for reviews/testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sister Fatima",
      service: "Ruqyah Treatment",
      content: "The treatment here completely changed my life. After months of spiritual distress, I found peace and healing through their authentic Ruqyah sessions.",
      rating: 5,
      videoThumbnail: "/api/placeholder/350/200"
    },
    {
      id: 2,
      name: "Brother Ahmed",
      service: "Hijamah Therapy",
      content: "Professional and caring service. The hijamah treatment helped with my chronic pain and I felt spiritually rejuvenated.",
      rating: 5,
      videoThumbnail: "/api/placeholder/350/200"
    },
    {
      id: 3,
      name: "Sister Aisha",
      service: "Islamic Counselling",
      content: "The counseling sessions provided me with Islamic guidance during my difficult times. Highly recommend their services.",
      rating: 5,
      videoThumbnail: "/api/placeholder/350/200"
    }
  ];

  const services = [
    {
      icon: <Heart className="w-12 h-12 text-green-600 mb-4" />,
      title: "Ruqyah Treatment",
      description: "Authentic Qur'anic healing through recitation and spiritual cleansing in a safe, confidential environment.",
      features: ["Individual Sessions", "Family Treatment", "Follow-up Support"]
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600 mb-4" />,
      title: "Hijamah Therapy",
      description: "Traditional cupping therapy following Prophetic Sunnah for physical and spiritual wellness.",
      features: ["Wet Cupping", "Dry Cupping", "Prophetic Points"]
    },
    {
      icon: <Users className="w-12 h-12 text-green-600 mb-4" />,
      title: "Islamic Counselling",
      description: "Professional counseling services rooted in Islamic principles for mental and spiritual wellbeing.",
      features: ["Marriage Counseling", "Youth Guidance", "Family Therapy"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400 mb-2" />,
      title: "Experienced Practitioners",
      description: "Certified and experienced Islamic healers with proven track records"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400 mb-2" />,
      title: "Safe & Confidential",
      description: "Complete privacy and safety in all our treatments and consultations"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400 mb-2" />,
      title: "Separate Facilities",
      description: "Dedicated spaces for men and women ensuring comfort and privacy"
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-400 mb-2" />,
      title: "Personalized Care",
      description: "Tailored treatment plans based on individual needs and conditions"
    }
  ];

  // WhatsApp Chat Component
  const WhatsAppChat = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/1234567890?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );

  // Video Modal Component
  const VideoModal = ({ isOpen, onClose, testimonial }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-xl font-semibold">Customer Testimonial</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-600">Video testimonial would play here</p>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg">{testimonial?.name}</h4>
              <p className="text-green-600 mb-2">{testimonial?.service}</p>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial?.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white fixed w-full top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Manvi Ruqiya Center</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-300 transition-colors">Home</a>
              <a href="#services" className="hover:text-yellow-300 transition-colors">Services</a>
              <a href="#about" className="hover:text-yellow-300 transition-colors">About</a>
              <a href="#testimonials" className="hover:text-yellow-300 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="hover:text-yellow-300 transition-colors py-2">Home</a>
                <a href="#services" className="hover:text-yellow-300 transition-colors py-2">Services</a>
                <a href="#about" className="hover:text-yellow-300 transition-colors py-2">About</a>
                <a href="#testimonials" className="hover:text-yellow-300 transition-colors py-2">Reviews</a>
                <a href="#contact" className="hover:text-yellow-300 transition-colors py-2">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Manvi Ruqiya Center</h1>
          <p className="text-xl md:text-2xl text-yellow-300 mb-6">Qur'anic Treatment & Spiritual Healing</p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            "We send down the Qur'an as healing and mercy to those who believe" - Qur'an 17:82
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Experience authentic Islamic healing through Ruqyah, Hijamah, and spiritual counseling in a safe, confidential environment with separate facilities for men and women.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="text-left space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Reviews Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Patient Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48 bg-gray-300 flex items-center justify-center cursor-pointer"
                     onClick={() => setActiveVideo(testimonial)}>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <button className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors">
                      <Play className="w-8 h-8" />
                    </button>
                  </div>
                  <div className="text-white text-center">
                    <p className="text-sm">Click to play testimonial</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{testimonial.name}</h4>
                  <p className="text-green-600 text-sm mb-3">{testimonial.service}</p>
                  <p className="text-gray-700 text-sm">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Manvi Ruqiya Center</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 98765 43211</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-sm text-gray-500">24/7 Available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@manviruqiya.com</p>
              <p className="text-gray-600">appointments@manviruqiya.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
              <p className="text-gray-600">Sat: 10AM-4PM</p>
              <p className="text-gray-600">Sun: By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1: Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-yellow-300 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-yellow-300 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-yellow-300 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
                <li><a href="#book" className="hover:text-yellow-300 transition-colors">Book Appointment</a></li>
                <li><a href="#faq" className="hover:text-yellow-300 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#ruqyah" className="hover:text-yellow-300 transition-colors">Ruqyah Treatment</a></li>
                <li><a href="#hijamah" className="hover:text-yellow-300 transition-colors">Hijamah Therapy</a></li>
                <li><a href="#counselling" className="hover:text-yellow-300 transition-colors">Islamic Counselling</a></li>
                <li><a href="#emergency" className="hover:text-yellow-300 transition-colors">Emergency Consultation</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p>123 Islamic Center Road</p>
                    <p>Bengaluru, Karnataka 560001</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <p>info@manviruqiya.com</p>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Column 4: Opening Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>By Appointment</span>
                </div>
                <p className="text-sm text-gray-300 mt-3">
                  *Separate timings for women services
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p>&copy; 2025 Manvi Ruqiya Center. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#privacy" className="text-sm hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <span className="text-sm">|</span>
              <a href="#terms" className="text-sm hover:text-yellow-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Button */}
      <WhatsAppChat />

      {/* Video Modal */}
      <VideoModal 
        isOpen={activeVideo !== null} 
        onClose={() => setActiveVideo(null)} 
        testimonial={activeVideo} 
      />
    </div>
  );
};

export default ManviRuqiyaCenter;