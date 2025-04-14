"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import Image from "next/image"

// Project Card Component
interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    liveUrl: string
    githubUrl: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants: any
}

function ProjectCard({ project, variants }: ProjectCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 flex flex-col h-full"
    >
      <motion.div className="relative h-40 overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
        <Image
          src={project.image || "/placeholder.svg?height=600&width=800"}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />

        {/* Animated overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <div className="flex flex-col flex-grow p-6">
        <motion.h3 className="mb-2 text-xl font-bold text-white" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          {project.title}
        </motion.h3>

        {/* Fixed height description container with overflow */}
        <div className="h-36 mb-4 overflow-y-auto">
          <p className="text-slate-300">{project.description}</p>
        </div>

        {/* Tags section - at fixed position */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                {tag}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow"></div>

        {/* Buttons section - pushed to bottom */}
        <div className="flex gap-3 mt-auto">
          {project.liveUrl && project.liveUrl !== "#" && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 border-emerald-500 bg-emerald-500/20 text-white hover:scale-110 opacity-90"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-1 border-emerald-500 bg-emerald-500/20 text-white hover:scale-110"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 transition-transform duration-300 group-hover:rotate-25 " />
              Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Main Projects Component
export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Fresh Basket",
      description: `Grocery Delivery App showing stores within a specified range of users' current location in order to promote buying fresh & Local. 
            It leverages Google map's API coupled with React and Axios for authentification.`,
      image: "/gifs/FreshBsQt-1.gif?height=600&width=800",
      tags: ["React.js", "Material-UI", "Google-maps Api", "Axios", "Stripe", "Node.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/arielleon24/finalProject",
    },
    {
      title: "Jungle",
      description:
        "A mini e-commerce application built with Rails 4.2. It uses the active record pattern in order to store the user's cart in memory between page loads.",
      image: "/gifs/JungleDemo.gif?height=600&width=800",
      tags: ["Ruby", "Rails", "Stripe", "PostgreSQL", "JQuery"],
      liveUrl: "#",
      githubUrl: "https://github.com/arielleon24/Jungle-project",
    },
    {
      title: "ReduxMovies",
      description: "A work in progress multi-page React app that uses OMDB's RESTful API to query and filter movie information, images and descriptions.",
      image: "/gifs/redMov.gif?height=600&width=800",
      tags: ["React.js", "Redux", "OMDB's Api", 'Axios'],
      liveUrl: "#",
      githubUrl: "https://github.com/arielleon24/reduxMovies",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          {/* Static heading to ensure it's always visible */}
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl opacity-90">My Projects</h2>

          <motion.div variants={containerVariants} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} variants={itemVariants} />
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex justify-center">
            <a 
            href="https://github.com/arielleon24" 
            target="_blank" 
            rel="noopener noreferrer"
            >
              <Button
              variant="outline"
              className="group flex cursor-pointer items-center gap-2 border-emerald-500 bg-emerald-500/20 text-white hover:scale-110 opacity-90"
              >
                <Github className="h-5 w-5 transition-transform duration-300 group-hover:rotate-25 " />
                View More on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
