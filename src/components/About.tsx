import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Users, Heart, Code, Lightbulb, Target, Clock } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Qemer Technologies",
      type: "Professional",
      icon: Code,
      color: "text-primary"
    },
    {
      title: "Volunteer Mentor",
      company: "Technovation Girls (2024/2025)",
      type: "Volunteer",
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Event Organizer",
      company: "Google Developer Team - AAU Campus",
      type: "Leadership",
      icon: Lightbulb,
      color: "text-accent"
    },
    {
      title: "Community Volunteer",
      company: "AAU Student Service and Charity Club",
      type: "Service",
      icon: Heart,
      color: "text-destructive"
    }
  ];

  const skills = [
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: Users },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Adaptability", icon: Target },
    { name: "Time Management", icon: Clock },
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about the intersection of technology, creativity, and human psychology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-none shadow-card bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Software Engineering</h4>
                    <p className="text-muted-foreground">Addis Ababa University</p>
                    <p className="text-muted-foreground">School of Information and Technology</p>
                    <p className="text-sm text-secondary font-medium">3rd Year • Expected Graduation: 2027</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-card bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate third-year Software Engineering student who believes in the power of technology 
                    to transform lives. My journey combines technical expertise with a deep understanding of human 
                    psychology and creative problem-solving.
                  </p>
                  <p>
                    Currently pursuing my degree at Addis Ababa University, I'm constantly exploring the intersection 
                    of technology, creativity, and psychology. Whether I'm building applications, mentoring young 
                    developers, or organizing tech events, I approach every challenge with curiosity and determination.
                  </p>
                  <p>
                    My goal is to create meaningful technology that not only solves problems but also enhances 
                    human experiences and builds stronger communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience & Skills */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="border-none shadow-card bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Experience</h3>
                </div>
                <div className="space-y-6">
                  {experiences.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                      <div 
                        key={index} 
                        className="flex items-start space-x-4 p-4 rounded-lg bg-background-secondary/50 hover:bg-background-secondary transition-colors duration-300"
                      >
                        <div className={`p-2 rounded-lg bg-background ${exp.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-muted-foreground">{exp.company}</p>
                          <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-card bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Core Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-background-secondary/50 hover:bg-gradient-tech hover:text-white transition-all duration-300 group"
                      >
                        <Icon className="h-5 w-5 text-primary group-hover:text-white" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;