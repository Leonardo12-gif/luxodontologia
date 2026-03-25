import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const units = [
  { city: "Campinas", address: "Torre Ypê - Rua Aguaçu, 171 - Sala M019 - Lot. Alphaville, Campinas - SP", whatsapp: "5519989323288" },
  { city: "Sorocaba", address: "R. Barão de Piratininga, 106 - Jd. Faculdade, Sorocaba - SP", whatsapp: "5515991901681" },
  { city: "São Paulo / Tatuapé", address: "R. Antônio de Barros, 1933 - Vila Carrão, São Paulo - SP", whatsapp: "5511960646620" },
  { city: "São José dos Campos", address: "Tv. João Dias, 40 - Unid 23 - Centro, São José dos Campos - SP", whatsapp: "5512991164224" },
  { city: "Santos", address: "R. Goiás, 65 - Gonzaga, Santos - SP", whatsapp: "5513991630445" },
  { city: "Alphaville", address: "Calçada das Tagetes, 14 - Alphaville, Barueri - SP", whatsapp: "5511912014016" },
];

const UnitsSection = () => (
  <section id="unidades" className="px-6 py-8">
    <motion.h2
      className="font-display text-xl font-semibold text-foreground text-center mb-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Escolha sua Unidade
    </motion.h2>

    <div className="grid gap-3">
      {units.map((unit, i) => (
        <motion.div
          key={i}
          className="bg-card rounded-xl p-4 border border-border shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
        >
          <h3 className="font-display text-base font-semibold text-foreground mb-0.5">{unit.city}</h3>
          <p className="font-body text-[11px] text-muted-foreground leading-relaxed mb-3">{unit.address}</p>
          <div className="flex gap-2">
            <a
              href={`https://wa.me/${unit.whatsapp}?text=Olá, vim pelo link da bio e gostaria de mais informações.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-[11px] font-semibold tracking-wide uppercase py-2.5 rounded-lg border border-champagne/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-transparent text-foreground font-body text-[11px] font-semibold tracking-wide uppercase py-2.5 rounded-lg border border-border hover:bg-secondary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MapPin className="w-3.5 h-3.5 text-champagne" />
              Localização
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default UnitsSection;
