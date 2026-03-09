import { Target, Eye, Globe, Shield, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="ocean-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">About Us</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Building trust across borders with quality seafood and construction excellence.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Company Background */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Arowana International Limited is a diversified international business company with two core divisions: global fish import and distribution, and licensed construction services. Founded with a vision to connect the world's finest seafood markets with global consumers, we have grown into a trusted name in international trade.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our fish import network spans across Thailand, India, China, Japan, and other major fishing nations. Through our Sea Land Fish Market e-commerce platform, we bring the freshest catches directly to businesses and consumers worldwide. Our construction division holds official licenses to operate projects of all scales, from residential homes to large infrastructure developments.
          </p>
        </section>

        {/* Values */}
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Global Network", desc: "Import partnerships spanning five major fishing nations and growing." },
              { icon: Shield, title: "Licensed Operations", desc: "Officially licensed for construction works at every project scale." },
              { icon: Award, title: "Quality Assurance", desc: "Rigorous quality standards for every product and project we deliver." },
              { icon: Users, title: "Expert Teams", desc: "Experienced professionals in both seafood trade and construction." },
              { icon: Target, title: "Client Focused", desc: "Every decision driven by our commitment to client satisfaction." },
              { icon: Eye, title: "Transparency", desc: "Open and honest business practices across all operations." },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-lg ocean-gradient flex items-center justify-center mb-4">
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
          <div className="ocean-gradient rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To be the most reliable bridge between the world's finest seafood sources and global markets, while delivering construction excellence that shapes communities and improves lives.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To expand our global footprint as a leading international business group, recognized for quality, integrity, and innovation in both seafood trade and construction services across continents.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
