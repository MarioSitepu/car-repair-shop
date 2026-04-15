import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6285262065007?text=Halo%20Bengkel%20Sitepu%20Medan%2C%20saya%20ingin%20konsultasi%20servis%20mobil%2Fpickup..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-4 sm:p-5 rounded-4xl shadow-2xl shadow-green-500/20 hover:scale-110 active:scale-95 transition-all duration-500 flex items-center justify-center group border border-white/20 backdrop-blur-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] text-xs font-black uppercase tracking-widest font-heading">
        Tanya Mekanik
      </span>
    </a>
  );
}
