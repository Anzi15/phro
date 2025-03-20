"use client"

import { useEffect, useState } from "react"
import { Heart, Share2, Twitter, Facebook, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  const [showImpact, setShowImpact] = useState(false)
  const [showShare, setShowShare] = useState(false)

  useEffect(() => {
    // Stagger the animations
    const impactTimer = setTimeout(() => setShowImpact(true), 1000)
    const shareTimer = setTimeout(() => setShowShare(true), 2000)

    return () => {
      clearTimeout(impactTimer)
      clearTimeout(shareTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4 md:p-8">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-rose-400 opacity-70 animate-float-${(i % 5) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1.5 + 0.5}rem`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
            size={24 + Math.floor(Math.random() * 16)}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-down">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md">
            <Heart className="h-12 w-12 text-rose-500" />
          </div>
        </div>

        {/* Thank you message */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Thank You!</h1>
          <div className="animate-pulse-slow">
            <Heart className="inline-block h-8 w-8 text-rose-500 mx-2" />
          </div>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mt-2 mb-6">Your donation makes a difference</h2>

          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Your generosity helps us continue our mission to create positive change in communities around the world.
          </p>
        </div>
</div>
        
    </div>
  )
}

