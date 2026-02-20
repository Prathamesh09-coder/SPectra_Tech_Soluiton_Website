import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Code2, Rocket } from "lucide-react";
import teamImage from "@/assets/team-collaboration.png";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const benefits = [
  {
    icon: Users,
    text: "Collaborate with experienced professionals",
  },
  {
    icon: Code2,
    text: "Work on real-world tech projects",
  },
  {
    icon: Award,
    text: "Receive mentorship and guidance",
  },
  {
    icon: Rocket,
    text: "Build your professional portfolio",
  },
];

const Internships = () => {
  const { ref, isVisible } = useSectionTransition();
  
  return (
<section 
  id="internships" 
  ref={ref}
  className="py-16 px-4 relative transition-all duration-700 ease-out bg-white"
  style={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
  }}
>
  <div className="container mx-auto">

    {/* Centered Heading */}
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-3">
        <span className="gradient-text">Internship</span> Opportunities
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed">
        Join our dynamic team and kickstart your tech career with hands-on, real-world
        experience that truly makes an impact.
      </p>
    </div>

    {/* Image + Content Grid */}
    {/* Image + Content Grid */}
<div className="grid lg:grid-cols-5 gap-10 items-center">

  {/* Left - Smaller Image Column */}
  <div className="lg:col-span-2 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-2xl blur-xl opacity-20"></div>
    <div className="relative rounded-2xl border border-gray-200 shadow-sm p-3 bg-white max-w-md mx-auto">
      <img
        src={teamImage}
        alt="Team collaboration and innovation"
        className="rounded-xl w-full shadow-md object-cover"
      />
    </div>
  </div>

  {/* Right - Larger Content Column */}
  <div className="lg:col-span-3 space-y-6">

    {/* Benefits Grid */}
    <div className="grid sm:grid-cols-2 gap-4">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-accent to-secondary p-2 rounded-md">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm leading-tight">{benefit.text}</span>
          </div>
        );
      })}
    </div>

    {/* Key Points */}
    <div className="space-y-2">
      {[
        "3-6 month flexible internship programs",
        "Work with modern tech stack (React, Node.js, AI/ML)",
        "Certificate of completion & recommendation letter",
        "Potential for full-time placement opportunities",
      ].map((point) => (
        <div key={point} className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-accent" />
          <span className="text-sm">{point}</span>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <Button
      size="lg"
      className="bg-gradient-to-r from-secondary to-accent w-full sm:w-auto hover:shadow-lg hover:shadow-secondary/40 transition-all duration-300"
    >
      Apply Now
    </Button>

  </div>
</div>

  </div>
</section>


  );
};

export default Internships;
