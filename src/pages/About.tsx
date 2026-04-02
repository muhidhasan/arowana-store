import { Target, Eye, Globe, Shield, Award, Users, Fish, Building2 } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="brand-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">About Us</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Building trust across borders with quality fish exports and construction excellence.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Company Background */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Arowana International Limited is a diversified business company with two core divisions: <strong>Global Fish Export</strong> and <strong>Construction Solutions</strong>. Founded with a vision to connect Bangladesh's finest aquatic species — including premium Arowana and aquarium fish — to global markets, we have grown into a trusted name in international trade.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our construction division holds official licenses to operate projects of all scales, from residential homes and commercial buildings to large infrastructure developments. We combine global trade experience with local construction expertise to deliver value across both sectors.
          </p>
        </section>

        {/* Two Divisions */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-12 h-12 rounded-lg brand-gradient flex items-center justify-center mb-4">
              <Fish className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Global Fish Export</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Live Arowana fish supply (Super Red, Golden, Silver)</li>
              <li>• Aquarium fish export (Discus, Flowerhorn, Oscar)</li>
              <li>• Frozen fish & seafood export (Hilsa, Pangasius, Shrimp)</li>
              <li>• CITES-certified documentation & packaging</li>
              <li>• Temperature-controlled logistics worldwide</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-12 h-12 rounded-lg brand-gradient flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Construction Solutions</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Building construction (residential & commercial)</li>
              <li>• Interior & exterior finishing work</li>
              <li>• Renovation & remodeling services</li>
              <li>• Civil engineering support</li>
              <li>• End-to-end project management</li>
            </ul>
          </div>
        </section>

        {/* Values */}
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Global Network", desc: "Export partnerships spanning multiple countries across Asia, Europe, and the Americas." },
              { icon: Shield, title: "Licensed Operations", desc: "Officially licensed for construction works and CITES-certified fish exports." },
              { icon: Award, title: "Quality Assurance", desc: "Rigorous quality standards for every product and project we deliver." },
              { icon: Users, title: "Expert Teams", desc: "Experienced professionals in both aquaculture trade and construction." },
              { icon: Target, title: "Client Focused", desc: "Every decision driven by our commitment to client satisfaction." },
              { icon: Eye, title: "Transparency", desc: "Open and honest business practices across all operations." },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-lg brand-gradient flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="brand-gradient rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To be the most reliable partner for premium fish exports from Bangladesh to global markets, while delivering construction excellence that shapes communities and improves lives.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To expand our global footprint as a leading international business group, recognized for quality, integrity, and innovation in both fish export and construction services across continents.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
