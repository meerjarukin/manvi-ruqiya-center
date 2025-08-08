import React, { useState } from 'react';
import { 
  Heart, Shield, Users, Award, MapPin, Phone, Mail, MessageCircle,
  Calendar, Clock, Star, CheckCircle, Target, Book, Zap, Home,
  User, GraduationCap, Globe, ArrowRight, Play, X, Menu,
  Building, Lock, UserCheck, Briefcase, Eye
} from 'lucide-react';

const AboutUsPage = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Sheikh Ahmed Al-Rashid',
      role: 'Senior Ruqyah Practitioner & Director',
      specialization: 'Ruqyah Treatment & Spiritual Healing',
      experience: '15+ Years',
      image: '/api/placeholder/300/300',
      gender: 'Male',
      qualifications: [
        'Masters in Islamic Studies - Al-Azhar University',
        'Certified Ruqyah Practitioner - Islamic Healing Institute',
        'Advanced Training in Spiritual Counseling',
        'Quran Memorization (Hafiz)'
      ],
      languages: ['Arabic', 'English', 'Urdu', 'Hindi'],
      bio: 'Sheikh Ahmed has dedicated over 15 years to authentic Islamic healing practices. Trained in traditional Ruqyah methods, he has helped thousands of patients find spiritual peace and healing through Quranic treatment.',
      achievements: [
        'Treated over 2000+ patients successfully',
        'Author of "Healing Through Quran" book',
        'Regular speaker at Islamic conferences',
        'Established 3 healing centers across India'
      ],
      availability: 'Sunday - Thursday: 9:00 AM - 5:00 PM'
    },
    {
      id: 2,
      name: 'Sister Fatima Khatun',
      role: 'Senior Female Ruqyah Practitioner',
      specialization: 'Women & Children Ruqyah Specialist',
      experience: '12+ Years',
      image: '/api/placeholder/300/300',
      gender: 'Female',
      qualifications: [
        'Islamic Studies Degree - Jamia Islamia',
        'Certified in Child Psychology',
        'Advanced Ruqyah Training Certificate',
        'Family Counseling Certification'
      ],
      languages: ['Arabic', 'English', 'Hindi', 'Bengali'],
      bio: 'Sister Fatima specializes in providing Ruqyah treatment for women and children in a comfortable, private environment. Her gentle approach and deep understanding of Islamic healing make her highly sought after.',
      achievements: [
        'Specialized in treating 1500+ female patients',
        'Expert in children spiritual healing',
        'Conducts women-only Islamic workshops',
        'Trained 50+ female practitioners'
      ],
      availability: 'Monday - Friday: 10:00 AM - 4:00 PM, Saturday: 10:00 AM - 2:00 PM'
    },
    {
      id: 3,
      name: 'Dr. Hassan Ibrahim',
      role: 'Islamic Counselor & Therapist',
      specialization: 'Marriage & Family Counseling',
      experience: '10+ Years',
      image: '/api/placeholder/300/300',
      gender: 'Male',
      qualifications: [
        'PhD in Clinical Psychology',
        'Masters in Islamic Counseling',
        'Licensed Family Therapist',
        'Certified Marriage Counselor'
      ],
      languages: ['Arabic', 'English', 'Urdu'],
      bio: 'Dr. Hassan combines modern psychological methods with Islamic principles to provide holistic counseling services. He specializes in resolving marital conflicts and family issues through Islamic guidance.',
      achievements: [
        'Saved 300+ marriages through counseling',
        'Published research on Islamic psychology',
        'Trains counselors in Islamic methods',
        'Regular contributor to Islamic magazines'
      ],
      availability: 'Tuesday - Saturday: 11:00 AM - 6:00 PM'
    },
    {
      id: 4,
      name: 'Therapist Ali Mahmud',
      role: 'Senior Hijamah Specialist',
      specialization: 'Traditional Cupping Therapy',
      experience: '8+ Years',
      image: '/api/placeholder/300/300',
      gender: 'Male',
      qualifications: [
        'Certified Hijamah Practitioner',
        'Traditional Islamic Medicine Training',
        'First Aid & CPR Certified',
        'Anatomy & Physiology Certificate'
      ],
      languages: ['Arabic', 'English', 'Malayalam'],
      bio: 'Ali is an expert in traditional Hijamah therapy, following authentic Prophetic methods. His precise technique and knowledge of prophetic medicine have made him one of the most trusted cupping specialists.',
      achievements: [
        'Performed 5000+ successful Hijamah sessions',
        'Specialist in chronic pain treatment',
        'Trains new Hijamah practitioners',
        'Expert in prophetic medicine applications'
      ],
      availability: 'Sunday - Thursday: 9:00 AM - 5:00 PM'
    },
    {
      id: 5,
      name: 'Sister Maryam Abdul Rahman',
      role: 'Female Hijamah Specialist',
      specialization: 'Women\'s Cupping Therapy',
      experience: '7+ Years',
      image: '/api/placeholder/300/300',
      gender: 'Female',
      qualifications: [
        'Certified Female Hijamah Practitioner',
        'Women\'s Health Specialist Training',
        'Islamic Medicine Certificate',
        'Hygiene & Safety Certification'
      ],
      languages: ['Arabic', 'English', 'Hindi'],
      bio: 'Sister Maryam provides specialized Hijamah services for women, ensuring complete privacy and comfort. She has extensive experience in treating various women\'s health issues through traditional cupping.',
      achievements: [
        'Treated 2000+ female patients',
        'Specialist in women\'s health conditions',
        'Conducts Hijamah awareness programs',
        'Mentor for female practitioners'
      ],
      availability: 'Monday - Saturday: 10:00 AM - 4:00 PM (Women Only)'
    },
    {
      id: 6,
      name: 'Sister Khadijah Omar',
      role: 'Female Islamic Counselor',
      specialization: 'Women & Youth Counseling',
      experience: '9+ Years',
      image: '/api/placeholder/300/300',
      gender: 'Female',
      qualifications: [
        'Masters in Psychology',
        'Islamic Counseling Certification',
        'Youth Development Training',
        'Trauma Counseling Certificate'
      ],
      languages: ['Arabic', 'English', 'Urdu', 'Hindi'],
      bio: 'Sister Khadijah specializes in counseling women and youth facing various life challenges. Her empathetic approach combined with Islamic wisdom helps clients find solutions aligned with their faith.',
      achievements: [
        'Counseled 1000+ women and youth',
        'Expert in identity and faith issues',
        'Runs women\'s support groups',
        'Author of Islamic self-help articles'
      ],
      availability: 'Sunday - Thursday: 11:00 AM - 5:00 PM (Women Only)'
    }
  ];

  const facilityFeatures = [
    {
      icon: <Building className="w-8 h-8 text-green-600" />,
      title: 'Modern Facility',
      description: 'State-of-the-art facility designed according to Islamic principles with separate entrances and waiting areas for men and women.'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-600" />,
      title: 'Complete Privacy',
      description: 'Soundproof consultation rooms ensuring complete confidentiality and privacy for all patients during treatment sessions.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-green-600" />,
      title: 'Separate Areas',
      description: 'Dedicated spaces for male and female patients with separate treatment rooms, waiting areas, and entrance points.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Safety Standards',
      description: 'Highest hygiene and safety standards with sterilized equipment and trained first-aid certified staff members.'
    }
  ];

  const certifications = [
    {
      title: 'Islamic Healing Institute Certification',
      description: 'Authorized center for authentic Ruqyah treatment',
      year: '2020'
    },
    {
      title: 'Traditional Medicine Council Registration',
      description: 'Licensed for Hijamah and traditional therapy',
      year: '2019'
    },
    {
      title: 'Professional Counseling Association',
      description: 'Certified for Islamic counseling services',
      year: '2021'
    },
    {
      title: 'Health Department License',
      description: 'Approved healthcare facility license',
      year: '2022'
    }
  ];

  const missionValues = [
    {
      icon: <Heart className="w-6 h-6 text-green-600" />,
      title: 'Authentic Healing',
      description: 'Providing genuine Islamic healing methods based on Quran and Sunnah'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: 'Patient Safety',
      description: 'Ensuring the highest standards of safety and hygiene in all treatments'
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: 'Compassionate Care',
      description: 'Treating every patient with dignity, respect, and Islamic values'
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      title: 'Holistic Approach',
      description: 'Addressing physical, mental, and spiritual aspects of healing'
    }
  ];

  const achievements = [
    {
      number: '5000+',
      label: 'Patients Treated',
      icon: <Users className="w-6 h-6" />
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: <Award className="w-6 h-6" />
    },
    {
      number: '98%',
      label: 'Success Rate',
      icon: <Target className="w-6 h-6" />
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: 'Brother Khalid Rahman',
      text: 'The team at Manvi Ruqiya Center completely transformed my life. Their authentic approach to Islamic healing and professional expertise gave me hope when I had none.',
      service: 'Ruqyah Treatment',
      rating: 5,
      location: 'Bengaluru'
    },
    {
      name: 'Sister Aisha Mohamed',
      text: 'Sister Fatima\'s gentle approach and expertise made me feel comfortable throughout my treatment. The separate facilities for women are excellent.',
      service: 'Women\'s Ruqyah',
      rating: 5,
      location: 'Bangalore'
    },
    {
      name: 'Dr. Omar Farooq',
      text: 'As a medical professional, I appreciate their scientific approach combined with authentic Islamic methods. Highly recommended for spiritual healing.',
      service: 'Hijamah Therapy',
      rating: 5,
      location: 'Bengaluru'
    }
  ];

  const TeamMemberModal = ({ member, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Team Member Profile</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-400" />
                </div>
                <div className="text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    member?.gender === 'Male' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-pink-100 text-pink-800'
                  }`}>
                    {member?.gender} Practitioner
                  </span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-2">{member?.name}</h4>
                <p className="text-green-600 font-medium mb-1">{member?.role}</p>
                <p className="text-gray-600 mb-4">{member?.specialization}</p>
                <p className="text-gray-700 mb-6">{member?.bio}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Qualifications</h5>
                    <ul className="space-y-2">
                      {member?.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <GraduationCap className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {member?.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h5 className="font-semibold">Languages</h5>
                      <p className="text-gray-600">{member?.languages.join(', ')}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Experience</h5>
                      <p className="text-green-600 font-medium">{member?.experience}</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Availability</h5>
                    <p className="text-gray-700 text-sm">{member?.availability}</p>
                  </div>
                </div>
              </div>
            </div>
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
                <h1 className="text-2xl font-bold">About Manvi Ruqiya Center</h1>
                <p className="text-green-100">Professional Islamic Healing & Wellness Center</p>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dedicated to Authentic Islamic Healing
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              At Manvi Ruqiya Center, we combine traditional Islamic healing methods with modern healthcare standards to provide comprehensive spiritual, mental, and physical wellness solutions rooted in Quran and Sunnah.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-yellow-300 mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1">{achievement.number}</div>
                  <div className="text-green-200 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To provide authentic Islamic healing services that address the spiritual, mental, and physical aspects of human wellness. We are committed to offering treatments based on Quranic guidance and Prophetic traditions while maintaining the highest standards of professionalism and patient care.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our vision is to become the most trusted center for Islamic healing in the region, helping thousands of people find peace, healing, and spiritual wellness through authentic Islamic methods.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {missionValues.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {value.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:text-right">
                <div className="bg-green-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Authentic Islamic healing methods</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Experienced certified practitioners</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Separate facilities for men and women</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Complete confidentiality and privacy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Modern facility with traditional values</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Holistic approach to healing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team consists of highly qualified Islamic healing practitioners, counselors, and therapists dedicated to providing authentic and professional healthcare services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedTeamMember(member)}
                >
                  <div className="p-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-green-600 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                      <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {member.experience}
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          member.gender === 'Male' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-pink-100 text-pink-800'
                        }`}>
                          {member.gender}
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center mx-auto">
                        View Full Profile
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facility</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our state-of-the-art facility is designed to provide a comfortable, safe, and private environment for all our patients while maintaining the highest standards of hygiene and professionalism.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications</h2>
              <p className="text-lg text-gray-600">
                We are proud to be certified and registered with leading Islamic and healthcare institutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                  <span className="text-green-600 font-medium text-sm">Certified {cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
              <p className="text-lg text-gray-600">
                Read testimonials from patients who have experienced healing and transformation at our center.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.service} • {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
            <p className="text-xl text-green-100 mb-8">
              Our experienced team is here to guide you towards spiritual, mental, and physical wellness through authentic Islamic healing methods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919876543210?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20know%20more%20about%20your%20team%20and%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Team Member Modal */}
      <TeamMemberModal 
        member={selectedTeamMember}
        isOpen={selectedTeamMember !== null}
        onClose={() => setSelectedTeamMember(null)}
      />
    </div>
  );
};

export default AboutUsPage;