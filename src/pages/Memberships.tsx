import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const tiers = [
  {
    name: "Basic",
    price: 29,
    features: ["1 haircut/month", "10% off services"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 49,
    features: ["2 haircuts/month", "15% off services", "Priority booking"],
    highlighted: true,
  },
  {
    name: "Elite",
    price: 79,
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
              className={`bg-card rounded-xl p-8 flex flex-col border-2 relative ${tier.highlighted ? "border-primary" : "border-border"}`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold font-heading">${tier.price}</span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="text-primary flex-shrink-0" size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/book"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-heading text-sm tracking-wider uppercase font-bold ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "border border-foreground text-foreground hover:bg-foreground/10 transition-colors"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default Memberships;
