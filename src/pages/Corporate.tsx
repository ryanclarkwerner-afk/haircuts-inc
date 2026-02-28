import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { toast } from "sonner";
import PageTransition from "@/components/PageTransition";
import { btnPrimaryFull } from "@/lib/styles";

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

const initialFormData = { name: "", company: "", email: "", message: "" };

const Corporate = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    formData.name.trim() !== "" &&
    formData.company.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.message.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    // TODO: Wire up to a form backend (e.g. Formspree, Netlify Forms, or your own API)
    toast.success("Message sent! We'll be in touch soon.");
    setSubmitted(true);
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
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

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card rounded-lg p-8 flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold">THANKS FOR REACHING OUT</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    We've received your message and will get back to you within 1-2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(initialFormData);
                    }}
                    className="text-primary text-sm font-heading font-bold tracking-wider uppercase hover:underline mt-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card rounded-lg p-8 space-y-4"
                  onSubmit={handleSubmit}
                >
                  <h3 className="font-heading text-xl font-bold mb-2">GET IN TOUCH</h3>
                  {([
                    { label: "Name", type: "text", field: "name" as const },
                    { label: "Company", type: "text", field: "company" as const },
                    { label: "Email", type: "email", field: "email" as const },
                  ]).map((f) => (
                    <div key={f.label}>
                      <label className="text-sm text-muted-foreground block mb-1">{f.label}</label>
                      <input
                        type={f.type}
                        value={formData[f.field]}
                        onChange={handleChange(f.field)}
                        required
                        className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={handleChange("message")}
                      required
                      className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={isValid ? { scale: 1.03 } : {}}
                    whileTap={isValid ? { scale: 0.97 } : {}}
                    type="submit"
                    disabled={!isValid}
                    className={`${btnPrimaryFull} disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Corporate;
