import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const HoursContact = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="text-primary" size={24} />
            <h3 className="font-heading text-2xl font-bold">HOURS</h3>
          </div>
          <div className="space-y-3 text-sm">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
              <div key={day} className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">{day}</span>
                <span className="font-medium">9:00 AM – 7:00 PM</span>
              </div>
            ))}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Sunday</span>
              <span className="text-primary font-medium">Closed</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-card rounded-lg p-8 flex-1">
            <h3 className="font-heading text-2xl font-bold mb-6">CONTACT</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span className="text-muted-foreground">123 Main Street, Logan, UT 84321</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span className="text-muted-foreground">(435) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span className="text-muted-foreground">hello@haircutsinc.com</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg aspect-video flex items-center justify-center">
            <span className="text-muted-foreground font-heading text-sm tracking-wider">[Google Maps]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoursContact;
