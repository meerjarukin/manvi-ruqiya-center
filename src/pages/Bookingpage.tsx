import React, { useState } from 'react';
import { 
  Heart, Shield, Users, Clock, DollarSign, CheckCircle, Star, 
  Phone, MessageCircle, Calendar, ArrowRight, Info, AlertTriangle,
  Book, Award, Zap, Target, Play, User, Mail, MapPin, ChevronDown,
  ChevronUp, Menu, X, Home
} from 'lucide-react';

const ServicesDetailPages = () => {
  const [activeService, setActiveService] = useState('ruqyah');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const services = {
    ruqyah: {
      id: 'ruqyah',
      title: 'Ruqyah Treatment',
      subtitle: 'Authentic Qur\'anic Healing & Spiritual Cleansing',
      icon: <Heart className="w-8 h-8" />,
      heroImage: '/api/placeholder/800/400',
      price: '₹2,000',
      duration: '60-90 minutes',
      sessions: '3-5 sessions recommended',
      description: 'Ruqyah is the authentic Islamic method of healing through the recitation of Qur\'anic verses, seeking refuge in Allah, and making du\'a. Our certified practitioners provide comprehensive spiritual healing in a safe, confidential environment.',
      
      benefits: [
        'Relief from spiritual distress and negative influences',
        'Protection from evil eye and black magic',
        'Increased spiritual connection and peace',
        'Healing from unexplained illnesses',
        'Restoration of mental and emotional balance',
        'Enhanced spiritual protection and guidance'
      ],
      
      process: [
        {
          step: 1,
          title: 'Initial Consultation',
          description: 'Discussion of symptoms, spiritual concerns, and medical history'
        },
        {
          step: 2,
          title: 'Assessment',
          description: 'Spiritual assessment to understand the nature of the problem'
        },
        {
          step: 3,
          title: 'Ruqyah Session',
          description: 'Recitation of specific Qur\'anic verses and supplications'
        },
        {
          step: 4,
          title: 'Guidance & Aftercare',
          description: 'Islamic guidance, protective prayers, and follow-up recommendations'
        }
      ],
      
      testimonials: [
        {
          name: 'Sister Fatima A.',
          rating: 5,
          text: 'After years of unexplained anxiety and distress, the Ruqyah treatment completely transformed my life. I found peace and spiritual healing that I never thought possible.',
          service: 'Ruqyah Treatment',
          location: 'Bengaluru'
        },
        {
          name: 'Brother Ahmed K.',
          rating: 5,
          text: 'The practitioner was knowledgeable and compassionate. The treatment helped me overcome spiritual obstacles and strengthened my connection with Allah.',
          service: 'Ruqyah Treatment',
          location: 'Bangalore'
        }
      ],
      
      faqs: [
        {
          question: 'What conditions can Ruqyah help with?',
          answer: 'Ruqyah can help with spiritual ailments such as evil eye, black magic, jinn possession, unexplained illnesses, anxiety, depression, and various psychological disturbances that have no clear medical cause.'
        },
        {
          question: 'Is Ruqyah safe?',
          answer: 'Yes, Ruqyah is completely safe as it involves only the recitation of Qur\'anic verses and Islamic supplications. It has no side effects and is the Sunnah method of spiritual healing.'
        },
        {
          question: 'How many sessions do I need?',
          answer: 'The number of sessions varies depending on the individual case. Some people may feel relief after one session, while others may need 3-5 sessions or more for complete healing.'
        },
        {
          question: 'Can I bring a family member?',
          answer: 'Yes, you can bring a mahram (for opposite gender) or family member for support during the session, especially if you\'re feeling anxious or uncomfortable.'
        }
      ],
      
      preparations: [
        'Perform Wudu (ablution) before coming',
        'Come with a clean heart and sincere intention',
        'Avoid listening to music or watching inappropriate content before the session',
        'Bring any relevant medical reports if you have unexplained symptoms',
        'Be prepared to discuss your symptoms openly and honestly'
      ]
    },
    
    hijamah: {
      id: 'hijamah',
      title: 'Hijamah Therapy',
      subtitle: 'Traditional Cupping Following Prophetic Sunnah',
      icon: <Shield className="w-8 h-8" />,
      heroImage: '/api/placeholder/800/400',
      price: '₹1,500',
      duration: '45-60 minutes',
      sessions: '1-3 sessions as needed',
      description: 'Hijamah (cupping therapy) is a Prophetic Sunnah practiced for over 1400 years. Our certified therapists provide both wet and dry cupping following traditional Islamic methods for physical and spiritual wellness.',
      
      benefits: [
        'Detoxification and blood purification',
        'Relief from chronic pain and headaches',
        'Improved blood circulation',
        'Stress reduction and relaxation',
        'Enhanced immune system function',
        'Treatment for various physical ailments'
      ],
      
      process: [
        {
          step: 1,
          title: 'Health Assessment',
          description: 'Medical history review and examination of areas to be treated'
        },
        {
          step: 2,
          title: 'Preparation',
          description: 'Sterilization of equipment and preparation of cupping points'
        },
        {
          step: 3,
          title: 'Cupping Treatment',
          description: 'Application of cups using wet or dry cupping technique'
        },
        {
          step: 4,
          title: 'Aftercare',
          description: 'Post-treatment care instructions and follow-up recommendations'
        }
      ],
      
      testimonials: [
        {
          name: 'Brother Hassan M.',
          rating: 5,
          text: 'I suffered from chronic back pain for years. After just two Hijamah sessions, my pain reduced significantly. The therapist was professional and knowledgeable.',
          service: 'Hijamah Therapy',
          location: 'Bengaluru'
        },
        {
          name: 'Sister Aisha R.',
          rating: 5,
          text: 'The Hijamah treatment helped me with my migraines and general fatigue. I feel more energetic and healthy after the sessions.',
          service: 'Hijamah Therapy',
          location: 'Bangalore'
        }
      ],
      
      faqs: [
        {
          question: 'What is the difference between wet and dry cupping?',
          answer: 'Wet cupping involves making small incisions to draw out blood, while dry cupping only creates suction without blood extraction. Wet cupping is more detoxifying, while dry cupping is gentler.'
        },
        {
          question: 'Is Hijamah painful?',
          answer: 'Most patients experience minimal discomfort. The suction creates a pulling sensation, and wet cupping may cause slight pain during incisions, but it\'s generally well-tolerated.'
        },
        {
          question: 'How often should I get Hijamah?',
          answer: 'For general wellness, once a month is recommended. For specific conditions, your therapist will recommend an appropriate frequency based on your needs.'
        },
        {
          question: 'Are there any side effects?',
          answer: 'Side effects are minimal and may include temporary circular marks, mild soreness, or slight dizziness. These typically resolve within a few days.'
        }
      ],
      
      preparations: [
        'Avoid heavy meals 2-3 hours before treatment',
        'Stay well-hydrated before and after the session',
        'Wear loose, comfortable clothing',
        'Inform the therapist about any medications or health conditions',
        'Avoid strenuous exercise for 24 hours after treatment'
      ]
    },
    
    counselling: {
      id: 'counselling',
      title: 'Islamic Counselling',
      subtitle: 'Professional Counseling Rooted in Islamic Principles',
      icon: <Users className="w-8 h-8" />,
      heroImage: '/api/placeholder/800/400',
      price: '₹1,200',
      duration: '50 minutes',
      sessions: '4-8 sessions recommended',
      description: 'Our Islamic counselling services combine professional psychological support with Islamic guidance to help individuals and families overcome life challenges while strengthening their relationship with Allah.',
      
      benefits: [
        'Resolution of marital and family conflicts',
        'Guidance through life transitions and challenges',
        'Support for anxiety, depression, and stress',
        'Strengthening of Islamic identity and practice',
        'Development of healthy coping mechanisms',
        'Spiritual guidance aligned with Islamic values'
      ],
      
      process: [
        {
          step: 1,
          title: 'Initial Assessment',
          description: 'Understanding your concerns, background, and counselling goals'
        },
        {
          step: 2,
          title: 'Treatment Planning',
          description: 'Developing a personalized approach combining Islamic guidance and psychology'
        },
        {
          step: 3,
          title: 'Counselling Sessions',
          description: 'Regular sessions focusing on specific issues and Islamic solutions'
        },
        {
          step: 4,
          title: 'Follow-up & Growth',
          description: 'Continued support and guidance for long-term spiritual and emotional wellness'
        }
      ],
      
      testimonials: [
        {
          name: 'Sister Khadijah S.',
          rating: 5,
          text: 'The Islamic counselling helped save my marriage. The counselor provided practical Islamic solutions that transformed our relationship and brought us closer to Allah.',
          service: 'Marriage Counselling',
          location: 'Bengaluru'
        },
        {
          name: 'Brother Omar F.',
          rating: 5,
          text: 'I was struggling with anxiety and loss of faith. The counselor helped me reconnect with my Islamic values and find peace through proper understanding of Islam.',
          service: 'Personal Counselling',
          location: 'Bangalore'
        }
      ],
      
      faqs: [
        {
          question: 'How is Islamic counselling different from regular counselling?',
          answer: 'Islamic counselling integrates Islamic principles, Qur\'anic guidance, and Prophetic wisdom with modern psychological techniques, ensuring that solutions align with Islamic values and beliefs.'
        },
        {
          question: 'Do I need to be practicing to receive Islamic counselling?',
          answer: 'No, Islamic counselling is for all Muslims regardless of their level of practice. It can actually help strengthen your relationship with Islam and guide you toward better practice.'
        },
        {
          question: 'Is everything I share kept confidential?',
          answer: 'Yes, complete confidentiality is maintained unless there\'s a risk of harm to yourself or others. Your privacy and trust are of utmost importance to us.'
        },
        {
          question: 'Can couples attend sessions together?',
          answer: 'Yes, we offer both individual and couples counselling sessions. Joint sessions can be very effective for resolving marital and relationship issues.'
        }
      ],
      
      preparations: [
        'Come with an open mind and willingness to change',
        'Prepare to discuss your concerns honestly',
        'Bring any relevant documents (for legal/family issues)',
        'Set realistic expectations for the counselling process',
        'Make du\'a for guidance and success in your healing journey'
      ]
    }
  };

  const currentService = services[activeService];

  const ServiceNavigation = () => (
    <div className="bg-white border-b sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto">
          {Object.values(services).map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center space-x-2 py-4 px-2 whitespace-nowrap border-b-2 transition-colors ${
                activeService === service.id
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-green-600'
              }`}
            >
              {service.icon}
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const TestimonialModal = ({ testimonial, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-xl font-semibold">Patient Testimonial</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg">{testimonial?.name}</h4>
              <p className="text-green-600 text-sm">{testimonial?.service}</p>
              <p className="text-gray-500 text-sm">{testimonial?.location}</p>
            </div>
            <div className="flex justify-center mb-4">
              {[...Array(testimonial?.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">{testimonial?.text}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-yellow-300">
                <Home className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold">Our Services</h1>
                <p className="text-green-100">Professional Islamic healing and wellness</p>
              </div>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Service Navigation */}
      <ServiceNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-yellow-300">
                  {currentService.icon}
                </div>
                <span className="text-yellow-300 font-medium">Professional Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentService.title}</h1>
              <p className="text-xl text-green-100 mb-6">{currentService.subtitle}</p>
              <p className="text-lg leading-relaxed mb-8">{currentService.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <DollarSign className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{currentService.price}</div>
                  <div className="text-sm text-green-200">Per Session</div>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{currentService.duration.split(' ')[0]}</div>
                  <div className="text-sm text-green-200">Minutes</div>
                </div>
                <div className="text-center">
                  <Target className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{currentService.sessions.split(' ')[0]}</div>
                  <div className="text-sm text-green-200">Sessions</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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
            
            <div className="lg:text-right">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{currentService.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-bold text-yellow-300">{currentService.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span className="font-medium">{currentService.sessions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="font-medium text-green-200">Daily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Benefits of {currentService.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Treatment Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentService.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {index < currentService.process.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Patients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {currentService.testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setActiveTestimonial(testimonial)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3">{testimonial.text}</p>
                  <p className="text-sm text-green-600 font-medium">{testimonial.service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Guidelines */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How to Prepare for Your Session
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Info className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Important Preparation Steps</h3>
              </div>
              <ul className="space-y-4">
                {currentService.preparations.map((prep, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-green-600 text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{prep}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {currentService.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards spiritual and physical wellness with our professional {currentService.title.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-colors flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="font-semibold">Call Us</p>
              <p className="text-green-200">+91 98765 43210</p>
            </div>
            <div className="text-center">
              <MessageCircle className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="font-semibold">WhatsApp</p>
              <p className="text-green-200">24/7 Available</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="font-semibold">Visit Us</p>
              <p className="text-green-200">Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919876543210?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Testimonial Modal */}
      <TestimonialModal 
        testimonial={activeTestimonial}
        isOpen={activeTestimonial !== null}
        onClose={() => setActiveTestimonial(null)}
      />
    </div>
  );
};

export default ServicesDetailPages;