import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiHome, HiOfficeBuilding, HiTemplate, HiCube, HiCollection, HiCheckCircle, HiClock, HiShieldCheck, HiTrendingUp } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const services = [
  {
    id: "residential-framing",
    icon: HiHome,
    title: "Residential Framing",
    desc: "From single-family homes to duplexes, we deliver precise residential wood framing that meets all building codes and exceeds expectations. Our experienced crews ensure structural integrity and timely completion.",
    features: ["Single-family homes", "Duplexes", "Garage framing", "Basement framing"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "commercial-framing",
    icon: HiOfficeBuilding,
    title: "Commercial Framing",
    desc: "Professional framing services for commercial buildings, retail spaces, and mixed-use developments. We handle complex commercial projects with the same attention to detail as our residential work.",
    features: ["Office buildings", "Retail spaces", "Mixed-use", "Warehouses"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    id: "custom-homes",
    icon: HiTemplate,
    title: "Custom Homes",
    desc: "Specializing in bespoke framing for architecturally unique homes. We work closely with architects and builders to bring custom designs to life with precision craftsmanship.",
    features: ["Architectural designs", "Luxury homes", "Complex rooflines", "Vaulted ceilings"],
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80",
  },
  {
    id: "townhouses",
    icon: HiCube,
    title: "Townhouses",
    desc: "Efficient and code-compliant framing for townhouse developments. Our team manages multi-unit townhouse projects with consistent quality across every unit.",
    features: ["Row housing", "Stacked townhouses", "Party walls", "Fire separations"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    id: "multi-unit-developments",
    icon: HiCollection,
    title: "Multi-Unit Developments",
    desc: "Large-scale framing for apartment complexes and multi-unit residential buildings. We have the capacity, experience, and workforce to handle the biggest projects in Alberta.",
    features: ["Apartment complexes", "Condominiums", "Student housing", "Senior living"],
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80" 
            alt="Residential framing services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brown-deep/90 via-background/85 to-wood-dark/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title="Our Services"
              subtitle="Comprehensive wood framing solutions for residential and commercial projects of all sizes across Alberta."
            />
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={i}
              id={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 items-center scroll-mt-24`}
            >
              <div className="flex-1">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  src={s.image}
                  alt={s.title}
                  className="rounded-lg shadow-2xl w-full h-80 object-cover"
                />
              </div>
              <div className="flex-1 bg-card border border-border rounded-lg p-8">
                <s.icon className="text-5xl text-accent mb-4" />
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {s.features.map((f, j) => (
                    <div key={j} className="text-sm text-tan flex items-center gap-2">
                      <HiCheckCircle className="text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Woodzio?" subtitle="Experience the difference of working with professionals" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: HiShieldCheck, title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind." },
              { icon: HiClock, title: "On-Time Delivery", desc: "We stick to timelines and deliver on schedule." },
              { icon: HiCheckCircle, title: "Quality Materials", desc: "Premium lumber and materials on every project." },
              { icon: HiTrendingUp, title: "Expert Crews", desc: "Skilled tradespeople with years of framing experience." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all group"
              >
                <item.icon className="text-4xl text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading text-lg font-semibold text-accent mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Service Process" subtitle="How we deliver excellence from start to finish" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: "Initial Consultation", desc: "We meet to understand your project requirements and timeline" },
              { step: "02", title: "Detailed Quote", desc: "Receive a comprehensive estimate with material and labor breakdown" },
              { step: "03", title: "Expert Execution", desc: "Our skilled crew frames your project with precision and care" },
              { step: "04", title: "Quality Inspection", desc: "Final walkthrough to ensure everything meets our high standards" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-card border border-border rounded-lg p-6"
              >
                <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                <h4 className="font-heading text-lg font-semibold text-accent mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Service Areas" subtitle="Proudly serving communities across Alberta" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-12"
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {["Calgary", "Banff", "Canmore", "Airdrie", "Cochrane", "Okotoks"].map((city, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-foreground font-medium py-3 px-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {city}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
              Need Framing for Your Project?
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Get in touch for a free estimate today.
            </p>
            <div className="mt-8">
              <CTAButton text="Contact Us" to="/contact" variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
