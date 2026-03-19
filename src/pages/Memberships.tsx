import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { btnSecondaryFull, cardFeatured } from "@/lib/styles";

import classicImg from "../../Logos and images/Classic 800 x 800.png";
import classicUnlimitedImg from "../../Logos and images/Classic Unlimited 800 x 800.png";
import lumberjackImg from "../../Logos and images/Lumberjack 800 x 800.png";
import lumberjackUnlimitedImg from "../../Logos and images/Lumberjack Unlimited 800 x 800.png";
import maverickImg from "../../Logos and images/Maverick.png";
import maverickUnlimitedImg from "../../Logos and images/Maverick  Unlimited 800 x 800.png";

type Membership = {
  name: string;
  price: string;
  includedLabel: string;
  features: string[];
  imageSrc: string;
};

const zenotiMembershipUrl = "https://haircutsinc.zenoti.com/webstoreNew/sales/membership/59a00690-ac4f-474f-b4ad-3ac04d0ee21d";

const memberships: Membership[] = [
  {
    name: "Classic",
    price: "$22/Month",
    includedLabel: "+ 1 credit per month including:",
    features: ["Haircut & Style", "Shampoo and Conditioner", "20% Off Product"],
    imageSrc: classicImg,
  },
  {
    name: "Lumberjack",
    price: "$42/Month",
    includedLabel: "+ 1 credit per month including:",
    features: ["Haircut & Style", "Shampoo and Conditioner", "Straight Razor Nape Shave", "Beard Trim", "20% Off Product"],
    imageSrc: lumberjackImg,
  },
  {
    name: "Maverick",
    price: "$50/Month",
    includedLabel: "+ 1 credit per month including:",
    features: ["Straight Razor Head Shave", "Exfoliating Scalp Massage", "Face Shave or Beard Trim", "20% Off Product"],
    imageSrc: maverickImg,
  },
  {
    name: "Classic Unlimited",
    price: "$42/Month",
    includedLabel: "Unlimited monthly services including:",
    features: ["Haircut & Style", "Shampoo/Conditioner", "20% Off Product"],
    imageSrc: classicUnlimitedImg,
  },
  {
    name: "Lumberjack Unlimited",
    price: "$72/Month",
    includedLabel: "Unlimited monthly services including:",
    features: ["Haircut & Style", "Shampoo/Conditioner", "Straight Razor Nape Shave", "Beard Trim", "20% Off Product"],
    imageSrc: lumberjackUnlimitedImg,
  },
  {
    name: "Maverick Unlimited",
    price: "$95/Month",
    includedLabel: "Unlimited monthly services including:",
    features: ["Straight Razor Head Shave", "Exfoliating Scalp Massage", "Beard Trim or Face Shave", "20% Off Product"],
    imageSrc: maverickUnlimitedImg,
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
          {memberships.map((tier) => (
            <motion.div
              key={tier.name}
              variants={item}
              whileHover={{ y: -8 }}
              className={`${cardFeatured} flex flex-col relative border-border`}
            >
              <div className="w-full mb-6 aspect-square overflow-hidden rounded-lg border border-border">
                <img
                  src={tier.imageSrc}
                  alt={`${tier.name} membership`}
                  className="block w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="font-heading text-2xl font-bold mb-1">{tier.name}</h3>
              <p className="text-primary font-heading font-extrabold text-lg mb-4">{tier.price}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{tier.includedLabel}</p>

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
                  href={zenotiMembershipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnSecondaryFull}
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
