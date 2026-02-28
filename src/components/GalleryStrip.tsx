import { motion } from "framer-motion";

const images = Array.from({ length: 8 }, (_, i) => i + 1);

const GalleryStrip = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">OUR WORK</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-0.5 w-20 bg-primary mx-auto origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="aspect-square bg-secondary rounded-md flex items-center justify-center overflow-hidden cursor-pointer group"
            >
              <span className="text-muted-foreground font-heading text-sm tracking-wider group-hover:text-primary transition-colors">
                [Photo {n}]
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryStrip;
