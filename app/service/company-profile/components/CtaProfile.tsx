'use client';

export default function CtaProfile() {
    return (
        <section className="w-full bg-[#7f13ec]/5 mt-10 py-20 px-4">
            <div className="max-w-[800px] mx-auto text-center flex flex-col gap-6 items-center">
                <h2 className="text-[#140d1b] text-3xl md:text-4xl font-black">Siap meningkatkan kehadiran digital Anda?</h2>
                <p className="text-[#734c9a] max-w-lg">Profil perusahaan Anda adalah jabat tangan digital Anda. Mari buat menjadi tegas, profesional, dan tak terlupakan.</p>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#7f13ec] hover:bg-[#7f13ec]/90 transition-all shadow-lg shadow-[#7f13ec]/30 text-white text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Dapatkan Penawaran Hari Ini</span>
                </button>
            </div>
        </section>
    );
}
