import { motion } from "framer-motion";
import { Sparkles, Heart, MapPin } from "lucide-react";

const items = [
  { icon: Sparkles, label: "Lentes e Facetas" },
  { icon: Heart, label: "Atendimento VIP" },
  { icon: MapPin, label: "6 Unidades em SP" },
];

const DifferentialsSection = () => (
  <section className="px-6 pb-8">
    <motion.div
      className="flex gap-3 justify-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="flex-1 bg-card rounded-lg p-3 border border-border/50 flex flex-col items-center gap-2 text-center"
        >
          <item.icon className="w-4 h-4 text-champagne" />
          <span className="font-body text-[10px] text-muted-foreground leading-tight">{item.label}</span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default DifferentialsSection;
