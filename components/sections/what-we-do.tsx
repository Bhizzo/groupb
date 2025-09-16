"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function WhatWeDo() {
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

  const services = [
    {
      title: "SOFTWARE",
      description: "Custom software for Financial, Sales, and Logistics Organizations",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "VERIDA",
      description: "Financial Analysis, Planning & Reporting Solution",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "ANALYTICS",
      description: "Premium terms and actionable forecasts using AI-driven dashboards",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "CONSULTING",
      description: "Strategy, Process and Operational Improvement, Technology, Integration",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
  ]

  return (
    <section id="what-we-do" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Image */}
          <div className={`relative transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-95'
          }`}>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-10" />
              <Image
                src="/images/ST3.jpg"
                alt="Team collaboration"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Floating Elements */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-primary rounded-full animate-ping z-20"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse z-20"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div>
              <div className="flex items-center gap-4 mb-4">
               
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  WHAT WE
                  <br />
                  <span className="text-muted-foreground">DO</span>
                </h2>
              </div>
              <div className="w-16 h-1 bg-primary mb-6 animate-pulse"></div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              We design, implement, and maintain mission-critical systems. 
              Along with our products, our consulting practice develops both the 
              applications your business relies on and the infrastructure to develop them.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`group p-4 border-l-2 border-border hover:border-primary transition-all duration-300 hover:translate-x-2 hover:bg-muted/30 rounded-r-lg ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 ml-11">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}