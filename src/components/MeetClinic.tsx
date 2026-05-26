import { useState } from "react";
import { User, Award, Heart, ShieldAlert, Star, CheckCircle, ExternalLink, Calendar } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { CLINICIANS_DATA } from "../data/content";
import { Clinician } from "../types";

interface MeetClinicProps {
  setRoute: (route: string) => void;
}

export default function MeetClinic({ setRoute }: MeetClinicProps) {
  const [selectedClinicianID, setSelectedClinicianID] = useState<string | null>(null);

  const selectedClinician = CLINICIANS_DATA.find((c) => c.id === selectedClinicianID);

  return (
    <section id="meet-the-clinic" className="py-16 bg-white relative overflow-hidden">
      
      {/* Visual Anchor background nodes */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-bg/60 rounded-full filter blur-2xl select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER AREA */}
        <div className="max-w-3xl mb-12 select-none">
          <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-subtitle block mb-2">
            MEET THE CLINIC TEAM
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase font-bold text-brand-charcoal leading-tight mb-4">
            Personal support, practical treatment, and <br/>
            <span className="text-brand-teal">a plan you can follow.</span>
          </h2>
          <p className="font-sans text-brand-slate text-base sm:text-lg leading-relaxed">
            Blackwater Physiotherapy combines clinical knowledge, physical expertise, and clear, compassionate communication so patients feel heard, fully informed, and confident about what comes next.
          </p>
        </div>

        {/* CLINICIANS PROFILE CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CLINICIANS_DATA.map((clinician) => (
            <div
              key={clinician.id}
              className={`bg-brand-bg border rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 ${
                selectedClinicianID === clinician.id
                  ? "border-brand-teal bg-brand-teal-light/10 shadow-lg"
                  : "border-brand-charcoal/5 hover:border-brand-teal/40 hover:shadow-md hover:bg-brand-bg/50"
              }`}
            >
              {/* Profile Image Fallback (since Unsplash fallback matches beautiful clinicians) */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 relative shadow-inner shadow-brand-charcoal/10 select-none">
                <ImageWithFallback
                  src={
                    clinician.id === "cam"
                      ? "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300"
                      : "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300"
                  }
                  fallbackType="team"
                  altText={`Physiotherapist ${clinician.name}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Summary copy */}
              <div className="flex-1 flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-brand-charcoal leading-none">
                      {clinician.name}
                    </h3>
                    <span className="text-[10px] sm:text-xs tracking-widest uppercase font-subtitle font-bold text-brand-teal px-2 py-0.5 bg-brand-teal-light/50 rounded-full">
                      {clinician.role}
                    </span>
                  </div>
                  <p className="text-xs text-brand-slate font-medium uppercase font-subtitle mb-3">
                    HCPC REGISTERED • CSP MEMBER
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {clinician.teaser}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    onClick={() => {
                      setSelectedClinicianID(selectedClinicianID === clinician.id ? null : clinician.id);
                    }}
                    className="text-xs font-subtitle font-bold text-brand-teal hover:text-brand-charcoal hover:underline inline-flex items-center gap-1 focus:outline-none"
                    id={`btn-bio-${clinician.id}`}
                  >
                    {selectedClinicianID === clinician.id ? "Minimize Bio details" : "Read full Biography"}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  
                  <button
                    onClick={() => setRoute(`/team/${clinician.id}`)}
                    className="text-xs font-subtitle font-bold text-brand-slate hover:text-brand-teal inline-flex items-center gap-1"
                  >
                    View detailed clinical page 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILED CLINICIAN BOARD EXPANSION */}
        {selectedClinician && (
          <div className="bg-brand-bg rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-teal/20 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-charcoal/10">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-teal" />
                <h3 className="font-display text-2xl uppercase font-bold text-brand-charcoal">
                  Professional Credentials: {selectedClinician.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedClinicianID(null)}
                className="text-xs text-brand-slate hover:text-brand-charcoal font-bold tracking-wider uppercase underline focus:outline-none"
              >
                Close Biography
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-sans text-sm">
              
              {/* Credentials details columns */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h5 className="font-subtitle text-xs uppercase font-extrabold text-brand-slate tracking-widest mb-3">
                    Qualifications & Registrations
                  </h5>
                  <ul className="space-y-2 text-xs">
                    {selectedClinician.qualifications.map((q, i) => (
                      <li key={i} className="flex gap-2 items-start text-brand-charcoal">
                        <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-brand-charcoal/5">
                  <h6 className="font-subtitle text-[10px] font-bold text-brand-slate uppercase tracking-wider mb-2">
                    Insurer & Healthcare Recognition
                  </h6>
                  <p className="text-[11px] text-brand-slate leading-relaxed">
                    This clinician is fully registered for direct direct-billing with AXA, Bupa, Aviva, and standard UK private plans.
                  </p>
                </div>
              </div>

              {/* Bio block columns */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <h5 className="font-subtitle text-xs uppercase font-extrabold text-brand-slate tracking-widest mb-3">
                    Clinical Overview & Core Philosophy
                  </h5>
                  <p className="text-brand-charcoal leading-relaxed text-sm">
                    {selectedClinician.summary}
                  </p>
                </div>

                <div>
                  <h5 className="font-subtitle text-xs uppercase font-extrabold text-brand-slate tracking-widest mb-3">
                    Specialist Expertise & Practice Areas
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedClinician.expertise.map((exp, i) => (
                      <div key={i} className="bg-white p-3.5 rounded-xl border border-brand-charcoal/5 flex gap-2 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0" />
                        <span className="text-xs font-semibold text-brand-charcoal leading-snug">{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-charcoal/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-brand-slate">
                    <Heart className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{selectedClinician.personality}</span>
                  </div>
                  
                  <button
                    onClick={() => setRoute("/book-now")}
                    className="bg-brand-teal hover:bg-brand-teal/95 text-white py-3 px-6 rounded-xl font-display text-base uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-teal/10"
                  >
                    <Calendar className="w-4 h-4" />
                    Book with {selectedClinician.name}
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
