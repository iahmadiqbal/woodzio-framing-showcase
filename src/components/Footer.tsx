import { Link } from "react-router-dom";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src={logo} alt="Woodzio Framing Inc" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional wood framing solutions for residential and commercial projects across Alberta.
            </p>
          </div>

          <div>
            <h4 className="font-heading uppercase text-accent tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "About", "Testimonials", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading uppercase text-accent tracking-wider mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Residential Framing</span>
              <span>Commercial Framing</span>
              <span>Custom Homes</span>
              <span>Townhouses</span>
              <span>Multi-Unit Developments</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading uppercase text-accent tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+12363800621" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <HiPhone className="text-primary" /> +1 236-380-0621
              </a>
              <a href="mailto:info@woodzioframing.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <HiMail className="text-primary" /> info@woodzioframing.com
              </a>
              <div className="flex items-start gap-2">
                <HiLocationMarker className="text-primary mt-0.5" />
                <span>Banff, AB · Calgary, AB, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Woodzio Framing Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
