import { motion } from "framer-motion";

const CtaSection = () => {
  const scrollToUnits = () => {
    document.getElementById("unidades")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-display text-lg font-semibold text-foreground mb-2">
          Escolha a unidade mais próxima
        </p>
        <p className="font-body text-xs text-muted-foreground mb-6">
          e agende seu atendimento.
        </p>
        <button
          onClick={scrollToUnits}
          className="font-body text-xs font-semibold tracking-wider uppercase px-7 py-3 rounded-full bg-primary text-primary-foreground border border-champagne/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 glow-primary"
        >
          Falar com uma Unidade
        </button>
      </motion.div>
    </section>
  );
};

export default CtaSection;
