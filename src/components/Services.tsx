import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Smartphone, 
  Code, 
  Palette, 
  Database, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Node.js, and MongoDB",
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "API Integration",
        "Performance Optimization"
      ],
      color: "text-primary",
      gradient: "bg-gradient-tech"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter and native technologies",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "UI/UX Design",
        "App Store Deployment"
      ],
      color: "text-secondary",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      color: "text-accent",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and secure APIs",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication Systems",
        "Cloud Deployment"
      ],
      color: "text-primary",
      gradient: "bg-gradient-tech"
    }
  ];

  const techStack = [
    "React", "Node.js", "MongoDB", "Express.js", "TypeScript", "Flutter", 
    "Kotlin", "Three.js", "Firebase", "REST APIs", "Git", "AWS"
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-4">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized in full-stack development, mobile apps, and user experience design
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group border-none shadow-card hover:shadow-tech transition-all duration-300 hover:-translate-y-2 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className={`absolute inset-0 ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-lg bg-background ${service.color} mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 pt-0 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-tech group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="text-center animate-fade-in">
          <Card className="border-none shadow-card bg-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Technologies I Work With</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background-secondary text-muted-foreground rounded-full text-sm font-medium hover:bg-gradient-tech hover:text-white transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and thoughtful design.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-tech hover:shadow-glow transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;