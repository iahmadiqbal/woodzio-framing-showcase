import { motion } from "framer-motion";
import { HiHome, HiOfficeBuilding, HiTemplate, HiCube, HiCollection } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const services = [
  {
    icon: HiHome,
    title: "Residential Framing",
    desc: "From single-family homes to duplexes, we deliver precise residential wood framing that meets all building codes and exceeds expectations. Our experienced crews ensure structural integrity and timely completion.",
    features: ["Single-family homes", "Duplexes", "Garage framing", "Basement framing"],
  },
  {
    icon: HiOfficeBuilding,
    title: "Light Commercial Framing",
    desc: "Professional framing services for commercial buildings, retail spaces, and mixed-use developments. We handle complex commercial projects with the same attention to detail as our residential work.",
    features: ["Office buildings", "Retail spaces", "Mixed-use", "Warehouses"],
  },
  {
    icon: HiTemplate,
    title: "Custom Home Framing",
    desc: "Specializing in bespoke framing for architecturally unique homes. We work closely with architects and builders to bring custom designs to life with precision craftsmanship.",
    features: ["Architectural designs", "Luxury homes", "Complex rooflines", "Vaulted ceilings"],
  },
  {
    icon: HiCube,
    title: "Townhouse Framing",
    desc: "Efficient and code-compliant framing for townhouse developments. Our team manages multi-unit townhouse projects with consistent quality across every unit.",
    features: ["Row housing", "Stacked townhouses", "Party walls", "Fire separations"],
  },
  {
    icon: HiCollection,
    title: "Multi-Unit Developments",
    desc: "Large-scale framing for apartment complexes and multi-unit residential buildings. We have the capacity, experience, and workforce to handle the biggest projects in Alberta.",
    features: ["Apartment complexes", "Condominiums", "Student housing", "Senior living"],
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="wood-gradient py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive wood framing solutions for residential and commercial projects of all sizes across Alberta."
          />
        </div>
      </section>

      {/* Services List */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 bg-card border border-border rounded-lg p-8">
                <s.icon className="text-4xl text-accent mb-4" />
                <h3 className="font-heading text-2xl uppercase tracking-wide text-foreground">{s.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {s.features.map((f, j) => (
                    <li key={j} className="text-sm text-tan flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Woodzio?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind." },
              { title: "On-Time Delivery", desc: "We stick to timelines and deliver on schedule." },
              { title: "Quality Materials", desc: "Premium lumber and materials on every project." },
              { title: "Expert Crews", desc: "Skilled tradespeople with years of framing experience." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <h4 className="font-heading text-lg uppercase text-accent">{item.title}</h4>
                <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wide text-primary-foreground">
            Need Framing for Your Project?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Get in touch for a free estimate today.
          </p>
          <div className="mt-8">
            <CTAButton text="Contact Us" to="/contact" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
