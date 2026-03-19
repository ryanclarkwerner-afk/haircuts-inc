import { motion } from "framer-motion";
import { useState } from "react";

import { ourWorkImages } from "@/data/ourWorkPortfolioImages";

function pickRandomSubset<T>(items: readonly T[], count: number): T[] {
  const copy = [...items];
  // Fisher–Yates shuffle (in-place on `copy`) then slice.
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

type OurWorkPortfolioProps = {
  count: number;
};

const OurWorkPortfolio = ({ count }: OurWorkPortfolioProps) => {
  const [selectedImages] = useState(() => pickRandomSubset(ourWorkImages, count));

  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold mb-8"
      >
        OUR <span className="text-primary">WORK</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {selectedImages.map((src, idx) => (
          <motion.div
            key={`${src}-${idx}`}
            variants={item}
            className="bg-card rounded-lg overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={src}
                alt="Haircuts Inc. work sample"
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default OurWorkPortfolio;

