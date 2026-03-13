import { motion } from "framer-motion";
import { HiStar, HiUserCircle, HiThumbUp, HiHeart } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const testimonials = [
  {
    name: "James Richardson",
    role: "Homeowner, Calgary",
    text: "Woodzio Framing built the frame for our dream home and the quality was exceptional. The crew was professional, punctual, and left the site clean every day. Couldn't ask for more.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sarah Mitchell",
    role: "General Contractor",
    text: "We've worked with Woodzio on over 20 projects now. They're our go-to framing crew because they deliver consistent quality and always meet our tight schedules.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "David Kowalski",
    role: "Property Developer",
    text: "Their work on our 40-unit apartment development was flawless. The precision of their framing made every subsequent trade's job easier. True professionals.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Linda Chen",
    role: "Architect",
    text: "I recommend Woodzio to all my clients. They understand complex architectural plans and execute them perfectly. Their attention to detail in custom homes is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Mark Thompson",
    role: "Builder, Banff",
    text: "Working in the Banff area presents unique challenges, but Woodzio handles everything with expertise. From mountain homes to commercial lodges, they deliver excellence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner, Canmore",
    text: "From the initial consultation to project completion, Woodzio exceeded our expectations. Their craftsmanship is outstanding and their team is a pleasure to work with.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
  },
];

const Testimonials = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
            alt="Modern building construction" 
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
              title="Client Testimonials"
              subtitle="Don't just take our word for it — hear from the clients and partners who trust us with their projects."
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all"
              >
                <div className="mb-6">
                  <div className="font-heading text-lg font-semibold text-accent">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <HiStar key={j} className="text-accent text-lg" />
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Client Satisfaction" subtitle="Numbers that speak for themselves" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: HiThumbUp, num: "98%", label: "Client Satisfaction Rate" },
              { icon: HiUserCircle, num: "500+", label: "Happy Clients" },
              { icon: HiStar, num: "4.9/5", label: "Average Rating" },
              { icon: HiHeart, num: "95%", label: "Repeat Customers" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <stat.icon className="text-5xl text-primary mx-auto mb-4" />
                <div className="font-heading text-4xl font-bold text-accent mb-2">{stat.num}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="See What Our Clients Say" subtitle="Real stories from real people" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
              "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Clients Choose Us" subtitle="The reasons behind our stellar reviews" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Transparent Communication", desc: "We keep you informed every step of the way with clear, honest updates" },
              { title: "Quality Guarantee", desc: "Every project backed by our commitment to excellence and craftsmanship" },
              { title: "Timely Completion", desc: "We respect your timeline and deliver projects on schedule, every time" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <h4 className="font-heading text-xl font-semibold text-accent mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
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
              Join Our Satisfied Clients
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Start your project with the team Alberta trusts.
            </p>
            <div className="mt-8">
              <CTAButton text="Get Started" to="/contact" variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
