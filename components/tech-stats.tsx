"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function TechStats() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "24/7", label: "Technical Support" },
    { value: "100+", label: "Expert Engineers" },
  ]

  return (
    <motion.section ref={ref} className="relative py-20 overflow-hidden" style={{ opacity }}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-blue-900/10 to-transparent"></div>

      <motion.div className="container mx-auto px-4" style={{ y }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

