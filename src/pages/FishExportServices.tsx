import { Link } from "react-router-dom";
import { Fish, Globe, Package, Shield, ArrowRight, CheckCircle } from "lucide-react";

const exportServices = [
  {
    icon: Fish,
    title: "Live Fish Export",
    desc: "Premium live fish including Arowana, Discus, Flowerhorn, and other exotic species. Temperature-controlled packaging for safe international transit.",
  },
  {
    icon: Fish,
    title: "Arowana Fish Supply",
    desc: "Specialized Arowana breeding and export — Super Red, Golden Crossback, Silver, and rare varieties with CITES certification.",
  },
  {
    icon: Fish,
    title: "Aquarium Fish Export",
    desc: "Wide range of ornamental and aquarium fish for hobbyists and commercial aquariums worldwide.",
  },
  {
    icon: Package,
    title: "Packaging & Logistics",
    desc: "Professional packaging with oxygenated bags, insulated boxes, and door-to-door logistics to any destination.",
  },
];

const countriesServed = [
  "United States", "United Kingdom", "Japan", "China", "Thailand",
  "Malaysia", "Singapore", "UAE", "Germany", "Canada",
];

const FishExportServices = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="brand-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Global Fish Export</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Premium live fish and seafood export from Bangladesh to markets worldwide.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Services Grid */}
        <section>
          <div className="grid sm:grid-cols-2 gap-6">
            {exportServices.map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-lg brand-gradient flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Countries Served */}
        <section className="brand-gradient-light rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">Countries We Serve</h2>
            <p className="text-muted-foreground">Our fish products reach markets across the globe</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {countriesServed.map((country) => (
              <span key={country} className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-medium text-foreground">
                {country}
              </span>
            ))}
          </div>
        </section>

        {/* Quality Assurance */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">Export Quality Assurance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "CITES certified for protected species",
              "HACCP compliant processing",
              "Temperature-controlled logistics",
              "Health certificates for every shipment",
              "100% traceable supply chain",
              "Quarantine facility available",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="brand-gradient rounded-2xl p-10 sm:p-14">
            <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">Interested in Fish Export?</h2>
            <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">Send us an inquiry and our export team will get back to you within 24 hours.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Send Inquiry <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary-foreground/25 transition-colors">
                View Products <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FishExportServices;
