import { useState, useEffect } from "react";
import { Menu, X, Calendar, Activity, ChevronDown } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

interface HeaderProps {
  currentRoute: string;
  setRoute: (route: string) => void;
}

export default function Header({ currentRoute, setRoute }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [conditionsDropdownOpen, setConditionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route changes
  useEffect(() => {
    setServicesDropdownOpen(false);
    conditionsDropdownOpen && setConditionsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [currentRoute]);

  const navLinks = [
    { label: "Home", action: () => setRoute("/") },
    { label: "About", action: () => setRoute("/about") },
    { label: "Services", isDropdown: true, type: "services" },
    { label: "Conditions", isDropdown: true, type: "conditions" },
    { label: "Team", action: () => setRoute("/team") },
    { label: "Reviews", action: () => setRoute("/reviews") },
    { label: "Blog", action: () => setRoute("/blog") },
    { label: "FAQs", action: () => setRoute("/faqs") },
    { label: "Contact", action: () => setRoute("/contact") },
  ];

  const submenuServices = [
    { label: "All Services Overview", path: "/services" },
    { label: "Physiotherapy", path: "/services/physiotherapy" },
    { label: "Initial Assessment", path: "/services/initial-assessment" },
    { label: "Follow Up Sessions", path: "/services/follow-up" },
    { label: "Acupuncture Therapy", path: "/services/acupuncture" },
    { label: "Sports Massage", path: "/services/sports-massage" },
    { label: "Home Visit Physio", path: "/services/home-visits" },
  ];

  const submenuConditions = [
    { label: "All Conditions Overview", path: "/conditions" },
    { label: "Back Pain", path: "/conditions/back-pain" },
    { label: "Neck Pain & Headaches", path: "/conditions/neck-pain" },
    { label: "Sciatica Treatment", path: "/conditions/sciatica" },
    { label: "Running Injuries", path: "/conditions/running-injuries" },
    { label: "Post-Operative Rehab", path: "/conditions/post-operative-rehab" },
    { label: "Persistent Pain Pacing", path: "/conditions/persistent-pain" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && currentRoute === "/") return true;
    if (path !== "/" && currentRoute.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      id="main-nav-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-brand-charcoal/5 shadow-md py-3"
          : "bg-brand-bg md:bg-brand-bg/95 md:backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO AREA */}
        <button
          onClick={() => setRoute("/")}
          className="flex items-center space-x-3 text-left focus:outline-none focus:ring-2 focus:ring-brand-teal rounded-lg p-1 group"
          id="btn-nav-logo"
        >
          <ImageWithFallback
            src="/manus-storage/blackwater_bp_logo_959e7cb9.webp"
            fallbackType="logo"
            altText="Blackwater Physiotherapy Logo"
            className="h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
          />
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-sm font-subtitle font-medium text-brand-slate"
          id="desktop-nav-links"
        >
          {navLinks.map((link) => {
            if (link.isDropdown) {
              const isOpen = link.type === "services" ? servicesDropdownOpen : conditionsDropdownOpen;
              const setOpen = link.type === "services" ? setServicesDropdownOpen : setConditionsDropdownOpen;
              const submenu = link.type === "services" ? submenuServices : submenuConditions;
              const prefixPath = link.type === "services" ? "/services" : "/conditions";

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button
                    onClick={() => setRoute(prefixPath)}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors group ${
                      isActive(prefixPath)
                        ? "text-brand-teal font-semibold"
                        : "hover:text-brand-charcoal hover:bg-brand-teal-light/20"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown panel */}
                  {isOpen && (
                    <div className="absolute left-0 top-full w-56 bg-white border border-brand-charcoal/5 shadow-xl rounded-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {submenu.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => {
                            setRoute(sub.path);
                            setOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-brand-teal-light/30 ${
                            currentRoute === sub.path
                              ? "text-brand-teal font-semibold bg-brand-teal-light/10"
                              : "text-brand-charcoal hover:text-brand-teal"
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.label}
                onClick={link.action}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.label === "Home" ? "/" : `/${link.label.toLowerCase()}`)
                    ? "text-brand-teal font-semibold bg-brand-teal-light/10"
                    : "hover:text-brand-charcoal hover:bg-brand-teal-light/20"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* ACTIONS AREA */}
        <div className="hidden xl:flex items-center space-x-4">
          <a
            href="tel:01621502444"
            className="font-subtitle text-xs text-brand-slate hover:text-brand-teal transition-colors font-semibold flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
             Essex: 01621 502444
          </a>

          <button
            onClick={() => setRoute("/book-now")}
            className="flex items-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-5 py-2.5 rounded-xl font-display text-lg tracking-wider uppercase font-semibold transition-all duration-200 transform active:scale-95 shadow-lg shadow-brand-teal/10"
            id="header-cta-book-now"
          >
            <Calendar className="w-4 h-4" />
            BOOK ASSESSMENT
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="xl:hidden flex items-center space-x-3">
          <button
            onClick={() => setRoute("/book-now")}
            className="bg-brand-teal hover:bg-brand-teal/95 text-white p-2 rounded-xl transition-transform active:scale-95 shadow-md shadow-brand-teal/10"
          >
            <Calendar className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-charcoal p-2 hover:bg-brand-teal-light/20 rounded-xl transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-brand-charcoal/10 shadow-lg animate-in fade-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <div className="border-b border-brand-charcoal/5 pb-2">
              <span className="text-xs uppercase tracking-widest text-brand-slate font-semibold block mb-1">
                Menu Directory
              </span>
            </div>
            
            <button
              onClick={() => setRoute("/")}
              className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${
                currentRoute === "/" ? "bg-brand-teal-light/30 text-brand-teal font-bold" : "text-brand-charcoal"
              }`}
            >
              Homepage
            </button>

            <button
              onClick={() => setRoute("/about")}
              className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${
                currentRoute === "/about" ? "bg-brand-teal-light/30 text-brand-teal font-bold" : "text-brand-charcoal"
              }`}
            >
              Who We Are (About)
            </button>

            {/* Services with subitems toggle */}
            <div className="space-y-1">
              <div className="flex items-center justify-between py-2 px-3 text-sm font-semibold text-brand-slate bg-brand-bg/50 rounded-lg">
                <span>Our Services</span>
                <button
                  onClick={() => setRoute("/services")}
                  className="text-xs text-brand-teal underline"
                >
                  View All
                </button>
              </div>
              <div className="pl-4 grid grid-cols-2 gap-1 text-xs">
                {submenuServices.slice(1).map((sub) => (
                  <button
                    key={sub.label}
                    onClick={() => setRoute(sub.path)}
                    className={`text-left p-2 rounded ${
                      currentRoute === sub.path ? "text-brand-teal font-bold bg-brand-teal-light/10" : "text-brand-slate"
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Conditions with subitems toggle */}
            <div className="space-y-1">
              <div className="flex items-center justify-between py-2 px-3 text-sm font-semibold text-brand-slate bg-brand-bg/50 rounded-lg">
                <span>Conditions We Treat</span>
                <button
                  onClick={() => setRoute("/conditions")}
                  className="text-xs text-brand-teal underline"
                >
                  View All
                </button>
              </div>
              <div className="pl-4 grid grid-cols-2 gap-1 text-xs">
                {submenuConditions.slice(1).map((sub) => (
                  <button
                    key={sub.label}
                    onClick={() => setRoute(sub.path)}
                    className={`text-left p-2 rounded ${
                      currentRoute === sub.path ? "text-brand-teal font-bold bg-brand-teal-light/10" : "text-brand-slate"
                    }`}
                  >
                    {sub.label.replace(" Treatment", "").replace(" Pacing", "")}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-brand-charcoal/5">
              <button
                onClick={() => setRoute("/team")}
                className={`py-2 px-1 text-center rounded text-xs font-semibold ${
                  currentRoute === "/team" ? "bg-brand-teal-light/20 text-brand-teal" : "text-brand-charcoal"
                }`}
              >
                Team
              </button>
              <button
                onClick={() => setRoute("/reviews")}
                className={`py-2 px-1 text-center rounded text-xs font-semibold ${
                  currentRoute === "/reviews" ? "bg-brand-teal-light/20 text-brand-teal" : "text-brand-charcoal"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setRoute("/blog")}
                className={`py-2 px-1 text-center rounded text-xs font-semibold ${
                  currentRoute === "/blog" ? "bg-brand-teal-light/20 text-brand-teal" : "text-brand-charcoal"
                }`}
              >
                Blog
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3">
              <button
                onClick={() => setRoute("/faqs")}
                className="py-2 px-3 text-center border border-brand-charcoal/10 rounded-xl text-xs font-medium text-brand-slate hover:bg-brand-bg"
              >
                Read FAQs
              </button>
              <button
                onClick={() => setRoute("/contact")}
                className="py-2 px-3 text-center bg-brand-charcoal text-white rounded-xl text-xs font-medium hover:bg-brand-slate"
              >
                Get Directions
              </button>
            </div>

            <button
              onClick={() => setRoute("/book-now")}
              className="w-full bg-brand-teal text-white py-3 px-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold flex items-center justify-center gap-2 mt-4 shadow-lg shadow-brand-teal/20"
            >
              <Calendar className="w-5 h-5" />
              BOOK AN ASSESSMENT NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
