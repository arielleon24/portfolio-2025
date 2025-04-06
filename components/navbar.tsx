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
        {name: 'Home', href: '#'}, 
        {name: 'About', href: '#about'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
        {name: "Resume", href: '#resume'},
        {name: 'Contact', href: '#contact'}
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
                {/* navbarContent will be here! */}
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
                        {/* mobile menu content */}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
