import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import before1 from "@/assets/before-1.png";
import after1 from "@/assets/after-1.png";
import result1 from "@/assets/result-1.png";
import result2 from "@/assets/result-2.png";

const slides = [
  { type: "comparison" as const, before: before1, after: after1, label: "Antes & Depois" },
  { type: "single" as const, image: result1, label: "Resultado" },
  { type: "single" as const, image: result2, label: "Resultado" },
];

const BeforeAfterSection = () => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) { next(); } else { prev(); }
    }
  };

  return (
    <section className="px-6 py-12">
      <motion.h2
        className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Resultados
      </motion.h2>

      <div
        ref={scrollRef}
        className="relative overflow-hidden rounded-xl border border-border/50"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0">
              {slide.type === "comparison" ? (
                <div className="grid grid-cols-2 gap-0.5 bg-border/30">
                  <div className="relative">
                    <img src={slide.before} alt="Antes" className="w-full aspect-[4/3] object-cover" />
                    <span className="absolute bottom-2 left-2 font-body text-[10px] uppercase tracking-widest bg-background/80 text-foreground px-2 py-0.5 rounded">Antes</span>
                  </div>
                  <div className="relative">
                    <img src={slide.after} alt="Depois" className="w-full aspect-[4/3] object-cover" />
                    <span className="absolute bottom-2 right-2 font-body text-[10px] uppercase tracking-widest bg-primary/80 text-primary-foreground px-2 py-0.5 rounded">Depois</span>
                  </div>
                </div>
              ) : (
                <img src={slide.image} alt={slide.label} className="w-full aspect-[4/3] object-cover" />
              )}
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/60 backdrop-blur flex items-center justify-center text-foreground disabled:opacity-20 hover:bg-background/80 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/60 backdrop-blur flex items-center justify-center text-foreground disabled:opacity-20 hover:bg-background/80 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-champagne w-4" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
