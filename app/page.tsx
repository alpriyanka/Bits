"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Globe, BookOpen, Search, Heart, Shield, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechCard from "@/components/tech-card"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import ParticleBackground from "@/components/particle-background"
import FloatingNav from "@/components/floating-nav"
import TechStats from "@/components/tech-stats"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const isMobile = useMobile()

  const techSolutions = [
    {
      id: "Metaverse and blockchain-voting with social interaction in the digital era",
      title: "Metaverse and blockchain-voting with social interaction in the digital era",
      description: "Secure, transparent digital voting systems powered by blockchain technology",
      icon: <Shield className="h-10 w-10" />,
      color: "from-violet-500 to-purple-700",
      glowColor: "violet",
      image: "/placeholder.svg?height=400&width=600",

      category: "security",
    },
    

    {
      id: "ar-ai-education",
      title: "AR/AI Education",
      description: "Augmented reality and AI-powered learning experiences",
      icon: <BookOpen className="h-10 w-10" />,
      color: "from-green-500 to-emerald-700",
      glowColor: "green",
      image: "/placeholder.svg?height=400&width=600",

      category: "ai",
    },
 
    {
      id: "healthcare-recognition",
      title: "Healthcare Recognition",
      description: "Healthcare assistant and monitoring systems for patient care",
      icon: <Heart className="h-10 w-10" />,
      color: "from-red-500 to-rose-700",
      glowColor: "red",
      image: "/placeholder.svg?height=400&width=600",

      category: "ai",
    },
    
  ]

  const filteredTech =
    activeCategory === "all" ? techSolutions : techSolutions.filter((tech) => tech.category === activeCategory)

  const categories = [
    { id: "all", name: "All Technologies" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "virtual", name: "Virtual Reality" },
    { id: "security", name: "Security" },
    { id: "computing", name: "Computing" },
  ]

  useEffect(() => {
    // Preload images for smoother transitions
    techSolutions.forEach((tech) => {
      const img = new Image()
      img.src = tech.image
    })
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <FloatingNav />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black" />

        {/* Animated tech elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-500 opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: `blur(${Math.random() * 2}px)`,
              }}
              animate={{
                y: [0, Math.random() * -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div
          className="container relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8 z-10"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                <span className="block text-white">Shaping the Future with</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Innovative Technology
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="mt-6 max-w-xl text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore cutting-edge solutions that are transforming industries and building a better tomorrow.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
              >
                <span className="relative z-10">Discover More</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Button>

              <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-800 group">
                <span>Our Mission</span>
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* 3D Floating Tech Element */}
          <motion.div
            className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, rotateY: 45 }}
            animate={{
              opacity: 1,
              rotateY: 0,
              y: [0, -20, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.8 },
              rotateY: { duration: 1, delay: 0.8 },
              y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/30 p-6 transform rotate-6 shadow-2xl">
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-purple-500/30 blur-2xl"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-blue-500/30 blur-2xl"></div>

                <div className="flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-white/70"></div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-full h-2 rounded-full bg-white/10"></div>
                    <div className="w-2/3 h-2 rounded-full bg-white/10"></div>
                    <div className="w-1/2 h-2 rounded-full bg-white/10"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-8 rounded-md bg-white/10"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.5 },
            y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stats Section */}
      <TechStats />

      {/* Tech Solutions Grid */}
      <section className="relative py-24 overflow-hidden" ref={containerRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>

          {/* Animated circles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(30,64,175,0.1) 50%, rgba(0,0,0,0) 70%)`,
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Innovative Solutions
              </span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
              Explore our cutting-edge technologies that are reshaping industries and creating new possibilities.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-4 py-2 text-sm ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredTech.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <TechCard
                    id={tech.id}
                    title={tech.title}
                    description={tech.description}
                    icon={tech.icon}
                    color={tech.color}
                    glowColor={tech.glowColor}
                    image={tech.image}
                    youtubeUrl={tech.youtubeUrl}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90" />

        <div className="container relative mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Tech Innovation Hub</h3>
                <p className="text-gray-400 max-w-md">
                  Exploring the frontiers of technology to create solutions that transform industries and improve lives.
                </p>
                <div className="mt-6 flex space-x-4">
                  {["twitter", "linkedin", "github", "youtube"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2">
                {techSolutions.slice(0, 4).map((tech) => (
                  <li key={tech.id}>
                    <a href={tech.youtubeUrl} className="text-gray-400 hover:text-white transition-colors">
                      {tech.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "Careers", "Contact", "Blog", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} Tech Innovation Hub. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}

