"use client";

import React, { useState } from "react";
import {
    Linkedin,
    Twitter,
    Dribbble,
    ArrowRight,
} from "lucide-react";

// Helper for scrollbar hiding
const scrollbarHideClass = "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

import { TEAM_MEMBERS } from "../../../data/teams";

export default function TeamSection() {
    const [activeId, setActiveId] = useState(1);
    const activeMember = TEAM_MEMBERS.find((m) => m.id === activeId) || TEAM_MEMBERS[0];

    return (
        <section className="bg-white font-display text-[#140d1b] flex flex-col items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl flex flex-col gap-12">

                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Tim Kami
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        The creative force driving digital transformation. Click a profile to explore their journey.
                    </p>
                </div>

                {/* Team Navigation Rail */}
                <div className="relative w-full">
                    {/* Gradient Fade for Scroll hints */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden"></div>

                    <div className={`flex items-center justify-center gap-6 overflow-x-auto py-4 px-4 snap-x ${scrollbarHideClass}`}>
                        {TEAM_MEMBERS.map((member) => (
                            <button
                                key={member.id}
                                onClick={() => setActiveId(member.id)}
                                className={`group flex flex-col items-center gap-3 min-w-[80px] snap-center cursor-pointer transition-all duration-300 transform ${activeId === member.id ? "scale-110" : "opacity-70 hover:opacity-100 hover:-translate-y-1"
                                    }`}
                            >
                                <div className={`relative p-1 rounded-full ${activeId === member.id
                                    ? "ring-2 ring-[#7f13ec] ring-offset-4 ring-offset-white"
                                    : "border-2 border-transparent group-hover:border-[#7f13ec]/30"
                                    }`}>
                                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-200 transition-all duration-500 ${activeId === member.id ? "" : "filter grayscale group-hover:grayscale-0"
                                        }`}>
                                        <img
                                            alt={`Portrait of ${member.name}`}
                                            className="w-full h-full object-cover"
                                            src={member.image}
                                        />
                                    </div>
                                </div>
                                <span className={`text-sm ${activeId === member.id
                                    ? "font-bold text-[#7f13ec]"
                                    : "font-medium text-slate-500 group-hover:text-[#7f13ec]"
                                    } transition-colors`}>
                                    {member.name.split(" ")[0]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Focus Area (Detailed View) */}
                <div className="w-full">
                    <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-purple-900/5 border border-white transition-all">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">

                            {/* Large Portrait Image */}
                            <div className="w-full lg:w-5/12 shrink-0">
                                <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl group cursor-pointer">
                                    <img
                                        alt={`High resolution portrait of ${activeMember.name}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src={activeMember.largeImage}
                                    />
                                    {/* Decorative overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#7f13ec]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>

                            {/* Content Details */}
                            <div className="flex-1 flex flex-col justify-center h-full py-4 lg:py-8 w-full">
                                <div className="space-y-6 text-center lg:text-left">
                                    {/* Header Info */}
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                                            {activeMember.name}
                                        </h3>
                                        <p className="text-xl md:text-2xl font-medium text-[#7f13ec]">
                                            {activeMember.role}
                                        </p>
                                    </div>

                                    {/* Bio */}
                                    <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none lg:max-w-xl">
                                        <p>
                                            {activeMember.bio}
                                        </p>
                                        <p className="hidden md:block mt-4">
                                            {activeMember.extraBio}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px w-full bg-slate-100 my-8"></div>

                                    {/* Actions Row */}
                                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-between w-full">
                                        {/* Social Links */}
                                        <div className="flex items-center gap-3">
                                            <a aria-label="LinkedIn Profile" className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 hover:bg-[#7f13ec]/10 hover:text-[#7f13ec] transition-all duration-300" href="#">
                                                <Linkedin className="w-6 h-6" />
                                            </a>
                                            <a aria-label="Twitter Profile" className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 hover:bg-[#7f13ec]/10 hover:text-[#7f13ec] transition-all duration-300" href="#">
                                                <Twitter className="w-6 h-6" />
                                            </a>
                                            <a aria-label="Dribbble Portfolio" className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 hover:bg-[#7f13ec]/10 hover:text-[#7f13ec] transition-all duration-300" href="#">
                                                <Dribbble className="w-6 h-6" />
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full pt-4">
                        <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 text-white font-bold shadow-lg shadow-violet-200 transition-all duration-300 hover:bg-violet-700 hover:shadow-violet-300 hover:px-12 hover:scale-105 active:scale-95">
                            <span className="whitespace-nowrap">View All Team Members</span>
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
