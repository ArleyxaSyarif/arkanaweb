'use client';

export default function HeroProfile() {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-10">
            <div className="@container">
                <div className="flex flex-col-reverse gap-6 py-10 @[480px]:gap-12 @[864px]:flex-row @[864px]:items-center">
                    <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 flex-1">
                        <div className="flex flex-col gap-4 text-left">
                            <h1 className="text-[#140d1b] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl">
                                Elegan Bertemu Profesionalisme
                            </h1>
                            <h2 className="text-[#734c9a] text-base font-normal leading-relaxed @[480px]:text-lg">
                                Membangun markas digital yang menceritakan kisah unik merek Anda. Kami spesialis dalam membangun kepercayaan melalui desain yang sempurna dan pengalaman pengguna yang mulus.
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#7f13ec] hover:bg-[#7f13ec]/90 transition-all shadow-lg shadow-[#7f13ec]/30 text-white text-base font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Mulai Proyek Anda</span>
                            </button>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#7f13ec]/10 hover:bg-[#7f13ec]/20 transition-all text-[#7f13ec] text-base font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Lihat Portofolio</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex-1 flex justify-center items-center">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#7f13ec]/20 bg-gradient-to-br from-gray-100 to-gray-200 border border-[#dbcfe7] group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#7f13ec]/10 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
