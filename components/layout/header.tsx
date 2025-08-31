"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Zap, Target, Package, MessageCircle } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

const navItems = [
  { 
    label: "WHY US", 
    href: "#why-us",
    icon: <Zap className="w-4 h-4" />
  },
  { 
    label: "WHAT WE DO", 
    href: "#what-we-do",
    icon: <Target className="w-4 h-4" />
  },
  { 
    label: "OUR PRODUCTS", 
    href: "#products",
    icon: <Package className="w-4 h-4" />
  },
  { 
    label: "CONTACT", 
    href: "#contact",
    icon: <MessageCircle className="w-4 h-4" />
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(`#${currentSection}`)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Determine which logo to show based on theme
  const getLogoSrc = () => {
    if (!mounted) return "/images/logo.png" // Default logo during SSR
    
    // Use resolvedTheme which gives the actual theme (light/dark) even when theme is "system"
    const currentTheme = resolvedTheme || theme
    
    if (currentTheme === "dark") {
      return "/images/logowhite.png"
    } else {
      return "/images/logo.png"
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-background/80 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Image
                src={getLogoSrc()}
                alt="Logo"
                width={80}
                height={80}
                className="transition-all duration-300"
                key={mounted ? resolvedTheme : 'loading'} // Force re-render when theme changes
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                  activeSection === item.href 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground"
                }`}
              >
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {item.icon}
                </div>
                <span className="transition-all duration-300 group-hover:translate-x-0.5">
                  {item.label}
                </span>
                
                {/* Active indicator */}
                {activeSection === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
            
            {/* Desktop Theme Toggle */}
            <div className="ml-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="relative hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                  <DropdownMenuItem 
                    onClick={() => setTheme("light")}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setTheme("system")}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-r from-yellow-400 to-blue-600"></div>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem 
                  onClick={() => setTheme("light")}
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                >
                  <Sun className="w-4 h-4 mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                >
                  <Moon className="w-4 h-4 mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setTheme("system")}
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                >
                  <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-r from-yellow-400 to-blue-600"></div>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Menu className={`h-6 w-6 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`absolute h-6 w-6 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-2 mt-8">
                  {navItems.map((item, index) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="group flex items-center space-x-3 p-4 rounded-lg text-left hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:translate-x-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {item.icon}
                      </div>
                      <span className="text-lg font-medium">
                        {item.label}
                      </span>
                    </button>
                  ))}
                  
                  {/* Mobile footer in sheet */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      GROUP B Technologies
                    </p>
                    <p className="text-xs text-muted-foreground text-center mt-1">
                      Digital Transformation Solutions
                    </p>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}