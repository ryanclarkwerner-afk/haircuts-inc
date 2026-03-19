import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { btnSecondaryFull } from "@/lib/styles";
import { getServicesBookingHref, servicesSections } from "@/data/servicesDetails";

const Services = () => {
  const location = useLocation();

  const hashId = (location.hash || "").replace(/^#/, "").trim();
  const allIds = useMemo(() => servicesSections.map((s) => s.id), []);

  const initialIsDesktop =
    typeof window !== "undefined" && typeof window.matchMedia === "function" ? window.matchMedia("(min-width: 768px)").matches : true;

  const [isDesktop] = useState(initialIsDesktop);
  const [openValues, setOpenValues] = useState<string[]>(() => (initialIsDesktop ? allIds : []));

  useEffect(() => {
    const targetId = hashId && allIds.includes(hashId) ? hashId : null;

    setOpenValues(targetId ? (isDesktop ? allIds : [targetId]) : isDesktop ? allIds : []);

    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (!el) return;

    // Wait a frame so the accordion open state updates before scrolling.
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [allIds, hashId, isDesktop]);

  return (
    <PageTransition>
      <div className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            OUR <span className="text-primary">SERVICES</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-20 bg-primary origin-left mb-12"
          />

          <Accordion
            type="multiple"
            value={openValues}
            onValueChange={setOpenValues}
            className="flex flex-col gap-4"
          >
            {servicesSections.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger
                  id={section.id}
                  className="px-6 py-5 hover:no-underline scroll-mt-24"
                >
                  <span className="font-heading font-extrabold uppercase text-lg md:text-xl leading-none">
                    {section.header}
                  </span>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="px-6 pb-6 pt-0">
                    {section.prelude ? (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{section.prelude}</p>
                    ) : null}

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mb-4">
                      <a
                        href={getServicesBookingHref()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnSecondaryFull}
                      >
                        Book {section.bookingLabel}
                      </a>
                    </motion.div>

                    <ul className="space-y-3">
                      {section.items.map((service) => (
                        <li key={service.name} className="pt-2 border-t border-border first:border-t-0 first:pt-0">
                          <div className="flex items-baseline justify-between gap-6">
                            <span className="font-heading font-extrabold text-base md:text-lg leading-tight">
                              {service.name}
                            </span>
                            <span className="text-primary font-heading font-extrabold text-lg md:text-xl leading-none">
                              {service.price}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{service.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
