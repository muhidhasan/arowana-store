import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="ocean-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Get in touch for business inquiries, orders, or project consultations.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Office Address", value: "123 Business Avenue, International Trade Center, Suite 500" },
                { icon: Mail, label: "Email", value: "info@arowanaintl.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: Clock, label: "Business Hours", value: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg ocean-gradient flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-muted rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25987!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input type="text" required placeholder="Your full name" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea required placeholder="How can we help you?" rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
