import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import salonImage from "@/assets/salon-interior.jpg";
import mensHaircut from "@/assets/mens-haircut.png";
import balayageImg from "@/assets/balayage.jpg";
import hairColor from "@/assets/hair-color.jpg";

const team = [
  { name: "Jordan Lee", title: "Lead Stylist", img: mensHaircut },
  { name: "Alex Rivera", title: "Color Specialist", img: hairColor },
  { name: "Sam Torres", title: "Barber", img: balayageImg },
  { name: "Casey Morgan", title: "Senior Stylist", img: salonImage },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const About = () => (
  <PageTransition>
    <div className="section-padding pt-32">
      <div className="max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mb-4">
          WE'RE MORE THAN A <span className="text-primary">BARBERSHOP.</span>
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="h-0.5 w-20 bg-primary origin-left mb-8" />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
          Founded in Logan, Utah, Haircuts Inc. started with a simple idea: everyone deserves a great haircut
          in a place that feels like home. We're locally owned, community-driven, and committed to staying on
          the cutting edge of style while keeping our small-town values at the heart of everything we do.
        </motion.p>

        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} className="h-0.5 w-full bg-primary mb-12" />

        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-extrabold mb-8">
          MEET THE <span className="text-primary">TEAM</span>
        </motion.h2>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member) => (
            <motion.div key={member.name} variants={item} className="bg-card rounded-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading font-bold text-sm">{member.name}</h3>
                <p className="text-muted-foreground text-xs mt-1">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default About;
