"use client"
import {motion} from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';

type TeachStackTag = 'Typescript'|'React.js'| 'Next.js'| 'Cypress'| 'Jest'| 'Javascript'| 'Node.js'| 'Rest APIs'| 'Responsive Design'| 'Git - Version Control'| 'Custom Hooks' | "Python" | 'SQL';

//tech stack and skills to be used in the animation
const techStack = [
    'Typescript','React.js', 'Next.js', 'Cypress', 'Jest', 'Javascript', 'Node.js', 'Rest APIs', 'Responsive Design', 'Git - Version Control', 'Custom Hooks', "Python", "SQL"
];

// Define the props interface for the TechStackShootingStar component
interface TechStackShootingStarProps {
    tech: TeachStackTag;
    delay?: number;
    duration?: number;
    size?: number;
    top?: number;
    left?: number;
    color?: string;
  }

//renders the "shooting stars"
const TechStackShootingStar = ({tech, delay = 0, duration = 1, size = 1, top = 0, left = 0, color = "white"} : TechStackShootingStarProps) => {

    return (
        <motion.span
            aria-hidden="true"
            className="absolute rounded-full text-xs font-mono opacity-70"
            style={{
                top: `${top}%`,
                left: `${left}%`,
                color, 
                textShadow: `0 0 ${size * 4}px ${color}, 0 0 ${size * 6}px ${color}`,
                fontSize: `${size * 10}px`,
                transform: 'rotate(-45deg)',
            }}
            initial={{opacity: 0, x: 0, y: 0}}
            animate={{
                //opacity determines the visibility. Element starts invisible, then goes to 0.7 then fades back out. 
                opacity: [0, 0.7, 0], 
                x: [`${-size * 20}px`, `${size * 200}px`],
                y: [`${-size * 20}px`, `${size * 200}px`],
            }}
            transition={{
                duration, 
                delay, 
                //repeats infinitely due to Number.POSITIVE_INFINITY
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: Math.random() * 15 + 5
            }}
        >
            {`{${tech}}`}
        </motion.span>
    )
}

export default function AnimatedBackground() {
    const [stars, setStars] = useState<React.ReactNode[]>([])
    const [shootingStars, setShootingStars] = useState<React.ReactNode[]>([])

    useEffect(() => {
        //generates background starrs
        const starsArray = Array.from({length: 100}).map((_, i) => (
            <motion.figure
                key={`stars-${i}`}
                role='presentation'
                aria-hidden='true'
                className='absolute rounded-full bg-white'
                style={{
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`, 
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%`
                }}
                animate={{
                    opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse", 
                    delay: Math.random() * 5
                }}
            />
        ))
        setStars(starsArray)

        const colors = [
            "#10b981", // emerald-500
            "#06b6d4", // cyan-500
            "#8b5cf6", // violet-500
            "#f59e0b", // amber-500
            "#ef4444", // red-500
            "#ffffff", // white
            "#3b82f6", // blue-500
            "#ec4899", // pink-500
            "#22c55e", // green-500
            "#eab308", // yellow-500
            "#14b8a6", // teal-500
            "#f97316", // orange-500
            "#a855f7", // purple-500
            "#94a3b8", // slate-400
            "#1e293b", // slate-800
          ]

      const shootingStarsArray = Array.from({length: 20}).map((_, i)=>{
        //Random element from techStack
        const randomElement = techStack[i % techStack.length] as TeachStackTag
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        return (
            <TechStackShootingStar
                key={`shooting-star-${i}`}
                tech={randomElement}
                delay={Math.random() * 15}
                duration={Math.random() * 2 + 2}
                size={Math.random() * 5}
                left={Math.random() * 20}
                color={randomColor}
            />
            )
      })
      setShootingStars(shootingStarsArray)
    }, [])

    return (
        <aside className="fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900" />
    
          {/* Background stars */}
          <figure className="absolute inset-0 overflow-hidden" role="presentation">
            {stars}
          </figure>
    
          {/* Tech Stack shooting stars */}
          <div className="absolute inset-0 overflow-hidden">{shootingStars}</div>
    
          {/* Gradient blobs */}
          <motion.figure
            role="presentation"
            className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          {/* Additional gradient blobs */}
        </aside>
      )
}


