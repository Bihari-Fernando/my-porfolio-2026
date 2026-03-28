"use client"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C/C++",
      "SQL",
      "Perl",
      "Prolog"
    ],
  },

  {
    title: "Web Development",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Laravel",
      "HTML",
      "CSS",
      "Tailwind",
      "REST APIs",
      "JWT Authentication",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },

  {
    title: "AI / Machine Learning",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Computer Vision",
      "Natural Language Processing",
      "LLM Integration",
    ],
  },

  {
    title: "Computer Science Fundamentals",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "MVC Architecture",
      "Software Design Principles",
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Bash",
      "Postman",
      "VS Code",
      "Cursor",
      "EcoAPI",
      ""
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">

          <span className="text-primary font-mono">
            02.
          </span>

          <h2 className="text-3xl font-bold text-foreground">
            Skills & Expertise
          </h2>

          <div className="flex-1 h-px bg-border"/>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-muted-foreground text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}