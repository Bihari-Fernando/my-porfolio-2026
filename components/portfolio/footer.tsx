import { Github, Linkedin, Mail, Globe, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Bihari-Fernando",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bihari-fernando-567973262",
    icon: Linkedin,
  },
  {
    name: "Portfolio",
    href: "https://itsbihari.vercel.app",
    icon: Globe,
  },
  {
    name: "Blog",
    href: "https://wiredwhizz.blogspot.com",
    icon: Globe,
  },
  {
    name: "Email",
    href: "mailto:biharifernando00@gmail.com",
    icon: Mail,
  },
]

export function Footer() {

  const currentYear = new Date().getFullYear()

  return (

    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col items-center gap-6">

          {/* Social Links */}
          <div className="flex items-center gap-6">

            {socialLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"

                className="text-muted-foreground hover:text-primary transition-colors"

                aria-label={link.name}
              >

                <link.icon className="h-5 w-5" />

              </a>

            ))}

          </div>


          {/* Built By */}
          <div className="text-center">

            <p className="text-muted-foreground text-sm">

              Designed & Built {" "}by{" "}
 
              <span className="text-foreground font-medium">
                Bihari Fernando
              </span>

            </p>

          </div>


          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-muted-foreground">

            <span>Next.js</span>
            <span>•</span>

            <span>React</span>
            <span>•</span>

            <span>Tailwind CSS</span>
            <span>•</span>

            <span>TypeScript</span>
            <span>•</span>

            <span>shadcn/ui</span>
            <span>•</span>

          

          </div>


          {/* Copyright */}
          <p className="text-muted-foreground text-xs">

            © {currentYear} Bihari Fernando. All rights reserved.

          </p>

        </div>

      </div>

    </footer>

  )

}