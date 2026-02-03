'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X as CloseIcon } from 'lucide-react';

interface ToolsSectionProps {
    darkMode?: boolean;
}

interface TechStackItem {
    name: string;
    category: string;
    description: string;
    details: string;
    useCases: string[];
    icon: React.ReactNode;
}

export default function ToolsSection({ darkMode = false }: ToolsSectionProps) {
    const [selectedTech, setSelectedTech] = useState<TechStackItem | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const techStack: TechStackItem[] = [
        {
            name: "React",
            category: "Frontend",
            description: "Library JavaScript untuk membangun user interface yang interaktif dan dinamis dengan component-based architecture.",
            details: "React memungkinkan pengembangan UI yang cepat dan efisien dengan virtual DOM dan reusable components.",
            useCases: ["Single Page Applications", "Progressive Web Apps", "Interactive Dashboards"],
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="1.5" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            )
        },
        {
            name: "Next.js",
            category: "Framework",
            description: "Framework React dengan fitur server-side rendering dan static site generation untuk performa optimal.",
            details: "Next.js menyediakan routing otomatis, optimasi gambar, dan API routes untuk full-stack development.",
            useCases: ["E-commerce Sites", "Marketing Websites", "Enterprise Applications"],
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l7.5 3.45v8.42c0 4.24-2.88 8.21-7.5 9.68-4.62-1.47-7.5-5.44-7.5-9.68V7.63l7.5-3.45z" />
                    <path d="M11 7h2v6h-2zm0 8h2v2h-2z" />
                </svg>
            )
        },
        {
            name: "Tailwind CSS",
            category: "Styling",
            description: "Utility-first CSS framework untuk styling yang cepat dan konsisten dengan design system yang powerful.",
            details: "Tailwind CSS memungkinkan pembuatan custom design tanpa meninggalkan HTML dengan utility classes.",
            useCases: ["Rapid Prototyping", "Custom Design Systems", "Responsive Layouts"],
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
                </svg>
            )
        },
        {
            name: "Node.js",
            category: "Backend",
            description: "JavaScript runtime untuk server-side development dengan performa tinggi dan scalability.",
            details: "Node.js menggunakan event-driven architecture yang cocok untuk aplikasi real-time dan data-intensive.",
            useCases: ["REST APIs", "Real-time Applications", "Microservices"],
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0L10 19.65c-.08-.03-.16-.02-.21.02-.53.3-.63.36-1.12.51-.12.04-.31.11.04.31l2.11 1.25c.24.13.5.2.78.2.27 0 .54-.07.77-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2z" />
                </svg>
            )
        },
        {
            name: "MongoDB",
            category: "Database",
            description: "NoSQL database yang fleksibel dan scalable untuk menyimpan data dalam format document-oriented.",
            details: "MongoDB cocok untuk aplikasi modern yang membutuhkan schema flexibility dan horizontal scaling.",
            useCases: ["Content Management", "User Profiles", "IoT Applications"],
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C11.175 2 9 6.43 9 10.98c0 3.87 1.12 6.47 2.11 8.27.13.24.26.47.39.68.13-.21.26-.44.39-.68.99-1.8 2.11-4.4 2.11-8.27C14 6.43 12.825 2 12 2zm-.5 18.08c-.42.42-.5 1.34-.5 1.92 0 0-.08-1.56.5-1.92z" />
                </svg>
            )
        },
        {
            name: "TypeScript",
            category: "Language",
            description: "Superset JavaScript dengan static typing untuk code yang lebih reliable dan maintainable.",
            details: "TypeScript membantu mendeteksi error lebih awal dan meningkatkan developer experience dengan auto-completion.",
            useCases: ["Large Scale Applications", "Team Collaboration", "API Development"],
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h18v18H3V3zm15.854 10.146a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L17.293 14H6.5a.5.5 0 0 1 0-1h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4z" />
                </svg>
            )
        }
    ];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollStep = 0.3;
        let animationId: number;

        const autoScroll = () => {
            scrollAmount += scrollStep;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-xl border border-purple-300/20">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                        <span className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} text-sm font-semibold`}>
                            Technology Stack
                        </span>
                    </div>
                    <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Teknologi <span className={`bg-gradient-to-r ${darkMode ? 'from-purple-400 to-violet-400' : 'from-purple-600 to-violet-600'} bg-clip-text text-transparent`}>Modern & Powerful</span>
                    </h2>
                    <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                        Menggunakan tools dan framework terbaik untuk hasil optimal
                    </p>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-hidden py-8"
                        style={{
                            scrollBehavior: 'auto',
                            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
                        }}
                    >
                        {[...techStack, ...techStack].map((tech, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedTech(tech)}
                                className={`cursor-pointer flex-shrink-0 w-64 ${darkMode ? 'bg-gradient-to-br from-purple-900/40 to-purple-800/40 hover:from-purple-800/60 hover:to-purple-700/60' : 'bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/30 hover:border-purple-400/50' : 'border-purple-300/40 hover:border-purple-400/60'} shadow-2xl hover:shadow-purple-500/40 p-8 transition-all duration-500 group flex flex-col items-center justify-center relative overflow-hidden`}
                                style={{
                                    transform: 'perspective(1000px) rotateY(0deg)',
                                    transformStyle: 'preserve-3d',
                                    backdropFilter: 'blur(40px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                                }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const centerX = rect.width / 2;
                                    const rotateY = (x - centerX) / 10;
                                    e.currentTarget.style.transform = `perspective(1000px) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0px) scale(1)';
                                }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-6 group-hover:scale-110 transition-all duration-300 drop-shadow-2xl`}
                                    style={{ filter: 'drop-shadow(0 10px 20px rgba(168, 85, 247, 0.3))' }}>
                                    {tech.icon}
                                </div>
                                <p className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                    {tech.name}
                                </p>
                                <p className={`text-sm text-center ${darkMode ? 'text-purple-300' : 'text-purple-600'} font-semibold px-3 py-1 rounded-full ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                                    {tech.category}
                                </p>

                                <div className={`mt-4 text-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                    Click untuk detail
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack Popup Modal */}
            {selectedTech && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
                    onClick={() => setSelectedTech(null)}
                    style={{
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)'
                    }}
                >
                    <div
                        className={`relative max-w-2xl w-full ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-2xl rounded-[2.5rem] border ${darkMode ? 'border-purple-500/30' : 'border-purple-300/40'} shadow-2xl p-10 transform transition-all duration-500 scale-100`}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backdropFilter: 'blur(40px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                            animation: 'modalSlideIn 0.5s ease-out'
                        }}
                    >
                        <button
                            onClick={() => setSelectedTech(null)}
                            className={`absolute top-6 right-6 w-12 h-12 rounded-2xl ${darkMode ? 'bg-purple-500/20 hover:bg-purple-500/30' : 'bg-purple-100 hover:bg-purple-200'} flex items-center justify-center transition-all hover:scale-110`}
                        >
                            <CloseIcon className={`w-6 h-6 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`} />
                        </button>

                        <div className="text-center mb-8">
                            <div className={`inline-flex ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-6`}
                                style={{ filter: 'drop-shadow(0 15px 30px rgba(168, 85, 247, 0.4))' }}>
                                {selectedTech.icon}
                            </div>
                            <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                {selectedTech.name}
                            </h3>
                            <span className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-600'} text-sm font-semibold`}>
                                {selectedTech.category}
                            </span>
                        </div>

                        <div className={`${darkMode ? 'bg-purple-500/10' : 'bg-purple-50'} rounded-2xl p-6 mb-6`}>
                            <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Deskripsi</h4>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                {selectedTech.description}
                            </p>
                        </div>

                        <div className={`${darkMode ? 'bg-purple-500/10' : 'bg-purple-50'} rounded-2xl p-6 mb-6`}>
                            <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Keunggulan</h4>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                {selectedTech.details}
                            </p>
                        </div>

                        <div>
                            <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Use Cases</h4>
                            <div className="flex flex-wrap gap-3">
                                {selectedTech.useCases.map((useCase, index) => (
                                    <span key={index} className={`px-4 py-2 rounded-xl ${darkMode ? 'bg-purple-500/20 text-purple-300 border-purple-400/20' : 'bg-purple-50 text-purple-600 border-purple-200/50'} text-sm font-medium border`}>
                                        {useCase}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
        </section>
    );
}
