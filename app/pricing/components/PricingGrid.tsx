"use client";

import { CheckCircle2, X, PlusCircle } from "lucide-react";

export default function PricingGrid() {
  const plans = [
    {
      name: "Paket Landing Page",
      desc: "Solusi cepat untuk profil diri atau promosi produk tunggal.",
      price: "1.500.000",
      features: [
        { text: "1 Halaman Landing Page", available: true },
        { text: "Desain Mobile Responsif", available: true },
        { text: "Optimasi SEO On-Page", available: true },
        { text: "Integrasi WhatsApp", available: true },
        { text: "Sertifikat SSL (HTTPS)", available: true },
        { text: "Domain .com (1 Tahun)", available: true },
        { text: "Sistem Admin/CMS", available: false },
      ],
      extraNote: "Tambahan Halaman/Fitur 100rb"
    },
    {
      name: "Paket Bisnis & UMKM",
      desc: "Terbaik untuk meningkatkan kredibilitas bisnis profesional.",
      price: "3.500.000",
      isPopular: true,
      features: [
        { text: "Hingga 7 Halaman Utama", available: true },
        { text: "Integrasi CMS (Edit Konten)", available: true },
        { text: "Desain UI/UX Eksklusif", available: true },
        { text: "Email Bisnis Profesional", available: true },
        { text: "Kecepatan Hosting Tinggi", available: true },
        { text: "Analitik Google & Facebook Pixel", available: true },
        { text: "Fitur E-Commerce", available: false },
      ],
      extraNote: "Tambahan Fitur 100rb"
    },
    {
      name: "Paket Custom & Shop",
      desc: "Infrastruktur khusus untuk skala besar dan toko online.",
      price: "7.500.000",
      features: [
        { text: "Halaman Tak Terbatas", available: true },
        { text: "Sistem E-Commerce Lengkap", available: true },
        { text: "Integrasi Payment Gateway", available: true },
        { text: "Optimasi SEO Lanjutan", available: true },
        { text: "Manajer Proyek Khusus", available: true },
        { text: "Maintenance 12 Bulan", available: true },
        { text: "API Kustom / App Integration", available: true },
      ],
      extraNote: "Biaya sesuai tingkat kerumitan"
    }
  ];

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7f13ec] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7f13ec] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Investasi Digital <span className="text-[#7f13ec]">Terbaik</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Pilih paket yang sesuai dengan skala bisnis Anda. Transparan, profesional, dan siap membantu Anda tumbuh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] ${
                plan.isPopular
                  ? 'bg-white border-2 border-[#7f13ec] shadow-2xl shadow-[#7f13ec]/20 relative z-10'
                  : 'bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#7f13ec] text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-lg shadow-[#7f13ec]/40">
                  REKOMENDASI UTAMA
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-3 ${plan.isPopular ? 'text-[#7f13ec]' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-start">
                  <span className="text-lg font-bold text-slate-900 mt-1">Rp</span>
                  <span className="text-5xl font-black text-slate-900 tracking-tighter mx-1">
                    {plan.price}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mt-2 italic font-medium">Sekali bayar / Paket awal</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${feature.available ? 'text-slate-700' : 'text-slate-300'}`}>
                    {feature.available ? (
                      <CheckCircle2 className="w-5 h-5 text-[#7f13ec] shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.available ? 'font-medium' : 'line-through'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note for additional costs */}
              <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-dashed border-slate-200 flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-[#7f13ec]" />
                <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  {plan.extraNote}
                </span>
              </div>

              <button
                className={`w-full py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[#7f13ec] text-white hover:bg-[#5e0eb0] hover:shadow-xl hover:shadow-[#7f13ec]/40'
                    : 'bg-slate-900 text-white hover:bg-black'
                }`}
              >
                {index === 2 ? 'Konsultasi Sekarang' : 'Pesan Paket Ini'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}