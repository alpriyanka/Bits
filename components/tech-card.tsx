"use client"

import type React from "react"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

interface TechCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  glowColor: string
  image: string
  youtubeUrl: string
}

export default function TechCard({ id, title, description, icon, color, glowColor, image, youtubeUrl }: TechCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="h-full"
    >
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="relative h-full overflow-hidden bg-gray-900/70 border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
          {/* Glow effect */}
          <div
            className={`absolute -inset-0.5 rounded-xl opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
            style={{
              background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), ${getGlowColor(glowColor)}, transparent 40%)`,
              zIndex: 0,
            }}
          />

          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? "scale(1.1) rotate(2deg)" : "scale(1) rotate(0deg)",
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-80`}></div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0.8 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="rounded-full bg-white/10 p-3 backdrop-blur-sm"
                animate={{
                  y: isHovered ? -10 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                {icon}
              </motion.div>
            </motion.div>

            {/* Animated particles */}
            {isHovered && (
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white"
                    initial={{
                      x: Math.random() * 100 + 50,
                      y: Math.random() * 100 + 50,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      y: [null, -50 - Math.random() * 50],
                      opacity: [0, 0.7, 0],
                      scale: [0, 1 + Math.random(), 0],
                    }}
                    transition={{
                      duration: 1 + Math.random() * 0.5,
                      ease: "easeOut",
                      delay: Math.random() * 0.2,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <CardContent className="relative p-6 z-10">
            <motion.h3
              className="text-xl font-bold text-white mb-2"
              animate={{
                color: isHovered ? getTextHighlightColor(glowColor) : "#ffffff",
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-400">{description}</p>
          </CardContent>

          <CardFooter className="relative p-6 pt-0 z-10">
            <motion.div
              className="flex items-center text-sm font-medium"
              animate={{
                color: isHovered ? getTextHighlightColor(glowColor) : "#a78bfa",
              }}
              transition={{ duration: 0.3 }}
            >
              <span>Watch on YouTube</span>
              <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.div>
            </motion.div>
          </CardFooter>
        </Card>
      </a>
    </motion.div>
  )
}

// Helper functions for dynamic colors
function getGlowColor(color: string): string {
  const colorMap: Record<string, string> = {
    violet: "rgba(139, 92, 246, 0.5)",
    blue: "rgba(59, 130, 246, 0.5)",
    green: "rgba(16, 185, 129, 0.5)",
    amber: "rgba(245, 158, 11, 0.5)",
    red: "rgba(239, 68, 68, 0.5)",
    fuchsia: "rgba(217, 70, 239, 0.5)",
  }

  return colorMap[color] || "rgba(139, 92, 246, 0.5)"
}

function getTextHighlightColor(color: string): string {
  const colorMap: Record<string, string> = {
    violet: "#a78bfa",
    blue: "#60a5fa",
    green: "#34d399",
    amber: "#fbbf24",
    red: "#f87171",
    fuchsia: "#e879f9",
  }

  return colorMap[color] || "#a78bfa"
}

