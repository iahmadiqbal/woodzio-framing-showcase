import { motion } from "framer-motion";
import { HiHome, HiOfficeBuilding, HiTemplate, HiCube, HiCollection } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import logo from "@/assets/logo.jpg";

const services = [
  { icon: HiHome, title: "Residential Framing", desc: "Expert framing for single-family homes with precision and quality craftsmanship." },
  { icon: HiOfficeBuilding, title: "Light Commercial", desc: "Professional framing solutions for commercial buildings and mixed-use spaces." },
  { icon: HiTemplate, title: "Custom Homes", desc: "Bespoke framing for unique architectural designs and luxury residences." },
  { icon: HiCube, title: "Townhouses", desc: "Efficient and reliable framing for townhouse developments and row housing." },
  { icon: HiCollection, title: "Multi-Unit", desc: "Large-scale framing for multi-unit residential and apartment complexes." },
];

const testimonials = [
  { name: "James R.", role: "Homeowner", text: "Woodzio Framing did an incredible job on our custom home. The attention to detail was outstanding." },
  { name: "Sarah M.", role: "General Contractor", text: "Reliable, professional, and always on schedule. Our go-to framing crew for every project." },
  { name: "David K.", role: "Developer", text: "Their work on our 40-unit development was flawless. Highly recommend their multi-unit expertise." },
];

const Index = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center wood-gradient wood-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown-deep/80 via-background/60 to-wood-dark/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={logo} alt="Woodzio Framing" className="h-28 w-auto mb-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide text-foreground leading-tight"
            >
              Building Alberta's <br />
              <span className="text-primary">Future Frame</span> by Frame
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-tan max-w-xl leading-relaxed"
            >
              Professional wood framing for residential and commercial projects in Calgary, Banff, and across Alberta.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex gap-4 flex-wrap"
            >
              <CTAButton text="Get a Free Quote" to="/contact" />
              <CTAButton text="Our Services" to="/services" variant="secondary" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Built on Trust & Craftsmanship"
            subtitle="With years of experience in wood framing, Woodzio Framing Inc. delivers precision, reliability, and quality on every project."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { num: "500+", label: "Projects Completed" },
              { num: "15+", label: "Years Experience" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card p-8 rounded-lg text-center border border-border"
              >
                <div className="font-heading text-4xl text-primary">{stat.num}</div>
                <div className="text-muted-foreground mt-2 uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Services" subtitle="Comprehensive wood framing solutions for every project scale." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
              >
                <s.icon className="text-3xl text-accent group-hover:text-primary transition-colors mb-4" />
                <h3 className="font-heading text-xl uppercase tracking-wide text-foreground">{s.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton text="View All Services" to="/services" />
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="What Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <p className="text-foreground italic leading-relaxed">"{t.text}"</p>
                <div className="mt-4 border-t border-border pt-4">
                  <div className="font-heading text-accent">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wide text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Contact us today for a free consultation and quote on your next framing project.
            </p>
            <div className="mt-8">
              <CTAButton text="Schedule a Consultation" to="/contact" variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
