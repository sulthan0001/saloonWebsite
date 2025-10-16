import { Scissors, Palette, Sparkles, Crown, Smile, Star } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Haircut & Styling",
      description: "Professional cuts and styling from expert stylists",
      price: "$5 - $10",
      duration: "15-20 mins",
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Full color, highlights, balayage, and color corrections",
      price: "$15 - $20",
      duration: "20-30 mins",
    },
    {
      icon: Sparkles,
      title: "Hair Treatment",
      description: "Deep conditioning, keratin, and scalp treatments",
      price: "$60 - $150",
      duration: "60-90 min",
    },
    {
      icon: Crown,
      title: "Bridal Services",
      description: "Complete bridal hair and makeup packages",
      price: "$50 - $100",
      duration: "1-2 hours",
    },
    {
      icon: Smile,
      title: "Makeup Services",
      description: "Professional makeup for any occasion",
      price: "$75 - $100",
      duration: "60-90 min",
    },
    {
      icon: Star,
      title: "Special Occasion",
      description: "Styling for weddings, parties, and events",
      price: "$100 - $150",
      duration: "90-120 min",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-[hsl(var(--rose-gold-light)_/_0.1)] to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our range of premium beauty and hair services tailored to
              enhance your natural beauty
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-6">
            All prices are starting rates and may vary based on hair length,
            thickness, and specific requirements. We'll provide a detailed quote
            during your consultation.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--rose-gold-light))] rounded-full">
            <Sparkles className="h-5 w-5 text-[hsl(var(--rose-gold))]" />
            <span className="text-sm font-medium">
              Ask about our loyalty program for regular clients!
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
