import { motion } from "framer-motion";
import logoLux from "@/assets/logo-lux.png";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const scrollToUnits = () => {
    document.getElementById("unidades")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center pt-10 pb-6 px-6 text-center">
      <motion.div
        className="w-24 h-24 rounded-full overflow-hidden glow-primary mb-4"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <img src={logoLux} alt="Lux Odontologia" className="w-full h-full object-cover" />
      </motion.div>

      <motion.h1
        className="font-display text-2xl font-semibold text-foreground tracking-wide mb-1"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Lux Odontologia
      </motion.h1>

      <motion.p
        className="text-champagne font-body text-[11px] tracking-widest uppercase mb-3"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Estética Odontológica
      </motion.p>

      <motion.p
        className="text-muted-foreground font-body text-xs max-w-xs leading-relaxed mb-2"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        Especialistas em lentes e facetas em resina. Transformamos sorrisos com naturalidade, sofisticação e excelência.
      </motion.p>

      <motion.p
        className="text-muted-foreground/60 font-body text-[10px] tracking-wide mb-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        RT: Larissa Morais | CROSP 119375 · CROSP-CL 028169
      </motion.p>

      <motion.button
        onClick={scrollToUnits}
        className="font-body text-xs font-semibold tracking-wider uppercase px-7 py-3 rounded-full bg-primary text-primary-foreground border border-champagne/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 glow-primary"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
        whileHover={{ boxShadow: "0 0 50px hsla(345, 80%, 25%, 0.5)" }}
      >
        Agendar Atendimento
      </motion.button>
    </section>
  );
};

export default HeroSection;
