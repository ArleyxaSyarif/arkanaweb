'use client';

import { ArrowRight, Rocket, PlayCircle, BarChart3, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white text-[#140d1b] font-sans pb-20 pt-4 lg:pt-10">
            {/* Custom Styles for Animations & Background Pattern */}
            <style jsx>{`
                .bg-pattern {
                    background-image: radial-gradient(#7f13ec 0.5px, transparent 0.5px), radial-gradient(#7f13ec 0.5px, #ffffff 0.5px);
                    background-size: 20px 20px;
                    background-position: 0 0, 10px 10px;
                    opacity: 0.03;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float-slow {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 5s ease-in-out 2s infinite;
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-pattern"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7f13ec]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7f13ec]/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="flex flex-col gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
                    <div className="inline-flex items-center gap-2 self-center lg:self-start bg-[#7f13ec]/5 border border-[#7f13ec]/10 rounded-full px-4 py-1.5 transition-colors hover:bg-[#7f13ec]/10 cursor-pointer group">
                        <span className="flex h-2 w-2 rounded-full bg-[#7f13ec] animate-pulse"></span>
                        <span className="text-[#7f13ec] text-xs font-bold uppercase tracking-wide">Fitur Baru v2.0</span>
                        <ArrowRight className="w-4 h-4 text-[#7f13ec] transition-transform group-hover:translate-x-1" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl/tight font-extrabold text-[#140d1b] tracking-tight">
                        Transformasi Alur Kerja Anda dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-[#a855f7]">Desain Cerdas</span>
                    </h1>
                    <p className="text-lg text-[#5e5864] leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Berhenti membuang waktu pada proses manual. Platform berbasis AI kami membantu Anda membangun, mengembangkan, dan mengelola produk digital Anda lebih cepat dan lebih cerdas dari sebelumnya.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                        <button className="flex items-center justify-center gap-2 bg-[#7f13ec] hover:bg-[#6b10c6] text-white h-12 px-8 rounded-lg font-bold text-base transition-all shadow-[0_0_40px_-10px_rgba(127,19,236,0.3)] hover:shadow-lg hover:-translate-y-1">
                            <span>Mulai Sekarang</span>
                            <Rocket className="w-5 h-5" />
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#140d1b] h-12 px-8 rounded-lg font-bold text-base hover:bg-gray-50 transition-colors">
                            <PlayCircle className="w-5 h-5 text-[#7f13ec]" />
                            <span>Tonton Demo</span>
                        </button>
                    </div>
                    <div className="pt-8 border-t border-gray-100 mt-4">
                        <p className="text-sm font-medium text-[#5e5864] mb-4">Dipercaya oleh tim inovatif di</p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="h-6 w-auto text-[#7f13ec]">
                                <svg className="h-full w-auto fill-current" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H90 V10 H65 V12 H85 V17 H65 V25 H60 Z"></path></svg>
                            </div>
                            <div className="h-6 w-auto text-[#7f13ec]">
                                <svg className="h-full w-auto fill-current" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="10"></circle><rect height="20" width="20" x="35" y="5"></rect><polygon points="70,25 80,5 90,25"></polygon></svg>
                            </div>
                            <div className="h-6 w-auto text-[#7f13ec]">
                                <svg className="h-full w-auto fill-current" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><path d="M10,5 Q30,25 50,5 T90,5" fill="none" stroke="currentColor" strokeWidth="5"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-10 lg:mt-0 perspective-1000 group">
                    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-gradient-to-tr from-[#f3e8ff] to-white rounded-2xl border border-white/50 shadow-2xl overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
                        <div className="absolute inset-0 p-6 flex flex-col gap-4">
                            <div className="h-12 w-full bg-white rounded-lg flex items-center px-4 gap-3 shadow-sm border border-gray-50">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="h-2 w-32 bg-gray-100 rounded-full ml-4"></div>
                            </div>
                            <div className="flex-1 flex gap-4">
                                {/* Sidebar Mockup */}
                                <div className="hidden sm:block w-1/4 h-full bg-white rounded-lg shadow-sm border border-gray-50 p-4 flex flex-col gap-3">
                                    <div className="h-2 w-16 bg-gray-100 rounded-full mb-2"></div>
                                    <div className="h-8 w-full bg-[#7f13ec]/10 rounded mb-2"></div>
                                    <div className="h-2 w-full bg-gray-50 rounded-full"></div>
                                    <div className="h-2 w-3/4 bg-gray-50 rounded-full"></div>
                                    <div className="h-2 w-5/6 bg-gray-50 rounded-full"></div>
                                </div>
                                {/* Main Content Mockup */}
                                <div className="flex-1 h-full bg-white rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden group-hover:shadow-[0_0_40px_-10px_rgba(127,19,236,0.3)] transition-shadow duration-500">
                                    {/* Abstract Dashboard Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-_AoWqTMbdDBwsgkGAQkcCTe2B37caXBW3DjJQVd42dPOc-61pXI51JYUO81c1zbkHbzQGdkcGxbgOxubc0G3EJXDthVmw3vUmlExdF42C_umtz82qtfVB8eGcJgUU5WJSahjXym47K9n3To0KI1qmPujDkX6VLBQWCsgnIlw8AXJ7QBVUhKCY3lbeOP091w7xtHxtyGZNND3fVgkpf3ZMt6Ivu8_PLnEcIEGXjKBkFK2bRXXmulHHNHkODvNTk0gljATx0OtdvY')",
                                            opacity: 0.9
                                        }}
                                    >
                                    </div>
                                    {/* Floating Card 1 */}
                                    <div className="absolute top-1/4 right-0 sm:-right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-48 animate-float-slow transform scale-90 sm:scale-100 z-20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-[#7f13ec]/20 flex items-center justify-center text-[#7f13ec]">
                                                <BarChart3 className="w-3.5 h-3.5" />
                                            </div>
                                            <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                        </div>
                                        <div className="h-16 w-full bg-gray-50 rounded-lg flex items-end justify-between px-2 pb-2 gap-1">
                                            <div className="w-2 h-4 bg-[#7f13ec]/40 rounded-sm"></div>
                                            <div className="w-2 h-8 bg-[#7f13ec]/60 rounded-sm"></div>
                                            <div className="w-2 h-6 bg-[#7f13ec]/40 rounded-sm"></div>
                                            <div className="w-2 h-10 bg-[#7f13ec] rounded-sm"></div>
                                            <div className="w-2 h-5 bg-[#7f13ec]/40 rounded-sm"></div>
                                        </div>
                                    </div>
                                    {/* Floating Card 2 */}
                                    <div className="absolute bottom-1/4 left-0 sm:-left-6 bg-white p-3 rounded-xl shadow-xl border border-gray-100 w-40 animate-float-delayed transform scale-90 sm:scale-100 z-20">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-bold text-gray-500">Tugas</span>
                                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded border border-gray-300"></div>
                                                <div className="h-1.5 w-20 bg-gray-200 rounded"></div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded bg-[#7f13ec] flex items-center justify-center text-[8px] text-white">✓</div>
                                                <div className="h-1.5 w-16 bg-gray-200 rounded opacity-50"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Blob behind image */}
                    <div className="absolute -top-10 right-0 lg:-right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-10 left-0 lg:-left-10 w-40 h-40 bg-[#7f13ec] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>
            </div>
        </section>
    );
}
