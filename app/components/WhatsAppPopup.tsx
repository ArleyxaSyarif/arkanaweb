'use client';

import { MessageCircle, Send, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function WhatsAppPopup() {
    const phoneNumber = "62895398678090"; // Ganti dengan nomor WA kamu
    const message = "Halo Arkana Web, saya ingin tanya tentang progres/jasa pembuatan website.";
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Sembunyikan di halaman pricing
    if (pathname === '/pricing') return null;
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">


            {isOpen && (


                <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
                    {/* Header Popup */}
                    <div className="bg-[#075E54] p-4 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {/* Avatar Admin Tiruan */}
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold relative">
                                AW
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full"></span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Arkana Web Admin</h4>
                                <p className="text-xs text-emerald-200">Online / Standby</p>
                            </div>
                        </div>
                        {/* Tombol Close Popup */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/10 p-1 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Body/Isi Chat */}
                    <div className="p-4 bg-[#E5DDD5] min-h-[100px] flex flex-col justify-end">
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm text-slate-800">
                            <p className="font-semibold text-xs text-emerald-600 mb-1">Admin Arkana</p>
                            Halo! Ada yang bisa kami bantu mengenai progres atau jasa pembuatan website? Silakan chat di sini ya. 😊
                        </div>
                    </div>

                    {/* Footer / Tombol Action Menuju WA */}
                    <div className="p-3 bg-white border-t border-slate-100">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)} // Otomatis tutup popup setelah klik
                            className="bg-[#25D366] hover:bg-[#20ba56] text-white font-medium text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors w-full shadow-md"
                        >
                            <Send className="w-4 h-4" />
                            Mulai Chat di WhatsApp
                        </a>
                    </div>
                </div>
            )}


            {/* ====== TOMBOL UTAMA WHATSAPP ====== */}
            <div className="flex flex-col items-end gap-2 group">
                {/* Tooltip - Hanya muncul jika popup sedang tertutup & di-hover */}
                {!isOpen && (
                    <div className="bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-2xl shadow-xl border border-slate-100 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Konsultasi / Cek Progres? **Chat di sini**
                    </div>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center relative focus:outline-none"
                >
                    {/* Efek Ping (Hanya aktif kalau popup tertutup) */}
                    {!isOpen && (
                        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
                    )}

                    <MessageCircle className="w-8 h-8 relative z-10" />
                </button>
            </div>

        </div>
    );
}