import { Calendar, ArrowDown } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

interface HeroProps {
  setRoute: (route: string) => void;
}

export default function Hero({ setRoute }: HeroProps) {
  return (
    <section
      id="homepage-hero"
      className="relative min-h-[580px] lg:min-h-[700px] flex items-center bg-brand-charcoal overflow-hidden py-16 lg:py-24"
    >
      {/* Background Photography (Outdoor physiotherapy scene - coastal/active lifestyle imagery) */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600"
          fallbackType="hero"
          altText="Coastal active rehabilitation and movement scene"
          className="w-full h-full object-cover object-center filter opacity-40 brightness-90 animate-fade-in"
        />
        {/* Editorial overlay: Left-heavy dark gradient for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl md:max-w-2xl text-left">
          {/* Eyebrow / Label */}
          <div className="inline-flex items-center space-x-2 bg-brand-teal/25 border border-brand-teal/30 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
            <span className="text-brand-teal-light text-xs font-semibold tracking-widest uppercase font-subtitle">
              Professional Essex Clinicians
            </span>
          </div>

          {/* Headline - Teko Bold Uppercase Condensed */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide uppercase font-bold text-white leading-[1.05] mb-6">
            EMPOWER YOUR MOVEMENT. <br className="hidden sm:inline" />
            <span className="text-brand-teal">RECOVER STRONGER.</span>
          </h1>

          {/* Subheading - Manrope */}
          <p className="font-subtitle text-lg sm:text-xl text-brand-teal-light/90 font-light leading-relaxed mb-8 max-w-lg">
            Assessment-led physiotherapy, practical treatment, and structured rehabilitation for pain, injury, and active recovery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => setRoute("/book-now")}
              className="flex items-center justify-center gap-2.5 bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-display text-xl tracking-wider uppercase font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-brand-teal/20"
              id="hero-cta-primary"
            >
              <Calendar className="w-5 h-5" />
              BOOK INITIAL ASSESSMENT
            </button>

            <button
              onClick={() => setRoute("/about")}
              className="flex items-center justify-center bg-transparent border-2 border-brand-teal-light hover:bg-white/10 text-white px-8 py-4 rounded-xl font-display text-xl tracking-wider uppercase font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              id="hero-cta-secondary"
            >
              OUR APPROACH
            </button>
          </div>

          {/* Accreditation Badges below hero values */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/10 text-white/60 text-xs font-subtitle">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              HCPC Registered Clinicians
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Recognised by Major Insurers
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Essex Local Clinic
            </span>
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Border Angle Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-brand-bg z-20" />
    </section>
  );
}
