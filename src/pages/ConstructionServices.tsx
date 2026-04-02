import { Link } from "react-router-dom";
import { Building2, Hammer, PaintBucket, HardHat, ClipboardList, ArrowRight, MapPin } from "lucide-react";
import { constructionServices } from "@/data/constructionServices";

const servicesList = [
  { icon: Building2, title: "Building Construction", desc: "Residential and commercial building from foundation to finishing." },
  { icon: PaintBucket, title: "Interior & Exterior Work", desc: "Complete interior fit-outs, painting, cladding, and exterior finishing." },
  { icon: Hammer, title: "Renovation Services", desc: "Modernize and transform existing properties with expert renovation." },
  { icon: HardHat, title: "Civil Engineering Support", desc: "Roads, bridges, drainage, and structural engineering solutions." },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end project planning, coordination, and delivery management." },
];

const ConstructionServices = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="brand-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Construction Solutions</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Licensed construction operations delivering residential, commercial, and infrastructure projects.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Services */}
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-lg brand-gradient flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Preview */}
        <section>
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">Our Portfolio</h2>
            <p className="text-muted-foreground">Recent projects showcasing our construction capabilities</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-card rounded-xl overflow-hidden border border-border hover-lift group">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Local Service Area */}
        <section className="brand-gradient-light rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-6">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">Local Service Area</h2>
            <p className="text-muted-foreground">We serve construction projects across Bangladesh</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Gazipur", "Comilla", "Rangpur"].map((city) => (
              <span key={city} className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-medium text-foreground">
                {city}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="brand-gradient rounded-2xl p-10 sm:p-14">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">Need a Construction Quote?</h2>
            <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">Tell us about your project and get a free consultation.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Request Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConstructionServices;
