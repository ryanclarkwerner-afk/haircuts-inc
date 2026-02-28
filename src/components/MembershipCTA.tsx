import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { btnPrimary } from "@/lib/styles";

const MembershipCTA = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-primary" style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)" }} />
      <div className="bg-card section-padding pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            BECOME A MEMBER. <span className="text-primary">SAVE MORE.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join our membership program for exclusive discounts and priority booking.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              to="/memberships"
              className={btnPrimary}
            >
              View Memberships
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipCTA;
