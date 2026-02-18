'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Service', href: '/service' },
        { name: 'Tools', href: '/tools' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Experience', href: '/experince' },
    ];

    const isLinkActive = (href: string) => pathname === href;

    return (
        <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Left: Logo */}
                    <Link href="/" className="flex shrink-0 items-center gap-3 cursor-pointer group">
                        <div className="relative flex size-10 items-center justify-center rounded-xl bg-[#7f13ec]/10 text-[#7f13ec] group-hover:bg-[#7f13ec] group-hover:text-white transition-all duration-300">
                            {/* Geometric Logo Icon */}
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">ArkanaWeb</span>
                    </Link>

                    {/* Center: Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${isLinkActive(link.href)
                                        ? 'text-[#7f13ec]'
                                        : 'text-slate-500 hover:text-[#7f13ec]'
                                    }`}
                                href={link.href}
                            >
                                {link.name}
                                {isLinkActive(link.href) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#7f13ec] rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4">
                        {/* Get Started CTA */}
                        <button className="hidden md:inline-flex relative items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#7f13ec] to-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#7f13ec]/25 transition-all duration-300 hover:shadow-[#7f13ec]/40 hover:scale-[1.02] active:scale-[0.98]">
                            <span className="relative flex items-center gap-2">
                                Kontak
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-slate-500 hover:text-[#7f13ec] transition-colors relative h-10 w-10 flex items-center justify-center"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="relative w-6 h-6">
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                                    className="absolute inset-0 m-auto block h-0.5 w-6 bg-current transition-transform"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="absolute inset-0 m-auto block h-0.5 w-6 bg-current transition-opacity"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                                    className="absolute inset-0 m-auto block h-0.5 w-6 bg-current transition-transform"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-1 flex flex-col">
                            {[...navLinks, { name: 'Contact', href: '/contact' }].map((link) => (
                                <motion.div key={link.href} variants={itemVariants}>
                                    <Link
                                        className={`px-4 py-3 text-base font-semibold block transition-colors rounded-xl ${isLinkActive(link.href)
                                                ? 'text-[#7f13ec] bg-[#7f13ec]/5'
                                                : 'text-slate-600 hover:text-[#7f13ec] hover:bg-slate-50'
                                            }`}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            {link.name}
                                            {isLinkActive(link.href) && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="size-1.5 rounded-full bg-[#7f13ec]"
                                                />
                                            )}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div variants={itemVariants} className="pt-4 px-2">
                                <button className="w-full relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#7f13ec] to-indigo-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#7f13ec]/25 transition-all duration-300">
                                    Kontak Kami
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
