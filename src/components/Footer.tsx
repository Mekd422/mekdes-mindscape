import { Github, Linkedin, Code, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Mekd422",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mekdes-assefa-44b94a31b/",
      label: "LinkedIn"
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/Mekd_A/",
      label: "LeetCode"
    },
    {
      icon: ExternalLink,
      href: "https://www.hackerrank.com/profile/Mekdes_A",
      label: "HackerRank"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-2">
              Mekdes Assefa
            </h3>
            <p className="text-muted-foreground">
              Software Engineering Student & Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-background/50"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="flex items-center">
              © {currentYear} Mekdes Assefa Fetene. Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              and lots of code.
            </p>
            <p className="mt-2 md:mt-0">
              Currently pursuing Software Engineering at AAU
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;