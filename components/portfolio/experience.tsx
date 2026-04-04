"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Deviitor (Pvt) Ltd",
    role: "Trainee Software Developer",
    period: "Nov 2024 — Jan 2025",
    location: "Sri Lanka",
    url: "#",
    description: [
      "Fixed production-level bugs in Electron desktop applications improving stability and usability",
      "Developed backend features and REST APIs using Laravel",
      "Worked with logging systems and debugging tools to identify system issues",
      "Collaborated with senior developers in an Agile environment",
      "Improved understanding of real-world software engineering practices"
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Electron",
      "JavaScript",
      "MySQL",
      "Git"
    ],
  },
  {
    company: "IEEE Computer Society",
    role: "Secretary & Webmaster",
    period: "2025 — 2026",
    location: "University Leadership",
    url: "#",
    description: [
      "Organizing technical events and career preparation sessions for students",
      "Coordinating teams and managing technical activities",
      "Managing web platforms and technical content",
      "Supporting student professional development initiatives",
      "Developing leadership, communication, and project coordination skills"
    ],
    technologies: [
      "Leadership",
      "Project Coordination",
      "Technical Communication",
      "Event Management"
    ],
  }
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">03.</span>

          <h2 className="text-3xl font-bold text-foreground">
            Work Experience
          </h2>

          <div className="flex-1 h-px bg-border" />
        </div>


        <div className="flex flex-col md:flex-row gap-8">

          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">

            {experiences.map((exp, index) => (

              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}

                className={cn(
                  "px-4 py-3 text-left text-sm font-mono whitespace-nowrap transition-all",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",

                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {exp.company}

              </button>

            ))}

          </div>


          {/* Content */}
          <div className="flex-1 min-h-[350px]">

            {experiences.map((exp, index) => (

              <div
                key={exp.company}

                className={cn(
                  "space-y-4",
                  activeTab === index ? "block" : "hidden"
                )}
              >

                <div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}{" "}

                    <span className="text-primary">
                      @ {exp.company}
                    </span>

                  </h3>

                  <p className="text-muted-foreground font-mono text-sm">
                    {exp.period} | {exp.location}
                  </p>

                </div>


                <ul className="space-y-3">

                  {exp.description.map((item, i) => (

                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground"
                    >

                      <span className="text-primary mt-1.5">
                        ▹
                      </span>

                      <span>
                        {item}
                      </span>

                    </li>

                  ))}

                </ul>


                <div className="flex flex-wrap gap-2 pt-4">

                  {exp.technologies.map((tech) => (

                    <span
                      key={tech}

                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >

                      {tech}

                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}