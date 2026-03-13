import { motion } from "framer-motion";
import { HiShieldCheck, HiClock, HiUserGroup, HiStar, HiTrendingUp, HiAcademicCap, HiHeart, HiLightBulb } from "react-icons/hi";
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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80" 
            alt="Commercial building construction" 
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
              title="About Woodzio Framing"
              subtitle="Your trusted partner for professional wood framing solutions in Alberta since day one."
            />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" 
                alt="Construction team working on site" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-3xl font-bold text-accent mb-6">Our Story</h3>
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <HiLightBulb className="text-6xl text-primary mx-auto lg:mx-0 mb-6" />
              <h3 className="font-heading text-3xl font-bold text-accent mb-6">Our Mission</h3>
              <p className="text-lg text-foreground leading-relaxed">
                To provide exceptional wood framing services that exceed industry standards, delivered on time and within budget, while building lasting relationships with our clients, partners, and community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80" 
                alt="Quality wood framing work" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all group"
              >
                <v.icon className="text-4xl text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading text-lg font-semibold text-accent mb-2">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Team" subtitle="Skilled professionals dedicated to excellence" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative h-56">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" 
                  alt="Construction team at work" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our experienced team brings decades of combined expertise in wood framing. Each member is trained in the latest construction techniques and safety standards, ensuring every project meets the highest quality benchmarks.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative h-56">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" 
                  alt="Professional framing crew" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  We pride ourselves on fostering a culture of collaboration and continuous improvement. Our crew members work seamlessly together, combining their skills to deliver exceptional results on residential and commercial projects across Alberta.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: HiAcademicCap, title: "Expert Training", desc: "Continuous education and certification programs for our crew members" },
              { icon: HiTrendingUp, title: "Years of Experience", desc: "Decades of combined expertise in residential and commercial framing" },
              { icon: HiHeart, title: "Passion for Quality", desc: "Every team member takes pride in delivering exceptional craftsmanship" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <item.icon className="text-5xl text-accent mx-auto mb-4" />
                <h4 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Projects Completed" },
              { num: "15+", label: "Years Experience" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "50+", label: "Team Members" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-5xl font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
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
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
              Let's Build Together
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Ready to discuss your next project? Reach out today.
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

export default About;
