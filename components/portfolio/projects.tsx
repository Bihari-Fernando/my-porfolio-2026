"use client";

import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define a Project type
type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  video?: string;
};

// Featured projects
const featuredProjects: Project[] = [
  {
    title: "Focused-AI: Student Wellness Assistant",
    description:
      "AI-powered chat system for personalized wellness guidance, mood tracking, and dashboards. Built secure REST APIs and a responsive gamified frontend for student engagement.",
    video: "/projects/focused-ai-demo.mp4",
    technologies: ["Next.js", "Express", "MongoDB", "Tailwind CSS", "Google Gemini LLM", "JWT"],
    github: "https://github.com/Bihari-Fernando/focused-ai",
  },
  {
    title: "Varppu: Life Skill Development System",
    description:
      "Full-stack system with admin, coordinator, facilitator, and user roles. Implemented secure Flask backend with JWT authentication and responsive React frontend.",
    image: "/projects/analytics-dashboard.jpg",
    technologies: ["Python (Flask)", "React", "MongoDB", "JWT", "PyTest"],
    github: "https://github.com/malshi-kavindya/counseling-project---NexusNova",
  },
  {
    title: "Shopique: E-Commerce Web Application",
    description:
      "Full-stack e-commerce platform with authentication, product filtering, cart management, and MySQL integration with a clean responsive UI.",
    video: "/projects/shopique.mp4",
    technologies: ["Laravel", "React", "TailwindCSS", "shadcn/ui", "MySQL", "JWT"],
    github: "https://github.com/Bihari-Fernando/Shopique_Online_Clothing_Store",
  },
];

// Other projects
const otherProjects: Project[] = [
  {
    title: "Remote CleanUpBot",
    description:
      "Automation system to remotely clean logs, cache and temporary files on Linux machines using secure SSH execution.",
    technologies: ["Python", "Flask", "React", "TypeScript", "Paramiko"],
    github: "https://github.com/th4ru/CleanUpBot",
  },
  {
    title: "Certificate Issuing System",
    description:
      "Automated certificate issuing platform with secure storage and efficient record management.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    github: "https://github.com/Bihari-Fernando/Certificate-Managment-System",
  },
  {
    title: "Taskly Mobile App",
    description:
      "Mobile task manager supporting subtasks, reminders, repeat tasks and scheduling.",
    technologies: ["React Native", "JavaScript"],
    github: "https://github.com/Bihari-Fernando/Taskly_App",
  },
  {
    title: "Lightweight Deepfake Detection",
    description:
      "Research project building a lightweight CNN model for detecting deepfake images optimized for low resource devices.",
    technologies: ["Python", "CNN", "Computer Vision", "PyTorch"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">05.</span>
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-24">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Project Media */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <div className="aspect-video bg-secondary rounded-xl overflow-hidden shadow-lg">
                    {project.video ? (
                      <video
                        src={project.video}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onMouseEnter={(e) => {
                          e.currentTarget.currentTime = 0;
                          e.currentTarget.play();
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>

                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>

                {/* Description */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-md mb-5">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-md text-sm font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground">Other Noteworthy Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:-translate-y-2 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}