"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Star, Users, Zap, Target, Sparkles, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Optimized performance with cutting-edge technology",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision Design",
    description: "Pixel-perfect designs that convert visitors to customers",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Seamless workflow with your existing team structure",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Magic Touch",
    description: "Adding that special something to make you stand out",
    color: "from-pink-400 to-rose-500",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Absolutely incredible work! The animations brought our brand to life in ways we never imagined.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Designer, Creative Co",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "The attention to detail and smooth animations exceeded all our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StartupXYZ",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Professional, creative, and delivered exactly what we needed. The motion design is phenomenal.",
    rating: 5,
  },
]

const projects = [
  {
    title: "E-commerce Revolution",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern shopping experience with micro-interactions",
  },
  {
    title: "Brand Identity System",
    category: "Design",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete visual identity with animated elements",
  },
  {
    title: "Mobile App Interface",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=400",
    description: "Intuitive mobile experience with fluid animations",
  },
  {
    title: "Dashboard Analytics",
    category: "Data Visualization",
    image: "/placeholder.svg?height=300&width=400",
    description: "Interactive charts and real-time data display",
  },
]

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Urban Night Scene",
    title: "Neon Dreams",
    description: "Capturing the vibrant energy of city nights",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Street Photography",
    title: "Street Stories",
    description: "Life unfolding in urban landscapes",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Architecture",
    title: "Modern Lines",
    description: "Contemporary architecture meets art",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "City Lights",
    title: "Electric Nights",
    description: "The pulse of metropolitan life",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Urban Art",
    title: "Street Canvas",
    description: "Art in unexpected places",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Night Market",
    title: "Market Glow",
    description: "Commerce under neon lights",
  },
]

const carouselItems = [
  { id: 1, title: "Creative Direction", icon: "🎨", color: "from-pink-500 to-rose-500" },
  { id: 2, title: "Web Development", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { id: 3, title: "Motion Design", icon: "✨", color: "from-purple-500 to-indigo-500" },
  { id: 4, title: "Brand Identity", icon: "🎯", color: "from-green-500 to-emerald-500" },
  { id: 5, title: "UI/UX Design", icon: "📱", color: "from-orange-500 to-yellow-500" },
  { id: 6, title: "Photography", icon: "📸", color: "from-teal-500 to-blue-500" },
  { id: 7, title: "Video Production", icon: "🎬", color: "from-red-500 to-pink-500" },
  { id: 8, title: "3D Modeling", icon: "🎲", color: "from-violet-500 to-purple-500" },
]

export default function Component() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      layout
    >
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-white px-4"
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6" variants={itemVariants}>
            Motion
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Magic
            </motion.span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Creating extraordinary digital experiences through the power of animation and motion design
          </motion.p>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Get Started
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* Services Section with Stagger Animation */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ amount: 0.3 }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do Best</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Combining creativity with technology to deliver exceptional results
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                whileTap={{ scale: 0.95 }}
                className="perspective-1000"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                  <CardHeader>
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Project Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300">Explore our latest creative endeavors</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div className="space-y-4" layout>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedProject === index
                      ? "bg-white/20 border-l-4 border-purple-400"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                  onClick={() => setSelectedProject(index)}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                    <motion.div
                      animate={{
                        rotate: selectedProject === index ? 90 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <motion.img
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{projects[selectedProject].title}</h3>
                    <p className="text-gray-300">{projects[selectedProject].description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Visual Gallery</h2>
            <p className="text-xl text-gray-300">Click any image to explore in detail</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layoutId={`image-${image.id}`}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedImage(index)}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] w-full"
                layoutId={`image-${galleryImages[selectedImage].id}`}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-contain rounded-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                />

                <motion.button
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                <motion.button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>

                <motion.div
                  className="absolute bottom-4 left-4 right-4 text-center text-white bg-black/50 rounded-lg p-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{galleryImages[selectedImage].title}</h3>
                  <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Spinning Carousel Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-300">Hover to pause the carousel</p>
          </motion.div>

          <div className="relative h-96 flex items-center justify-center">
            <motion.div
              className="relative w-80 h-80"
              animate={{ rotate: isCarouselPaused ? 0 : 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              onHoverStart={() => setIsCarouselPaused(true)}
              onHoverEnd={() => setIsCarouselPaused(false)}
            >
              {carouselItems.map((item, index) => {
                const angle = (index / carouselItems.length) * 360
                const radius = 140
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={item.id}
                    className="absolute w-20 h-20 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                    animate={{ rotate: isCarouselPaused ? 0 : -360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      zIndex: 10,
                    }}
                  >
                    <motion.div
                      className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} flex flex-col items-center justify-center text-white shadow-lg cursor-pointer`}
                      whileHover={{
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      <span className="text-2xl mb-1">{item.icon}</span>
                      <span className="text-xs font-medium text-center px-1 leading-tight">
                        {item.title.split(" ").map((word, i) => (
                          <div key={i}>{word}</div>
                        ))}
                      </span>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Center circle */}
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-xl"
              whileHover={{ scale: 1.1 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.4)",
                  "0 0 40px rgba(236, 72, 153, 0.4)",
                  "0 0 20px rgba(168, 85, 247, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Skills
            </motion.div>
          </div>
        </div>
      </section>

      {/* Draggable Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-300">Drag the cards to explore testimonials</p>
          </motion.div>

          <div className="relative h-96 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                drag
                dragConstraints={{ left: -200, right: 200, top: -100, bottom: 100 }}
                dragElastic={0.1}
                whileDrag={{ scale: 1.1, rotate: 5, zIndex: 10 }}
                className="absolute w-80"
                initial={{
                  x: (index - 1) * 100,
                  y: index * 20,
                  rotate: (index - 1) * 5,
                }}
                whileHover={{ scale: 1.05, zIndex: 5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="mr-3">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 mb-4">"{testimonial.content}"</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{}}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: 150, label: "Projects Completed", suffix: "+" },
              { number: 98, label: "Client Satisfaction", suffix: "%" },
              { number: 5, label: "Years Experience", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{}}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{}}
                    transition={{
                      delay: index * 0.2 + 0.7,
                      duration: 1,
                    }}
                  >
                    {stat.number}
                    {stat.suffix}
                  </motion.span>
                </motion.div>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Morphing CTA Section */}
      <section className="py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" layout>
          <motion.div
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{}}
            >
              Ready to Create Magic?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{}}
              transition={{ delay: 0.2 }}
            >
              Let's bring your ideas to life with stunning animations and interactions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{}}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer with Layout Animation */}
      <motion.footer className="py-12 px-4 border-t border-white/10" layout>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} viewport={{}}>
          © 2024 MotionMagic. Crafted with passion and powered by Framer Motion.
        </motion.p>
      </motion.footer>
    </motion.div>
  )
}
