import { motion } from "framer-motion";
import aboutImage from "@/assets/barbershop.jpg";
import { btnSecondary } from "@/lib/styles";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full aspect-[4/5] rounded-lg overflow-hidden">
            <img src={aboutImage} alt="Inside Haircuts Inc." className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <span className="text-primary font-heading font-bold text-sm tracking-[0.2em] uppercase">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Locally Owned. Community Driven.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            As a locally owned and operated salon in Logan, UT, we offer more than a haircut — we offer an
            experience. Our stylists are trained in the latest techniques and stay current with industry trends
            to give you the best possible care.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="self-start">
            <a
              href="https://haircutsinc.zenoti.com/webstoreNew/services"
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              Book Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
