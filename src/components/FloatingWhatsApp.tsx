import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918889192854"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
