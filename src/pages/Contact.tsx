import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-[hsl(var(--rose-gold-light)_/_0.1)] to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to book your appointment? Contact us today and let us help
              you look your best
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-accent/30 border border-border hover:border-[hsl(var(--rose-gold))] transition-colors">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--rose-gold-light))] to-[hsl(var(--rose-gold))]">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-muted-foreground hover:text-[hsl(var(--rose-gold))] transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-accent/30 border border-border hover:border-[hsl(var(--rose-gold))] transition-colors">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--rose-gold-light))] to-[hsl(var(--rose-gold))]">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@luxesalon.com"
                      className="text-muted-foreground hover:text-[hsl(var(--rose-gold))] transition-colors"
                    >
                      info@luxesalon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-accent/30 border border-border hover:border-[hsl(var(--rose-gold))] transition-colors">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--rose-gold-light))] to-[hsl(var(--rose-gold))]">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Beauty Street
                      <br />
                      Fashion District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-accent/30 border border-border hover:border-[hsl(var(--rose-gold))] transition-colors">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--rose-gold-light))] to-[hsl(var(--rose-gold))]">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                      <p>Sat: 9:00 AM - 7:00 PM</p>
                      <p>Sun: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Book an Appointment</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-border focus:border-[hsl(var(--rose-gold))] focus:ring-[hsl(var(--rose-gold))]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-border focus:border-[hsl(var(--rose-gold))] focus:ring-[hsl(var(--rose-gold))]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="border-border focus:border-[hsl(var(--rose-gold))] focus:ring-[hsl(var(--rose-gold))]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Service Interested In
                  </label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g., Haircut & Styling"
                    className="border-border focus:border-[hsl(var(--rose-gold))] focus:ring-[hsl(var(--rose-gold))]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your preferred date, time, or any special requests..."
                    rows={4}
                    className="border-border focus:border-[hsl(var(--rose-gold))] focus:ring-[hsl(var(--rose-gold))] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] text-primary hover:opacity-90 transition-opacity shadow-[var(--shadow-elegant)]"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Booking Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours to confirm your
                  appointment
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
