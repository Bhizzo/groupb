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
    },
    {
      title: "VERSA FINTECH 4.0",
      description: "Financial Analysis, Planning & Reporting Solution",
    },
    {
      title: "ANALYTICS",
      description: "Premium terms and actionable forecasts using AI-driven dashboards",
    },
    {
      title: "CONSULTING",
      description: "Strategy, Process and Operational Improvement, Technology, Integration",
    },
  ]

  return (
    <section id="what-we-do" ref={sectionRef} className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className={`relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
            <Image
              src="/images/ST3.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Content */}
          <div className={`space-y-6 order-1 lg:order-2 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              WHAT WE DO
            </h2>
            <p className="text-muted-foreground text-lg">
              We design, implement, and maintain mission-critical systems. 
              Along with our products, our consulting practice develops both the 
              applications your business relies on and the infrastructure to develop them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {services.map((service, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
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