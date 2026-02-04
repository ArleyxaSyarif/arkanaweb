'use client';

import { CheckCircle } from 'lucide-react';

export default function HeroCustom() {
    return (
        <header className="relative w-full overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7f13ec]/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Hero Content */}
                    <div className="flex-1 flex flex-col gap-8 text-center lg:text-left z-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f13ec]/10 w-fit mx-auto lg:mx-0">
                                <span className="w-2 h-2 rounded-full bg-[#7f13ec] animate-pulse"></span>
                                <span className="text-xs font-bold text-[#7f13ec] tracking-wide uppercase">Pengembangan Premium</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#140d1b]">
                                Pengembangan Web <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-purple-400">Kustom</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Pengalaman digital yang disesuaikan untuk skala, performa, dan dampak. Kami mengubah kebutuhan kompleks menjadi solusi web yang elegan dan berkinerja tinggi.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="h-12 px-8 rounded-lg bg-[#7f13ec] hover:bg-[#7f13ec]/90 text-white font-bold text-base transition-all hover:shadow-[0_0_15px_rgba(127,19,236,0.3)] transform hover:-translate-y-0.5">
                                Lihat Portfolio
                            </button>
                            <button className="h-12 px-8 rounded-lg border border-[#ede7f3] bg-white text-[#140d1b] hover:bg-gray-50 font-bold text-base transition-all">
                                Proses Kami
                            </button>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500 pt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-[#7f13ec] w-5 h-5" />
                                <span>Skalabel</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-[#7f13ec] w-5 h-5" />
                                <span>Aman</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-[#7f13ec] w-5 h-5" />
                                <span>Cepat</span>
                            </div>
                        </div>
                    </div>
                    {/* Hero Image */}
                    <div className="flex-1 w-full lg:h-auto min-h-[300px] relative z-0">
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            {/* Decorative blurred blobs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
                            {/* Main Image Container */}
                            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_HmTM5cUAV02KV9ZdqsZFvDGZjIyoWsKY6Xhi5HaTxaXM9gBSqTF6-6dLRMthLfAQ9XpcAOyk9pFppshoQw6I-6XaATf5aFErawWkbBJA1rHqGJDn-VeBXs435eBtsMfAQZu6wJiEaQHo6ruZzmmTebE8xtBDo_3XcYpaY72Pp1RF2d2NgiJslf7-uoxVud2yI3hGq2w9vaYj55vDUUZZmdFQ7psmkCmLD2zmRdOqVQxHczAWZACKwbBmsRh4bQDF_g5E1PFvVY')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#f7f6f8]/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
