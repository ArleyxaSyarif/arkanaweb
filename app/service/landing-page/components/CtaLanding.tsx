'use client';

export default function CtaLanding() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden bg-[#191022] text-white p-12 md:p-20 text-center">
                    {/* Background Decoration */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#7f13ec] rounded-full blur-[100px] opacity-40"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5e3aee] rounded-full blur-[100px] opacity-40"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Siap meluncurkan kampanye Anda berikutnya?</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mb-10">
                            Berhenti membuang uang dengan landing page di bawah standar. Dapatkan desain kustom yang mengubah pengunjung menjadi pelanggan setia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button className="h-14 px-10 bg-gradient-to-r from-[#7f13ec] to-[#5e3aee] hover:from-[#630ebb] hover:to-[#5e3aee] text-white text-lg font-bold rounded-lg shadow-xl shadow-[#7f13ec]/30 transition-all transform hover:scale-105">
                                Mulai Kampanye Anda
                            </button>
                            <button className="h-14 px-10 bg-transparent border border-gray-600 hover:bg-white/5 text-white text-lg font-bold rounded-lg transition-all">
                                Jadwalkan Panggilan
                            </button>
                        </div>
                        <p className="mt-6 text-sm text-gray-400">Tidak perlu kartu kredit untuk konsultasi awal.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
