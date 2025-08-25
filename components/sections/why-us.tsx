"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function WhyUs() {
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

  const features = [
    "A world of solutions under one umbrella. You define success. We get you there.",
    "Offices that embrace low overhead for better customer value. Clients get more, we're happy with less.",
    "Security by design with a focus on accuracy and dependability.",
    "User deployments with measurable ROI."
  ]

  return (
    <section id="why-us" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              WHY US
            </h2>
            <p className="text-muted-foreground text-lg">
              GROUP B is a cutting-edge technology consulting company that brings data-driven software and 
              infrastructure that empowers businesses to make better decisions. We bring corporations into 
              the digital age by executing digital transformations.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className={`relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
            <Image
              src="/images/ST1.jpg"
              alt="Modern office workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}