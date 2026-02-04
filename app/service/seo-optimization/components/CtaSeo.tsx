'use client';

export default function CtaSeo() {
    return (
        <section className="bg-[#f7f6f8] py-20 px-4">
            <div className="max-w-[800px] mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-black text-[#140d1b] mb-6">Siap mendominasi ceruk pasar Anda?</h2>
                <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">Dapatkan audit SEO komprehensif untuk website Anda hari ini. Tanpa kewajiban apa pun.</p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
                    <input className="flex-1 h-12 rounded-lg border border-gray-300 bg-white px-4 text-[#140d1b] focus:outline-none focus:ring-2 focus:ring-[#7f13ec]/50 transition-shadow" placeholder="Masukkan URL website Anda" type="text" />
                    <button className="h-12 px-6 rounded-lg bg-[#7f13ec] hover:bg-[#7f13ec]/90 text-white font-bold whitespace-nowrap shadow-lg shadow-[#7f13ec]/25 transition-all" type="button">
                        Analisis Sekarang
                    </button>
                </form>
                <p className="text-xs text-gray-400 mt-4">Konsultasi gratis 30 menit disertakan dengan audit.</p>
            </div>
        </section>
    );
}
