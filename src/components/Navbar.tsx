import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] rounded-lg transition-transform duration-300 group-hover:scale-105">
              <Scissors className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-gray-600">LuxeSalon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? "text-[hsl(var(--rose-gold))]"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--rose-gold))] transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] text-primary hover:opacity-90 transition-opacity"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-accent text-[hsl(var(--rose-gold))] font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] text-primary hover:opacity-90"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
