import { useState } from "react";

interface ImageWithFallbackProps {
  src?: string;
  fallbackType: "logo" | "hero" | "entrance" | "team" | "service" | "condition";
  altText: string;
  className?: string;
  [key: string]: any; // Allow any other standard img element properties
}

export default function ImageWithFallback({
  src,
  fallbackType,
  altText,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-brand-charcoal to-brand-slate text-white p-6 text-center ${className || ""}`}
        style={{ borderRadius: "inherit" }}
      >
        {/* HTML Comment to trace original asset intent */}
        {/* NOTE: Missing background photo/asset. Needed: {fallbackType} - {altText} */}
        
        {fallbackType === "logo" ? (
          <div className="flex items-center space-x-3 select-none">
            <svg
              className="w-10 h-10 text-brand-teal"
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
              <span className="font-display text-2xl tracking-wide uppercase font-bold leading-none text-white">
                BLACKWATER
              </span>
              <span className="font-subtitle text-xs tracking-widest text-brand-teal uppercase font-semibold leading-none">
                PHYSIOTHERAPY
              </span>
            </div>
          </div>
        ) : fallbackType === "hero" ? (
          <div className="absolute inset-0 bg-cover bg-center filter opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200')` }}>
          </div>
        ) : fallbackType === "entrance" ? (
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800')` }}>
          </div>
        ) : fallbackType === "team" ? (
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600')` }}>
          </div>
        ) : (
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&q=80&w=500')` }}>
          </div>
        )}

        {/* Overlay texts */}
        {fallbackType !== "logo" && (
          <div className="relative z-10 p-4 flex flex-col items-center">
            <span className="text-brand-teal-light uppercase text-xs tracking-widest font-subtitle font-bold mb-1">
              {fallbackType} Space Visual
            </span>
            <p className="font-display text-2xl leading-tight uppercase font-medium max-w-xs mb-3 text-white">
              {altText}
            </p>
            <div className="w-12 h-[2px] bg-brand-teal mb-3"></div>
            <span className="text-white/60 text-xs font-sans italic">
              Essex Clinic Room • Premium Rehabilitation
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={altText}
      className={className}
      onError={() => {
        console.warn(`Failed to load image: ${src}. Activating fallback.`);
        setHasError(true);
      }}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
