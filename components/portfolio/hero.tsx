"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

const roles = ["Software Engineer", "Full Stack Developer", "AI/ML Engineer", "Data Scientist"];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm">Hi, my name is</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Bihari Fernando
              </h1>
              <div className="h-12 sm:h-14">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </h2>
              </div>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              I build accessible, pixel-perfect digital experiences that blend
              thoughtful design with robust engineering. Passionate about AI/ML,
              Data Science, full-stack development, and data-driven solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/Bihari-Fernando"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href=" www.linkedin.com/in/bihari-fernando-567973262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="biharifernando00@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Education Card */}
              <div className="absolute -top-2 -right-20 w-46 h-24 bg-card border border-border rounded-lg p-3 shadow-lg">
                <p className="text-xs text-muted-foreground">Education</p>
                <p className="text-sm font-bold text-primary">
                  BSc (Hons) Computer Science
                </p>
                <p className="text-xs text-muted-foreground">Undergraduate</p>
              </div>

              {/* Projects & Skills Card */}
              <div className="absolute -bottom-4 -left-4 w-36 h-24 bg-card border border-border rounded-lg p-3 shadow-lg">
                <p className="text-xs text-muted-foreground">Projects</p>
                <p className="text-2xl font-bold text-primary">7+</p>
                <p className="text-xs text-muted-foreground">
                  React • Next.js • Python • Express.js
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-24">
          <Link
            href="#about"
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}
