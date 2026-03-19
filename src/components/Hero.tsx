import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../Logos and images/IMG_3183.jpeg";
import { btnPrimary, btnSecondary } from "@/lib/styles";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pt-20">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center min-h-[80vh]">
          {/* Image */}
          <div className="md:col-span-3 hidden md:flex items-center justify-center">
            <div className="w-full aspect-[4/5] max-h-[70vh] rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Hair Salon Near Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="md:col-span-2 flex flex-col gap-6"
          >
            <motion.h1
              variants={item}
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-extrabold"
            >
              CUTTING-EDGE STYLES.{" "}
              <span className="text-primary">HOMETOWN VALUES.</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="h-1 w-24 bg-primary origin-left"
            />

            <motion.p variants={item} className="text-muted-foreground text-lg max-w-md">
              Logan's premier hair salon & barbershop. Where craft meets community.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://haircutsinc.zenoti.com/webstoreNew/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  Book Now
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/services"
                  className={btnSecondary}
                >
                  See Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
