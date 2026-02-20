import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "spectratech.connect@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8010396257",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Tech Street, Innovation City, CA 94000",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/spectratechsolutions/about/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/spectra_techsolutions", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Contact = () => {
  const { ref, isVisible } = useSectionTransition();

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "918010396257"; // include country code (91)

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    const text = `*New Contact Message*%0A
Name: ${name}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
<section 
  id="contact"
  ref={ref}
  className="py-12 px-4 transition-all duration-700 ease-out"
  style={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
  }}
>
  <div className="container mx-auto max-w-6xl">

    {/* Title */}
    <div className="text-center mb-8 space-y-1">
      <h2 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
        Get <span className="gradient-text">In Touch</span>
      </h2>
      <p className="text-base text-muted-foreground max-w-lg mx-auto leading-snug">
        Have questions or want to collaborate? We're here for you.
      </p>
    </div>

    {/* Main Box */}
    <div className="glass-strong rounded-xl p-6 border border-neutral-500 grid lg:grid-cols-2 gap-5">

      {/* Left - Form */}
      <form className="space-y-4" onSubmit={sendWhatsAppMessage}>
        <div className="grid sm:grid-cols-2 gap-3">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="glass border-neutral-500 bg-transparent text-sm"
          />
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass border-neutral-500 bg-transparent text-sm"
          />
        </div>

        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="glass border-neutral-500 bg-transparent text-sm"
        />

        <Textarea
          placeholder="Tell us more..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="glass border-neutral-500 bg-transparent resize-none text-sm"
        />

        <Button
          size="lg"
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all text-white"
        >
          Send Message
        </Button>
      </form>

      {/* Right - Contact Details */}
      <div className="space-y-4">

        {/* Info List */}
        <div className="space-y-3">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div key={info.label} className="glass-strong rounded-lg p-3 border border-neutral-500 flex items-center space-x-3">
                <div className="bg-gradient-to-r from-accent to-secondary p-2 rounded-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{info.label}</div>
                  <div className="text-sm font-medium">{info.value}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social */}
        <div className="flex space-x-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary p-2 rounded-md border border-neutral-500 hover:shadow-accent/40 transition-all">
                <Icon className="w-4 h-4 text-white" />
              </a>
            );
          })}
        </div>

        {/* Map Box */}
        <div className="glass-strong rounded-lg border border-neutral-500 h-40 flex items-center justify-center">
          <MapPin className="w-8 h-8 text-accent" />
        </div>

      </div>

    </div>
  </div>
</section>
  );
};

export default Contact;


