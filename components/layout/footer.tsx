"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { 
  DollarSign, 
  Users, 
  Settings, 
  TrendingUp, 
  Mail, 
  Shield, 
  FileText,
  ArrowUp,
  Linkedin,
  Twitter,
  Github
} from "lucide-react"
import { useTheme } from "next-themes"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const footer = document.getElementById('footer')
    if (footer) {
      observer.observe(footer)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Get appropriate logo for theme
  const getLogoSrc = () => {
    if (!mounted) return "/images/logo.png"
    const currentTheme = resolvedTheme
    return currentTheme === "dark" ? "/images/logowhite.png" : "/images/logo.png"
  }

  const footerSections = [
    {
      title: "Services",
      icon: <DollarSign className="w-5 h-5" />,
      links: [
        { name: "Finance", href: "#", icon: <DollarSign className="w-4 h-4" /> },
        { name: "Consulting", href: "#", icon: <Users className="w-4 h-4" /> },
        { name: "Technology", href: "#", icon: <Settings className="w-4 h-4" /> },
      ],
      mobileLinks: [
        { name: "Finance", href: "#", icon: <DollarSign className="w-4 h-4" /> },
        { name: "Consulting", href: "#", icon: <Users className="w-4 h-4" /> },
      ]
    },
    {
      title: "Solutions",
      icon: <TrendingUp className="w-5 h-5" />,
      links: [
        { name: "Analytics Platform", href: "#", icon: <TrendingUp className="w-4 h-4" /> },
        { name: "AI Solutions", href: "#", icon: <Settings className="w-4 h-4" /> },
        { name: "Data Intelligence", href: "#", icon: <TrendingUp className="w-4 h-4" /> },
      ],
      mobileLinks: [
        { name: "Analytics", href: "#", icon: <TrendingUp className="w-4 h-4" /> },
        { name: "AI Solutions", href: "#", icon: <Settings className="w-4 h-4" /> },
      ]
    },
    {
      title: "Support",
      icon: <Mail className="w-5 h-5" />,
      links: [
        { name: "Privacy Statement", href: "#", icon: <Shield className="w-4 h-4" /> },
        { name: "Terms of Use", href: "#", icon: <FileText className="w-4 h-4" /> },
        { name: "Contact Us", href: "#", icon: <Mail className="w-4 h-4" /> },
      ],
      mobileLinks: [
        { name: "Contact", href: "#", icon: <Mail className="w-4 h-4" /> },
        { name: "Privacy", href: "#", icon: <Shield className="w-4 h-4" /> },
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
    { name: "GitHub", href: "#", icon: <Github className="w-5 h-5" /> },
  ]

  return (
    <footer id="footer" className="bg-muted/30 border-t py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Mobile: Stack all content vertically, Desktop: 4-column grid */}
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8 xl:gap-12">
          
          {/* Company Info - Simplified on mobile */}
          <div className={`flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 lg:space-y-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="group">
              <div className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                <Image
                  src={getLogoSrc()}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="transition-all duration-300"
                  key={mounted ? resolvedTheme : 'loading'}
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                © 2025 GROUP B Technologies
              </p>
              <p className="text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                All Rights Reserved
              </p>
            </div>
            
            {/* Hide location on mobile */}
            <div className="hidden lg:block space-y-1 pt-2 border-t border-border/50 w-full max-w-xs">
              <p className="text-sm text-muted-foreground font-mono hover:text-primary transition-colors duration-300">
                Blantyre
              </p>
              <p className="text-sm text-muted-foreground font-mono hover:text-primary transition-colors duration-300">
                Malawi
              </p>
            </div>

            {/* Social Links - Only show 2 most important on mobile */}
            <div className="flex justify-center space-x-3 pt-2">
              {socialLinks.slice(0, 2).map((social, index) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group w-9 h-9 lg:w-10 lg:h-10 bg-primary/10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
              {/* Show all social links on desktop */}
              <div className="hidden lg:flex space-x-3">
                {socialLinks.slice(2).map((social, index) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="group w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections - Show only essential links on mobile */}
          <div className="col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {footerSections.map((section, sectionIndex) => (
              <div 
                key={section.title}
                className={`space-y-3 lg:space-y-6 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(sectionIndex + 1) * 200}ms` }}
              >
                {/* Section Header - Smaller on mobile */}
                <div className="flex items-center justify-start space-x-2 group">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12">
                    {section.icon}
                  </div>
                  <h3 className="font-semibold text-xs lg:text-lg group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>
                
                {/* Links - Show different sets for mobile vs desktop */}
                <ul className="space-y-1.5 lg:space-y-3">
                  {/* Mobile links (fewer, shorter) */}
                  <div className="block lg:hidden">
                    {section.mobileLinks.map((link, linkIndex) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="group flex items-center space-x-2 text-xs text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 py-1 rounded-md hover:bg-primary/5"
                          style={{ transitionDelay: `${linkIndex * 50}ms` }}
                        >
                          <div className="w-4 h-4 bg-transparent rounded-md flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                            {link.icon}
                          </div>
                          <span className="group-hover:font-medium leading-tight">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </div>
                  
                  {/* Desktop links (full list) */}
                  <div className="hidden lg:block">
                    {section.links.map((link, linkIndex) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="group flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 py-1 rounded-md hover:bg-primary/5"
                          style={{ transitionDelay: `${linkIndex * 50}ms` }}
                        >
                          <div className="w-6 h-6 bg-transparent rounded-md flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                            {link.icon}
                          </div>
                          <span className="group-hover:font-medium leading-tight">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Simplified on mobile */}
        <div className={`mt-6 lg:mt-12 pt-4 lg:pt-8 border-t border-border/50 transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center space-y-3 lg:flex-row lg:justify-between lg:space-y-0">
            {/* Tagline - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-sm text-muted-foreground">
                Transforming businesses through intelligent technology solutions
              </p>
            </div>
            
            {/* Mobile tagline - Shorter */}
            <div className="flex lg:hidden items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
              <p className="text-xs text-muted-foreground text-center">
                Digital Transformation Solutions
              </p>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 lg:px-6 lg:py-2.5 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-105 text-xs lg:text-sm font-medium"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements - Adjusted for mobile */}
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
      <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-1 h-1 bg-primary/50 rounded-full animate-pulse"></div>
    </footer>
  )
}