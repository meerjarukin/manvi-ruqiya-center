import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageCircle, ChevronLeft, ChevronRight, Check, AlertCircle, MapPin, CreditCard, Users, Heart, Shield } from 'lucide-react';

const BookingSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPractitioner, setSelectedPractitioner] = useState('');
  const [genderPreference, setGenderPreference] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    healthConditions: '',
    previousTreatment: '',
    urgency: '',
    specialRequests: ''
  });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  // Services data
  const services = [
    {
      id: 'ruqyah',
      name: 'Ruqyah Treatment',
      duration: '60-90 minutes',
      price: '₹2,000',
      description: 'Qur\'anic healing and spiritual cleansing',
      icon: <Heart className="w-6 h-6" />,
      practitioners: ['Sheikh Ahmed', 'Sister Fatima']
    },
    {
      id: 'hijamah',
      name: 'Hijamah Therapy',
      duration: '45-60 minutes',
      price: '₹1,500',
      description: 'Traditional cupping therapy following Prophetic Sunnah',
      icon: <Shield className="w-6 h-6" />,
      practitioners: ['Therapist Ali', 'Sister Maryam']
    },
    {
      id: 'counselling',
      name: 'Islamic Counselling',
      duration: '50 minutes',
      price: '₹1,200',
      description: 'Professional counseling rooted in Islamic principles',
      icon: <Users className="w-6 h-6" />,
      practitioners: ['Counselor Hassan', 'Sister Khadijah']
    },
    {
      id: 'family',
      name: 'Family Session',
      duration: '90-120 minutes',
      price: '₹3,500',
      description: 'Combined treatment for families',
      icon: <Users className="w-6 h-6" />,
      practitioners: ['Sheikh Ahmed', 'Sister Fatima']
    }
  ];

  // Available time slots (would normally come from backend)
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isToday = date.toDateString() === new Date().toDateString();
      const isPast = date < new Date().setHours(0, 0, 0, 0);
      const isWeekend = date.getDay() === 0; // Sunday
      
      days.push({
        day,
        date: date.toISOString().split('T')[0],
        isToday,
        isPast,
        isWeekend,
        isAvailable: !isPast && !isWeekend
      });
    }
    
    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingComplete(true);
    }, 2000);
  };

  const getSelectedService = () => {
    return services.find(service => service.id === selectedService);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedService && genderPreference;
      case 2:
        return selectedDate && selectedTime && selectedPractitioner;
      case 3:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.gender;
      case 4:
        return true;
      default:
        return false;
    }
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment has been successfully booked. You will receive a confirmation email and SMS shortly.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold mb-2">Appointment Details:</h3>
            <p><strong>Service:</strong> {getSelectedService()?.name}</p>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Time:</strong> {selectedTime}</p>
            <p><strong>Practitioner:</strong> {selectedPractitioner}</p>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
              Add to Calendar
            </button>
            <button 
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => window.location.reload()}
            >
              Book Another Appointment
            </button>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Need to contact us?</strong><br />
              WhatsApp: +91 98765 43210<br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-gray-800 mr-4">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-green-800">Book Appointment</h1>
            </div>
            <div className="text-sm text-gray-600">
              Step {currentStep} of 4
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step <= currentStep ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step < currentStep ? <Check className="w-4 h-4" /> : step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step < currentStep ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={currentStep >= 1 ? 'text-green-600' : 'text-gray-500'}>Select Service</span>
            <span className={currentStep >= 2 ? 'text-green-600' : 'text-gray-500'}>Choose Date & Time</span>
            <span className={currentStep >= 3 ? 'text-green-600' : 'text-gray-500'}>Personal Details</span>
            <span className={currentStep >= 4 ? 'text-green-600' : 'text-gray-500'}>Confirmation</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Service</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-green-600 mt-1">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            <Clock className="w-4 h-4 inline mr-1" />
                            {service.duration}
                          </span>
                          <span className="font-semibold text-green-600">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Gender Preference
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-4 border-2 rounded-lg text-center transition-all ${
                      genderPreference === 'male'
                        ? 'border-green-600 bg-green-50 text-green-800'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setGenderPreference('male')}
                  >
                    <User className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">Male Practitioner</div>
                    <div className="text-sm text-gray-600">For male patients</div>
                  </button>
                  <button
                    className={`p-4 border-2 rounded-lg text-center transition-all ${
                      genderPreference === 'female'
                        ? 'border-green-600 bg-green-50 text-green-800'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setGenderPreference('female')}
                  >
                    <User className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">Female Practitioner</div>
                    <div className="text-sm text-gray-600">For female patients</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Date & Time</h2>
              
              {/* Selected Service Summary */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-green-800">{getSelectedService()?.name}</h3>
                    <p className="text-sm text-green-600">{getSelectedService()?.duration} • {getSelectedService()?.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-600">Gender Preference</p>
                    <p className="font-medium text-green-800 capitalize">{genderPreference}</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => {
                        if (currentMonth === 0) {
                          setCurrentMonth(11);
                          setCurrentYear(currentYear - 1);
                        } else {
                          setCurrentMonth(currentMonth - 1);
                        }
                      }}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 className="text-lg font-semibold">
                      {monthNames[currentMonth]} {currentYear}
                    </h3>
                    <button
                      onClick={() => {
                        if (currentMonth === 11) {
                          setCurrentMonth(0);
                          setCurrentYear(currentYear + 1);
                        } else {
                          setCurrentMonth(currentMonth + 1);
                        }
                      }}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {generateCalendarDays().map((day, index) => (
                      <button
                        key={index}
                        disabled={!day || !day.isAvailable}
                        className={`p-2 text-center text-sm h-10 rounded transition-colors ${
                          !day
                            ? ''
                            : day.date === selectedDate
                            ? 'bg-green-600 text-white'
                            : day.isAvailable
                            ? 'hover:bg-green-100 text-gray-900'
                            : 'text-gray-400 cursor-not-allowed'
                        }`}
                        onClick={() => day && day.isAvailable && setSelectedDate(day.date)}
                      >
                        {day && day.day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Available Times</h3>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          className={`p-3 border rounded-lg text-center transition-all ${
                            selectedTime === time
                              ? 'border-green-600 bg-green-600 text-white'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <Calendar className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p>Please select a date first</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Practitioner Selection */}
              {selectedDate && selectedTime && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Choose Practitioner</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {getSelectedService()?.practitioners
                      .filter(practitioner => 
                        genderPreference === 'male' 
                          ? !practitioner.includes('Sister') 
                          : practitioner.includes('Sister')
                      )
                      .map((practitioner) => (
                        <button
                          key={practitioner}
                          className={`p-4 border-2 rounded-lg text-left transition-all ${
                            selectedPractitioner === practitioner
                              ? 'border-green-600 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => setSelectedPractitioner(practitioner)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">{practitioner}</p>
                              <p className="text-sm text-gray-600">Available</p>
                            </div>
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Personal Details */}
          {currentStep === 3 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your age"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full address"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Health Conditions / Concerns
                </label>
                <textarea
                  value={formData.healthConditions}
                  onChange={(e) => handleInputChange('healthConditions', e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Please describe any health conditions or specific concerns you'd like us to know about"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Treatment
                  </label>
                  <select
                    value={formData.previousTreatment}
                    onChange={(e) => handleInputChange('previousTreatment', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="first-time">First Time</option>
                    <option value="returning">Returning Patient</option>
                    <option value="referred">Referred by Someone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="routine">Routine</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows={2}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Any special requests or accommodations needed"
                />
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Your Appointment</h2>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Appointment Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{getSelectedService()?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{getSelectedService()?.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Practitioner:</span>
                      <span className="font-medium">{selectedPractitioner}</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-gray-600">Total Cost:</span>
                      <span className="font-bold text-lg text-green-600">{getSelectedService()?.price}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-2">
                    <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Gender:</strong> {formData.gender}</p>
                    {formData.age && <p><strong>Age:</strong> {formData.age}</p>}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-yellow-800 mb-1">Important Notes:</p>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• Please arrive 10 minutes before your appointment</li>
                      <li>• Bring a valid ID and any relevant medical documents</li>
                      <li>• Cancellations must be made at least 24 hours in advance</li>
                      <li>• Payment can be made at the center (cash/card accepted)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Contact Information</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-green-600 mr-2" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>WhatsApp Available</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-green-600 mr-2" />
                    <span>Bengaluru, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  isStepValid()
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Booking...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919876543210?text=Assalamu%20Alaikum,%20I%20need%20help%20with%20my%20appointment%20booking"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default BookingSystem;