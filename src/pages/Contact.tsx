import { useState } from "react";
import { motion } from "framer-motion";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="wood-gradient py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact Us"
            subtitle="Ready to start your project? Reach out for a free consultation and quote."
          />
        </div>
      </section>

      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl uppercase text-accent mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded font-heading uppercase tracking-wider hover:bg-red-dark transition-colors"
                >
                  Schedule a Consultation
                </motion.button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="font-heading text-2xl uppercase text-accent mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <a href="tel:+12363800621" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <HiPhone className="text-xl text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="text-foreground font-heading">+1 236-380-0621</div>
                  </div>
                </a>

                <a href="mailto:info@woodzioframing.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <HiMail className="text-xl text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground font-heading">info@woodzioframing.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center">
                    <HiLocationMarker className="text-xl text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Locations</div>
                    <div className="text-foreground font-heading">Banff, AB · Calgary, AB</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mt-8">
                <h4 className="font-heading text-lg uppercase text-accent mb-2">Business Hours</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="text-foreground">7:00 AM – 5:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-foreground">8:00 AM – 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-foreground">Closed</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wide text-primary-foreground">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Call us now or fill out the form above to get started.
          </p>
          <div className="mt-8">
            <motion.a
              href="tel:+12363800621"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded font-heading uppercase tracking-wider text-sm inline-block"
            >
              Call +1 236-380-0621
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
