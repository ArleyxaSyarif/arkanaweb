'use client';

import React from 'react';
import { Code2, Rocket, Palette, Check } from 'lucide-react';

interface ServiceSectionProps {
    darkMode?: boolean;
}

export default function ServiceSection({ darkMode = false }: ServiceSectionProps) {
    const services = [
        {
            title: "Website Company Profile",
            description: "Buat kesan profesional dengan website company profile yang elegan dan informatif untuk meningkatkan kredibilitas perusahaan",
            icon: <Code2 className="w-12 h-12" />,
            features: ["Desain Custom", "Responsive", "SEO Friendly"],
            gradient: "from-purple-500 to-purple-700"
        },
        {
            title: "E-Commerce",
            description: "Tingkatkan penjualan online dengan toko digital yang user-friendly, aman, dan terintegrasi dengan payment gateway",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            ),
            features: ["Payment Gateway", "Admin Panel", "Mobile App"],
            gradient: "from-purple-600 to-purple-800"
        },
        {
            title: "Landing Page",
            description: "Konversi pengunjung menjadi customer dengan landing page yang menarik dan fokus pada call-to-action",
            icon: <Rocket className="w-12 h-12" />,
            features: ["High Conversion", "Fast Loading", "A/B Testing"],
            gradient: "from-purple-500 to-violet-700"
        },
        {
            title: "Web Application",
            description: "Solusi custom untuk kebutuhan bisnis dengan aplikasi web yang powerful, scalable, dan mudah digunakan",
            icon: <Palette className="w-12 h-12" />,
            features: ["Custom Feature", "Scalable", "Cloud Ready"],
            gradient: "from-purple-600 to-violet-800"
        }
    ];

    return (
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-xl border border-purple-300/20">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                        <span className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} text-sm font-semibold`}>
                            Layanan Kami
                        </span>
                    </div>
                    <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Solusi Website untuk <span className={`bg-gradient-to-r ${darkMode ? 'from-purple-400 to-violet-400' : 'from-purple-600 to-violet-600'} bg-clip-text text-transparent`}>Setiap Kebutuhan</span>
                    </h2>
                    <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                        Dari company profile hingga e-commerce kompleks, kami siap mewujudkan website impian Anda
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative ${darkMode ? 'bg-gray-900/30 hover:bg-gray-900/50' : 'bg-white/30 hover:bg-white/50'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-2xl p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/20`}
                            style={{
                                backdropFilter: 'blur(40px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                                transform: 'perspective(1000px) rotateX(0deg)',
                            }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const centerX = rect.width / 2;
                                const centerY = rect.height / 2;
                                const rotateX = (y - centerY) / 20;
                                const rotateY = (centerX - x) / 20;
                                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/30`}>
                                {service.icon}
                            </div>
                            <h3 className={`text-3xl font-bold mb-5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {service.title}
                            </h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed text-lg`}>
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {service.features.map((feature, idx) => (
                                    <span key={idx} className={`px-4 py-2 rounded-xl ${darkMode ? 'bg-purple-500/20 text-purple-300 border-purple-400/20' : 'bg-purple-50 text-purple-600 border-purple-200/50'} text-sm font-semibold flex items-center gap-2 border`}>
                                        <Check className="w-4 h-4" />
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
