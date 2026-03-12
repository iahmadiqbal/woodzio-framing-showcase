import { motion } from "framer-motion";
import { HiShieldCheck, HiClock, HiUserGroup, HiStar } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const values = [
  { icon: HiShieldCheck, title: "Integrity", desc: "We operate with honesty and transparency in every project." },
  { icon: HiClock, title: "Reliability", desc: "Deadlines matter. We deliver on time, every time." },
  { icon: HiUserGroup, title: "Teamwork", desc: "Our skilled crews collaborate seamlessly for superior results." },
  { icon: HiStar, title: "Excellence", desc: "We never compromise on quality — from materials to finish." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="wood-gradient py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About Woodzio Framing"
            subtitle="Your trusted partner for professional wood framing solutions in Alberta since day one."
          />
        </div>
      </section>

      {/* Story */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl uppercase text-accent mb-4">Our Story</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Woodzio Framing Inc. was founded with a simple mission: to deliver the highest quality wood framing services in Alberta. Starting from humble beginnings, we've grown into one of the most trusted framing companies in the Calgary and Banff regions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team brings decades of combined experience in residential and commercial framing. We've framed everything from cozy family homes to large-scale multi-unit developments, always with the same commitment to precision and quality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Woodzio Framing Inc. continues to build Alberta's future — one frame at a time. We're proud of our reputation for reliability, craftsmanship, and building lasting relationships with our clients and partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Our Mission" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-foreground leading-relaxed"
          >
            To provide exceptional wood framing services that exceed industry standards, delivered on time and within budget, while building lasting relationships with our clients, partners, and community.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <v.icon className="text-3xl text-primary mx-auto mb-3" />
                <h4 className="font-heading text-lg uppercase text-accent">{v.title}</h4>
                <p className="text-muted-foreground text-sm mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wide text-primary-foreground">
            Let's Build Together
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Ready to discuss your next project? Reach out today.
          </p>
          <div className="mt-8">
            <CTAButton text="Contact Us" to="/contact" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
