import { Github, Instagram, Linkedin, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/wordloop15?igsh=MWo4djZkdHJyeTQ0ag%3D%3D&utm_source=qr", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/5551933808998", label: "WhatsApp" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/filipe-gabriel-veiga-de-paula-704b2a302/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/DPViega", label: "GitHub" },
  ];

  return (
    <footer className="relative py-8 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © 2025 Filipe Gabriel. Feito com <Heart className="w-4 h-4 text-primary animate-pulse" /> e muito código
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-background/50 border border-primary/20 flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:scale-110 transition-all group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;