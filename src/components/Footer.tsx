import { Phone, Mail, MapPin, Award, CheckCircle2, ChevronRight, Activity } from "lucide-react";

interface FooterProps {
  setRoute: (route: string) => void;
}

export default function Footer({ setRoute }: FooterProps) {
  const handleAnchorClick = (path: string) => {
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinksService = [
    { label: "Physiotherapy", path: "/services/physiotherapy" },
    { label: "Initial Assessment", path: "/services/initial-assessment" },
    { label: "Follow Up Sessions", path: "/services/follow-up" },
    { label: "Acupuncture Therapy", path: "/services/acupuncture" },
    { label: "Sports Massage Care", path: "/services/sports-massage" },
    { label: "Home Visit Physio", path: "/services/home-visits" },
  ];

  const footerLinksConditions = [
    { label: "Back Pain Stiffness", path: "/conditions/back-pain" },
    { label: "Neck Pain & Headaches", path: "/conditions/neck-pain" },
    { label: "Sciatica Treatment", path: "/conditions/sciatica" },
    { label: "Running Overload", path: "/conditions/running-injuries" },
    { label: "Post-Operative Rehab", path: "/conditions/post-operative-rehab" },
    { label: "Persistent Pain Pacing", path: "/conditions/persistent-pain" },
  ];

  const footerMainDirectory = [
    { label: "Home Base", path: "/" },
    { label: "Our Story", path: "/about" },
    { label: "Clinicians Team", path: "/team" },
    { label: "Verified Reviews", path: "/reviews" },
    { label: "A-First Blog", path: "/blog" },
    { label: "Client FAQs", path: "/faqs" },
    { label: "Contact Clinic", path: "/contact" },
  ];

  return (
    <footer className="bg-brand-charcoal text-white pt-12" id="main-website-footer">
      
      {/* 1. INTERIOR-SHELL ACCREDITATION TRUST STRIP (Light contrast top band) */}
      <div className="bg-brand-teal py-8 px-4 border-b border-white/5 select-none" id="acc-trust-strip">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 md:px-8">
          
          <div className="flex items-center space-x-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-brand-teal-light shrink-0" />
            <div className="text-left font-subtitle text-sm">
              <span className="font-extrabold block leading-normal uppercase text-xs tracking-wider">HCPC Registered</span>
              <span className="text-white/80 text-xs">Certified Medical Practice</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-brand-teal-light shrink-0" />
            <div className="text-left font-subtitle text-sm">
              <span className="font-extrabold block leading-normal uppercase text-xs tracking-wider">Major Insurers</span>
              <span className="text-white/80 text-xs">AXA, Bupa, Aviva Cleared</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-brand-teal-light shrink-0" />
            <div className="text-left font-subtitle text-sm">
              <span className="font-extrabold block leading-normal uppercase text-xs tracking-wider">Trusted local care</span>
              <span className="text-white/80 text-xs">Proudly serving Essex, UK</span>
            </div>
          </div>

          {/* Graphical Trust Labels representing medical emblems */}
          <div className="flex gap-3 text-[10px] font-subtitle uppercase tracking-widest font-extrabold text-white/50 bg-black/15 px-3 py-2 rounded-lg">
            <span>AXA</span>
            <span className="text-brand-teal-light">•</span>
            <span>BUPA</span>
            <span className="text-brand-teal-light">•</span>
            <span>AVIVA</span>
            <span className="text-brand-teal-light">•</span>
            <span>HCPC</span>
          </div>

        </div>
      </div>

      {/* 2. CORE FOOTER INFO GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 font-sans">
        
        {/* WIDGET 1: LOGO & STATEMENT */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center space-x-3">
            <svg
              className="w-10 h-10 text-brand-teal shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-display text-2xl tracking-wide uppercase font-black leading-none text-white">
                BLACKWATER
              </span>
              <span className="font-subtitle text-xs tracking-widest text-brand-teal uppercase font-bold leading-none">
                PHYSIOTHERAPY
              </span>
            </div>
          </div>

          <p className="text-xs text-brand-teal-light/70 leading-relaxed italic max-w-sm">
            &ldquo;Thoughtful physiotherapy, structured rehabilitation, and clear next steps for people who want to move forward with greater physical confidence.&rdquo;
          </p>

          <div className="text-xs text-white/50 space-y-2">
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
              <span>
                Old Iron Works Gym, unit 4, Maldon Road, Colchester, Essex, CO3...
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-teal shrink-0" />
              <span>01621 502444 (Desk Hours: 8:00am - 6:00pm)</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-teal shrink-0" />
              <span>info@blackwaterphysio.co.uk</span>
            </p>
          </div>
        </div>

        {/* WIDGET 2: CORE DIRECTORY */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-display text-lg uppercase tracking-wider text-white font-bold border-b border-white/10 pb-2">
            DIRECTORY
          </h4>
          <ul className="space-y-2 text-xs">
            {footerMainDirectory.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleAnchorClick(link.path)}
                  className="hover:text-brand-teal transition-colors text-white/70 flex items-center gap-1.5 focus:outline-none"
                >
                  <ChevronRight className="w-3 h-3 text-brand-teal" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* WIDGET 3: SERVICE PATHWAYS */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-display text-lg uppercase tracking-wider text-white font-bold border-b border-white/10 pb-2">
            CLINICAL SERVICES
          </h4>
          <ul className="space-y-2 text-xs">
            {footerLinksService.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleAnchorClick(link.path)}
                  className="hover:text-brand-teal transition-colors text-white/70 flex items-center gap-1.5 focus:outline-none text-left"
                >
                  <ChevronRight className="w-3 h-3 text-transparent group-hover:text-brand-teal" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* WIDGET 4: CORE CONDITIONS */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-display text-lg uppercase tracking-wider text-white font-bold border-b border-white/10 pb-2">
            CONDITIONS COALESCENCE
          </h4>
          <ul className="space-y-2 text-xs">
            {footerLinksConditions.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleAnchorClick(link.path)}
                  className="hover:text-brand-teal transition-colors text-white/70 flex items-center gap-1.5 focus:outline-none text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-teal/40" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* 3. LEGAL ACCREDITATION BOTTOM COPY */}
      <div className="bg-black/20 py-6 px-4 border-t border-white/5 font-sans text-[11px] text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left leading-normal">
            &copy; 2026 Blackwater Physiotherapy. All HCPC, CSP charter regulations apply. Private practice based in Essex, United Kingdom.
          </p>
          <div className="flex gap-4">
            <button onClick={() => handleAnchorClick("/faqs")} className="hover:text-brand-teal">Safety Charter</button>
            <span>•</span>
            <button onClick={() => setRoute("/contact")} className="hover:text-brand-teal">Directions & Gym Access</button>
            <span>•</span>
            <span className="text-brand-teal opacity-50 font-bold">Teal Band Momentum style concept</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
