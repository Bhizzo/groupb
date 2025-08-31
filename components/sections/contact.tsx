"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      info: "groupbtechnologies@outlook.com",
      link: "groupbtechnologies@outlook.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      info: "Malawi"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Response Time",
      info: "Within 24 hours"
    }
  ]

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "FAST DELIVERY",
      description: "Rapid development and deployment cycles"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "PROVEN RESULTS",
      description: "Track record of successful implementations"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "EXPERT TEAM",
      description: "Dedicated professionals at your service"
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-backgroud">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div>
              <div className="flex items-center gap-4 mb-4">
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  LET'S BUILD
                  <br />
                  <span className="text-muted-foreground">TOGETHER</span>
                </h2>
              </div>
              <div className="w-16 h-1 bg-primary mb-6 animate-pulse"></div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Tell us about your organization. Let's help design your solution and transform your digital presence.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className={`group flex items-center space-x-4 transition-all duration-700 ease-out hover:translate-x-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-muted-foreground hover:text-primary transition-colors text-lg group-hover:text-foreground"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className={`bg-card rounded-2xl p-8 lg:p-12 shadow-xl border transition-all duration-1000 ease-out delay-200 hover:shadow-2xl ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
          }`}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">GET STARTED</h3>
              </div>
              <div className="w-12 h-1 bg-primary animate-pulse"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <Label htmlFor="fullName" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground group-focus-within:text-primary transition-colors">
                    Full name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-0 border-b-2 border-border focus:border-primary bg-transparent px-0 py-3 text-lg transition-all duration-300 rounded-none hover:border-primary/50"
                  />
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="workEmail" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground group-focus-within:text-primary transition-colors">
                    Work email *
                  </Label>
                  <Input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full border-0 border-b-2 border-border focus:border-primary bg-transparent px-0 py-3 text-lg transition-all duration-300 rounded-none hover:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="organization" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground group-focus-within:text-primary transition-colors">
                  Organization
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full border-0 border-b-2 border-border focus:border-primary bg-transparent px-0 py-3 text-lg transition-all duration-300 rounded-none hover:border-primary/50"
                />
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="message" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground group-focus-within:text-primary transition-colors">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border-0 border-b-2 border-border focus:border-primary bg-transparent px-0 py-3 text-lg transition-all duration-300 rounded-none hover:border-primary/50"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full transition-all duration-300 py-4 text-lg font-semibold mt-8 hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  SEND MESSAGE
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Features - Enhanced */}
        
      </div>
    </section>
  )
}