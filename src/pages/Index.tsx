import { Link } from "react-router-dom";
import { Fish, Building2, ArrowRight, Anchor, Shield, Globe, Award, CheckCircle, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Global fish trade and construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 animate-fade-up">
              <Anchor className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-medium tracking-wider uppercase">Arowana International Limited</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-up-delay-1">
              Global Fish Export &<br />
              <span className="text-accent">Reliable Construction Solutions</span>
            </h1>
            <p className="text-lg text-background/80 mb-8 max-w-lg animate-fade-up-delay-2">
              Exporting the finest aquarium and food fish worldwide while delivering construction excellence across Bangladesh.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Fish className="w-5 h-5" /> Explore Fish Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-background/15 backdrop-blur-sm border border-background/30 text-background px-6 py-3 rounded-xl font-semibold hover:bg-background/25 transition-colors"
              >
                <Phone className="w-5 h-5" /> Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Short */}
      <section className="section-padding brand-gradient-light">
        <div className="container-max text-center max-w-3xl mx-auto animate-fade-up">
          <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Two Divisions, One Trusted Brand
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Arowana International Limited operates in two core sectors — <strong>Global Fish Export</strong> connecting Bangladesh's finest aquatic species to international markets, and <strong>Construction Solutions</strong> delivering quality building, renovation, and civil engineering services locally.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground">Two core divisions driving international growth</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Fish,
                title: "Fish Export & Import",
                desc: "Live fish export, Arowana supply, aquarium fish, and complete packaging & logistics for global markets.",
                link: "/services/fish-export",
                cta: "View Fish Export Services",
              },
              {
                icon: Building2,
                title: "Construction Solutions",
                desc: "Building construction, interior & exterior work, renovation services, civil engineering support, and project management.",
                link: "/services/construction",
                cta: "View Construction Services",
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-card border border-border rounded-2xl p-8 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl brand-gradient flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding brand-gradient">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-3">Why Choose Us</h2>
            <p className="text-primary-foreground/70">Trusted by businesses across the globe</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Global Reach", desc: "Exporting to countries across Asia, Europe, and the Americas." },
              { icon: Shield, title: "Licensed & Certified", desc: "Fully licensed construction operations and CITES-certified fish exports." },
              { icon: Award, title: "Quality Assurance", desc: "Rigorous standards for every product shipped and project delivered." },
              { icon: CheckCircle, title: "End-to-End Service", desc: "From sourcing to delivery, we handle the entire supply chain." },
            ].map((item) => (
              <div key={item.title} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 text-center">
                <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="brand-gradient rounded-2xl p-10 sm:p-16 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Ready to Do Business?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Whether you need live fish exports or construction services, our team is ready to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary-foreground/25 transition-colors"
              >
                <Phone className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
