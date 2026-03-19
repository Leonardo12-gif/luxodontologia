import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import before1 from "@/assets/before-1.png";
import after1 from "@/assets/after-1.png";

const resultSlides = [
  "/results/result-3.png",
  "/results/result-4.png",
  "/results/result-5.png",
  "/results/result-6.png",
  "/results/result-7.png",
];

const BeforeAfterSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalSlides = resultSlides.length;

  const scheduleResume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 5000);
  }, []);

  const pauseAutoplay = useCallback(() => {
    setIsPaused(true);
    scheduleResume();
  }, [scheduleResume]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % totalSlides);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    pauseAutoplay();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <section className="px-6 py-8">
      <motion.h2
        className="font-display text-xl font-semibold text-foreground text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Antes & Depois
      </motion.h2>

      <div className="rounded-xl border border-border overflow-hidden mb-8 shadow-sm">
        <div className="grid grid-cols-2 gap-px bg-border">
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

      <motion.h2
        className="font-display text-xl font-semibold text-foreground text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Nossos Resultados
      </motion.h2>

      <div
        className="relative overflow-hidden rounded-xl border border-border shadow-sm"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={pauseAutoplay}
        onClick={pauseAutoplay}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {resultSlides.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <img src={img} alt={`Resultado ${i + 1}`} className="w-full aspect-[4/3] object-cover" />
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            pauseAutoplay();
            prev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/60 backdrop-blur flex items-center justify-center text-foreground transition-all"
          aria-label="Ver resultado anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => {
            pauseAutoplay();
            next();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/60 backdrop-blur flex items-center justify-center text-foreground transition-all"
          aria-label="Ver próximo resultado"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {resultSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                pauseAutoplay();
                setCurrent(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-champagne w-4" : "bg-foreground/30"
              }`}
              aria-label={`Ir para resultado ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
