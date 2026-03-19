import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import OurWorkPortfolio from "@/components/OurWorkPortfolio";

const About = () => {
  return (
    <PageTransition>
      <div className="section-padding pt-32">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            WE'RE MORE THAN A <span className="text-primary">BARBERSHOP.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-20 bg-primary origin-left mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16"
          >
            Founded in Logan, Utah, Haircuts Inc. started with a simple idea: your next appointment should feel
            like you're walking into a place that truly cares about you. We're locally owned and community-driven,
            and our friendly, talented team brings years of experience to every visit--from precise men's and women's
            haircuts to expert hair coloring and professional hair perms. As a full-service hair salon we welcome
            kids, adults, and seniors alike.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-0.5 w-full bg-primary mb-12"
          />

          <OurWorkPortfolio count={12} />
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
