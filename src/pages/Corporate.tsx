import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const features = [
  "Group booking discounts",
  "Dedicated account manager",
  "Employee perks & benefits",
  "On-site styling events",
  "Custom membership packages",
  "Priority scheduling for teams",
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const Corporate = () => (
  <PageTransition>
    <div className="section-padding pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mb-4">
          HAIRCARE FOR YOUR <span className="text-primary">WHOLE TEAM.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Partner with Haircuts Inc. for group bookings, corporate accounts, and employee perks your team will love.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <motion.div key={f} variants={item} className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span className="text-sm">{f}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-lg p-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-heading text-xl font-bold mb-2">GET IN TOUCH</h3>
            {[
              { label: "Name", type: "text" },
              { label: "Company", type: "text" },
              { label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-sm text-muted-foreground block mb-1">{field.label}</label>
                <input type={field.type} className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            ))}
            <div>
              <label className="text-sm text-muted-foreground block mb-1">Message</label>
              <textarea rows={4} className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase font-bold"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Corporate;
