import { Clock, MapPin, Users, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/about-team.jpg";

const About = () => {
  const openingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: "10,000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Clock, label: "Services Daily", value: "50+" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-[hsl(var(--rose-gold-light)_/_0.1)] to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--rose-gold))] to-[hsl(30_50%_60%)] bg-clip-text text-transparent">
              About LuxeSalon
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in beauty and style for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutImage}
                alt="Our Team"
                className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, LuxeSalon has been at the forefront of beauty
                  and hair care innovation. Our journey began with a simple
                  vision: to create a space where luxury meets expertise, and
                  every client leaves feeling confident and beautiful.
                </p>
                <p>
                  Our team of highly trained professionals stays current with
                  the latest trends and techniques, ensuring you receive the
                  best possible service. We use only premium products and
                  cutting-edge equipment to deliver results that exceed
                  expectations.
                </p>
                <p>
                  We believe that beauty is personal, and every client deserves
                  individualized attention. That's why we take the time to
                  understand your unique needs and create customized solutions
                  that enhance your natural beauty.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-accent/30"
                  >
                    <stat.icon className="h-8 w-8 text-[hsl(var(--rose-gold))] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Opening Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[hsl(var(--rose-gold))]">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Opening Hours</h2>
              </div>
              <div className="space-y-4">
                {openingHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-[hsl(var(--rose-gold))]">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-primary-foreground/80">
                Walk-ins welcome, but appointments are recommended to ensure
                availability.
              </p>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[hsl(var(--rose-gold))]">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Visit Us</h2>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20">
                  <h3 className="font-semibold text-xl mb-2">LuxeSalon</h3>
                  <p className="text-primary-foreground/80 mb-4">
                    123 Beauty Street
                    <br />
                    Fashion District
                    <br />
                    New York, NY 10001
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-primary-foreground/60">Phone:</span>{" "}
                      <a
                        href="tel:+15551234567"
                        className="text-[hsl(var(--rose-gold))] hover:underline"
                      >
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p>
                      <span className="text-primary-foreground/60">Email:</span>{" "}
                      <a
                        href="mailto:info@luxesalon.com"
                        className="text-[hsl(var(--rose-gold))] hover:underline"
                      >
                        info@luxesalon.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[hsl(var(--rose-gold-light)_/_0.2)] border border-[hsl(var(--rose-gold)_/_0.3)]">
                  <p className="text-sm">
                    🅿️ Free parking available in the building garage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
