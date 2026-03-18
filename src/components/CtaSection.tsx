import { motion } from "framer-motion";

const CtaSection = () => {
  const scrollToUnits = () => {
    document.getElementById("unidades")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
          Escolha a unidade mais próxima
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-8">
          e agende seu atendimento.
        </p>
        <button
          onClick={scrollToUnits}
          className="font-body text-sm font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full bg-primary text-primary-foreground border border-champagne/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 glow-primary"
        >
          Falar com uma Unidade
        </button>
      </motion.div>
    </section>
  );
};

export default CtaSection;
