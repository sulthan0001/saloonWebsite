import { Link } from "react-router-dom";
import {
  Scissors,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#140F0E] to-[#0D0908] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[hsl(var(--rose-gold))] rounded-lg">
                <Scissors className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold">LuxeSalon</span>
            </div>
            <p className="text-sm">
              Your premier destination for luxury hair and beauty services.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-[hsl(var(--rose-gold))] transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-[hsl(var(--rose-gold))] transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-[hsl(var(--rose-gold))] transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/80 hover:text-[hsl(var(--rose-gold))] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary-foreground/80 hover:text-[hsl(var(--rose-gold))] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/80 hover:text-[hsl(var(--rose-gold))] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-[hsl(var(--rose-gold))] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Haircut & Styling</li>
              <li>Hair Coloring</li>
              <li>Hair Treatment</li>
              <li>Bridal Makeup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Beauty Street, Fashion District, NY 10001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@luxesalon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} LuxeSalon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
