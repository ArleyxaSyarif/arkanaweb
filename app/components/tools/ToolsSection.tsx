"use client";

import React, { useState } from "react";
import {
    Database,
    Code,
    Atom,
    Layers,
    Palette,
    Server,
    Triangle,
    Info,
    ArrowRight,
    X,
    FileCode,
    LucideIcon
} from "lucide-react";

interface Tool {
    id: string;
    name: string;
    category: string;
    icon: LucideIcon;
    description: string;
    features: string[];
    docsUrl: string;
    githubUrl?: string;
}

const toolsData: Tool[] = [
    {
        id: "mongodb",
        name: "MongoDB",
        category: "NoSQL Database",
        icon: Database,
        description: "A source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        features: ["Document-Oriented", "High Availability", "Horizontal Scalability", "Ad-hoc Queries"],
        docsUrl: "https://www.mongodb.com/docs/",
        githubUrl: "https://github.com/mongodb/mongo"
    },
    {
        id: "typescript",
        name: "TypeScript",
        category: "Type Safety",
        icon: FileCode,
        description: "A syntactic superset of JavaScript which adds static typing. It is designed for the development of large applications and transcompiles to JavaScript.",
        features: ["Static Type-checking", "IDE Support", "Object-oriented", "ES Next Support"],
        docsUrl: "https://www.typescriptlang.org/docs/",
        githubUrl: "https://github.com/microsoft/TypeScript"
    },
    {
        id: "react",
        name: "React",
        category: "UI Library",
        icon: Atom,
        description: "The library for web and native user interfaces. React's component-based architecture allows us to build encapsulated components that manage their own state.",
        features: ["Component-Based", "Virtual DOM", "Declarative UI", "Rich Ecosystem"],
        docsUrl: "https://react.dev/",
        githubUrl: "https://github.com/facebook/react"
    },
    {
        id: "nextjs",
        name: "Next.js",
        category: "Framework",
        icon: Layers,
        description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
        features: ["Server-Side Rendering", "Static Site Generation", "API Routes", "Built-in Optimization"],
        docsUrl: "https://nextjs.org/docs",
        githubUrl: "https://github.com/vercel/next.js"
    },
    {
        id: "tailwindcss",
        name: "Tailwind CSS",
        category: "Styling",
        icon: Palette,
        description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
        features: ["Utility-First", "Responsive Design", "Component-Friendly", "Dark Mode Support"],
        docsUrl: "https://tailwindcss.com/docs",
        githubUrl: "https://github.com/tailwindlabs/tailwindcss"
    },
    {
        id: "nodejs",
        name: "Node.js",
        category: "Runtime",
        icon: Server,
        description: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
        features: ["Event-Driven", "Non-Blocking I/O", "Cross-Platform", "Large Ecosystem (NPM)"],
        docsUrl: "https://nodejs.org/en/docs/",
        githubUrl: "https://github.com/nodejs/node"
    },
    {
        id: "prisma",
        name: "Prisma",
        category: "ORM",
        icon: Triangle,
        description: "Next-generation Node.js and TypeScript ORM. Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model and type-safe query builder.",
        features: ["Type-Safe Queries", "Automated Migrations", "Intuitive Data Model", "Multi-Database Support"],
        docsUrl: "https://www.prisma.io/docs",
        githubUrl: "https://github.com/prisma/prisma"
    }
];

export default function ToolsSection() {
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

    // Duplicate tools for infinite scroll effect
    const infiniteTools = [...toolsData, ...toolsData];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            {/* Hero Section */}
            <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Technology Stack 2024
                    </span>
                </div>
                <h2 className="mx-auto max-w-3xl text-5xl md:text-6xl font-black leading-tight tracking-tight text-[#141118]">
                    Powered by the world's <br />
                    <span className="bg-gradient-to-r from-primary to-[#b37df7] bg-clip-text text-transparent">
                        most modern tech.
                    </span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-[#756189]">
                    A high-performance ecosystem built for speed, scalability, and developer
                    happiness. Explore the tools that drive our innovation.
                </p>
            </section>

            {/* Infinite Looping Slider Section */}
            <section className="slider-container relative w-full overflow-hidden py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
                <style jsx>{`
          @keyframes scroll-custom {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 7));
            }
          }
          .slider-track {
            display: flex;
            width: calc(250px * 14);
            animation: scroll-custom 40s linear infinite;
          }
          .slider-container:hover .slider-track {
            animation-play-state: paused;
          }
        `}</style>
                <div className="slider-track gap-8 px-4">
                    {infiniteTools.map((tool, index) => (
                        <div
                            key={`${tool.id}-${index}`}
                            onClick={() => setSelectedTool(tool)}
                            className="glass-bubble flex h-[280px] w-[220px] flex-col items-center justify-center gap-6 rounded-[2.5rem] p-6 cursor-pointer hover:scale-105 hover:-translate-y-1 transition-all duration-300 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm">
                                <tool.icon className="text-4xl text-primary w-10 h-10" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-[#141118]">{tool.name}</h3>
                                <p className="text-xs font-medium text-[#756189] mt-1">
                                    {tool.category}
                                </p>
                            </div>
                            <div className="rounded-full bg-primary/10 p-2 text-primary">
                                <Info className="text-lg w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Grid Section */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-[#141118]">
                            Tool Ecosystem
                        </h2>
                        <p className="mt-2 text-[#756189]">
                            Deep dive into our core architectural decisions.
                        </p>
                    </div>
                    <button className="group flex items-center gap-2 text-sm font-bold text-primary">
                        View All Tools
                        <ArrowRight className="text-lg transition-transform group-hover:translate-x-1 w-5 h-5" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Tool Card Detail for React */}
                    <div className="flex flex-col @container items-stretch justify-start rounded-2xl bg-white shadow-sm border border-primary/5 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-primary/5">
                                <Atom className="text-3xl text-primary w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#141118]">React</h3>
                                <p className="text-sm text-primary font-medium">
                                    Core UI Library
                                </p>
                            </div>
                        </div>
                        <p className="text-[#756189] leading-relaxed mb-6">
                            The library for web and native user interfaces. React's
                            component-based architecture allows us to build encapsulated
                            components that manage their own state.
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-background-light">
                            <div className="flex -space-x-2">
                                <div className="h-8 w-8 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                                    V18
                                </div>
                                <div className="h-8 w-8 rounded-full border-2 border-white bg-[#b37df7]/20 flex items-center justify-center text-[10px] font-bold">
                                    WEB
                                </div>
                            </div>
                            <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-bold text-white transition-all hover:bg-primary/90">
                                Documentation
                            </button>
                        </div>
                    </div>
                    {/* Tool Card Detail for Next.js */}
                    <div className="flex flex-col items-stretch justify-start rounded-2xl bg-white shadow-sm border border-primary/5 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-primary/5">
                                <Layers className="text-3xl text-primary w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#141118]">Next.js</h3>
                                <p className="text-sm text-primary font-medium">
                                    Fullstack Framework
                                </p>
                            </div>
                        </div>
                        <p className="text-[#756189] leading-relaxed mb-6">
                            Enabling server-side rendering and static site generation for
                            lightning-fast performance. Next.js gives us the best developer
                            experience with all the features we need.
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-background-light">
                            <div className="flex -space-x-2">
                                <div className="h-8 w-8 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                                    V14
                                </div>
                                <div className="h-8 w-8 rounded-full border-2 border-white bg-[#b37df7]/20 flex items-center justify-center text-[10px] font-bold">
                                    SSR
                                </div>
                            </div>
                            <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-bold text-white transition-all hover:bg-primary/90">
                                Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tool Detail Modal */}
            {selectedTool && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[rgba(25,16,34,0.4)] backdrop-blur-md">
                    <div className="relative w-full max-w-2xl transform rounded-[2rem] bg-white p-8 shadow-2xl transition-all scale-100">
                        <button
                            onClick={() => setSelectedTool(null)}
                            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-background-light text-[#756189] hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/5 shadow-inner">
                                <selectedTool.icon className="text-6xl text-primary w-16 h-16" />
                            </div>
                            <h2 className="text-3xl font-black text-[#141118]">
                                {selectedTool.name}
                            </h2>
                            <p className="mt-2 text-primary font-semibold tracking-wide uppercase text-sm">
                                {selectedTool.category}
                            </p>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                <div className="rounded-2xl bg-background-light p-5 text-left">
                                    <h4 className="text-xs font-bold text-primary uppercase mb-2">
                                        Description
                                    </h4>
                                    <p className="text-sm text-[#756189] leading-relaxed">
                                        {selectedTool.description}
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-background-light p-5 text-left">
                                    <h4 className="text-xs font-bold text-primary uppercase mb-2">
                                        Key Features
                                    </h4>
                                    <ul className="text-sm text-[#756189] space-y-1">
                                        {selectedTool.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10 flex w-full gap-4">
                                <a
                                    href={selectedTool.docsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:scale-[1.01] transition-all"
                                >
                                    View Documentation
                                </a>
                                {selectedTool.githubUrl && (
                                    <a
                                        href={selectedTool.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center h-12 rounded-xl border-2 border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all"
                                    >
                                        GitHub Repository
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}