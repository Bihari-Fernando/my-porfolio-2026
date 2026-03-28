"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser" 

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      await emailjs.send(
        "service_djkl85r",       
        "template_abc123",      
        formData,
        "fc_owiYA4em-rDFsa" 
      )

      setSubmitted(true)
    } catch (error) {
      console.error("Failed to send message:", error)
      alert("Failed to send message. Please try again later.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">07.</span>

          <h2 className="text-3xl font-bold text-foreground">
            Get In Touch
          </h2>

          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's work together
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I'm currently seeking Software Engineering and AI/ML internship 
                opportunities. If you have an opportunity, collaboration idea, 
                or technical discussion, feel free to contact me.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:biharifernando00@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    biharifernando00@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+94722042501"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +94 72 204 2501
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Sri Lanka</p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">

            {submitted ? (

              <div className="flex flex-col items-center justify-center h-full py-12 text-center">

                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>

                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent Successfully
                </h4>

                <p className="text-muted-foreground">
                  Thank you for reaching out. I will respond as soon as possible.
                </p>

                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input id="name" name="name" placeholder="Your name" required className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-background" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <Input id="subject" name="subject" placeholder="Internship / Project discussion" required className="bg-background" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea id="message" name="message" placeholder="Write your message here..." rows={5} required className="bg-background resize-none" />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

              </form>

            )}

          </div>

        </div>
      </div>
    </section>
  )
}