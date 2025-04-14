"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, GitBranch, Wrench } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS.",
      color: "from-emerald-500 to-cyan-500",
    },
    {
        name: "Backend Development",
        icon: <Database className="h-6 w-6" />,
        description: "Designing and integrating scalable backend systems and APIs using Node.js, Express, and SQL for seamless data flow and performance.",
        color: "from-emerald-500 to-cyan-500",
      },
      {
        name: "Testing and Quality Assurance",
        icon: <Wrench className="h-6 w-6" />,
        description: "Writing and maintaining end-to-end and unit tests with Cypress and Jest, while also providing thorough code reviews to ensure clean, high-quality development.",
        color: "from-emerald-500 to-cyan-500",
      },
      {
        name: "Version Control & Collaboration",
        icon: <GitBranch className="h-6 w-6" />,
        description: "Using GitHub, and Agile workflows to collaborate efficiently, manage codebases, and streamline development.",
        color: "from-emerald-500 to-cyan-500",
      }
  ]

  const aboutMe = `I'm a Full Stack Developer with 3+ years of experience building responsive, scalable web applications using React, TypeScript, JavaScript, Node.js, and SQL. I thrive in Agile teams, enjoy solving complex problems, and value clean, maintainable code.
                    I’ve worked on everything from frontend architecture and custom hooks to backend integrations and automated testing. With a strong analytical mindset and clear communication, I bring both technical skill and a collaborative spirit to every project.
                    Fluent in English, French, and Spanish, I enjoy learning new technologies and look forward to creating something amazing with you!`

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="container mx-auto px-4 py-20 max-w-8xl">
      <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

          <motion.div
            variants={itemVariants}
            className="col-span-1 rounded-3xl bg-slate-800/50 p-6 backdrop-blur md:col-span-2 md:row-span-2 lg:p-8 text-slate-300 "
          >
            {aboutMe.split('\n').map((line, index) => (
                <p key={index} className="mb-4 py-2 text-lg">
                    {line}
                </p>
            ))}
          </motion.div>

          {/* Skills cards grid */}
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="col-span-1 rounded-3xl bg-slate-800/50 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <div
      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${skill.color} text-white`}
    >
      {skill.icon}
    </div>
    <h4 className="mb-2 text-xl font-semibold text-white">{skill.name}</h4>
    <p className="text-slate-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
