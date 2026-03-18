import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import before1 from "@/assets/before-1.png";
import after1 from "@/assets/after-1.png";

const BeforeAfterSection = () => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);

  const totalSlides = 2;
  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, totalSlides - 1)), []);
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
    <section className="px-6 py-8">
      {/* Before & After */}
      <motion.h2
        className="font-display text-xl font-semibold text-foreground text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Antes & Depois
      </motion.h2>

      <div className="rounded-xl border border-border/50 overflow-hidden mb-8">
        <div className="grid grid-cols-2 gap-px bg-border/30">
          <div className="relative">
            <img src={before1} alt="Antes do procedimento" className="w-full aspect-[4/3] object-cover" />
            <span className="absolute bottom-2 left-2 font-body text-[9px] uppercase tracking-widest bg-background/80 text-foreground px-2 py-0.5 rounded">Antes</span>
          </div>
          <div className="relative">
            <img src={after1} alt="Depois do procedimento" className="w-full aspect-[4/3] object-cover" />
            <span className="absolute bottom-2 right-2 font-body text-[9px] uppercase tracking-widest bg-primary/80 text-primary-foreground px-2 py-0.5 rounded">Depois</span>
          </div>
        </div>
      </div>

      {/* Results Carousel */}
      <motion.h2
        className="font-display text-xl font-semibold text-foreground text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Nossos Resultados
      </motion.h2>

      <div
        className="relative overflow-hidden rounded-xl border border-border/50"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {[result1, result2].map((img, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <img src={img} alt={`Resultado ${i + 1}`} className="w-full aspect-[4/3] object-cover" />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/60 backdrop-blur flex items-center justify-center text-foreground disabled:opacity-20 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          disabled={current === totalSlides - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/60 backdrop-blur flex items-center justify-center text-foreground disabled:opacity-20 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[0, 1].map((i) => (
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
