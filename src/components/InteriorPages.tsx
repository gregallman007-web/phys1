import React, { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";
import {
  Calendar,
  ChevronRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Award,
  BookOpen,
  HelpCircle,
  X,
  Star,
  Activity,
  Heart
} from "lucide-react";
import {
  SERVICES_DATA,
  CONDITIONS_DATA,
  CLINICIANS_DATA,
  TESTIMONIALS_DATA,
  FAQS_DATA,
  BLOG_DATA,
  COMPARISON_DATA
} from "../data/content";

interface InteriorPagesProps {
  currentRoute: string;
  setRoute: (route: string) => void;
}

export default function InteriorPages({ currentRoute, setRoute }: InteriorPagesProps) {
  // Local active states for interactive forms and components
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", condition: "General Inquiry", msg: "" });
  
  const [bookingStep, setBookingStep] = useState(1); // 1: Choose appointment, 2: Choose slot, 3: Success
  const [bookingForm, setBookingForm] = useState({ appointmentType: "Initial Assessment - £65 (45 mins)", date: "2026-05-28", time: "10:30am", name: "", email: "", phone: "" });
  const [selectedClinicianFilter, setSelectedClinicianFilter] = useState("Any Clinician");

  // Handle contact submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setContactSubmitted(true);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.email && bookingForm.time) {
      setBookingStep(3);
    }
  };

  // Helper: Get active sub-item details if route is nested
  const getServiceDetail = () => {
    const id = currentRoute.split("/services/")[1];
    return SERVICES_DATA.find((s) => s.id === id);
  };

  const getConditionDetail = () => {
    const id = currentRoute.split("/conditions/")[1];
    return CONDITIONS_DATA.find((c) => c.id === id);
  };

  const getBlogDetail = () => {
    const slug = currentRoute.split("/blog/")[1];
    return BLOG_DATA.find((b) => b.slug === slug);
  };

  const getClinicianDetail = () => {
    const id = currentRoute.split("/team/")[1];
    return CLINICIANS_DATA.find((c) => c.id === id);
  };

  const serviceDetail = getServiceDetail();
  const conditionDetail = getConditionDetail();
  const blogDetail = getBlogDetail();
  const clinicianDetail = getClinicianDetail();

  const handleBack = () => {
    if (currentRoute.includes("/services/")) setRoute("/services");
    else if (currentRoute.includes("/conditions/")) setRoute("/conditions");
    else if (currentRoute.includes("/blog/")) setRoute("/blog");
    else if (currentRoute.includes("/team/")) setRoute("/team");
    else setRoute("/");
    window.scrollTo({ top: 0 });
  };

  return (
    <main className="min-h-screen bg-brand-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* INTERIOR PAGE INTRO HEADERS */}
        {!serviceDetail && !conditionDetail && !blogDetail && !clinicianDetail && (
          <div className="mb-12 border-b border-brand-charcoal/5 pb-8 select-none">
            {/* Header tags based on current paths */}
            {currentRoute === "/about" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">OUR CLINIC ETHOS</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2">A calmer route from pain to progress</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-2xl">Discover why Blackwater is leading clinical assessments and rehabilitation in Essex, UK.</p>
              </>
            )}
            {currentRoute === "/services" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">OUR SERVICES</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2">Structured treatment mapped to your body</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-2xl">Practical physical therapy, specialized injury programs, and safe recovery frameworks.</p>
              </>
            )}
            {currentRoute === "/conditions" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">SITUATIONAL PATHWAYS</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2">Conditions we treat & rehabilitate</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-2xl font-light">Choose your symptom pathway below to discover how we conduct diagnostics and treat joint pain.</p>
              </>
            )}
            {currentRoute === "/team" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">REGISTERED CLINICIANS</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2">Insurac-recognized clinical practitioners</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-3xl">Our leading therapists, Cam and Stef, coordinate patient-first strength work and hands-on mobility care.</p>
              </>
            )}
            {currentRoute === "/reviews" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">CLIENT ADVOCACY</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2">Verified Patient success stories</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-2xl">Read honest, unedited evaluations of recovery results from real active clients in Colchester.</p>
              </>
            )}
            {currentRoute === "/blog" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">ANSWER-FIRST CLINICS</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2 font-black leading-none uppercase">Helpful clinical guidance & articles</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-3xl">We bypass academic fluff to give direct, immediate answers to common physical questions, written by real practitioners.</p>
              </>
            )}
            {currentRoute === "/faqs" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">APPOINTMENT TRANSPARENCY</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2">Frequently Asked questions</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-2xl">All practical, billing, and scheduling rules made fully transparent to reduce booking friction.</p>
              </>
            )}
            {currentRoute === "/contact" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">CLINIC REACHABILITY</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2">Connect with our Colchester Desk</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-2xl">Find directions to Old Iron Works Gym, car parking details, or send an active enquiry.</p>
              </>
            )}
            {currentRoute === "/book-now" && (
              <>
                <span className="text-brand-teal text-xs uppercase font-bold tracking-widest font-subtitle">DIRECT INTAKE</span>
                <h1 className="font-display text-5xl uppercase font-bold text-brand-charcoal mt-2">Schedule Your clinical Consultation</h1>
                <p className="text-brand-slate text-sm mt-2 max-w-2xl font-light">No GP referral necessary. Pick your preferred slot online in under two minutes.</p>
              </>
            )}
          </div>
        )}

        {/* ------------------- INTERIOR PANELS ------------------- */}

        {/* ABOUT VIEWER */}
        {currentRoute === "/about" && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-display text-3xl uppercase font-bold text-brand-charcoal">Thorough treatment, realistic recovery maps</h3>
                <p className="font-sans text-brand-slate leading-relaxed text-sm">
                  At Blackwater Physiotherapy, we believe that effective physical rehabilitation cannot be rushed or delivered via pre-printed photocopied sheets of generic leg loops. 
                  Founded on a dedication to diagnostic accuracy and active, loading recovery, our clinic is structured with spacious facilities inside the Old Iron Works Gym in Essex.
                </p>
                <p className="font-sans text-brand-slate leading-relaxed text-sm">
                  We take the time to deeply evaluate how your body transfers weight, where active tissue thresholds lie, and how your daily desk posture and running loads contribute to local joint stressors.
                </p>
                <div className="p-5 bg-brand-teal-light/20 rounded-2xl border border-brand-teal/20">
                  <span className="font-subtitle text-xs font-bold text-brand-teal uppercase block mb-1">Our Safety Promise</span>
                  <p className="text-xs text-brand-charcoal font-sans leading-normal">
                    We will never promise instant, overnight skeletal fixes. We construct clinical, step-by-step progress tracking so you regain standard movement habits with lasting confidence.
                  </p>
                </div>
              </div>

              {/* Graphic stats block */}
              <div className="space-y-6 bg-white p-8 rounded-3xl border border-brand-charcoal/5">
                <span className="font-subtitle text-xs font-bold text-brand-slate uppercase block tracking-widest">CLINIC METRICS</span>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-4 bg-brand-bg rounded-2xl border-l-4 border-brand-teal">
                    <span className="font-display text-4xl font-extrabold text-brand-charcoal block leading-none">100%</span>
                    <span className="text-[10px] text-brand-slate uppercase tracking-wider font-semibold font-subtitle">HCPC Registered Practitioners</span>
                  </div>
                  <div className="p-4 bg-brand-bg rounded-2xl border-l-4 border-brand-teal">
                    <span className="font-display text-4xl font-extrabold text-brand-charcoal block leading-none">5.0 ★</span>
                    <span className="text-[10px] text-brand-slate uppercase tracking-wider font-semibold font-subtitle">Google Review Rating</span>
                  </div>
                  <div className="p-4 bg-brand-bg rounded-2xl border-l-4 border-brand-teal">
                    <span className="font-display text-4xl font-extrabold text-brand-charcoal block leading-none">45 MIN</span>
                    <span className="text-[10px] text-brand-slate uppercase tracking-wider font-semibold font-subtitle">Initial Intake Assessments</span>
                  </div>
                  <div className="p-4 bg-brand-bg rounded-2xl border-l-4 border-brand-teal">
                    <span className="font-display text-4xl font-extrabold text-brand-charcoal block leading-none">Essex</span>
                    <span className="text-[10px] text-brand-slate uppercase tracking-wider font-semibold font-subtitle">Colchester Physical Site</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-charcoal/5 flex flex-col items-center">
                  <button
                    onClick={() => setRoute("/book-now")}
                    className="w-full py-3 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-display text-base tracking-widest uppercase font-bold"
                  >
                    BOOK ASSESSMENT ONLINE
                  </button>
                </div>
              </div>
            </div>

            {/* Structured Table matching comparison analysis directly visible inside About */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-charcoal/5">
              <h3 className="font-display text-3xl uppercase font-bold text-brand-charcoal text-center mb-6">Our Care vs Standard High-Volume Clinics</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs">
                  <thead>
                    <tr className="border-b border-brand-charcoal/15 text-brand-slate uppercase font-subtitle font-bold text-[10px]">
                      <th className="pb-3">PHYSICAL PROCESS</th>
                      <th className="pb-3 text-brand-teal font-extrabold">BLACKWATER PHYSIOTHERAPY</th>
                      <th className="pb-3">TRADITIONAL ALTERNATIVE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-charcoal/5">
                    {COMPARISON_DATA.slice(0, 4).map((row, idx) => (
                      <tr key={idx} className="hover:bg-brand-bg/30">
                        <td className="py-3 font-subtitle font-bold">{row.metric}</td>
                        <td className="py-3 text-brand-charcoal font-medium">✓ {row.blackwater}</td>
                        <td className="py-3 text-brand-slate">✗ {row.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SERVICES OVERVIEW VIEW */}
        {currentRoute === "/services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-brand-charcoal/5 flex flex-col justify-between hover:border-brand-teal/30 shadow-sm transition-all duration-200 cursor-pointer"
                onClick={() => setRoute(`/services/${service.id}`)}
              >
                <div>
                  <div className="w-10 h-10 bg-brand-teal-light/40 text-brand-teal rounded-xl flex items-center justify-center mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl uppercase font-bold text-brand-charcoal mb-2 hover:text-brand-teal">
                    {service.name}
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed mb-6 font-sans">
                    {service.shortDescription}
                  </p>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setRoute(`/services/${service.id}`);
                  }}
                  className="text-xs font-subtitle font-bold text-brand-teal inline-flex items-center gap-1 hover:underline self-start"
                >
                  Read details & methods <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* SERVICES INDIVIDUAL DETAIL TEMPLATE */}
        {serviceDetail && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-charcoal/5 shadow-md animate-in fade-in duration-200">
            
            {/* Top Back-links */}
            <button
              onClick={handleBack}
              className="text-xs font-subtitle font-bold text-brand-slate hover:text-brand-teal inline-flex items-center gap-1.5 mb-8 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services Directory
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* COPY */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-subtitle block mb-1">
                    CLINICAL THERAPY OFFERING
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl uppercase font-bold text-brand-charcoal">
                    {serviceDetail.name}
                  </h1>
                </div>

                <div className="prose font-sans text-brand-slate text-sm sm:text-base leading-relaxed space-y-4">
                  <p className="font-semibold text-brand-charcoal">
                    {serviceDetail.shortDescription}
                  </p>
                  <p>{serviceDetail.overview}</p>
                </div>

                <div className="pt-4 border-t border-brand-charcoal/5">
                  <h4 className="font-subtitle text-xs uppercase tracking-widest font-extrabold text-brand-slate mb-3">
                    WHAT TO EXPECT AT ACCREDITED SESSIONS
                  </h4>
                  <p className="text-sm font-sans text-brand-slate leading-relaxed bg-brand-bg p-4 rounded-xl border-l-4 border-brand-teal">
                    {serviceDetail.whatToExpect}
                  </p>
                </div>

                {/* Specific methods grid */}
                <div>
                  <h4 className="font-subtitle text-xs uppercase tracking-widest font-extrabold text-brand-slate mb-4">
                    TREATMENT METHODS APPLIED
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
                    {serviceDetail.treatmentMethods.map((m, idx) => (
                      <div key={idx} className="bg-brand-bg p-3.5 rounded-xl border border-brand-charcoal/5 flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="font-medium text-brand-charcoal">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* ACTION CALL CARD */}
              <div className="lg:col-span-4 bg-brand-bg p-6 rounded-2xl border border-brand-charcoal/5 h-fit space-y-6">
                <div>
                  <h4 className="font-display text-xl uppercase font-bold text-brand-charcoal mb-4 border-b border-brand-charcoal/5 pb-2">
                    REASONS TO SCHEDULE
                  </h4>
                  <ul className="space-y-3.5 text-xs font-sans">
                    {serviceDetail.reasonsToBook.map((r, i) => (
                      <li key={i} className="flex gap-2 items-start text-brand-slate">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="leading-snug text-brand-charcoal font-medium">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-charcoal/5 space-y-3">
                  <button
                    onClick={() => {
                      setBookingForm({ ...bookingForm, appointmentType: `${serviceDetail.name} - Custom session` });
                      setRoute("/book-now");
                    }}
                    className="w-full py-3.5 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-display text-base tracking-widest uppercase font-bold transform select-none"
                  >
                    BOOK ONLINE INTENSITY
                  </button>
                  <button
                    onClick={() => setRoute("/contact")}
                    className="w-full py-3.5 bg-white hover:bg-brand-bg/60 border border-brand-teal/30 text-brand-teal rounded-xl font-display text-base tracking-widest uppercase font-bold text-center"
                  >
                    SEND CHAT ENQUIRY
                  </button>
                </div>

                <p className="text-[10px] text-brand-slate text-center italic">
                  Clear prices • HCPC & Private health insurer coverage
                </p>
              </div>

            </div>
          </div>
        )}

        {/* CONDITIONS OVERVIEW PAGE */}
        {currentRoute === "/conditions" && (
          <div className="space-y-12 animate-in fade-in duration-200">
            {/* Condition Categories section grids */}
            {["Spine & Nerve", "Joint & Movement", "Sport & Activity", "Lifestyle & Long-term"].map((cat) => {
              const matches = CONDITIONS_DATA.filter((c) => c.category === cat);
              return (
                <div key={cat} className="space-y-4">
                  <h4 className="font-display text-2xl uppercase font-bold text-brand-charcoal border-b-2 border-brand-teal/25 pb-1 max-w-fit">
                    {cat} Pain Categories
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matches.map((cond) => (
                      <div
                        key={cond.id}
                        className="bg-white rounded-2xl p-6 border border-brand-charcoal/5 flex flex-col justify-between hover:border-brand-teal/30 shadow-sm transition-all duration-200 cursor-pointer"
                        onClick={() => setRoute(`/conditions/${cond.id}`)}
                      >
                        <div>
                          <h3 className="font-display text-xl uppercase font-bold text-brand-charcoal mb-2 hover:text-brand-teal">
                            {cond.name} Treatment
                          </h3>
                          <p className="text-xs text-brand-slate leading-relaxed mb-4 font-sans line-clamp-3">
                            {cond.summary}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setRoute(`/conditions/${cond.id}`);
                          }}
                          className="text-xs font-subtitle font-bold text-brand-teal hover:underline self-start inline-flex items-center gap-1"
                        >
                          Step-by-step approach <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CONDITIONS DETAIL VIEW */}
        {conditionDetail && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-charcoal/5 shadow-md animate-in fade-in duration-200">
            <button
              onClick={handleBack}
              className="text-xs font-subtitle font-bold text-brand-slate hover:text-brand-teal inline-flex items-center gap-1.5 mb-8 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Conditions list
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-subtitle block mb-1">
                    SYMPTOM TREATMENT PATHWAY
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl uppercase font-bold text-brand-charcoal">
                    {conditionDetail.name} Care
                  </h1>
                </div>

                <div className="p-5 bg-brand-teal-light/20 rounded-2xl border border-brand-teal/25">
                  <h4 className="font-subtitle text-xs uppercase tracking-wider font-extrabold text-brand-teal mb-3">
                    COMMON DIAGNOSTIC PHYSICAL SYMPTOMS
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-brand-charcoal">
                    {conditionDetail.symptoms.map((s, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <AlertCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-2xl uppercase font-bold text-brand-charcoal mb-3">
                    Our Step-by-Step Clinical Approach
                  </h3>
                  <p className="text-sm font-sans text-brand-slate leading-relaxed">
                    {conditionDetail.treatmentApproach}
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-charcoal/5">
                  <h4 className="font-subtitle text-xs uppercase tracking-widest font-extrabold text-brand-slate mb-2">
                    WHEN TO SEEK PROFESSIONAL GUIDANCE
                  </h4>
                  <p className="text-xs font-sans text-brand-slate leading-relaxed italic bg-brand-bg p-4 rounded-xl">
                    &ldquo;{conditionDetail.whenToSeekHelp}&rdquo;
                  </p>
                </div>
              </div>

              {/* Actions side-bar card */}
              <div className="lg:col-span-4 bg-brand-bg p-6 rounded-2xl border border-brand-charcoal/5 h-fit space-y-6">
                <div className="flex items-center gap-2 mb-3 border-b border-brand-charcoal/5 pb-2">
                  <TrendingUp className="w-5 h-5 text-brand-teal" />
                  <h4 className="font-display text-xl uppercase font-bold text-brand-charcoal">
                    Schedule Assessment
                  </h4>
                </div>
                <p className="text-xs font-sans text-brand-slate leading-normal">
                  Our assessment-led care starts with a 1-on-1 diagnostic consultation to build a tailored treatment map around your symptoms.
                </p>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => {
                      setBookingForm({ ...bookingForm, appointmentType: `Physiotherapy Assessment for ${conditionDetail.name}` });
                      setRoute("/book-now");
                    }}
                    className="w-full py-3 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-display text-base tracking-widest uppercase font-bold"
                  >
                    BOOK ONLINE INTENSIV
                  </button>
                  <button
                    onClick={() => setRoute("/contact")}
                    className="w-full py-3 bg-transparent border border-brand-teal/30 text-brand-teal hover:bg-brand-teal/5 rounded-xl font-display text-base tracking-widest uppercase font-bold"
                  >
                    ASK ABOUT THIS PAIN
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-brand-charcoal/5 text-[10px] text-brand-slate leading-relaxed">
                  <strong>Self Pay or Insured:</strong> Full diagnostic receipts provided for insurer reimbursement immediately following care.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TEAM OVERVIEW DETAIL BIOS */}
        {clinicianDetail && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-charcoal/5 shadow-md animate-in fade-in duration-200">
            <button
              onClick={handleBack}
              className="text-xs font-subtitle font-bold text-brand-slate hover:text-brand-teal inline-flex items-center gap-1.5 mb-8 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Team overview
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Profile Image fallback column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="aspect-square w-full rounded-2xl overflow-hidden relative shadow-md">
                  <ImageWithFallback
                    src={
                      clinicianDetail.id === "cam"
                        ? "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
                        : "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400"
                    }
                    fallbackType="team"
                    altText={`Lead Clinician ${clinicianDetail.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-brand-bg p-4 rounded-xl border border-brand-charcoal/5">
                  <span className="font-subtitle text-[10px] uppercase font-bold text-brand-slate block tracking-wider mb-2">
                    Professional Accreditations
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="flex gap-2 items-center text-brand-charcoal font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Health & Care Professions Council (HCPC)
                    </div>
                    <div className="flex gap-2 items-center text-brand-charcoal font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Chartered Society of Physiotherapy (CSP)
                    </div>
                  </div>
                </div>
              </div>

              {/* biography columns */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-subtitle block mb-1">
                    CLINICAL BIO DETAIL
                  </span>
                  <h1 className="font-display text-4xl uppercase font-bold text-brand-charcoal">
                    Physiotherapist {clinicianDetail.name}
                  </h1>
                  <p className="text-brand-slate text-xs uppercase font-subtitle font-bold tracking-wider mt-1">
                    {clinicianDetail.role} • Essex Regional Clinic
                  </p>
                </div>

                <p className="text-sm font-sans text-brand-charcoal leading-relaxed">
                  {clinicianDetail.summary}
                </p>

                <div className="pt-4 border-t border-brand-charcoal/5">
                  <h4 className="font-subtitle text-xs uppercase tracking-widest font-extrabold text-brand-slate mb-3">
                    Academic Qualifications & Background
                  </h4>
                  <ul className="space-y-2 text-xs font-sans">
                    {clinicianDetail.qualifications.map((q, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <Award className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="text-brand-charcoal font-semibold">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-subtitle text-xs uppercase tracking-widest font-extrabold text-brand-slate mb-3">
                    clinical Specialty Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {clinicianDetail.expertise.map((exp, idx) => (
                      <div key={idx} className="bg-brand-bg p-3.5 rounded-xl border border-brand-charcoal/5 text-xs text-brand-charcoal font-bold">
                        {exp}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-brand-teal-light/20 rounded-2xl border border-brand-teal/20 text-xs text-brand-charcoal flex gap-2 items-center font-sans">
                  <Star className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{clinicianDetail.personality}</span>
                </div>

                <div className="pt-4 border-t border-brand-charcoal/5">
                  <button
                    onClick={() => {
                      setSelectedClinicianFilter(clinicianDetail.name);
                      setRoute("/book-now");
                    }}
                    className="bg-brand-teal hover:bg-brand-teal/95 text-white py-3 px-6 rounded-xl font-display text-base uppercase tracking-wider font-bold flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" /> Schedule Evaluation with {clinicianDetail.name}
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TEAM DIRECTORY VIEW */}
        {currentRoute === "/team" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in duration-200">
            {CLINICIANS_DATA.map((clinician) => (
              <div
                key={clinician.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-charcoal/5 flex flex-col justify-between hover:border-brand-teal/20 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0 shadow">
                    <ImageWithFallback
                      src={
                        clinician.id === "cam"
                          ? "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200"
                          : "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=200"
                      }
                      fallbackType="team"
                      altText={`Physiotherapist ${clinician.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl uppercase font-bold text-brand-charcoal leading-none mb-1">
                      {clinician.name}
                    </h3>
                    <span className="text-[10px] tracking-widest uppercase font-subtitle font-bold text-brand-teal px-2 py-0.5 bg-brand-teal-light/40 rounded-full">
                      {clinician.role}
                    </span>
                    <p className="text-xs text-brand-slate font-sans leading-relaxed mt-3">
                      {clinician.teaser}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setRoute(`/team/${clinician.id}`)}
                  className="w-full mt-6 py-3 bg-brand-bg hover:bg-brand-teal-light/20 border border-brand-teal/10 rounded-xl font-subtitle text-xs font-bold text-brand-slate text-center"
                >
                  READ CLINICAL CV & BIO DETS
                </button>
              </div>
            ))}
          </div>
        )}

        {/* BLOG ARCHIVE PANEL */}
        {currentRoute === "/blog" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-200">
            {BLOG_DATA.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-brand-charcoal/5 overflow-hidden flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-md transition-all duration-200 cursor-pointer"
                onClick={() => setRoute(`/blog/${post.slug}`)}
              >
                <div>
                  {/* Decorative card visual */}
                  <div className="bg-gradient-to-br from-brand-charcoal to-brand-slate p-6 text-white h-36 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-bold bg-brand-teal/30 border border-brand-teal/40 px-2 py-1 rounded max-w-fit">
                      {post.category}
                    </span>
                    <span className="text-white/50 text-[10px] font-mono">{post.date} • {post.readTime}</span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-display text-xl uppercase font-semibold text-brand-charcoal hover:text-brand-teal leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-slate leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setRoute(`/blog/${post.slug}`);
                    }}
                    className="text-xs font-subtitle font-bold text-brand-teal hover:underline inline-flex items-center gap-1"
                  >
                    Read quick answer post <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ANSWER-FIRST SEO BLOG INDIVIDUAL ARTICLE TEMPLATE */}
        {blogDetail && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-charcoal/5 shadow-md animate-in fade-in duration-200">
            <button
              onClick={handleBack}
              className="text-xs font-subtitle font-bold text-brand-slate hover:text-brand-teal inline-flex items-center gap-1.5 mb-8 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog Directory
            </button>

            {/* ANSWER-FIRST HERO TITLE */}
            <div className="mb-8 border-b border-brand-charcoal/10 pb-6">
              <span className="text-[10px] tracking-widest uppercase font-subtitle font-bold text-brand-teal bg-brand-teal-light/40 px-2.5 py-1 rounded-full">
                {blogDetail.category} • ARTICLE ADVISORY
              </span>
              <h1 className="font-display text-4xl sm:text-5xl uppercase font-extrabold text-brand-charcoal leading-tight mt-3">
                {blogDetail.title}
              </h1>
              <p className="text-[11px] text-brand-slate uppercase font-subtitle font-bold mt-2">
                PUBLISHED BY BLACKWATER PHYSICIANS ON {blogDetail.date} • {blogDetail.readTime}
              </p>
            </div>

            {/* CORE SPLIT (Left: Key takeaways & answers, Right: Expanded article sections) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 font-sans text-sm">
              
              {/* LEFT SIDE: SUMMARY PANELS (ANSWER-FIRST) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 1. Direct clear text answer block */}
                <div className="bg-brand-teal text-white p-6 rounded-2xl shadow-md border-l-4 border-white">
                  <h4 className="font-display text-xl uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5 text-brand-teal-light">
                    <BookOpen className="w-5 h-5" /> DIRECT ACCREDITED ANSWER:
                  </h4>
                  <p className="text-xs font-sans leading-relaxed text-white">
                    {blogDetail.answerFirstSummary}
                  </p>
                </div>

                {/* 2. Key takeaways bulletin board */}
                <div className="bg-brand-bg p-6 rounded-2xl border border-brand-charcoal/5">
                  <h4 className="font-subtitle text-xs uppercase tracking-wider font-extrabold text-brand-slate mb-4">
                    FAST-SCAN KEY TAKEAWAYS:
                  </h4>
                  <ul className="space-y-3 text-xs leading-relaxed text-brand-slate">
                    {blogDetail.keyTakeaways.map((item, id) => (
                      <li key={id} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="text-brand-charcoal font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Internal dynamic CTAs */}
                <div className="p-4 bg-brand-teal-light/15 rounded-2xl border border-brand-teal/20 text-center">
                  <h5 className="font-display text-lg uppercase font-bold text-brand-charcoal mb-2">
                    Experiencing these symptoms?
                  </h5>
                  <p className="text-[11px] text-brand-slate leading-normal mb-3">
                    We suggest scheduling a 1-on-1 diagnostic physical assessment.
                  </p>
                  <button
                    onClick={() => {
                      setBookingForm({ ...bookingForm, appointmentType: `Physiotherapy Assessment - Ref: ${blogDetail.title}` });
                      setRoute("/book-now");
                    }}
                    className="w-full py-2.5 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-display text-sm tracking-widest uppercase font-bold"
                  >
                    Schedule Assessment Now
                  </button>
                </div>

              </div>

              {/* RIGHT SIDE: EXPANDED DETAILED TEXTS */}
              <div className="lg:col-span-7 space-y-8">
                {blogDetail.sections.map((sec, index) => (
                  <section key={index} className="space-y-3">
                    <h3 className="font-display text-2xl uppercase font-bold text-brand-charcoal border-b border-brand-charcoal/5 pb-1">
                      {sec.title}
                    </h3>
                    <p className="text-brand-slate leading-relaxed text-sm font-sans">
                      {sec.content}
                    </p>
                  </section>
                ))}

                <div className="p-4 bg-brand-bg rounded-2xl border border-brand-charcoal/5 flex items-center justify-between text-xs gap-4 mt-8">
                  <div>
                    <span className="font-subtitle font-bold text-brand-charcoal uppercase block text-[10px]">
                      HAVE A MEDICAL INQUIRY?
                    </span>
                    <span className="text-brand-slate font-medium">Speak directly to Cam or Stef</span>
                  </div>
                  <button
                    onClick={() => setRoute("/contact")}
                    className="text-xs tracking-wider uppercase font-display font-extrabold text-brand-teal hover:text-brand-charcoal border-b-2 border-brand-teal"
                  >
                    Contact Clinic Desk
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* VERIFIED REVIEWS WALL */}
        {currentRoute === "/reviews" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-brand-teal text-white rounded-3xl p-6 sm:p-8 text-center select-none">
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <h2 className="font-display text-3xl uppercase font-extrabold">GOOGLE REVIEW RATING: 5.0 OUT OF 5.0</h2>
              <p className="text-xs text-brand-teal-light font-sans mt-1">
                Averaged across verified physical patient registrations in Maldon, Colchester, and surrounding Essex areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((rev, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-brand-charcoal/5 flex flex-col justify-between shadow-sm">
                  <p className="italic text-xs font-sans text-brand-charcoal/90 leading-relaxed mb-4">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                  <div className="flex items-center space-x-3 pt-3 border-t border-brand-charcoal/5">
                    <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-display text-sm font-bold shrink-0">
                      {rev.initial}
                    </div>
                    <div>
                      <h5 className="font-subtitle text-xs font-bold text-brand-charcoal leading-none">
                        {rev.patientName}
                      </h5>
                      <span className="text-[10px] text-brand-slate font-medium uppercase font-subtitle mt-0.5 block">
                        {rev.condition}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-brand-bg rounded-2xl border border-brand-charcoal/5 text-center max-w-lg mx-auto space-y-4">
              <h4 className="font-display text-xl uppercase font-bold text-brand-charcoal">Are you ready to write your recovery story?</h4>
              <p className="text-xs text-brand-slate leading-normal font-sans">
                Each treatment plan is tracked systematically. Many clients see stiffness reductions within 2-3 sessions.
              </p>
              <button
                onClick={() => setRoute("/book-now")}
                className="py-3 px-6 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-display text-base tracking-widest uppercase font-bold text-center"
              >
                Schedule Initial Assessment Now
              </button>
            </div>
          </div>
        )}

        {/* FAQS DETAILED ITERATIVE ACCORDIONS */}
        {currentRoute === "/faqs" && (
          <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in duration-200">
            {FAQS_DATA.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-brand-charcoal/5 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left p-5 flex justify-between items-center hover:bg-brand-bg/60 focus:outline-none"
                  id={`btn-faq-toggle-${index}`}
                >
                  <span className="font-subtitle text-xs sm:text-sm font-bold text-brand-charcoal">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-brand-teal transition-transform duration-200 ${
                      activeFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-sans text-brand-slate leading-relaxed border-t border-brand-charcoal/5 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CONTACT PAGE COMPREHENSIVE VIEW */}
        {currentRoute === "/contact" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start animate-in fade-in duration-200">
            
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="font-display text-3xl uppercase font-bold text-brand-charcoal">Old Iron Works Gym Colchester</h3>
                <p className="text-sm font-sans text-brand-slate leading-relaxed">
                  We are based in Colchester, inside the fully equipped rehabilitation training facilities of Old Iron Works Gym. 
                  This provides our physical clients with direct access to advanced strength weights, resistance machines, and recovery spaces.
                </p>
              </div>

              <div className="space-y-4 font-subtitle text-xs font-bold text-brand-charcoal">
                
                {/* Location Map Pin detail */}
                <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-charcoal/5">
                  <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-brand-slate block font-medium uppercase mb-0.5">Physical Address</span>
                    Old Iron Works Gym, unit 4, Maldon Road, Colchester, Essex, CO3...
                  </div>
                </div>

                {/* Opening hours info */}
                <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-charcoal/5">
                  <Clock className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-brand-slate block font-medium uppercase mb-0.5">Clinic Hours</span>
                    Monday - Friday: 8:00am - 6:00pm <br/>
                    Saturday: By consultation request
                  </div>
                </div>

                {/* Free Parking check */}
                <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-charcoal/5">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-brand-slate block font-medium uppercase mb-0.5 font-bold">Client Parking Allocation</span>
                    Free off-street customer car parking is available directly outside the main gym entrances.
                  </div>
                </div>

              </div>
            </div>

            {/* Right side contact enquiry form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-brand-charcoal/5 shadow-md">
              {contactSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-brand-teal-light/40 text-brand-teal rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl uppercase font-bold text-brand-charcoal">Enquiry Submitted successfully</h3>
                  <p className="text-xs font-sans text-brand-slate max-w-sm mx-auto leading-relaxed">
                    Thank you, {contactForm.name}. Our Essex clinic support team will review your enquiry and get back to you within 24 operational hours.
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="text-xs text-brand-teal hover:underline font-extrabold uppercase"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                  <h4 className="font-display text-2xl uppercase font-bold text-brand-charcoal border-b border-brand-charcoal/5 pb-2 mb-4">
                    Send a Clinical Inquiry
                  </h4>
                  <p className="text-xs font-sans text-brand-slate leading-normal">
                    Have any specific question about your symptoms, insurance guidelines, or scheduling? Contact Cam and Stef directly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-slate font-medium mb-1 uppercase font-subtitle text-[10px] tracking-wider">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-brand-bg rounded-xl border border-brand-charcoal/10 px-4.5 py-3 focus:outline-brand-teal/40 text-xs sm:text-sm"
                        placeholder="e.g. David Miller"
                        id="contact-form-name"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-slate font-medium mb-1 uppercase font-subtitle text-[10px] tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-brand-bg rounded-xl border border-brand-charcoal/10 px-4.5 py-3 focus:outline-brand-teal/40 text-xs sm:text-sm"
                        placeholder="david@example.co.uk"
                        id="contact-form-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-slate font-medium mb-1 uppercase font-subtitle text-[10px] tracking-wider">Phone contact</label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-brand-bg rounded-xl border border-brand-charcoal/10 px-4.5 py-3 focus:outline-brand-teal/40 text-xs sm:text-sm"
                        placeholder="07..."
                        id="contact-form-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-slate font-medium mb-1 uppercase font-subtitle text-[10px] tracking-wider">Subject area</label>
                      <select
                        value={contactForm.condition}
                        onChange={(e) => setContactForm({ ...contactForm, condition: e.target.value })}
                        className="w-full bg-brand-bg rounded-xl border border-brand-charcoal/10 px-4 py-3 focus:outline-brand-teal/40 text-xs sm:text-sm"
                        id="contact-form-subject"
                      >
                        <option>Back and Neck Stiffness</option>
                        <option>Sciatica and Spine</option>
                        <option>Running & Sports Injury</option>
                        <option>Billing / Insurance</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-slate font-medium mb-1 uppercase font-subtitle text-[10px] tracking-wider">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.msg}
                      onChange={(e) => setContactForm({ ...contactForm, msg: e.target.value })}
                      className="w-full bg-brand-bg rounded-xl border border-brand-charcoal/10 px-4.5 py-3 focus:outline-brand-teal/40 text-xs sm:text-sm"
                      placeholder="Please briefly describe your joint stiffness, physical limitations, or question."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4.5 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-display text-base tracking-widest uppercase font-bold text-center mt-3 shadow-md shadow-brand-teal/10"
                    id="contact-form-submit"
                  >
                    SUBMIT INQUIRY
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

        {/* BOOK-NOW SCHEDULING INTERACTIVE PORTLET */}
        {currentRoute === "/book-now" && (
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-brand-charcoal/5 shadow-md animate-in fade-in duration-200">
            
            {/* Steps indicator */}
            <div className="flex items-center justify-between border-b border-brand-charcoal/5 pb-4 mb-8 select-none">
              <span className="font-display text-xl uppercase font-bold text-brand-charcoal">Clinic Booking Desk</span>
              <div className="flex space-x-3 text-xs font-semibold">
                <span className={`${bookingStep >= 1 ? "text-brand-teal" : "text-brand-slate"}`}>1. Choose Appointment</span>
                <span className="text-brand-slate/40">/</span>
                <span className={`${bookingStep >= 2 ? "text-brand-teal" : "text-brand-slate"}`}>2. Select Date & Slot</span>
                <span className="text-brand-slate/40">/</span>
                <span className={`${bookingStep >= 3 ? "text-brand-teal" : "text-brand-slate"}`}>3. Confirmation</span>
              </div>
            </div>

            {/* STEP 1: CHOOSE CARE TYPE */}
            {bookingStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-left py-2">
                  <h4 className="font-display text-2xl uppercase font-bold text-brand-charcoal">Are you a new or existing patient?</h4>
                  <p className="text-xs text-brand-slate font-sans mt-1">
                    Select the initial evaluation if it's your first time or if you are presenting a new symptom.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* New Client intake option */}
                  <div
                    onClick={() => {
                      setBookingForm({ ...bookingForm, appointmentType: "Initial Assessment - £65 (45 mins)" });
                      setBookingStep(2);
                    }}
                    className="cursor-pointer group p-6 bg-brand-bg hover:bg-brand-teal-light/20 rounded-2xl border border-brand-charcoal/5 hover:border-brand-teal/30 shadow-sm transition-all text-left"
                  >
                    <span className="text-[10px] tracking-widest uppercase font-subtitle font-bold text-brand-teal px-2.5 py-1 bg-brand-white rounded-full">
                      NEW PATIENT START
                    </span>
                    <h5 className="font-display text-2xl uppercase font-bold text-brand-charcoal mt-4 mb-2 group-hover:text-brand-teal">
                      Initial Assessment
                    </h5>
                    <p className="text-xs text-brand-slate pl-1 font-sans leading-relaxed">
                      Core 45-minute comprehensive clinical diagnostic assessment, history review, physical tolerances test, trial treatment and written next-step recovery map.
                    </p>
                    <span className="text-xs font-bold text-brand-charcoal block mt-4 bg-brand-teal/20 px-3 py-1.5 rounded max-w-fit">
                      £65 • 45 minutes
                    </span>
                  </div>

                  {/* Returning Client progress option */}
                  <div
                    onClick={() => {
                      setBookingForm({ ...bookingForm, appointmentType: "Physiotherapy Follow Up - £45 (30 mins)" });
                      setBookingStep(2);
                    }}
                    className="cursor-pointer group p-6 bg-brand-bg hover:bg-brand-teal-light/20 rounded-2xl border border-brand-charcoal/5 hover:border-brand-teal/30 shadow-sm transition-all text-left"
                  >
                    <span className="text-[10px] tracking-widest uppercase font-subtitle font-bold text-brand-slate px-2.5 py-1 bg-brand-white rounded-full">
                      RETURNING PATIENT
                    </span>
                    <h5 className="font-display text-2xl uppercase font-bold text-brand-charcoal mt-4 mb-2 group-hover:text-brand-teal">
                      Follow Up Session
                    </h5>
                    <p className="text-xs text-brand-slate pl-1 font-sans leading-relaxed">
                      Core 30-minute ongoing rehabilitation treatment, progressive tissue loadings adjustment, physical reassessments, and continuous coaching.
                    </p>
                    <span className="text-xs font-bold text-brand-charcoal block mt-4 bg-brand-teal/20 px-3 py-1.5 rounded max-w-fit">
                      £45 • 30 minutes
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-charcoal/5 flex justify-between text-xs text-brand-slate">
                  <span>Registered clinicians: Cam and Stef</span>
                  <button onClick={() => setRoute("/contact")} className="hover:text-brand-teal hover:underline text-xs">
                    Need home visits instead?
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE SLOT AND COMPLETE */}
            {bookingStep === 2 && (
              <form onSubmit={handleBookingSubmit} className="space-y-6 animate-in fade-in duration-200 text-left font-sans text-xs">
                <div>
                  <button
                    type="button"
                    onClick={() => setBookingStep(1)}
                    className="text-xs font-subtitle font-bold text-brand-teal hover:underline inline-flex items-center gap-1 mb-4"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Care selection
                  </button>
                  <h4 className="font-display text-2xl uppercase font-bold text-brand-charcoal">
                    Selected Appointment: {bookingForm.appointmentType}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* Select parameters */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-brand-slate uppercase font-subtitle font-bold text-[10px] tracking-wider mb-1">
                        Select Clinician Preferred
                      </label>
                      <select
                        value={selectedClinicianFilter}
                        onChange={(e) => setSelectedClinicianFilter(e.target.value)}
                        className="w-full bg-brand-bg rounded-xl border border-brand-charcoal/10 px-4 py-3 text-xs sm:text-sm"
                      >
                        <option>Any Clinician (Earliest Slot)</option>
                        <option>Cam (Lead Physiotherapist)</option>
                        <option>Stef (Physiotherapist)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-brand-slate uppercase font-subtitle font-bold text-[10px] tracking-wider mb-1">
                        Select Appointment Date
                      </label>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full bg-brand-bg rounded-xl border border-brand-charcoal/10 px-4 py-3 text-xs sm:text-sm"
                      />
                    </div>

                    {/* Interactive Slots list */}
                    <div>
                      <label className="block text-brand-slate uppercase font-subtitle font-bold text-[10px] tracking-wider mb-2">
                        Available slots ({bookingForm.date})
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["9:15am", "10:30am", "11:45am", "2:15pm", "3:30pm", "4:45pm"].map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setBookingForm({ ...bookingForm, time: slot })}
                            className={`p-2 rounded-lg text-center font-semibold border text-xs sm:text-sm transition-all focus:outline-none ${
                              bookingForm.time === slot
                                ? "bg-brand-teal border-brand-teal text-white shadow-sm"
                                : "bg-white border-brand-charcoal/10 text-brand-charcoal hover:bg-brand-teal-light/20"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-4 bg-brand-bg p-5 rounded-2xl border border-brand-charcoal/5">
                    <span className="font-subtitle text-[10px] uppercase font-bold text-brand-slate block tracking-wider mb-2">
                      Your Details
                    </span>

                    <div>
                      <label className="block text-brand-slate uppercase font-subtitle font-bold text-[10px] tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full bg-white rounded-xl border border-brand-charcoal/10 px-4 py-2.5"
                        placeholder="e.g. David Miller"
                        id="booking-form-name"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-slate uppercase font-subtitle font-bold text-[10px] tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full bg-white rounded-xl border border-brand-charcoal/10 px-4 py-2.5"
                        placeholder="david@example.co.uk"
                        id="booking-form-email"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-slate uppercase font-subtitle font-bold text-[10px] tracking-wider mb-1">
                        Phone contact
                      </label>
                      <input
                        type="tel"
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full bg-white rounded-xl border border-brand-charcoal/10 px-4 py-2.5"
                        placeholder="07..."
                        id="booking-form-phone"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4.5 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-display text-base tracking-widest uppercase font-bold text-center mt-4"
                      id="booking-form-submit"
                    >
                      CONFIRM BOOKING SLOT
                    </button>
                  </div>

                </div>
              </form>
            )}

            {/* STEP 3: SUCCESS STATE */}
            {bookingStep === 3 && (
              <div className="text-center py-10 space-y-6 animate-in fade-in duration-300 select-none">
                <div className="w-16 h-16 bg-brand-teal-light/40 text-brand-teal rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-3xl uppercase font-bold text-brand-charcoal">
                    Appointment Booking confirmed!
                  </h3>
                  <p className="text-sm font-sans text-brand-slate max-w-md mx-auto leading-relaxed">
                    Thank you {bookingForm.name}. Your session has been mapped on our charts for <strong>{bookingForm.date} at {bookingForm.time}</strong>.
                  </p>
                </div>

                <div className="max-w-md mx-auto p-5 bg-brand-bg rounded-2xl border border-brand-charcoal/5 text-left text-xs font-subtitle text-brand-charcoal space-y-2">
                  <span className="font-extrabold block text-brand-slate text-[10px] mb-1">RECOVERY CHECKLIST</span>
                  <p>✓ <strong>Session:</strong> {bookingForm.appointmentType}</p>
                  <p>✓ <strong>Location:</strong> Old Iron Works Gym Essex CO3 (Free parking)</p>
                  <p>✓ <strong>Dress recomendation:</strong> Wear loose clothing or shorts as appropriate</p>
                  <p>✓ A direct calendar invite has been dispatched to {bookingForm.email}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setBookingStep(1);
                    setRoute("/");
                  }}
                  className="py-3 px-6 bg-brand-charcoal hover:bg-brand-slate text-white rounded-xl font-display text-base tracking-widest uppercase font-bold"
                >
                  Return to Homepage
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </main>
  );
}
