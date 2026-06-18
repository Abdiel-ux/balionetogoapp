import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Users } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'Very experienced driver, the trip felt safe and comfortable. Highly recommend for anyone visiting Bali!',
    name: 'Andi Pratama',
    role: 'Customer',
    rating: 5,
  },
  {
    id: 2,
    quote: 'The driver was very professional and knew all the best spots. Made our family trip truly memorable.',
    name: 'Sarah Johnson',
    role: 'Tourist from Australia',
    rating: 5,
  },
  {
    id: 3,
    quote: 'On time, friendly, and spoke great English. The car was clean and comfortable throughout our tour.',
    name: 'Kenji Tanaka',
    role: 'Tourist from Japan',
    rating: 5,
  },
];

const features = [
  { icon: Star, label: 'Top Rated' },
  { icon: Users, label: 'Local Experts' },
];

export default function Drivers() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="about" className="py-14 bg-[#F8F7F4]">
      <div className="max-w-md mx-auto px-6">
        {/* Header */}
        <h2 className="font-display text-[#0A1628] text-2xl font-bold mb-3">
          Experienced Drivers
        </h2>
        <p className="text-[#0A1628]/60 text-sm leading-relaxed mb-8">
          Our experienced drivers provide safe, comfortable, and friendly travel experiences
          while helping guests explore the best destinations in Bali.
        </p>

        {/* Feature pills */}
        <div className="flex gap-3 mb-10">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-1.5 bg-white py-4 shadow-sm border border-black/20">
              <Icon size={20} className="text-[#0A1628]" />
              <span className="text-[#0A1628] text-xs font-medium text-center">{label}</span>
            </div>
          ))}
        </div>

        {/* Testimonial card */}
        <div className="relative bg-white p-6 shadow-sm border border-black/20">


          <p className="text-[#0A1628] text-sm leading-relaxed mb-5 italic">
            "{t.quote}"
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#0A1628] font-semibold text-sm">{t.name}</p>
              <p className="text-[#0A1628]/50 text-xs mt-0.5">{t.role}</p>
            </div>
            <div className="flex gap-2">
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-[#0A1628]' : 'w-2 h-2 bg-[#0A1628]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
