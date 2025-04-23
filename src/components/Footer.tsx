
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <a
              href="#hero"
              className="text-xl font-extrabold tracking-tighter gradient-text"
            >
              portfolio<span className="text-accent">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              © {currentYear} Jane Doe. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://github.com" className="text-foreground hover:text-accent transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" className="text-foreground hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>

          {/* Back to top */}
          <div>
            <a
              href="#hero"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
