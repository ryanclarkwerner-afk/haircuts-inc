import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { btnPrimary } from "@/lib/styles";

const Book = () => (
  <PageTransition>
    <div className="min-h-screen flex items-center justify-center section-padding pt-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          BOOK <span className="text-primary">ONLINE</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Ready for a fresh look? Schedule your appointment today.
        </p>
        <motion.a
          href="https://haircutsinc.zenoti.com/webstoreNew/services"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={btnPrimary}
        >
          Book Your Appointment
        </motion.a>
        <p className="text-muted-foreground text-sm mt-6">
          Or call us at <span className="text-foreground">(435) 555-0123</span>
        </p>
      </motion.div>
    </div>
  </PageTransition>
);

export default Book;
