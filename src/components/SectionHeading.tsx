import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
    )}
    <div className="mt-4 h-1 w-20 bg-primary rounded mx-auto" />
  </motion.div>
);

export default SectionHeading;
