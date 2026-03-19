import OurWorkPortfolio from "@/components/OurWorkPortfolio";

const GalleryStrip = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <OurWorkPortfolio count={8} />
      </div>
    </section>
  );
};

export default GalleryStrip;
