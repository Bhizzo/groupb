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
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      text: "A world of solutions under one umbrella. You define success. We get you there."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      text: "Offices that embrace low overhead for better customer value. Clients get more, we're happy with less."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "Security by design with a focus on accuracy and dependability."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      text: "User deployments with measurable ROI."
    }
  ]

  return (
    <section id="why-us" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div>
              <div className="flex items-center gap-4 mb-4">
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  WHY
                  <br />
                  <span className="text-muted-foreground">US</span>
                </h2>
              </div>
              <div className="w-16 h-1 bg-primary mb-6 animate-pulse"></div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              GROUP B is a cutting-edge technology consulting company that brings data-driven software and 
              infrastructure that empowers businesses to make better decisions. We bring corporations into 
              the digital age by executing digital transformations.
            </p>
            
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`group flex items-start gap-4 transition-all duration-700 ease-out hover:translate-x-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 mt-0.5 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
          }`}>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-20" />
              <Image
                src="/images/ST1.jpg"
                alt="Modern office workspace"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-primary rounded-full animate-ping z-20"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}