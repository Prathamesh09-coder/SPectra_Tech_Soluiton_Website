import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tech.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
           <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#004AAD]/30 bg-[#004AAD]/5 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#0057B8]" />
              <span className="text-sm font-medium text-[#003B8B] tracking-wide">
                Empowering Innovation
              </span>
            </div>
          

            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight animate-fade-in-up stagger-1">
              Innovate.{" "}
              <span className="gradient-text">Build.</span>{" "}
              <span className="gradient-text">Transform.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-up stagger-2">
              Empowering students and businesses with cutting-edge technology solutions.
              Join us to build innovative projects, gain hands-on experience, and transform your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 group"
              >
                Join Internship
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="glass border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                View Projects
              </Button>
            </div>

            {/* Stats */}
                
                    <div className="grid grid-cols-3 gap-8 pt-8">


  <div className="space-y-1 animate-scale-in stagger-4">
    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[#274BDB] via-[#4169E1] to-[#A07CFF] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(65,105,225,0.45)]">
      100+
    </div>
    <div className="text-sm text-muted-foreground">Projects</div>
  </div>

  <div className="space-y-1 animate-scale-in stagger-5">
    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[#274BDB] via-[#4169E1] to-[#A07CFF] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(65,105,225,0.45)]">
      200+
    </div>
    <div className="text-sm text-muted-foreground">Interns</div>
  </div>

  <div className="space-y-1 animate-scale-in stagger-6">
    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[#274BDB] via-[#4169E1] to-[#A07CFF] bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(65,105,225,0.45)]">
      5+
    </div>
    <div className="text-sm text-muted-foreground">Years</div>
  </div>

</div>





          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right stagger-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-2xl blur-2xl opacity-30 animate-glow-pulse"></div>
              <img
                src={heroImage}
                alt="Futuristic technology illustration"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


