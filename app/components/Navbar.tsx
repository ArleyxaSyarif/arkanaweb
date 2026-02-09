'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                        <Link className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#7f13ec] transition-colors" href="/">Home</Link>
                        <Link className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#7f13ec] transition-colors" href="/service">Service</Link>
                        <Link className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#7f13ec] transition-colors" href="/tools">Tools</Link>
                        <Link className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#7f13ec] transition-colors" href="/pricing">Pricing</Link>
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4">
                        {/* Login Button */}

                        {/* Get Started CTA */}
                        {/* Vibrant purple-to-indigo gradient */}
                        <button className="hidden md:inline-flex relative items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#7f13ec] to-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#7f13ec]/25 transition-all duration-300 hover:shadow-[#7f13ec]/40 hover:scale-[1.02] active:scale-[0.98]">
                            <span className="relative flex items-center gap-2">
                                Get Started
                                {/* Arrow Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>
                        {/* Mobile Menu Button (Visible on small screens) */}
                        <button
                            className="md:hidden p-2 text-slate-500 hover:text-[#7f13ec] transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white">
                    <div className="px-4 py-4 space-y-2 flex flex-col">
                        <Link className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#7f13ec] transition-colors" href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#7f13ec] transition-colors" href="/service" onClick={() => setIsMobileMenuOpen(false)}>Service</Link>
                        <Link className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#7f13ec] transition-colors" href="/tools" onClick={() => setIsMobileMenuOpen(false)}>Tools</Link>
                        <Link className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#7f13ec] transition-colors" href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
