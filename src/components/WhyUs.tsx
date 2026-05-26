import { useState } from "react";
import { Check, X, Shield, ArrowRight, Activity, TrendingUp, Users } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { COMPARISON_DATA } from "../data/content";

interface WhyUsProps {
  setRoute: (route: string) => void;
}

export default function WhyUs({ setRoute }: WhyUsProps) {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="why-blackwater" className="py-16 bg-brand-bg relative overflow-hidden">
      {/* Decorative clean line banner divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-charcoal/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ROW 1: CORE PHILOSOPHY & IMAGE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* LEFT SIDE: PHOTOGRAPHY */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/3 md:aspect-16/10 lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-charcoal/10 select-none">
              <ImageWithFallback
                src="/manus-storage/blackwater_entrance_photo_2a0ee687.jpeg"
                fallbackType="entrance"
                altText="Blackwater Physiotherapy Clinic Entrance at Old Iron Works Gym"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              {/* Soft overlay banner at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/70 to-transparent p-6 text-white pt-16">
                <span className="text-xs uppercase tracking-widest text-brand-teal font-subtitle font-bold block mb-1">
                  LOCATION & SPACE
                </span>
                <p className="font-display text-2xl uppercase font-semibold leading-tight mb-1">
                  THE OLD IRON WORKS GYM
                </p>
                <p className="text-xs text-brand-teal-light/80 font-sans">
                  Premium private rehabilitation facilities in Essex, UK.
                </p>
              </div>
            </div>

            {/* Float visual card accent behind */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-teal-light/30 rounded-full filter blur-xl select-none -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-teal/10 rounded-full filter blur-3xl select-none -z-10" />
          </div>

          {/* RIGHT SIDE: COPY & FEATURES */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-subtitle block">
                WHY BLACKWATER PHYSIOTHERAPY
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase font-bold text-brand-charcoal leading-tight">
                Trusted local care with a <span className="text-brand-teal">clear next step.</span>
              </h2>
              <p className="font-sans text-brand-slate text-base sm:text-lg leading-relaxed max-w-xl">
                Every appointment starts by understanding the wider picture of your daily demands, then building the most appropriate plan for your symptoms, personal recovery goals, and long-term joint confidence.
              </p>
            </div>

            {/* Detailed Feature Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Feature 1 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-brand-charcoal/5 hover:border-brand-teal/10 transition-colors">
                <div className="w-10 h-10 bg-brand-teal-light/40 text-brand-teal rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-display text-xl uppercase font-bold text-brand-charcoal mb-2">Thorough Assessment</h4>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Understand the root cause of symptoms clearly before any active treatment or loading begins.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-brand-charcoal/5 hover:border-brand-teal/10 transition-colors">
                <div className="w-10 h-10 bg-brand-teal-light/40 text-brand-teal rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-display text-xl uppercase font-bold text-brand-charcoal mb-2">Progressive Loading</h4>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Rehabilitation evolves dynamically as your muscle soreness settles and joint strength improves.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-brand-charcoal/5 hover:border-brand-teal/10 transition-colors">
                <div className="w-10 h-10 bg-brand-teal-light/40 text-brand-teal rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-display text-xl uppercase font-bold text-brand-charcoal mb-2">Trusted Local Care</h4>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Fully HCPC registered clinicians, major insurer clearance, and a calmer clinical pace.
                </p>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="inline-flex items-center justify-center gap-2 text-sm font-subtitle font-bold text-brand-teal-light bg-brand-charcoal hover:bg-brand-charcoal/90 px-6 py-3.5 rounded-xl transition-colors shrink-0"
              >
                {showComparison ? "Hide Comparison Guide" : "Compare With Traditional Clinics"}
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${showComparison ? "rotate-90" : ""}`} />
              </button>
              
              <button 
                onClick={() => setRoute("/about")}
                className="text-xs font-subtitle font-bold text-brand-slate hover:text-brand-teal inline-flex items-center gap-1.5 self-center"
              >
                Read our full clinic story and safety charter
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2: COLLAPSIBLE ACCREDITED COMPARISON GRID */}
        {showComparison && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-charcoal/5 shadow-2xl shadow-brand-charcoal/10 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-xs tracking-widest uppercase font-subtitle font-bold text-brand-teal px-3 py-1 bg-brand-teal-light/40 rounded-full">
                Side-by-Side Comparison
              </span>
              <h3 className="font-display text-3xl sm:text-4xl uppercase font-bold text-brand-charcoal mt-4 mb-2">
                A Different Approach to Recovery
              </h3>
              <p className="font-sans text-brand-slate text-sm">
                How our structured clinical focus compares with standard, high-volume healthcare templates.
              </p>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse" id="comparison-analysis-table">
                <thead>
                  <tr className="border-b border-brand-charcoal/10 text-xs font-subtitle font-bold text-brand-slate">
                    <th className="pb-4 pr-4 w-1/4">RECOVERY FOCUS</th>
                    <th className="pb-4 px-4 bg-brand-teal-light/20 text-brand-teal font-extrabold rounded-t-xl w-3/8">
                      BLACKWATER PHYSIOTHERAPY
                    </th>
                    <th className="pb-4 pl-4 w-3/8">TRADITIONAL HIGH-VOLUME ALTERNATIVE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-charcoal/5 font-sans text-xs">
                  {COMPARISON_DATA.map((row, index) => (
                    <tr key={index} className="hover:bg-brand-bg/40">
                      <td className="py-4 pr-4 font-subtitle font-bold text-brand-charcoal">
                        {row.metric}
                      </td>
                      <td className="py-4 px-4 bg-brand-teal-light/25 text-brand-charcoal font-semibold">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-brand-teal shrink-0" />
                          <span>{row.blackwater}</span>
                        </div>
                      </td>
                      <td className="py-4 pl-4 text-brand-slate">
                        <div className="flex items-center gap-1.5">
                          <X className="w-3.5 h-3.5 text-brand-charcoal/30 shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-brand-bg rounded-2xl flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
              <span className="text-brand-slate text-center sm:text-left leading-normal font-medium">
                We design personalized plans built entirely around your work, sport, and daily capacity.
              </span>
              <button
                onClick={() => setRoute("/book-now")}
                className="text-xs tracking-wider uppercase font-display font-bold text-brand-teal border-b-2 border-brand-teal hover:text-brand-charcoal hover:border-brand-charcoal transition-colors focus:outline-none"
              >
                Schedule Your 1-On-1 Assessment
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
