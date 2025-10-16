import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Sparkles, Clock, Award, Heart } from "lucide-react";
import heroImage from "../assets/hero-salon.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Services",
      description:
        "Experience luxury with our expert stylists and premium products",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open 7 days a week to fit your busy schedule",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in beauty and customer service",
    },
    {
      icon: Heart,
      title: "Client Focused",
      description: "Your satisfaction is our top priority",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Transform Your Look
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-delay">
            Experience luxury hair and beauty services in an elegant atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] text-primary hover:opacity-90 transition-opacity shadow-[var(--shadow-elegant)]"
            >
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-none bg-white text-black hover:bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] "
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose LuxeSalon?</h2>
            <p className="text-xl text-muted-foreground">
              We're committed to making you look and feel your best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl border border-border hover:border-[hsl(var(--rose-gold))] hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--rose-gold-light))] to-[hsl(var(--rose-gold))] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[hsl(var(--rose-gold))] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#140F0E] to-[#0D0908] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--rose-gold))] to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl text-white mb-8">
            Book your appointment today and experience the luxury you deserve
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] text-primary hover:opacity-90 transition-opacity shadow-[var(--shadow-elegant)]"
          >
            <Link to="/contact">Schedule Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
