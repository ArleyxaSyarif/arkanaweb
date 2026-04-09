'use client';

import { ArrowRight, Rocket, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white text-[#140d1b] font-sans pb-10">
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

            <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-8 lg:pb-32 lg:pt-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="flex flex-col gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
                    <div className="inline-flex items-center gap-2 self-center lg:self-start bg-[#7f13ec]/5 border border-[#7f13ec]/10 rounded-full px-4 py-1.5 transition-colors hover:bg-[#7f13ec]/10 cursor-pointer group">
                        <span className="flex h-2 w-2 rounded-full bg-[#7f13ec] animate-pulse"></span>
                        <span className="text-[#7f13ec] text-xs font-bold uppercase tracking-wide">Solusi Digital.</span>
                        <ArrowRight className="w-4 h-4 text-[#7f13ec] transition-transform group-hover:translate-x-1" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl/tight font-extrabold text-[#140d1b] tracking-tight">
                        Bangun Website Profesional dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-[#a855f7]">Arkana Web</span>
                    </h1>
                    <p className="text-lg text-[#5e5864] leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Arkana Web mengedepankan kejujuran dan komitmen penuh untuk Anda.
                        Anda bisa pantau progres pembuatan website kapan saja, karena bagi kami, kepercayaan Anda adalah prioritas yang paling utama.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                        <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#7f13ec] hover:bg-[#6b10c6] text-white h-12 px-8 rounded-lg font-bold text-base transition-all shadow-[0_0_40px_-10px_rgba(127,19,236,0.3)] hover:shadow-lg hover:-translate-y-1">
                            <span>Hubungi Kami</span>
                            <Rocket className="w-5 h-5" />
                        </Link>
                        <Link href="/pricing" className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#140d1b] h-12 px-8 rounded-lg font-bold text-base hover:bg-gray-50 transition-colors">
                            <BarChart3 className="w-5 h-5 text-[#7f13ec]" />
                            <span>Analisis Kalkulator</span>
                        </Link>
                    </div>

                </div>

                <div className="relative z-10 mt-10 lg:mt-0 group perspective-1000">
                    <div className="relative w-full rounded-2xl border border-white/50 shadow-2xl overflow-hidden transition-transform duration-700 hover:scale-[1.02] bg-white flex flex-col">
                        {/* Browser Header Mockup */}
                        <div className="h-10 w-full bg-white border-b border-gray-100 flex items-center px-4 gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <div className="flex-1 flex justify-center pr-10">
                                <div className="h-5 w-2/3 max-w-[200px] bg-gray-50 rounded-full text-[10px] text-gray-400 flex items-center justify-center border border-gray-100/50">
                                    arkanaweb.com
                                </div>
                            </div>
                        </div>
                        <img 
                            src="/projek/hero/hero.png" 
                            alt="Arkana Web Dashboard" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Decorative Blobs */}
                    <div className="absolute -top-10 right-0 lg:-right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-10 left-0 lg:-left-10 w-40 h-40 bg-[#7f13ec] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>
            </div>
        </section>
    );
}
