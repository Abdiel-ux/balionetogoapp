import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-14 bg-[#000000]">
      <div className="max-w-md mx-auto px-6">
        {/* Header */}
        <h2 className="font-display text-white text-2xl font-bold mb-3">Contact Us</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-10">
          If you need an experienced driver to take you and explore Bali, please contact us.
        </p>

        {/* Contact cards */}
        <div className="space-y-4 mb-10">
          <a
            href="https://wa.me/6285857648051"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:bg-white/10 border border-white  px-5 py-4 transition-colors group justify-center"
          > 
            <div>
              <p className="text-white font-semibold text-xl tracking-wide">+62 858 5764 8051</p>
            </div>
          </a>

          <div className="flex items-center gap-3 text-white/30 text-xs">
            <div className="flex-1 h-px bg-white/10" />
            <span>or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=balionetogo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:bg-white/10 border border-white px-5 py-4 transition-colors group justify-center"
          >
            <div>
              <p className="text-white font-semibold text-xl">balionetogo@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Location note */}
        <div className="flex items-start gap-3 bg-brand-white/10 px-5 py-4 border border-brand-white/20">
          <MapPin size={18} className="text-brand-white flex-shrink-0 mt-0.5" />
          <p className="text-white/70 text-sm leading-relaxed">
            Based in <span className="text-white font-medium">Bali, Indonesia</span> — serving all areas across the island for day trips, airport transfers, and multi-day tours.
          </p>
        </div>
      </div>
    </section>
  );
}
