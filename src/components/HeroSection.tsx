import { motion } from "framer-motion";
import logoLux from "@/assets/logo-lux.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  const scrollToUnits = () => {
    document.getElementById("unidades")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center pt-12 pb-10 px-6 text-center">
      <motion.div
        className="w-28 h-28 rounded-full overflow-hidden glow-primary mb-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <img src={logoLux} alt="Lux Odontologia" className="w-full h-full object-cover" />
      </motion.div>

      <motion.h1
        className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-wide mb-2"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Lux Odontologia
      </motion.h1>

      <motion.p
        className="text-champagne font-body text-sm tracking-widest uppercase mb-4"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Estética Odontológica
      </motion.p>

      <motion.p
        className="text-muted-foreground font-body text-sm md:text-base max-w-sm leading-relaxed mb-8"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        Especialistas em lentes e facetas em resina. Transformamos sorrisos com naturalidade, sofisticação e excelência.
      </motion.p>

      <motion.button
        onClick={scrollToUnits}
        className="font-body text-sm font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full bg-primary text-primary-foreground border border-champagne/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 glow-primary"
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
