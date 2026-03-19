import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/haircuts-inc-logo.png";
import { btnPrimary } from "@/lib/styles";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { servicesSections } from "@/data/servicesDetails";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/memberships", label: "Memberships" },
  { to: "/corporate", label: "Corporate" },
  { to: "/about", label: "About" },
];

const serviceJumpLinks = servicesSections.map((s) => ({
  id: s.id,
  label: s.header,
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isServicesPage = location.pathname === "/services";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        <Link to="/">
          <img src={logo} alt="Haircuts Inc." className="h-10 md:h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                isServicesPage ? "text-primary" : "text-foreground"
              }`}
              aria-label="Services menu"
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {serviceJumpLinks.map((s) => (
                <DropdownMenuItem
                  key={s.id}
                  onSelect={() => navigate(`/services#${s.id}`)}
                >
                  {s.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://haircutsinc.zenoti.com/webstoreNew/services"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex ${btnPrimary}`}
          >
            Book Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-heading text-lg tracking-widest uppercase ${
                    location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2">
                <div
                  className={`font-heading text-lg tracking-widest uppercase ${
                    isServicesPage ? "text-primary" : "text-foreground"
                  }`}
                >
                  Services
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  {serviceJumpLinks.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services#${s.id}`}
                      className={`font-heading text-sm tracking-wider uppercase ${
                        isServicesPage ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
              <a
                href="https://haircutsinc.zenoti.com/webstoreNew/services"
                target="_blank"
                rel="noopener noreferrer"
                className={`justify-center mt-2 ${btnPrimary}`}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
