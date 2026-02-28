import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { services } from "@/data/services";
import { btnSecondaryFull, cardBase } from "@/lib/styles";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Services = () => (
  <PageTransition>
    <div className="section-padding pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          OUR <span className="text-primary">SERVICES</span>
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="h-0.5 w-20 bg-primary origin-left mb-12" />

        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <motion.div key={s.name} variants={item} className={`${cardBase} flex flex-col gap-3`}>
              <h3 className="font-heading text-xl font-bold">{s.name}</h3>
              <p className="text-muted-foreground text-sm flex-1">{s.desc}</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a href="https://haircutsinc.zenoti.com/webstoreNew/services" target="_blank" rel="noopener noreferrer" className={btnSecondaryFull}>
                  Book This Service
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default Services;
