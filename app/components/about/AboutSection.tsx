'use client';

import React from 'react';
import { Shield, Users, Zap } from 'lucide-react';

interface AboutSectionProps {
  darkMode?: boolean;
}

export default function AboutSection({ darkMode = false }: AboutSectionProps) {
  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Keamanan Terjamin",
      description: "SSL certificate, enkripsi data, dan proteksi dari serangan cyber"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performa Optimal",
      description: "Loading cepat dengan optimasi gambar dan caching"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Support 24/7",
      description: "Tim support yang siap membantu kapan saja"
    }
  ];

  return (
    <div className={`transition-colors duration-500 relative overflow-hidden`} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif" }}>

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`${darkMode ? 'bg-gray-900/30' : 'bg-white/30'} backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] border ${darkMode ? 'border-purple-500/20 shadow-2xl shadow-purple-500/10' : 'border-purple-200/30 shadow-2xl shadow-purple-200/20'} p-6 sm:p-10 md:p-16`}
              style={{
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)'
              }}>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-xl border border-purple-300/20">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                    <span className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} text-sm font-semibold`}>
                      Tentang Kami
                    </span>
                  </div>
                  <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                    Mitra Terpercaya untuk <span className={`bg-gradient-to-r ${darkMode ? 'from-purple-400 to-violet-400' : 'from-purple-600 to-violet-600'} bg-clip-text text-transparent`}>Transformasi Digital</span>
                  </h2>
                  <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Arkana Website adalah penyedia jasa pembuatan website profesional yang berfokus pada kualitas, kecepatan, dan kepuasan klien. Dengan pengalaman bertahun-tahun, kami telah membantu ratusan bisnis untuk hadir secara digital dengan tampilan yang memukau.
                  </p>
                  <p className={`text-lg mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Kami menggunakan teknologi terkini dan mengikuti standar industri terbaik untuk memastikan website Anda tidak hanya indah dipandang, tetapi juga cepat, aman, dan mudah dikelola.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className={`${darkMode ? 'bg-purple-500/10 hover:bg-purple-500/15' : 'bg-purple-50 hover:bg-purple-100'} rounded-2xl p-5 text-center transition-all hover:scale-105 hover:shadow-xl border ${darkMode ? 'border-purple-400/10' : 'border-purple-200/30'}`}>
                        <div className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} flex justify-center mb-3`}>
                          {item.icon}
                        </div>
                        <h4 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                        <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30' : 'bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300'} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300`}
                    style={{
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                    }}>
                    <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-2 sm:mb-3`}>200+</h3>
                    <p className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Project Selesai</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30' : 'bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300'} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300`}
                    style={{
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                    }}>
                    <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-2 sm:mb-3`}>150+</h3>
                    <p className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Klien Puas</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30' : 'bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300'} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300`}
                    style={{
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                    }}>
                    <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-2 sm:mb-3`}>5+</h3>
                    <p className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tahun Pengalaman</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30' : 'bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300'} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300`}
                    style={{
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                    }}>
                    <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-2 sm:mb-3`}>24/7</h3>
                    <p className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}