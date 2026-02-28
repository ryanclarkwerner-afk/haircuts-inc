import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const services = [
  { name: "Men's Haircut", desc: "Classic or modern cuts tailored to you.", price: "$25" },
  { name: "Women's Haircut", desc: "Precision cuts for all hair types.", price: "$35" },
  { name: "Kids Haircut", desc: "Fun, stress-free cuts for kids.", price: "$18" },
  { name: "Beard Trim", desc: "Sharp, clean beard shaping.", price: "$15" },
  { name: "Hair Color", desc: "Full color services, any shade.", price: "$60" },
  { name: "Highlights", desc: "Foil or cap highlights for dimension.", price: "$80" },
  { name: "Balayage", desc: "Hand-painted, natural-looking color.", price: "$120" },
  { name: "Perm", desc: "Modern texture and volume.", price: "$90" },
  { name: "Deep Conditioning", desc: "Restore health and shine.", price: "$30" },
];

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
            <motion.div key={s.name} variants={item} className="bg-card rounded-lg p-6 border border-border flex flex-col gap-3">
              <h3 className="font-heading text-xl font-bold">{s.name}</h3>
              <p className="text-muted-foreground text-sm flex-1">{s.desc}</p>
              <p className="text-primary font-heading font-bold text-lg">Starting at {s.price}</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/book" className="inline-flex items-center justify-center w-full px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase font-bold">
                  Book This Service
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default Services;
