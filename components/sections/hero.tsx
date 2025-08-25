"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/ST6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-start ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            BEYOND
            <br />
            LIMITS
          </h1>
          <p className="text-lg text-start sm:text-xl text-gray-300 mb-8 max-w-2xl ">
            We build technology and digital transformation solutions to help you
            compete, adapt, and grow in the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-all px-8 py-4 text-lg font-semibold rounded-none min-w-[200px]"
              onClick={() => scrollToSection("#what-we-do")}
            >
              EXPLORE VERIDA
            </Button>
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-none min-w-[200px]"
              onClick={() => scrollToSection("#contact")}
            >
              PARTNER WITH US
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}