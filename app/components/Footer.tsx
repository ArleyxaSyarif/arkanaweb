'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, ChevronDown, Github, Linkedin, Twitter, Dribbble, Hexagon } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-[#e0d4f0] font-sans">

            {/* Main Navigation Grid */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                        <Link className="flex items-center gap-2 group" href="#">
                            <div className="w-10 h-10 rounded-lg bg-[#7f13ec] flex items-center justify-center text-white">
                                <Hexagon className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold text-[#140d1b] tracking-tight group-hover:text-[#7f13ec] transition-colors">ArkanaWeb</span>
                        </Link>
                        <p className="text-[#6b5e7c] max-w-xs leading-relaxed">
                            Crafting digital experiences that empower businesses to grow. We provide the tools you need to succeed in the modern web.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4 mt-2">
                            <Link aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#f3ebfc] flex items-center justify-center text-[#7f13ec] hover:bg-[#7f13ec] hover:text-white transition-all duration-300 group" href="#">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#f3ebfc] flex items-center justify-center text-[#7f13ec] hover:bg-[#7f13ec] hover:text-white transition-all duration-300 group" href="#">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link aria-label="GitHub" className="w-10 h-10 rounded-full bg-[#f3ebfc] flex items-center justify-center text-[#7f13ec] hover:bg-[#7f13ec] hover:text-white transition-all duration-300 group" href="#">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link aria-label="Dribbble" className="w-10 h-10 rounded-full bg-[#f3ebfc] flex items-center justify-center text-[#7f13ec] hover:bg-[#7f13ec] hover:text-white transition-all duration-300 group" href="#">
                                <Dribbble className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Links Columns */}
                    <div className="col-span-1 lg:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#140d1b] mb-6">Product</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Features</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Integrations</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Pricing</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Changelog</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#140d1b] mb-6">Company</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">About Us</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Careers</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Blog</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#140d1b] mb-6">Resources</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Documentation</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Help Center</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Community</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Webinars</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#140d1b] mb-6">Legal</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Privacy</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Terms</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Security</Link></li>
                            <li><Link className="text-[#6b5e7c] hover:text-[#7f13ec] transition-colors font-medium" href="#">Cookies</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Utility Bar */}
            <div className="border-t border-[#e0d4f0]/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[#6b5e7c] text-sm text-center md:text-left">
                        © 2024 ArkanaWeb. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {/* Language Selector */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-sm font-medium text-[#140d1b] hover:text-[#7f13ec] transition-colors">
                                <Globe className="w-4 h-4" />
                                <span>English (US)</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
