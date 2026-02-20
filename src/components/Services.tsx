import { Code, Building2, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const services = [
  {
    icon: Code,
    title: "Student Projects",
    description:
      "Innovative tech projects tailored for students to learn and build real-world applications.",
    features: [
      "Hands-on coding experience",
      "Mentorship from industry experts",
      "Portfolio-ready projects",
    ],
  },
  {
    icon: Building2,
    title: "Small Business Solutions",
    description:
      "Custom technology solutions designed to help small businesses thrive in the digital age.",
    features: [
      "Website & app development",
      "Cloud infrastructure setup",
      "Digital transformation consulting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Mid-Scale Business Growth",
    description:
      "Scalable tech solutions to accelerate growth and streamline operations for growing businesses.",
    features: [
      "Enterprise software development",
      "Data analytics & insights",
      "Automation & efficiency tools",
    ],
  },
];

const Services = () => {
  const { ref, isVisible } = useSectionTransition();

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 px-4 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Our <span className="gradient-text">Services & Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide innovative tech solutions for all levels, from students to enterprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-heading font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
