// AboutCarousel.jsx (only class/style changes)
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SLIDES } from "../constants";

export default function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const threshold = 40;
    if (dx > threshold) prev();
    if (dx < -threshold) next();
    startX.current = null;
  };

  return (
    <section
      className="relative mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16"
      aria-roledescription="carousel"
      aria-label="About RooGen AI"
    >
      {/* viewport */}
      <div
        className="overflow-hidden rounded-3xl ring-1 ring-neutral-800/60 bg-neutral-900/30"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s) => (
            <article key={s.id} className="w-full shrink-0">
              <div className="grid items-center p-8 md:p-12 lg:p-16 gap-10 lg:gap-20 md:grid-cols-2">
                {/* Text column with max width so lines stay readable */}
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                    {s.heading}
                  </h2>
                  {s.subheading && (
                    <p className="mt-3 text-2xl md:text-3xl text-neutral-300 text-balance">
                      {s.subheading}
                    </p>
                  )}
                  <p className="mt-8 text-base md:text-lg lg:text-xl leading-8 text-neutral-300">
                    {s.body}
                  </p>
                </div>

                {/* Visual panel */}
                <div className="relative h-64 md:h-[22rem] lg:h-[26rem]">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-teal-300/10 via-purple-400/10 to-indigo-400/10 ring-1 ring-neutral-800" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2
             inline-flex items-center justify-center
             h-9 w-9 md:h-10 md:w-10     /* smaller circle */
             rounded-full border border-neutral-700/70 bg-black/50 backdrop-blur
             hover:bg-black/60"
      >
        <FiChevronLeft className="h-4 w-4 md:h-5 md:w-5" /> {/* smaller icon */}
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2
             inline-flex items-center justify-center
             h-9 w-9 md:h-10 md:w-10
             rounded-full border border-neutral-700/70 bg-black/50 backdrop-blur
             hover:bg-black/60"
      >
        <FiChevronRight className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      {/* Dots with extra spacing */}
      <div className="mt-8 flex justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === i ? "bg-white" : "bg-neutral-600 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
