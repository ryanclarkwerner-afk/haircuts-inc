import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { btnPrimaryFull, btnSecondaryFull, cardFeatured } from "@/lib/styles";

const tiers = [
  {
    name: "Basic",
    features: ["1 haircut/month", "10% off services"],
    highlighted: false,
  },
  {
    name: "Pro",
    features: ["2 haircuts/month", "15% off services", "Priority booking"],
    highlighted: true,
  },
  {
    name: "Elite",
    features: ["Unlimited cuts", "20% off all services", "Free beard trim/month", "VIP priority"],
    highlighted: false,
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Memberships = () => (
  <PageTransition>
    <div className="section-padding pt-32">
      <div className="max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          MEMBERSHIP <span className="text-primary">PLANS</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto">
          Save more with monthly plans. Cancel anytime.
        </motion.p>

        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={item}
              whileHover={{ y: -8 }}
              className={`${cardFeatured} flex flex-col relative ${tier.highlighted ? "border-primary" : "border-border"}`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold mb-6">{tier.name}</h3>
              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="text-primary flex-shrink-0" size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://haircutsinc.zenoti.com/webstoreNew/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tier.highlighted ? btnPrimaryFull : btnSecondaryFull}
                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default Memberships;
