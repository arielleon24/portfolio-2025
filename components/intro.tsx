"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "./ui/button"

export default function Intro() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center relative z-20 pt-16 md:pt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Hi, Im</span>
          <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Ariel Leon
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mb-4 max-w-lg text-xl text-slate-300"
        >
          A passionate Montreal based Full-Stack Developer looking for new opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mb-8 flex justify-center"
        >
          <a
            href="mailto:arielleon.dev24@gmail.com"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
          >
            <Mail className="h-5 w-5" />
            <span>arielleon.dev24@gmail.com</span>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
          <Button
            onClick={scrollToAbout}
            className="group rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-6 text-white"
          >
            <ArrowDown className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
