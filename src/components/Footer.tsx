import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "../assets/haircuts-inc-logo.png";

const Footer = () => {
  return (
    <footer className="border-t-2 border-primary bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/">
              <img src={logo} alt="Haircuts Inc." className="h-8 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm italic">
              Cutting-edge styles, Hometown values.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/memberships", label: "Memberships" },
              { to: "/corporate", label: "Corporate" },
              { to: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground text-sm hover:text-primary transition-colors font-heading tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://haircutsinc.zenoti.com/webstoreNew/services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-primary transition-colors font-heading tracking-wider uppercase"
            >
              Book Now
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/haircuts.incorporated/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 Haircuts Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
