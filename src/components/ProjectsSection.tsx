import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "A modern chat application with one-to-one and group messaging capabilities, featuring real-time updates, online/offline presence indicators, and message history.",
      tech: ["React", "Firebase", "WebSocket", "Tailwind CSS"],
      period: "Jan 2025 - Present",
      status: "Completed",
      features: [
        "Real-time messaging",
        "Group chats",
        "Online presence",
        "Message history",
        "File sharing"
      ],
      github: "https://github.com/SaurabhSingh1126",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built with modern web technologies, featuring dark mode, smooth animations, and optimized performance.",
      tech: ["React.js", "Tailwind CSS", "TypeScript", "GitHub Pages"],
      period: "Aug 2025",
      status: "Completed",
      features: [
        "Responsive design",
        "Dark theme",
        "Smooth animations",
        "SEO optimized",
        "Fast loading"
      ],
      github: "https://github.com/SaurabhSingh1126",
      demo: "#"
    },
    {
      title: "Blood Bank Management System",
      description:
        "A full-stack web application designed to manage donor records, blood inventory, and hospital requests efficiently with secure authentication and real-time database updates.",
      tech: ["React", "Node.js", "Express.js", "MySQL", "REST API"],
      period: "Oct 2025 - Present",
      status: "In Development",
      features: [
        "Donor registration and management",
        "Real-time blood stock tracking",
        "Admin dashboard with analytics",
        "Search and filter by blood group",
        "Secure authentication system",
        "Hospital blood request management"
      ],
      github: "https://github.com/SaurabhSingh1126",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects & <span className="text-accent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions and gaining hands-on experience with modern technologies
          </p>
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-card hover:shadow-glow transition-smooth"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left Side */}
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{project.period}</span>
                      <Badge
                        variant={
                          project.status === "In Development"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          project.status === "In Development"
                            ? "bg-accent text-accent-foreground"
                            : ""
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Right Side Buttons */}
                  <div className="flex gap-3">
                    {/* GitHub Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-accent hover:text-accent-foreground transition-smooth"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>

                    {/* Live Demo Button */}
                    <Button
                      size="sm"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 transition-smooth"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-accent/30 text-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;