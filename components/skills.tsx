"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Technologies. Will add logos in the object later @toDo
  const technologies = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Redux" },
    { name: "Next.js" },
    { name: "HTML & CSS" },
    { name: "SASS" },
    { name: "jQuery" },
    { name: "Axios" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "PostgreSQL" },
    { name: "Git" },
    { name: "Ruby on Rails" },
    { name: "Python" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="skills" className="py-20 md:py-20">
      <div className="container mx-auto px-4">
      <h2  className="mb-12 text-center text-3xl font-bold text-white md:text-4xl opacity-90">
            My Skills
          </h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center rounded-xl bg-slate-800/50 p-4 text-center backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-110"
              >
                <h3 className="text-sm font-medium text-white sm:text-base">{tech.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
