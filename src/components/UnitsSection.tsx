import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";

const units = [
  { city: "Campinas", address: "Torre Ypê - Rua Aguaçu, 171 - Sala M019 - Loteamento Alphaville, Campinas - SP, 13098-321", whatsapp: "5519989323288" },
  { city: "Sorocaba", address: "R. Barão de Piratininga, 106 - Jardim Faculdade, Sorocaba - SP, 18030-160", whatsapp: "5515991901681" },
  { city: "São Paulo / Tatuapé", address: "R. Antônio de Barros, 1933 - Vila Carrão, São Paulo - SP, 03401-001", whatsapp: "5511916768181" },
  { city: "São José dos Campos", address: "Tv. João Dias, 40 - Unid 23 - Centro, São José dos Campos - SP, 12209-640", whatsapp: "5512991164224" },
  { city: "Santos", address: "R. Goiás, 65 - Gonzaga, Santos - SP, 11050-100", whatsapp: "5513991630445" },
  { city: "Alphaville", address: "Calçada das Tagetes, 14 - Alphaville, Barueri - SP, 06453-043", whatsapp: "5511912014016" },
];

const UnitsSection = () => (
  <section id="unidades" className="px-6 py-12">
    <motion.h2
      className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Escolha sua Unidade
    </motion.h2>

    <div className="grid gap-4">
      {units.map((unit, i) => (
        <motion.div
          key={i}
          className="bg-card rounded-xl p-5 border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">{unit.city}</h3>
          <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">{unit.address}</p>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${unit.whatsapp}?text=Olá! Gostaria de agendar um atendimento na unidade ${unit.city}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-xs font-semibold tracking-wide uppercase py-3 rounded-lg border border-champagne/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-transparent text-foreground font-body text-xs font-semibold tracking-wide uppercase py-3 rounded-lg border border-border hover:bg-secondary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MapPin className="w-4 h-4 text-champagne" />
              Localização
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default UnitsSection;
