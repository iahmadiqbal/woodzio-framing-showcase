import { motion } from "framer-motion";
import { HiHome, HiOfficeBuilding, HiTemplate, HiCube, HiCollection, HiCheckCircle, HiLightningBolt, HiShieldCheck } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const services = [
  { icon: HiHome, title: "Residential Framing", desc: "Expert framing for single-family homes with precision and quality craftsmanship.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { icon: HiOfficeBuilding, title: "Light Commercial", desc: "Professional framing solutions for commercial buildings and mixed-use spaces.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80" },
  { icon: HiTemplate, title: "Custom Homes", desc: "Bespoke framing for unique architectural designs and luxury residences.", image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80" },
  { icon: HiCube, title: "Townhouses", desc: "Efficient and reliable framing for townhouse developments and row housing.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" },
  { icon: HiCollection, title: "Multi-Unit", desc: "Large-scale framing for multi-unit residential and apartment complexes.", image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80" },
];

const testimonials = [
  { name: "James R.", role: "Homeowner", text: "Woodzio Framing did an incredible job on our custom home. The attention to detail was outstanding.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sarah M.", role: "General Contractor", text: "Reliable, professional, and always on schedule. Our go-to framing crew for every project.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "David K.", role: "Developer", text: "Their work on our 40-unit development was flawless. Highly recommend their multi-unit expertise.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Michael T.", role: "Architect", text: "Working with Woodzio has been a pleasure. They understand complex designs and execute them perfectly.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Jennifer L.", role: "Homeowner, Banff", text: "Our mountain home required precision framing. Woodzio delivered beyond our expectations.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Robert P.", role: "Construction Manager", text: "Best framing crew in Alberta. Their quality and efficiency are unmatched in the industry.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
];

const Index = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" 
            alt="Wood framing construction site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brown-deep/90 via-background/80 to-wood-dark/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Building Alberta's <br />
              <span className="text-primary">Future Frame</span> by Frame
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-tan max-w-2xl mx-auto leading-relaxed"
            >
              Professional wood framing for residential and commercial projects in Calgary, Banff, and across Alberta.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex gap-4 flex-wrap justify-center"
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1920&q=80" 
            alt="Professional framing services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brown-deep/95 via-background/90 to-wood-dark/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Our Services" subtitle="Comprehensive wood framing solutions for every project scale." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <s.icon className="text-3xl text-accent group-hover:text-primary transition-colors mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
            {services.slice(3, 5).map((s, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <s.icon className="text-3xl text-accent group-hover:text-primary transition-colors mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton text="View All Services" to="/services" />
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80" 
            alt="Client testimonials background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brown-deep/95 via-background/90 to-wood-dark/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="What Clients Say" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full min-h-[280px] hover:border-primary/50 transition-colors flex flex-col">
                        <CardHeader className="flex-1">
                          <CardDescription className="text-foreground italic leading-relaxed text-base">
                            "{t.text}"
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center gap-4 border-t pt-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={t.image} alt={t.name} />
                            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                              {t.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base text-accent">{t.name}</CardTitle>
                            <p className="text-muted-foreground text-sm">{t.role}</p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-12" />
              <CarouselNext className="right-0 translate-x-12" />
            </Carousel>
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

      {/* Why Choose Us */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Woodzio Framing" subtitle="Experience the difference of working with Alberta's trusted framing experts" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: HiCheckCircle, title: "Quality Craftsmanship", desc: "Every frame built to perfection with attention to detail and precision" },
              { icon: HiLightningBolt, title: "Fast & Efficient", desc: "On-time project completion without compromising on quality" },
              { icon: HiShieldCheck, title: "Licensed & Insured", desc: "Fully certified professionals you can trust with your investment" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <item.icon className="text-5xl text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Process" subtitle="From consultation to completion, we make framing simple" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              { num: "01", title: "Consultation", desc: "We discuss your project needs and provide expert advice" },
              { num: "02", title: "Planning", desc: "Detailed planning and material estimation for your project" },
              { num: "03", title: "Execution", desc: "Our skilled crew brings your vision to life with precision" },
              { num: "04", title: "Completion", desc: "Final inspection and handover of your perfectly framed structure" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.num}</div>
                <h3 className="font-heading text-xl font-semibold text-accent mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-medium py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Recent Projects" subtitle="See the quality of our work across Alberta" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", title: "Luxury Custom Home", location: "Calgary, AB", type: "Residential", desc: "A stunning 5,000 sq ft custom home featuring complex rooflines and vaulted ceilings. Our team delivered precision framing that brought the architect's vision to life." },
              { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", title: "Multi-Unit Complex", location: "Banff, AB", type: "Commercial", desc: "40-unit apartment development completed on schedule. This project showcased our expertise in large-scale commercial framing with consistent quality across all units." },
              { img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80", title: "Townhouse Development", location: "Canmore, AB", type: "Residential", desc: "12-unit townhouse project with fire-rated party walls and complex structural requirements. Delivered with meticulous attention to building codes and safety standards." },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-accent mb-3 font-medium">{project.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
