import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SALON_ADDRESS = "1545 N Main Street, Logan, UT 84321";
const GOOGLE_MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SALON_ADDRESS
)}`;
const APPLE_MAPS_HREF = `https://maps.apple.com/?address=${encodeURIComponent(
  SALON_ADDRESS
)}`;

function LocationAnswer() {
  const [mapsHref, setMapsHref] = useState(GOOGLE_MAPS_HREF);

  useEffect(() => {
    // Use runtime detection so iOS users open Apple Maps while others open Google Maps.
    const ua = navigator.userAgent || "";
    const isIOSLike =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isIOSLike) setMapsHref(APPLE_MAPS_HREF);
  }, []);

  return (
    <>
      We're located at{" "}
      <a
        href={mapsHref}
        target="_blank"
        rel="noreferrer"
        className="text-primary underline hover:no-underline"
      >
        {SALON_ADDRESS}
      </a>
    </>
  );
}

const faqs = [
  { q: "What are your salon hours?", a: "Mon–Sat, 9am–7pm. Closed Sundays." },
  { q: "Do you accept walk-ins?", a: "Yes! Walk-ins are welcome, though appointments are recommended and prioritized. Please book using the \"Book Now\" button here or call/text us at 435-535-3638." },
  { q: "What services do you offer?", a: "We offer haircuts, colors, highlights, perms, beard trims, waxing, and more. Please view our \"services\" tab for a more comprehensive list and pricing." },
  { q: "Do you offer memberships?", a: "Yes — check our Memberships page for details on our monthly plans." },
  { q: "Where are you located?", a: <LocationAnswer /> },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        >
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </motion.h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-bold text-base pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-primary flex-shrink-0" size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
