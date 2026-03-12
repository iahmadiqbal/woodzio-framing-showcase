import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const testimonials = [
  {
    name: "James Richardson",
    role: "Homeowner, Calgary",
    text: "Woodzio Framing built the frame for our dream home and the quality was exceptional. The crew was professional, punctual, and left the site clean every day. Couldn't ask for more.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "General Contractor",
    text: "We've worked with Woodzio on over 20 projects now. They're our go-to framing crew because they deliver consistent quality and always meet our tight schedules.",
    rating: 5,
  },
  {
    name: "David Kowalski",
    role: "Property Developer",
    text: "Their work on our 40-unit apartment development was flawless. The precision of their framing made every subsequent trade's job easier. True professionals.",
    rating: 5,
  },
  {
    name: "Linda Chen",
    role: "Architect",
    text: "I recommend Woodzio to all my clients. They understand complex architectural plans and execute them perfectly. Their attention to detail in custom homes is unmatched.",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    role: "Builder, Banff",
    text: "Working in the Banff area presents unique challenges, but Woodzio handles everything with expertise. From mountain homes to commercial lodges, they deliver excellence.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="pt-20">
      <section className="wood-gradient py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Don't just take our word for it — hear from the clients and partners who trust us with their projects."
          />
        </div>
      </section>

      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <HiStar key={j} className="text-accent" />
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed">"{t.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-heading text-accent">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wide text-primary-foreground">
            Join Our Satisfied Clients
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start your project with the team Alberta trusts.
          </p>
          <div className="mt-8">
            <CTAButton text="Get Started" to="/contact" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
