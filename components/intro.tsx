"use client"

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Intro() {

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center relative z-20 pt-16 md:pt-20">
            <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
                {/* My picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.2, duration: 0.5}}
                    className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-emerald-500/30 md:h-48 md:w-48"
                >
                    {/* <Image
                        src={''}
                        alt='My picture'
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                    /> */}
                </motion.div>

                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    <span className="block">Hi, Im</span>
                    <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        Ariel
                    </span>
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mx-auto mb-8 max-w-lg text-xl text-slate-300"
                >
                    A passionate full-stack developer living in Montreal!
                </motion.p>
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
