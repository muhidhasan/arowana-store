import { useState } from "react";
import { Building2, ArrowRight, X, Send } from "lucide-react";
import { constructionServices } from "@/data/constructionServices";
import { toast } from "sonner";

const Construction = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  const activeService = constructionServices.find((s) => s.id === selectedService);

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Project inquiry submitted successfully! We'll contact you soon.");
    setShowInquiry(false);
    setSelectedService(null);
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="ocean-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Construction Services</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Licensed construction operations delivering residential, commercial, and infrastructure projects of every scale.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {constructionServices.map((service) => (
            <div key={service.id} className="bg-card rounded-xl overflow-hidden border border-border hover-lift group">
              <div className="aspect-video overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-heading text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                <button
                  onClick={() => setSelectedService(service.id)}
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && activeService && !showInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={() => setSelectedService(null)}>
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video overflow-hidden rounded-t-2xl">
              <img src={activeService.image} alt={activeService.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h2 className="font-heading text-2xl font-bold text-foreground">{activeService.title}</h2>
                <button onClick={() => setSelectedService(null)} className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{activeService.fullDescription}</p>
              <button
                onClick={() => setShowInquiry(true)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" /> Send Project Inquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form Modal */}
      {showInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={() => setShowInquiry(false)}>
          <div className="bg-card rounded-2xl max-w-lg w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Project Inquiry</h2>
              <button onClick={() => setShowInquiry(false)} className="p-2 hover:bg-muted rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              <input type="tel" required placeholder="Phone Number" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              <select className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none">
                {constructionServices.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
              <textarea required placeholder="Project Details" rows={4} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none" />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Construction;
