import { Code2, Brain, Database, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building secure and scalable web applications using React, Next.js, Laravel, and Express",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems and researching lightweight AI models for real-world applications",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    description: "Designing REST APIs, authentication systems, and database-driven applications",
  },
  {
    icon: Globe,
    title: "Software Engineering",
    description: "Debugging production systems, improving performance, and applying clean engineering practices",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">01.</span>
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Computer Science undergraduate with hands-on experience in 
              full-stack web development and software engineering. I have worked 
              with technologies such as React, Next.js, Laravel, Python, and MongoDB 
              to build scalable and secure applications.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I completed a trainee developer internship where I fixed production 
              bugs in Electron desktop applications and developed backend features 
              and REST APIs. This experience strengthened my debugging, problem 
              solving, and real-world software development skills.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am highly interested in Artificial Intelligence and Machine Learning 
              and currently working on research related to lightweight deepfake 
              detection for mobile and low-resource devices. I also actively 
              contribute to the tech community through IEEE leadership and 
              technical initiatives.
            </p>

            <div className="pt-4">
              <h3 className="text-foreground font-semibold mb-4">
                Technologies I work with:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-sm">
                {[
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Laravel",
                  "Express.js",
                  "MongoDB",
                  "MySQL",
                  "TensorFlow",
                  "PyTorch",
                  "Git",
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />

                <h3 className="text-foreground font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}