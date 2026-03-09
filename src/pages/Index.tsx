import { Link } from "react-router-dom";
import { Fish, Building2, Globe, ArrowRight, Anchor, Ship } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { fishProducts } from "@/data/fishProducts";
import { constructionServices } from "@/data/constructionServices";
import FishCard from "@/components/FishCard";

const countries = [
  { name: "Thailand", flag: "🇹🇭" },
  { name: "India", flag: "🇮🇳" },
  { name: "China", flag: "🇨🇳" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Other Markets", flag: "🌍" },
];

const Index = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Global fish trade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 animate-fade-up">
              <Anchor className="w-5 h-5 text-ocean-light" />
              <span className="text-ocean-foam text-sm font-medium tracking-wider uppercase">Arowana International Limited</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-up-delay-1">
              Global Fish Import &<br />
              <span className="text-ocean-light">Construction Solutions</span>
            </h1>
            <p className="text-lg text-background/80 mb-8 max-w-lg animate-fade-up-delay-2">
              Importing the finest seafood from around the world while delivering excellence in construction services.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link
                to="/market"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Fish className="w-5 h-5" /> Explore Sea Land Market
              </Link>
              <Link
                to="/construction"
                className="inline-flex items-center gap-2 bg-background/15 backdrop-blur-sm border border-background/30 text-background px-6 py-3 rounded-xl font-semibold hover:bg-background/25 transition-colors"
              >
                <Building2 className="w-5 h-5" /> View Construction Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Short */}
      <section className="section-padding ocean-gradient-light">
        <div className="container-max text-center max-w-3xl mx-auto animate-fade-up">
          <Ship className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Trusted Global Partner
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Arowana International Limited is an international business company specializing in fish imports from Thailand, India, China, Japan, and other global markets. We also provide licensed construction services for projects of all scales — from residential homes to large-scale infrastructure.
          </p>
        </div>
      </section>

      {/* Services */}
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
                title: "Sea Land Fish Market",
                desc: "Global fish import and e-commerce marketplace. Fresh seafood sourced directly from top fishing nations worldwide.",
                link: "/market",
              },
              {
                icon: Building2,
                title: "Construction Services",
                desc: "Commercial, residential, and infrastructure development. Licensed operations delivering projects of every scale.",
                link: "/construction",
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-card border border-border rounded-2xl p-8 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl ocean-gradient flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Sources */}
      <section className="section-padding ocean-gradient">
        <div className="container-max text-center">
          <Globe className="w-10 h-10 text-ocean-light mx-auto mb-4" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-3">Global Import Sources</h2>
          <p className="text-primary-foreground/70 mb-10">Sourcing from the world's finest fishing markets</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {countries.map((c) => (
              <div
                key={c.name}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-6 py-4 text-center hover-lift"
              >
                <span className="text-3xl mb-2 block">{c.flag}</span>
                <span className="text-primary-foreground text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">Featured Fish Products</h2>
              <p className="text-muted-foreground">Fresh catches from our global supply network</p>
            </div>
            <Link to="/market" className="hidden sm:inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fishProducts.slice(0, 4).map((fish) => (
              <FishCard key={fish.id} product={fish} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/market" className="inline-flex items-center gap-2 text-primary font-medium">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Construction Preview */}
      <section className="section-padding ocean-gradient-light">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">Construction Projects</h2>
            <p className="text-muted-foreground">Licensed to deliver excellence at every scale</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-card rounded-xl overflow-hidden border border-border hover-lift">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/construction"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <Building2 className="w-5 h-5" /> View Construction Details
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="ocean-gradient rounded-2xl p-10 sm:p-16 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Ready to Do Business?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Whether you need fresh seafood supplies or construction services, our team is ready to assist.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
