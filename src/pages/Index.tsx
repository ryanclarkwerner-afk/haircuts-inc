import Hero from "@/components/Hero";
import ServicesStrip from "@/components/ServicesStrip";
import AboutSection from "@/components/AboutSection";
import GalleryStrip from "@/components/GalleryStrip";
import MembershipCTA from "@/components/MembershipCTA";
import FAQAccordion from "@/components/FAQAccordion";
import HoursContact from "@/components/HoursContact";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <Hero />
      <ServicesStrip />
      <AboutSection />
      <GalleryStrip />
      <MembershipCTA />
      <FAQAccordion />
      <HoursContact />
    </PageTransition>
  );
};

export default Index;
