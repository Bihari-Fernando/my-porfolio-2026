'use client'
import { useState, useEffect } from "react";
import { Award, ExternalLink, Calendar, X } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "2024",
    credentialUrl: "https://www.skills.google/public_profiles/81464639-3ad2-464a-917e-7b7a7c7d76bc/badges/8490309",
    logoUrl: "/certificates/llm.png",
  },
  {
    title: "AI/ML Engineer – Stage 1 & 2",
    issuer: "SLIIT University",
    date: "2025",
    credentialUrl: "#",
    logoUrl: "/certificates/AIML1.png",
  },
  {
    title: "Mastering Deep Learning Workshop",
    issuer: "IEEE Computer Society – University of Jaffna",
    date: "2024",
    credentialUrl: "#",
    logoUrl: "/certificates/deepL.jpg",
  },
  {
    title: "TECHXCELERATE: Test Automation Workshop",
    issuer: "IEEE Student Branch – University of Jaffna",
    date: "2026",
    credentialUrl: "#",
    logoUrl: "/certificates/tech.jpg",
  },
  {
    title: "Introduction to GitOps (LFS169)",
    issuer: "The Linux Foundation",
    date: "2026",
    credentialId: "LF-hh1rhl1jfu",
    credentialUrl: "#",
    logoUrl: "/certificates/linux.png",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2026",
    credentialId: "WfplPkpMkF",
    credentialUrl: "#",
    logoUrl: "/certificates/python.png",
  },
];

const awards = [
  {
    title: "Top 5 Team – FuelAsia International Innovation Competition",
    description:
      "Selected among the top 5 teams for developing an innovative technology solution in an international innovation competition.",
    year: "2024",
  },
  {
    title: "Finalist – HackLike a Girl (SLASSCOM)",
    description:
      "Recognized as a finalist team in a national level innovation competition focused on technology solutions.",
    year: "2024",
  },
  {
    title: "Secretary – IEEE Computer Society",
    description:
      "Leading technical initiatives, coordinating events, and supporting student professional development activities.",
    year: "2025",
  },
  {
    title: "Webmaster – IEEE Computer Society",
    description:
      "Managed technical platforms, websites, and digital content for IEEE Computer Society activities.",
    year: "2025",
  },
];

export function Achievements() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">06.</span>
          <h2 className="text-3xl font-bold text-foreground">
            Achievements & Certifications
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h3>

            <div className="grid gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  {/* Certificate Image */}
                  <div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer overflow-hidden"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCert(cert.logoUrl);
                    }}
                  >
                    <img
                      src={cert.logoUrl}
                      alt={`${cert.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-foreground font-medium truncate group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Leadership & Achievements
            </h3>

            <div className="space-y-6">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-foreground font-medium">{award.title}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>{award.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal with X button */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white hover:text-red-400 transition-colors"
            onClick={() => setSelectedCert(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Certificate */}
          <img
            src={selectedCert}
            alt="Certificate Fullscreen"
            className="max-h-full max-w-full object-contain rounded-lg shadow-xl transform transition-transform duration-200 scale-100"
          />
        </div>
      )}
    </section>
  );
}