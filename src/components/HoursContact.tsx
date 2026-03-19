import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, ExternalLink } from "lucide-react";

const SALON_ADDRESS = "1545 N Main Street, Logan, UT 84321";
const PHONE_DISPLAY = "435-535-3638";
const PHONE_TEL_HREF = "tel:+14355353638";
const GOOGLE_EMBED_SRC = `https://www.google.com/maps?q=${SALON_ADDRESS.replaceAll(
  " ",
  "+"
)}` + "&output=embed";
const GOOGLE_MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SALON_ADDRESS
)}`;
const APPLE_MAPS_HREF = `https://maps.apple.com/?address=${encodeURIComponent(
  SALON_ADDRESS
)}`;

function getIsIOSLike() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

const HoursContact = () => {
  const [mapsHref, setMapsHref] = useState(GOOGLE_MAPS_HREF);

  useEffect(() => {
    if (getIsIOSLike()) setMapsHref(APPLE_MAPS_HREF);
  }, []);

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
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:underline underline-offset-4"
                >
                  {SALON_ADDRESS}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a
                  href={PHONE_TEL_HREF}
                  className="text-muted-foreground hover:underline underline-offset-4"
                  aria-label={`Call us at ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg aspect-video overflow-hidden relative">
            <iframe
              title="Haircuts Inc. Location"
              src={GOOGLE_EMBED_SRC}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-foreground font-heading text-xs tracking-wider uppercase font-bold hover:bg-background transition-colors"
            >
              Get Directions <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoursContact;
