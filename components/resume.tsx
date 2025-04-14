"use client";

import { useRef, useState, useEffect } from "react";
import { Briefcase, GraduationCap } from 'lucide-react'

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
            title: "Software Developper",
            company: 'Acro Commerce',
            period: "September 2022 - May 2024",
            description: [
                'Develop, implement, and maintain scalable components using TypeScript and React for our E-commerce accelerator.',
                'Design custom hooks to efficiently query various types of data from our APIs.',
                'Implement and maintain test automation with Cypress to ensure the codebase remains clean and functional.',
                'Provide code reviews and constructive feedback to my colleagues, fostering collaboration and continuous improvement within the team.'
            ]
        },
        {
            title: "Integration Specialist",
            company: 'Braindate by E-180',
            period: "September 2021 - July 2022",
            description: [
                'Work with Python and Django to integrate Braindate seamlessly into client event platforms for both desktop and mobile users.',
                'Join client calls to explain our integration process and ensure understanding of the task at hand.',
                'Analyze API documentation from tech partners to optimize and further develop mutual integrations.',
                'Meet tight deadlines by testing client platforms and ensuring optimal functionality in time for launch.'
            ]
        },
        {
            title: "Full Stack Developer",
            company: 'Pao Power',
            period: "August 2021 - October 2021",
            description: [
                'Build and design responsive mobile pages for the app using React.js and TypeScript.',
                'Integrate a translation library into the app to enable multiple translations through sub-path routings and user settings',
                'Optimize application performance by implementing server-side rendering and static site generation features in Next.js.'
            ]
        },
        {
            title: "Web Development Mentor",
            company: 'Lighthouse Labs',
            period: "March 2021 - June 2021",
            description: [
                'Provide technical support to students by troubleshooting and debugging their code, helping them understand and resolve errors effectively.',
                'Reinforce key web development concepts covered in the bootcamp’s curriculum, ensuring students gained a strong grasp of front-end and back-end technologies.',
                'Guide students through hands-on coding challenges, helping them build confidence in their problem-solving abilities and project development.',
            ]
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
        <section id="resume" className="py-20 md:py-20" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <h2 className="mb-20 text-center text-3xl font-bold text-white md:text-4xl opacity-90">
                    Resume
                </h2>
                {/* uncomment when resume is ready @toDo */}
                {/* <div className="mb-10 flex justify-center">
                    <Button className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white opacity-90">
                        <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                        Download Resume
                    </Button>
                </div> */}
                
                <div className="mx-auto max-w-6xl">
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
                                        <span className="text-slate-400">|</span>
                                        <span className="text-sm text-slate-400">{exp.period}</span>
                                    </div>
                                    <ul>
                                        {exp.description.map((exp, index) => (<li key={index} className="text-slate-300">-{exp}</li>))}
                                    </ul>
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
                                        <span className="text-slate-400">|</span>
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
