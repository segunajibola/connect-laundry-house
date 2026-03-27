"use client";

import { ArrowRight, Star, Clock, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Clock, value: "24hr", label: "Fast Turnaround" },
  { icon: Shield, value: "100%", label: "Satisfaction Guaranteed" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
];

const slides = [
  {
    image: "/images/connect-laundry-house.jpeg",
    headline: "Fresh Clothes,",
    highlight: "Zero Stress",
    sub: "Professional laundry and dry-cleaning services with doorstep pickup & delivery at your convenience. Fast, affordable, and spotlessly clean — every time.",
  },
  {
    image: "/images/connect-laundry-house2.jpeg",
    headline: "Pickup &",
    highlight: "Delivery Done Right",
    sub: "We come to you. Schedule a pickup at any time and get your clothes delivered fresh to your door — no trips, no hassle.",
  },
  {
    image: "/images/connect-card1.jpeg",
    headline: "Dry Cleaning",
    highlight: "You Can Trust",
    sub: "Delicate fabrics handled with care. Our experts clean, press, and package every garment to perfection.",
  },
  {
    image: "/images/connect-card2.jpeg",
    headline: "Serving Lagos",
    highlight: "& Abuja",
    sub: "Trusted by 500+ happy customers across Nigeria. Premium laundry service, right in your neighbourhood.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((index + slides.length) % slides.length);
        setTransitioning(false);
      }, 400);
    },
    [transitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slideshow backgrounds */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span>Trusted by 500+ happy customers across Lagos and Abuja.</span>
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 transition-opacity duration-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {slide.headline}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            {slide.highlight}
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed transition-opacity duration-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {slide.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up">
          <a
            href="#booking"
            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
          >
            Book a Pickup
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all text-base w-full sm:w-auto justify-center"
          >
            View Services
          </a>
        </div>

        {/* Slide controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => goTo(current - 1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2.5 bg-blue-400"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <Icon className="w-5 h-5 text-blue-400 mb-2" />
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-white/55 mt-0.5 text-center">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave into next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 72L60 64C120 56 240 40 360 36C480 32 600 40 720 48C840 56 960 64 1080 64C1200 64 1320 56 1380 52L1440 48V72H1380C1320 72 1200 72 1080 72C960 72 840 72 720 72C600 72 480 72 360 72C240 72 120 72 60 72H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
