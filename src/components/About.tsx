import { Briefcase, Users, Award, Clock } from "lucide-react";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const stats = [
  {
    icon: Briefcase,
    value: "100+",
    label: "Projects",
    color: "from-accent to-primary",
  },
  {
    icon: Users,
    value: "50+",
    label: "Clients",
    color: "from-secondary to-accent",
  },
  {
    icon: Award,
    value: "200+",
    label: "Interns",
    color: "from-primary to-secondary",
  },
  {
    icon: Clock,
    value: "5+",
    label: "Years Experience",
    color: "from-accent to-secondary",
  },
];

const About = () => {
  const { ref, isVisible } = useSectionTransition();
  
  return (
      <section 
  id="about" 
  ref={ref}
  className="py-14 px-4 relative transition-all duration-700 bg-white"
  style={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
  }}
>
  <div className="container mx-auto max-w-6xl">

    {/* Heading */}
    <div className="text-center mb-10 space-y-3">
      <h2 className="text-4xl lg:text-5xl font-heading font-bold">
        About <span className="gradient-text">Spectra Tech Solutions</span>
      </h2>
      <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        We are dedicated to bridging the gap between education and industry by providing 
        real-world experience, mentorship, and innovation-driven learning.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
          className="rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300"
>
            <div className="inline-flex items-center justify-center mb-3">
              <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-full`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className={`text-3xl font-heading font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground tracking-wide">{stat.label}</div>
          </div>
        );
      })}
    </div>

    {/* Mission & Vision */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-xl font-heading font-bold gradient-text mb-2">Our Mission</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          To make quality tech education and real project experience accessible to every student, 
          helping them build successful careers and empowering businesses with innovation.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
>
        <h3 className="text-xl font-heading font-bold gradient-text mb-2">Our Vision</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          To become the leading platform that connects aspiring technologists with opportunities 
          to learn, grow, and innovate at scale.
        </p>
      </div>
    </div>

  </div>
</section>

  );
};

export default About;
