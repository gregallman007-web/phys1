import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ConceptCards from "./components/ConceptCards";
import WhyUs from "./components/WhyUs";
import MeetClinic from "./components/MeetClinic";
import Footer from "./components/Footer";
import InteriorPages from "./components/InteriorPages";

export default function App() {
  const [route, setRoute] = useState("/");

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  // Handle client-side hash routing fallback for extra safety
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && hash.startsWith("/")) {
        setRoute(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // trigger init check
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const changeRoute = (newRoute: string) => {
    setRoute(newRoute);
    window.location.hash = newRoute;
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg select-text text-brand-charcoal overflow-x-hidden font-sans antialiased selection:bg-brand-teal selection:text-white">
      {/* Surrounding global header shell */}
      <Header currentRoute={route} setRoute={changeRoute} />

      {/* DYNAMIC VIEW ROUTING PORTFOLIO */}
      {route === "/" ? (
        <div className="animate-in fade-in duration-500">
          {/* Hero space visual panel */}
          <Hero setRoute={changeRoute} />

          {/* Lower horizontal row (Conditions, reviews rotating, services, kontak) */}
          <ConceptCards setRoute={changeRoute} />

          {/* Core Story / entrance photography split */}
          <WhyUs setRoute={changeRoute} />

          {/* Meet clinicians cam & stef directory */}
          <MeetClinic setRoute={changeRoute} />
          
          {/* Final CTA band included inside homepage in addition to lower row */}
          <section className="bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-slate py-16 text-white border-t-4 border-brand-teal relative select-none">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
              <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-subtitle block">
                BOOK WITH CLINICAL CONFIDENCE
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase font-black leading-none">
                Ready to start with a clearer plan?
              </h2>
              <p className="font-sans text-brand-teal-light/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Book an Initial Assessment, submit an outline question regarding your joint stiffness, or explore our active physical therapy methods.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => changeRoute("/book-now")}
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white py-3.5 px-8 rounded-xl font-display text-lg uppercase tracking-wider font-extrabold shadow-lg shadow-brand-teal/20 transition-all select-none"
                  id="final-cta-book"
                >
                  BOOK INITIAL ASSESSMENT
                </button>
                <button
                  onClick={() => changeRoute("/contact")}
                  className="bg-transparent border-2 border-brand-teal-light text-white py-3.5 px-8 rounded-xl font-display text-lg uppercase tracking-wider font-extrabold hover:bg-white/5 transition-all"
                  id="final-cta-contact"
                >
                  CONTACT THE CLINIC Desk
                </button>
              </div>

              {/* Badges footer band */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 border-t border-white/10 text-xs text-white/50 font-subtitle font-semibold">
                <span>STUCTURED ASSESSMENT-LED CARE</span>
                <span>•</span>
                <span>LOCAL CLINIC AT OLD IRON WORKS GYM</span>
                <span>•</span>
                <span>RECOGNISED BY MAJOR HEALTH INSURERS</span>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="animate-in fade-in duration-300">
          <InteriorPages currentRoute={route} setRoute={changeRoute} />
        </div>
      )}

      {/* Surrounding global footer shelf with trust and acc strips */}
      <Footer setRoute={changeRoute} />
    </div>
  );
}
