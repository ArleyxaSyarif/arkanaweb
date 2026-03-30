'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppPopup() {
    const phoneNumber = "62895398678090"; // Ganti dengan nomor WA kamu
    const message = "Halo Arkana Web, saya ingin tanya tentang progres/jasa pembuatan website.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
            {/* Balon Teks (Tooltip) - Muncul saat hover atau otomatis */}
            <div className="bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-2xl shadow-xl border border-slate-100 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Konsultasi / Cek Progres? **Chat di sini**
            </div>

            {/* Tombol WhatsApp */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center relative"
            >
                {/* Efek Ping (Nandain Admin Online/Standby) */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20"></span>

                <MessageCircle className="w-8 h-8 relative z-10" />
            </a>
        </div>
    );
}