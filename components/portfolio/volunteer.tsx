"use client"

import { Users, Globe, Award, Calendar } from "lucide-react"

const volunteerExperiences = [
  {
    organization: "IEEE Student Branch",
    role: "Secretary",
    period: "2025 — 2026",
    icon: Award,
    description: [
      "Coordinating meetings and maintaining records for 150+ student members",
      "Organizing technical workshops and guest lectures with industry professionals",
      "Managing communications between student branch and IEEE headquarters",
      "Documenting meeting minutes and managing branch documentation",
    ],
  },
  {
    organization: "IEEE Student Branch",
    role: "Webmaster",
    period: "2025 — 2026",
    icon: Globe,
    description: [
      "Designed and developed the official student branch website using React",
      "Managed web infrastructure and ensured 99.9% uptime",
      "Implemented member portal for event registration and resources",
      "Trained incoming committee members on website management",
    ],
  },
]

export function Volunteer() {
  return (
    <section id="volunteer" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">04.</span>
          <h2 className="text-3xl font-bold text-foreground">
            Volunteer Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-10">
          {volunteerExperiences.map((exp, index) => (
            <div
              key={`${exp.organization}-${exp.role}`}
              className="relative pl-10 border-l-2 border-border hover:border-primary/50 transition-colors"
            >
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-0 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-md">
                <exp.icon className="h-5 w-5 text-primary" />
              </div>

              {/* Experience Card */}
              <div className="bg-card border border-border rounded-lg p-6 ml-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}