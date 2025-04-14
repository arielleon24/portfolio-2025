'use client' // tells next.js this is client side component     

import type React from 'react';
import { useState, useEffect } from 'react';
import {motion, AnimatePresence } from 'framer-motion';
import {Menu, X} from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    //Links
    const navLinks = [

        {name: 'About', href: '#about'},
        {name: "Resume", href: '#resume'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
    ]

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)

        const targetId = href === '#' ? 'body' : href.substring(1);
        const element = document.getElementById(targetId);

        if(element) {
            element.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <motion.header
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{duration: 0.5}}
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg" : 'bg-transparent'
                }`}
            >
                <div className='container mx-auto px-4'>
                    <div className='flex h-16 items-center justify-between'>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className='text-xl font-bold text-white'
                        >
                            <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                                {`Ariel Leon's Porfolio`}
                            </span>
                        </motion.div>

                        {/* NAV MENU */}
                        <nav className='hidden md:block'>
                            <ul className='flex space-x-8'>
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{opacity: 1, y: 0}}
                                        transition={{delay: 0.1 * index}}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className='text-slate-300 transotopn-colors hover:text-emerald-400'
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                        
                        {/* mobile view button */}
                        <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile nav menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.2}}
                        className='fixed inset-x-0 top-16 z-40 bg-slate-900/95 backdrop-blur-md shadow-lg md:hidden'
                    >
                        <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block py-2 text-lg text-slate-300 transition-colors hover:text-emerald-400"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
