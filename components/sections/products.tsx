"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const products = [
  {
    title: "VERIDA",
    subtitle: "Machine Performant Management",
    description: "Intelligent process and workflow management, Process Management, Finance, Logistics, Project Management, HR & Sales modules that exceed normal capabilities with smart automation and data driven reports.",
    categories: ["FINANCE", "LOGISTICS", "PROJECT MANAGEMENT", "HR", "SALES"],
    action: "BOOK A DEMO",
    image: "/images/products/versa.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: "NASAX",
    subtitle: "Data Analytics Platform",
    description: "Team shared operational data for deep insights, dashboards, forecasts, and simulation modeling. Start with reports that matter and build on their patterns. Key rules.",
    categories: ["DASHBOARDS", "FORECASTING", "ANOMALY ALERTS", "BENCHMARKS"],
    action: "SEE A LIVE WALKTHROUGH",
    image: "/images/products/nasax.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "CONSULTING",
    subtitle: "Management & Technology Solutions",
    description: "We partner closely to help executives integrate systems, and design culture that embrace the world seamlessly. Outcomes over buzzwords.",
    categories: ["STRATEGY", "INTEGRATION", "PROCESS IMPROVEMENT", "TECHNOLOGY"],
    action: "TALK TO AN EXPERT",
    image: "/images/products/consulting.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
]

export default function Products() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const [headerVisible, setHeaderVisible] = useState(false)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Header observer
    if (headerRef.current) {
      const headerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true)
          }
        },
        { threshold: 0.1 }
      )
      headerObserver.observe(headerRef.current)
    }

    // Cards observers
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 200)
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`mb-16 lg:mb-20 text-center transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              OUR
              <br />
              <span className="text-muted-foreground">SOLUTIONS</span>
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business operations and drive growth in the modern economy.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16 lg:space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`group transition-all duration-1000 ease-out ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Image Section */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl bg-muted group-hover:shadow-2xl transition-all duration-700">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-all duration-500" />
                    
                    {/* Floating Elements */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Product Number with Icon */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-card border-4 border-primary rounded-xl flex flex-col items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <div className="text-primary mb-1">
                      {product.icon}
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium mb-4 group-hover:text-foreground transition-colors duration-300">
                      {product.subtitle}
                    </p>
                    <div className="w-12 h-1 bg-primary group-hover:w-16 transition-all duration-300"></div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {product.description}
                  </p>

                  {/* Categories */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300">
                      KEY FEATURES
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.categories.map((category, idx) => (
                        <div key={idx} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <div className="w-2 h-2 bg-primary group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button 
                      size="lg" 
                      className="transition-all duration-300 px-8 py-4 text-base font-semibold hover:scale-105 hover:shadow-lg group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <span className="flex items-center gap-2">
                        {product.action}
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  )
}