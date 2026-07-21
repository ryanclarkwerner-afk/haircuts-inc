import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Haircuts Inc.";
  }, []);

  return (
    <PageTransition>
      <div className="section-padding pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">Last Updated: July 21, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-foreground font-heading text-lg font-bold uppercase tracking-wide mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to Haircuts Inc. This Privacy Policy explains how we collect, use, disclose, and protect
                your personal information when you use our website, mobile app, or other services. We are committed
                to protecting your privacy and ensuring that your personal information is handled securely and in
                compliance with applicable privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-heading text-lg font-bold uppercase tracking-wide mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">We may collect the following types of personal information when you use our services:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Contact Information:</strong> Your name, email address, phone
                  number, and postal address.
                </li>
                <li>
                  <strong className="text-foreground">Appointment Details:</strong> Information about your
                  appointments, including the date, time, and services requested.
                </li>
                <li>
                  <strong className="text-foreground">Payment Information:</strong> Credit card information or other
                  payment details.
                </li>
                <li>
                  <strong className="text-foreground">Demographic Information:</strong> Age, gender, and other
                  demographic details.
                </li>
                <li>
                  <strong className="text-foreground">Communication Preferences:</strong> Your preferences for
                  receiving marketing and promotional materials.
                </li>
                <li>
                  <strong className="text-foreground">Usage Information:</strong> Information about how you use our
                  website and services, including IP address, browser type, and device information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-heading text-lg font-bold uppercase tracking-wide mb-3">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">We may use your personal information for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Providing Services:</strong> To schedule and provide haircuts,
                  styling, and related services.
                </li>
                <li>
                  <strong className="text-foreground">Billing and Payments:</strong> To process payments for services.
                </li>
                <li>
                  <strong className="text-foreground">Marketing and Promotions:</strong> To send you marketing and
                  promotional materials, with your consent.
                </li>
                <li>
                  <strong className="text-foreground">Customer Support:</strong> To respond to your inquiries and
                  provide customer support.
                </li>
                <li>
                  <strong className="text-foreground">Legal Compliance:</strong> To comply with legal obligations and
                  resolve disputes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-heading text-lg font-bold uppercase tracking-wide mb-3">
                4. Disclosure of Your Information
              </h2>
              <p className="mb-3">We may share your personal information with third parties in the following situations:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Service Providers:</strong> We may share your information with
                  third-party service providers who help us deliver our services, including Zenoti, our online booking
                  and payment platform used for appointment scheduling, membership purchases, and payment processing.
                </li>
                <li>
                  <strong className="text-foreground">Legal Requirements:</strong> We may disclose your information
                  when required by law or to protect our legal rights.
                </li>
                <li>
                  <strong className="text-foreground">Business Transfers:</strong> In the event of a merger, sale, or
                  acquisition of our business, your information may be transferred to a new owner.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-heading text-lg font-bold uppercase tracking-wide mb-3">
                5. Your Choices
              </h2>
              <p className="mb-3">You have the following choices regarding your personal information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Access:</strong> You can request access to the personal
                  information we hold about you.
                </li>
                <li>
                  <strong className="text-foreground">Correction:</strong> You can request corrections to any
                  inaccuracies in your personal information.
                </li>
                <li>
                  <strong className="text-foreground">Opt-Out:</strong> You can opt out of receiving marketing and
                  promotional materials.
                </li>
                <li>
                  <strong className="text-foreground">Deletion:</strong> You can request the deletion of your personal
                  information, subject to legal requirements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-heading text-lg font-bold uppercase tracking-wide mb-3">
                6. Security
              </h2>
              <p>
                We take reasonable steps to protect your personal information from unauthorized access and use.
                However, no data transmission over the internet is completely secure, and we cannot guarantee the
                security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-heading text-lg font-bold uppercase tracking-wide mb-3">
                7. Contact Us
              </h2>
              <p className="mb-3">
                If you have any questions or concerns about this Privacy Policy or your personal information, please
                contact us at:
              </p>
              <address className="not-italic space-y-1">
                <p className="text-foreground font-medium">Haircuts Inc.</p>
                <p>1545 Main St STE 110</p>
                <p>Logan, UT 84341</p>
              </address>
            </section>

            <section>
              <h2 className="text-foreground font-heading text-lg font-bold uppercase tracking-wide mb-3">
                8. Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal
                reasons. The updated policy will be posted on our website with the date of the latest revision.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;
