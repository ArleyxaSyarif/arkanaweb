'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactSectionProps {
    darkMode?: boolean;
}

export default function ContactSection({ darkMode = false }: ContactSectionProps) {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className={`${darkMode ? 'bg-gradient-to-br from-purple-900/40 to-violet-900/40' : 'bg-gradient-to-br from-purple-100/60 to-violet-100/60'} backdrop-blur-2xl rounded-[2.5rem] border ${darkMode ? 'border-purple-500/20 shadow-2xl shadow-purple-500/10' : 'border-purple-200/30 shadow-2xl shadow-purple-200/20'} p-10 md:p-16`}
                    style={{
                        backdropFilter: 'blur(40px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                    }}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-xl border border-purple-300/20">
                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                            <span className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} text-sm font-semibold`}>
                                Hubungi Kami
                            </span>
                        </div>
                        <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Mari Mulai <span className={`bg-gradient-to-r ${darkMode ? 'from-purple-400 to-violet-400' : 'from-purple-600 to-violet-600'} bg-clip-text text-transparent`}>Project Anda</span>
                        </h2>
                        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                            Konsultasi gratis untuk membahas kebutuhan website bisnis Anda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className={`group ${darkMode ? 'bg-gray-900/40 hover:bg-gray-900/60' : 'bg-white/40 hover:bg-white/60'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-xl p-8 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                            style={{
                                backdropFilter: 'blur(40px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                            }}>
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all`}>
                                <Mail className="w-9 h-9 text-white" />
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>info@arkanawebsite.com</p>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>support@arkanawebsite.com</p>
                        </div>

                        <div className={`group ${darkMode ? 'bg-gray-900/40 hover:bg-gray-900/60' : 'bg-white/40 hover:bg-white/60'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-xl p-8 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                            style={{
                                backdropFilter: 'blur(40px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                            }}>
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all`}>
                                <Phone className="w-9 h-9 text-white" />
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Telepon</h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>+62 812-3456-7890</p>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Senin - Jumat: 09.00 - 18.00</p>
                        </div>

                        <div className={`group ${darkMode ? 'bg-gray-900/40 hover:bg-gray-900/60' : 'bg-white/40 hover:bg-white/60'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-xl p-8 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                            style={{
                                backdropFilter: 'blur(40px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                            }}>
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all`}>
                                <MapPin className="w-9 h-9 text-white" />
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Alamat</h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Jakarta Selatan</p>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Indonesia 12345</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
