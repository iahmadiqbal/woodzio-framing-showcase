import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//  this is the interface of ctabutton
interface CTAButtonProps {
  text: string;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
}

const CTAButton = ({ text, to, href, variant = "primary" }: CTAButtonProps) => {
  const base =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-red-dark"
      : "bg-secondary text-secondary-foreground hover:bg-accent";

  const cls = `${base} px-8 py-3 rounded font-heading uppercase tracking-wider text-sm inline-block transition-colors duration-200`;

  const inner = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
    >
      {text}
    </motion.span>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href}>{inner}</a>;
  return inner;
};

export default CTAButton;
