"use client";

import { useRef, useState, useEffect } from "react";
import { Download, Briefcase, GraduationCap } from 'lucide-react'
import { Button } from "./ui/button";

export default function Resume() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Simple intersection observer to trigger animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the section comes into view, set isVisible to true
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, no need to observe anymore
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const experiences = [
        {
            title: "Señor Prog",
            company: 'Prog inc',
            period: "2022 - now",
            description: 'Will write when I look at resume'
        }
    ]

    const education = [
        {
            degree: 'Full-stack development certificate', 
            institution: 'Lighthouse Labs',
            period: '2020 - 2021',
            description: 'Intensive full-time program focused on modern full stack web development. Gained hands-on experience building responsive web applications using JavaScript, React, Node.js, Express, and PostgreSQL. Developed strong problem-solving and pair programming skills through agile team projects, and built a solid foundation in computer science fundamentals, version control (Git), and test-driven development.'
        }
    ]

    return (
        <section id="resume" className="py-20 md:py-32" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl opacity-90">
                    Resume
                </h2>
                
                <div className="mb-10 flex justify-center">
                    <Button className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white opacity-90">
                        <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                        Download Resume
                    </Button>
                </div>
                
                <div className="mx-auto max-w-4xl">
                    <div 
                        className="grid gap-12 md:grid-cols-2 transition-all duration-1000 ease-out"
                        style={{ 
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                    <Briefcase className="h-5 w-5" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white">Experience</h3>
                            </div>
            
                            {experiences.map((exp, index) => (
                                <div 
                                    key={index} 
                                    className="mb-8 border-l-2 border-slate-700 pl-6 transition-all duration-500 ease-out"
                                    style={{ 
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                        transitionDelay: `${index * 200}ms`
                                    }}
                                >
                                    <div className="absolute -ml-[31px] h-5 w-5 rounded-full bg-emerald-500" />
                                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                                    <div className="mb-2 flex items-center gap-2 text-emerald-400">
                                        <span>{exp.company}</span>
                                        <span className="text-slate-500">|</span>
                                        <span className="text-sm text-slate-400">{exp.period}</span>
                                    </div>
                                    <p className="text-slate-300">{exp.description}</p>
                                </div>
                            ))}
                        </div>
            
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                                    <GraduationCap className="h-5 w-5" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white">Education</h3>
                            </div>
            
                            {education.map((edu, index) => (
                                <div 
                                    key={index} 
                                    className="mb-8 border-l-2 border-slate-700 pl-6 transition-all duration-500 ease-out"
                                    style={{ 
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                        transitionDelay: `${(index + experiences.length) * 200}ms`
                                    }}
                                >
                                    <div className="absolute -ml-[31px] h-5 w-5 rounded-full bg-cyan-500" />
                                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                    <div className="mb-2 flex items-center gap-2 text-cyan-400">
                                        <span>{edu.institution}</span>
                                        <span className="text-slate-500">|</span>
                                        <span className="text-sm text-slate-400">{edu.period}</span>
                                    </div>
                                    <p className="text-slate-300">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
