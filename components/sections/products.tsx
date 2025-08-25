"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const products = [
  {
    title: "VERIDA",
    subtitle: "Machine Performant Management",
    description: "Intelligent process and workflow management, Process Management, Finance, Logistics, Project Management, HR & Sales modules that exceed normal capabilities with smart automation and data driven reports.",
    categories: ["FINANCE", "LOGISTICS", "PROJECT MANAGEMENT", "HR", "SALES"],
    action: "BOOK A DEMO",
    image: "/images/products/versa.jpg",
  },
  {
    title: "NASAX",
    subtitle: "Data Analytics Platform",
    description: "Team shared operational data for deep insights, dashboards, forecasts, and simulation modeling. Start with reports that matter and build on their patterns. Key rules.",
    categories: ["DASHBOARDS", "FORECASTING", "ANOMALY ALERTS", "BENCHMARKS"],
    action: "SEE A LIVE WALKTHROUGH",
    image: "/images/products/nasax.jpg",
  },
  {
    title: "Management & Technology Consulting",
    subtitle: "",
    description: "We partner closely to help executives integrate systems, and design culture that embrace the world seamlessly. Outcomes over buzzwords.",
    categories: [],
    action: "TALK TO AN EXPERT",
    image: "/images/products/consulting.jpg",
  },
]

export default function Products() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
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
            }, index * 100)
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
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <div className="w-16 h-1 bg-black mb-4"></div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  OUR
                  <br />
                  <span className="text-gray-600">SOLUTIONS</span>
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Comprehensive digital solutions designed to transform your business operations and drive growth in the modern economy.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black h-24 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">INNOVATION</span>
                </div>
                <div className="bg-gray-100 h-24 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">EFFICIENCY</span>
                </div>
                <div className="bg-gray-100 h-24 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">SCALABILITY</span>
                </div>
                <div className="bg-black h-24 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RESULTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-16 lg:space-y-20">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`${visibleCards[index] ? 'animate-fade-up' : 'opacity-0'}`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-900 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  {/* Floating number */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-white border-4 border-black flex items-center justify-center">
                    <span className="text-2xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                      {product.title}
                    </h3>
                    {product.subtitle && (
                      <p className="text-lg text-gray-600 font-medium">
                        {product.subtitle}
                      </p>
                    )}
                    <div className="w-12 h-1 bg-black mt-4"></div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {product.description}
                  </p>

                  {product.categories.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        KEY FEATURES
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.categories.map((category, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-black"></div>
                            <span className="text-sm font-medium text-gray-700">
                              {category}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button 
                      size="lg" 
                      className="bg-black text-white hover:bg-gray-800 rounded-none px-8 py-4 text-base font-semibold"
                    >
                      {product.action}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 lg:mt-32 bg-gradient-to-r from-gray-900 to-black p-12 lg:p-16">
          <div className="text-center text-white space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold">
              READY TO TRANSFORM YOUR BUSINESS?
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let's discuss how our solutions can drive your digital transformation and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none px-8 py-4 text-base font-semibold"
              >
                VIEW ALL SOLUTIONS
              </Button>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-4 text-base font-semibold"
              >
                SCHEDULE CONSULTATION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}