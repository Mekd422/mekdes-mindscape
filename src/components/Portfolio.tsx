import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Clock, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "GrindMate",
      description: "A developer community platform to visually track coding grind and consistency on LeetCode and GitHub, motivating users to achieve big tech goals.",
      status: "In Progress",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript"],
      category: "Full Stack",
      color: "bg-gradient-tech",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Interview Prep AI",
      description: "Tailored coding interview preparation tool for tech students with AI-powered practice sessions and personalized feedback.",
      status: "In Progress",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "OpenAI API"],
      category: "AI/ML",
      color: "bg-gradient-secondary",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Amazon Clone",
      description: "A comprehensive e-commerce application simulating real-world online shopping experience with full payment integration.",
      status: "Completed",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
      category: "E-commerce",
      color: "bg-gradient-tech",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "NeuroParent",
      description: "Mobile app connecting parents of neurodivergent children with experts, featuring event management and community building.",
      status: "Completed",
      techStack: ["Kotlin", "Flutter", "Firebase", "REST API"],
      category: "Mobile",
      color: "bg-gradient-secondary",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Virtual Aquarium",
      description: "3D interactive website showcasing underwater environments with realistic fish behavior and physics simulation.",
      status: "Completed",
      techStack: ["Three.js", "WebGL", "JavaScript", "CSS3"],
      category: "3D/WebGL",
      color: "bg-gradient-tech",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Real-time Chat App",
      description: "Modern chat application with real-time messaging, user authentication, and responsive design.",
      status: "Completed",
      techStack: ["Socket.io", "React", "Node.js", "MongoDB"],
      category: "Real-time",
      color: "bg-gradient-secondary",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const categories = ["All", "Full Stack", "AI/ML", "Mobile", "3D/WebGL", "E-commerce", "Real-time"];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects, from full-stack applications to innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="hover:bg-gradient-tech hover:text-white hover:border-transparent transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-card hover:shadow-tech transition-all duration-300 hover:-translate-y-2 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className={`absolute inset-0 ${project.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant="secondary" 
                      className={`${project.status === 'Completed' ? 'bg-green-500/20 text-green-100' : 'bg-yellow-500/20 text-yellow-100'} border-none`}
                    >
                      <div className="flex items-center space-x-1">
                        {project.status === 'Completed' ? 
                          <CheckCircle className="h-3 w-3" /> : 
                          <Clock className="h-3 w-3" />
                        }
                        <span>{project.status}</span>
                      </div>
                    </Badge>
                    <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-white/90 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-background-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-tech hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-tech hover:shadow-glow transition-all duration-300"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;