import { useState, useEffect } from "react";
import { Phone, Mail, ArrowRight, Star, Heart, Activity, ShieldCheck, Map, ArrowUpRight, Zap } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/content";

interface ConceptCardsProps {
  setRoute: (route: string) => void;
}

export default function ConceptCards({ setRoute }: ConceptCardsProps) {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Auto scroll reviews on featured card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredReview = TESTIMONIALS_DATA[activeReviewIndex];

  return (
    <section className="relative -mt-8 md:-mt-16 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* CARD 1: CONDITIONS WE TREAT */}
        <div className="bg-white border-t-4 border-brand-teal p-7 rounded-2xl shadow-lg shadow-brand-charcoal/5 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
          <div>
            <div className="flex justify-between items-center mb-5">
              <span className="font-subtitle text-xs uppercase tracking-wider text-brand-slate font-semibold">Symptom pathways</span>
              <Activity className="w-5 h-5 text-brand-teal" />
            </div>
            <h3 className="font-display text-3xl uppercase font-bold text-brand-teal mb-4 tracking-wide leading-none">
              Conditions We Treat
            </h3>
            <p className="font-sans text-sm text-brand-slate leading-relaxed mb-6">
              Empathetic, structured clinical care tailored for your symptoms and physical limits.
            </p>

            {/* 2x2 Condition Grid with Arrow Connectors */}
            <div className="grid grid-cols-2 gap-3 mb-6 relative">
              <button
                onClick={() => setRoute("/conditions/back-pain")}
                className="group p-3 bg-brand-bg rounded-xl border border-brand-teal/5 hover:border-brand-teal/30 hover:bg-brand-teal-light/20 text-left transition-all duration-200"
              >
                <span className="font-display text-base font-bold text-brand-charcoal block mb-0.5 group-hover:text-brand-teal">BACK PAIN</span>
                <span className="text-[10px] text-brand-slate font-medium uppercase font-subtitle">Stiffness & Ache</span>
              </button>

              <button
                onClick={() => setRoute("/conditions/neck-pain")}
                className="group p-3 bg-brand-bg rounded-xl border border-brand-teal/5 hover:border-brand-teal/30 hover:bg-brand-teal-light/20 text-left transition-all duration-200"
              >
                <span className="font-display text-base font-bold text-brand-charcoal block mb-0.5 group-hover:text-brand-teal">NECK PAIN</span>
                <span className="text-[10px] text-brand-slate font-medium uppercase font-subtitle">Tension & Strain</span>
              </button>

              <button
                onClick={() => setRoute("/conditions/sciatica")}
                className="group p-3 bg-brand-bg rounded-xl border border-brand-teal/5 hover:border-brand-teal/30 hover:bg-brand-teal-light/20 text-left transition-all duration-200"
              >
                <span className="font-display text-base font-bold text-brand-charcoal block mb-0.5 group-hover:text-brand-teal">SCIATICA</span>
                <span className="text-[10px] text-brand-slate font-medium uppercase font-subtitle">Nerve Relief</span>
              </button>

              <button
                onClick={() => setRoute("/conditions/running-injuries")}
                className="group p-3 bg-brand-bg rounded-xl border border-brand-teal/5 hover:border-brand-teal/30 hover:bg-brand-teal-light/20 text-left transition-all duration-200"
              >
                <span className="font-display text-base font-bold text-brand-charcoal block mb-0.5 group-hover:text-brand-teal">RUNNING</span>
                <span className="text-[10px] text-brand-slate font-medium uppercase font-subtitle">Sports Rehab</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => setRoute("/conditions")}
            className="w-full py-3 bg-brand-bg hover:bg-brand-teal-light/30 border border-brand-teal/10 hover:border-brand-teal/30 rounded-xl font-subtitle text-xs font-bold text-brand-charcoal flex items-center justify-center gap-2 group transition-all duration-200"
          >
            EXPLORE ALL CONDITIONS 
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* CARD 2: FEATURED / STORY CARD (SOLID TEAL BG) */}
        <div className="bg-brand-teal text-white p-7 rounded-2xl shadow-lg shadow-brand-teal/10 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 relative group">
          {/* Subtle light ripple in background */}
          <div className="absolute top-0 right-0 p-4 opacity-15">
            <Heart className="w-16 h-16" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-5">
              <span className="font-subtitle text-xs uppercase tracking-wider text-brand-teal-light font-semibold">Patient voices</span>
              <div className="flex bg-white/20 px-2 py-1 rounded text-[10px] font-bold tracking-widest gap-1 items-center">
                <Star className="w-3 h-3 fill-white text-white" />
                GOOGLE 5.0
              </div>
            </div>
            
            <h3 className="font-display text-3xl uppercase font-bold text-white mb-4 tracking-wide leading-none">
              Success Stories
            </h3>
            
            {/* Google-Inspired Testimonial Inset Card */}
            <div className="bg-white text-brand-charcoal p-5 rounded-xl shadow-md min-h-[160px] flex flex-col justify-between relative transform group-hover:scale-[1.01] transition-transform duration-200">
              <p className="font-sans text-xs italic text-brand-charcoal/90 leading-relaxed mb-4">
                &ldquo;{featuredReview.quote}&rdquo;
              </p>
              
              <div className="flex items-center space-x-3 pt-3 border-t border-brand-charcoal/5">
                <div className="w-8 h-8 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center font-display text-base font-bold shrink-0">
                  {featuredReview.initial}
                </div>
                <div>
                  <h5 className="font-subtitle text-xs font-bold text-brand-charcoal leading-none">
                    {featuredReview.patientName}
                  </h5>
                  <span className="text-[10px] text-brand-slate font-medium leading-normal mt-0.5 block">
                    {featuredReview.condition}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots below review card */}
          <div className="flex flex-col items-center mt-5">
            <div className="flex space-x-1.5 mb-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeReviewIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Show review ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setRoute("/reviews")}
              className="text-xs font-semibold text-brand-teal-light hover:text-white underline transition-colors"
            >
              Read all verified reviews
            </button>
          </div>
        </div>

        {/* CARD 3: SERVICES PANEL */}
        <div className="bg-white border-t-4 border-brand-slate py-7 px-6 rounded-2xl shadow-lg shadow-brand-charcoal/5 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
          <div>
            <div className="flex justify-between items-center mb-5">
              <span className="font-subtitle text-xs uppercase tracking-wider text-brand-slate font-semibold">Structured Care</span>
              <ShieldCheck className="w-5 h-5 text-brand-slate" />
            </div>
            <h3 className="font-display text-3xl uppercase font-bold text-brand-charcoal mb-4 tracking-wide leading-none">
              Services
            </h3>
            <p className="font-sans text-sm text-brand-slate leading-relaxed mb-6">
              Clear pathways designed to evaluate, restore, and maintain physical performance.
            </p>

            <div className="space-y-4">
              {/* Service item 1 */}
              <div
                onClick={() => setRoute("/services/initial-assessment")}
                className="cursor-pointer group flex flex-col p-2.5 rounded-lg hover:bg-brand-bg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-base uppercase font-bold text-brand-charcoal group-hover:text-brand-teal">Initial Assessment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-slate group-hover:text-brand-teal transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-brand-slate leading-normal mt-1">
                  Comprehensive 1-on-1 diagnostic assessment map before any therapy begins.
                </p>
              </div>

              {/* Teal divider */}
              <div className="h-[1px] bg-brand-teal/20 w-full" />

              {/* Service item 2 */}
              <div
                onClick={() => setRoute("/services/follow-up")}
                className="cursor-pointer group flex flex-col p-2.5 rounded-lg hover:bg-brand-bg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-base uppercase font-bold text-brand-charcoal group-hover:text-brand-teal">Follow Up Care</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-slate group-hover:text-brand-teal transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-brand-slate leading-normal mt-1">
                  Continuously evolving movement loads scaling safely as muscles mend.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setRoute("/services")}
            className="w-full mt-6 py-3 bg-brand-bg hover:bg-brand-teal-light/20 border border-brand-teal/10 rounded-xl font-subtitle text-xs font-bold text-brand-slate text-center flex items-center justify-center gap-1 hover:text-brand-teal transition-all duration-200"
          >
            VIEW ALL CLINICAL SERVICES
          </button>
        </div>

        {/* CARD 4: BOOKING & CONTACT */}
        <div className="bg-white border-t-4 border-brand-teal p-7 rounded-2xl shadow-lg shadow-brand-charcoal/5 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
          <div>
            <div className="flex justify-between items-center mb-5">
              <span className="font-subtitle text-xs uppercase tracking-wider text-brand-slate font-semibold">Immediate access</span>
              <Map className="w-5 h-5 text-brand-teal" />
            </div>
            <h3 className="font-display text-3xl uppercase font-bold text-brand-charcoal mb-4 tracking-wide leading-none">
              Booking & Contact
            </h3>
            <p className="font-sans text-sm text-brand-slate leading-relaxed mb-6">
              No referral required. Direct consultations at our Old Iron Works location.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="tel:01621502444"
                className="flex items-center space-x-3 text-brand-charcoal hover:text-brand-teal transition-colors font-subtitle text-xs font-bold p-2 hover:bg-brand-bg rounded-lg"
              >
                <div className="w-8 h-8 bg-brand-teal-light/40 text-brand-teal rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-brand-slate block font-medium uppercase">Call our desk</span>
                  01621 502444
                </div>
              </a>

              <a
                href="mailto:info@blackwaterphysio.co.uk"
                className="flex items-center space-x-3 text-brand-charcoal hover:text-brand-teal transition-colors font-subtitle text-xs font-bold p-2 hover:bg-brand-bg rounded-lg"
              >
                <div className="w-8 h-8 bg-brand-teal-light/40 text-brand-teal rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-brand-slate block font-medium uppercase">Email inquiries</span>
                  info@blackwaterphysio.co.uk
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setRoute("/book-now")}
              className="w-full py-3 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-display text-base tracking-wider uppercase font-bold text-center shadow-md shadow-brand-teal/10 transition-colors"
            >
              BOOK ONLINE NOW
            </button>
            <button
              onClick={() => setRoute("/contact")}
              className="w-full py-3 bg-transparent border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/5 rounded-xl font-display text-base tracking-wider uppercase font-bold text-center transition-colors"
            >
              CONTACT US
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
