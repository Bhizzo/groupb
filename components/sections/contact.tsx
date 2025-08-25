"use client"

import { useState } from "react"
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="w-16 h-1 bg-black mb-4"></div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  LET'S BUILD
                  <br />
                  <span className="text-gray-600">TOGETHER</span>
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Tell us about your organization. Let's help design your solution and transform your digital presence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-none flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-lg">Email Us</p>
                  <a href="mailto:hello@gznab.tech" className="text-gray-600 hover:text-black transition-colors text-lg">
                    hello@gznab.tech
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-none flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-lg">Location</p>
                  <p className="text-gray-600 text-lg">Global Digital Solutions</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-none flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-lg">Response Time</p>
                  <p className="text-gray-600 text-lg">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white p-8 lg:p-12 ">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">GET STARTED</h3>
              <div className="w-12 h-1 bg-black"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-semibold uppercase tracking-wide">Full name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-none border-0 border-b-2 border-gray-200 focus:border-black bg-transparent px-0 py-3 text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workEmail" className="text-sm font-semibold uppercase tracking-wide">Work email *</Label>
                  <Input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full rounded-none border-0 border-b-2 border-gray-200 focus:border-black bg-transparent px-0 py-3 text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="text-sm font-semibold uppercase tracking-wide">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full rounded-none border-0 border-b-2 border-gray-200 focus:border-black bg-transparent px-0 py-3 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold uppercase tracking-wide">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-none border-0 border-b-2 border-gray-200 focus:border-black bg-transparent px-0 py-3 text-lg"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-none bg-black text-white hover:bg-gray-800 py-4 text-lg font-semibold mt-8">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-20 lg:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white ">
              <div className="w-16 h-16 bg-black rounded-none mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">FAST DELIVERY</h4>
              <p className="text-gray-600">Rapid development and deployment cycles</p>
            </div>

            <div className="text-center p-8 bg-white ">
              <div className="w-16 h-16 bg-black rounded-none mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">PROVEN RESULTS</h4>
              <p className="text-gray-600">Track record of successful implementations</p>
            </div>

            <div className="text-center p-8 bg-white ">
              <div className="w-16 h-16 bg-black rounded-none mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">EXPERT TEAM</h4>
              <p className="text-gray-600">Dedicated professionals at your service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}