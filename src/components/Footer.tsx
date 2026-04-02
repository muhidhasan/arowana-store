import { Link } from "react-router-dom";
import { Fish, Building2, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="brand-gradient text-primary-foreground">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Arowana International" className="h-10 w-auto brightness-0 invert" />
              <div>
                <p className="font-heading font-bold text-lg">Arowana International</p>
                <p className="text-xs opacity-70">Limited</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Global fish export and construction solutions. Connecting Bangladesh's finest aquatic species to international markets while building quality infrastructure.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Fish Export", path: "/services/fish-export" },
                { label: "Construction", path: "/services/construction" },
                { label: "Products", path: "/products" },
                { label: "Projects", path: "/projects" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Fish className="w-4 h-4" /> Fish Export & Import
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Building2 className="w-4 h-4" /> Construction Solutions
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                123 Business Avenue, Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="w-4 h-4 shrink-0" />
                info@arowanaintl.com
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                +880 1XXX-XXXXXX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Arowana International Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
