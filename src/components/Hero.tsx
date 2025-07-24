import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, Mail, ArrowDown } from 'lucide-react';
import mekdesPortrait from '@/assets/mekdes-portrait.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Mekd422', 
      label: 'GitHub',
      color: 'hover:text-foreground'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/mekdes-assefa-44b94a31b/', 
      label: 'LinkedIn',
      color: 'hover:text-primary'
    },
    { 
      icon: Code, 
      href: 'https://leetcode.com/u/Mekd_A/', 
      label: 'LeetCode',
      color: 'hover:text-secondary'
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-tech bg-clip-text text-transparent leading-tight">
                Mekdes Assefa
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                Software Engineering Student
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Curious mind blending tech, creativity, and psychology. I build, design, and reflect—always learning, always growing.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-tech hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('#portfolio')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${social.color} transition-colors duration-300 p-2 rounded-full hover:bg-background/20`}
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-tech rounded-full blur-2xl opacity-30 animate-tech-glow"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-tech">
                <img
                  src={mekdesPortrait}
                  alt="Mekdes Assefa Fetene"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;