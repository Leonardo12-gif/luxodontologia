import { motion } from "framer-motion";
import { Sparkles, Heart, MapPin } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Lentes e Facetas em Resina", desc: "Especialistas em estética dental de alta precisão" },
  { icon: Heart, title: "Atendimento Personalizado", desc: "Cuidado exclusivo para cada paciente" },
  { icon: MapPin, title: "Múltiplas Unidades", desc: "Presença em diversas cidades de São Paulo" },
];

const DifferentialsSection = () => (
  <section className="px-6 pb-12">
    <div className="grid gap-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="bg-card rounded-xl p-5 border border-border/50 flex items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5 text-champagne" />
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default DifferentialsSection;
