'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
  const message = 'Assalamu Alaikum, I would like to book an appointment at Manvi Ruqiya Center.';

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 z-50"
    >
      <MessageCircle className="h-6 w-6" />
      <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
        1
      </div>
    </div>
  );
}