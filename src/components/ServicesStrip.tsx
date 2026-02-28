import { motion } from "framer-motion";
import { Scissors, Paintbrush, Sparkles, Wind, UserRound, Baby } from "lucide-react";

const services = [
  { icon: Scissors, name: "Haircuts", desc: "Precision cuts tailored to your style." },
  { icon: Paintbrush, name: "Color & Highlights", desc: "Vibrant color that lasts." },
  { icon: Sparkles, name: "Balayage", desc: "Hand-painted, natural-looking color." },
  { icon: Wind, name: "Perms", desc: "Modern texture and volume." },
  { icon: UserRound, name: "Beard Trims", desc: "Sharp, clean beard shaping." },
  { icon: Baby, name: "Kids Cuts", desc: "Fun, stress-free cuts for little ones." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesStrip = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        >
          OUR <span className="text-primary">SERVICES</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              whileHover={{ y: -4, borderColor: "hsl(22, 100%, 45%)" }}
              className="bg-card border-l-2 border-border p-6 rounded-lg transition-colors cursor-default"
            >
              <service.icon className="text-primary mb-3" size={28} />
              <h3 className="font-heading text-lg font-bold mb-1">{service.name}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesStrip;
