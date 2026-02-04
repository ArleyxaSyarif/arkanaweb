'use client';

import { Activity, Zap, Shield, Star } from 'lucide-react';

export default function ShowcaseLanding() {
    return (
        <section className="py-24 bg-[#f9fafb] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-[#140d1b] mb-4">Showcase Desain</h2>
                        <p className="text-gray-500 max-w-xl">
                            Kami tidak hanya membangun halaman; kami merekayasa pengalaman. Jelajahi landing page fidelitas tinggi terbaru yang dirancang untuk keterlibatan maksimal.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-[#140d1b]">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span> Live
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-[#140d1b]">
                            <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Responsif
                        </span>
                    </div>
                </div>
                {/* Browser Mockup */}
                <div className="relative mx-auto max-w-5xl rounded-xl shadow-2xl shadow-gray-200 bg-white overflow-hidden border border-gray-200">
                    {/* Browser Header */}
                    <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="inline-block px-3 py-0.5 rounded-md bg-white border border-gray-200 text-[10px] text-gray-400 font-mono">
                                agency-demo.com/saas-platform
                            </div>
                        </div>
                    </div>
                    {/* Scrollable Content Area */}
                    <div className="h-[600px] overflow-y-auto relative bg-white custom-scrollbar">
                        {/* Simulated Landing Page Content */}
                        {/* Hero of Showcase */}
                        <div className="relative h-[500px] w-full bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center text-center p-10">
                            <div className="max-w-2xl">
                                <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-4 backdrop-blur-sm">Rilis Fitur Baru v2.0</div>
                                <h3 className="text-4xl font-bold text-white mb-4">Analitik untuk Web Modern</h3>
                                <p className="text-indigo-200 mb-8">Berhenti menebak. Mulai tumbuh. Satu-satunya platform yang Anda butuhkan.</p>
                                <button className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg shadow-lg">Mulai Uji Coba Gratis</button>
                            </div>
                        </div>
                        {/* Features of Showcase */}
                        <div className="grid grid-cols-3 gap-8 p-16 bg-white">
                            <div className="h-40 rounded-lg bg-gray-50 border border-gray-100 p-6">
                                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4 flex items-center justify-center">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                            </div>
                            <div className="h-40 rounded-lg bg-gray-50 border border-gray-100 p-6">
                                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 mb-4 flex items-center justify-center">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                            </div>
                            <div className="h-40 rounded-lg bg-gray-50 border border-gray-100 p-6">
                                <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-600 mb-4 flex items-center justify-center">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                        {/* Testimonial Strip of Showcase */}
                        <div className="py-16 bg-gray-50 flex justify-center">
                            <div className="text-center max-w-xl px-4">
                                <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                                <p className="text-lg font-medium text-gray-800 italic">"Platform ini merevolusi cara kami melacak data pengguna. Benar-benar penting."</p>
                            </div>
                        </div>
                        {/* Footer of Showcase */}
                        <div className="py-10 bg-gray-900 text-gray-400 text-center text-sm">
                            <div className="flex justify-center gap-6 mb-4">
                                <span>Produk</span>
                                <span>Perusahaan</span>
                                <span>Sumber Daya</span>
                            </div>
                            <p>© 2023 Mockup Inc. Hak cipta dilindungi.</p>
                        </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg border border-gray-200 p-3 flex items-center gap-3 animate-bounce">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-bold text-gray-800">Scroll untuk menjelajah</span>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
            `}</style>
        </section>
    );
}
