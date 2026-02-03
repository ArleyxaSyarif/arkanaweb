'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Mail, Phone, MapPin, Github, Linkedin, Instagram, ChevronLeft, ChevronRight, Code2, Palette, Rocket, Shield, Users, Zap, Check, ArrowRight, Sparkles, X as CloseIcon } from 'lucide-react';

export default function ArkanaWebsite() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTech, setSelectedTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef(null);
  const canvasRef = useRef(null);

  const heroSlides = [
    {
      title: "Website Profesional untuk Bisnis Anda",
      subtitle: "Tingkatkan brand awareness dengan website yang modern dan responsif",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
    },
    {
      title: "Desain Modern & User Friendly",
      subtitle: "UI/UX yang intuitif untuk pengalaman pengguna terbaik",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&h=600&fit=crop"
    },
    {
      title: "Optimasi SEO & Performa Tinggi",
      subtitle: "Website cepat dan mudah ditemukan di mesin pencari",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c203?w=1200&h=600&fit=crop"
    }
  ];

  // Animated gradient background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );

      if (darkMode) {
        gradient.addColorStop(0, 'rgba(88, 28, 135, 0.1)');
        gradient.addColorStop(0.5, 'rgba(67, 20, 100, 0.05)');
        gradient.addColorStop(1, 'rgba(17, 24, 39, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(196, 181, 253, 0.3)');
        gradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.15)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = darkMode 
          ? `rgba(168, 85, 247, ${particle.opacity})`
          : `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = darkMode
              ? `rgba(168, 85, 247, ${0.15 * (1 - distance / 150)})`
              : `rgba(139, 92, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 0.3;

    const autoScroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(autoScroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const services = [
    {
      title: "Website Company Profile",
      description: "Buat kesan profesional dengan website company profile yang elegan dan informatif untuk meningkatkan kredibilitas perusahaan",
      icon: <Code2 className="w-12 h-12" />,
      features: ["Desain Custom", "Responsive", "SEO Friendly"],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "E-Commerce",
      description: "Tingkatkan penjualan online dengan toko digital yang user-friendly, aman, dan terintegrasi dengan payment gateway",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
      features: ["Payment Gateway", "Admin Panel", "Mobile App"],
      gradient: "from-purple-600 to-purple-800"
    },
    {
      title: "Landing Page",
      description: "Konversi pengunjung menjadi customer dengan landing page yang menarik dan fokus pada call-to-action",
      icon: <Rocket className="w-12 h-12" />,
      features: ["High Conversion", "Fast Loading", "A/B Testing"],
      gradient: "from-purple-500 to-violet-700"
    },
    {
      title: "Web Application",
      description: "Solusi custom untuk kebutuhan bisnis dengan aplikasi web yang powerful, scalable, dan mudah digunakan",
      icon: <Palette className="w-12 h-12" />,
      features: ["Custom Feature", "Scalable", "Cloud Ready"],
      gradient: "from-purple-600 to-violet-800"
    }
  ];

  const techStack = [
    {
      name: "React",
      category: "Frontend",
      description: "Library JavaScript untuk membangun user interface yang interaktif dan dinamis dengan component-based architecture.",
      details: "React memungkinkan pengembangan UI yang cepat dan efisien dengan virtual DOM dan reusable components.",
      useCases: ["Single Page Applications", "Progressive Web Apps", "Interactive Dashboards"],
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="1.5"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    {
      name: "Next.js",
      category: "Framework",
      description: "Framework React dengan fitur server-side rendering dan static site generation untuk performa optimal.",
      details: "Next.js menyediakan routing otomatis, optimasi gambar, dan API routes untuk full-stack development.",
      useCases: ["E-commerce Sites", "Marketing Websites", "Enterprise Applications"],
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l7.5 3.45v8.42c0 4.24-2.88 8.21-7.5 9.68-4.62-1.47-7.5-5.44-7.5-9.68V7.63l7.5-3.45z"/>
          <path d="M11 7h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      description: "Utility-first CSS framework untuk styling yang cepat dan konsisten dengan design system yang powerful.",
      details: "Tailwind CSS memungkinkan pembuatan custom design tanpa meninggalkan HTML dengan utility classes.",
      useCases: ["Rapid Prototyping", "Custom Design Systems", "Responsive Layouts"],
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "Backend",
      description: "JavaScript runtime untuk server-side development dengan performa tinggi dan scalability.",
      details: "Node.js menggunakan event-driven architecture yang cocok untuk aplikasi real-time dan data-intensive.",
      useCases: ["REST APIs", "Real-time Applications", "Microservices"],
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0L10 19.65c-.08-.03-.16-.02-.21.02-.53.3-.63.36-1.12.51-.12.04-.31.11.04.31l2.11 1.25c.24.13.5.2.78.2.27 0 .54-.07.77-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2z"/>
        </svg>
      )
    },
    {
      name: "MongoDB",
      category: "Database",
      description: "NoSQL database yang fleksibel dan scalable untuk menyimpan data dalam format document-oriented.",
      details: "MongoDB cocok untuk aplikasi modern yang membutuhkan schema flexibility dan horizontal scaling.",
      useCases: ["Content Management", "User Profiles", "IoT Applications"],
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C11.175 2 9 6.43 9 10.98c0 3.87 1.12 6.47 2.11 8.27.13.24.26.47.39.68.13-.21.26-.44.39-.68.99-1.8 2.11-4.4 2.11-8.27C14 6.43 12.825 2 12 2zm-.5 18.08c-.42.42-.5 1.34-.5 1.92 0 0-.08-1.56.5-1.92z"/>
        </svg>
      )
    },
    {
      name: "TypeScript",
      category: "Language",
      description: "Superset JavaScript dengan static typing untuk code yang lebih reliable dan maintainable.",
      details: "TypeScript membantu mendeteksi error lebih awal dan meningkatkan developer experience dengan auto-completion.",
      useCases: ["Large Scale Applications", "Team Collaboration", "API Development"],
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm15.854 10.146a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L17.293 14H6.5a.5.5 0 0 1 0-1h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4z"/>
        </svg>
      )
    }
  ];

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
    <div className={`min-h-screen transition-colors duration-500 relative overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-white'}`} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif" }}>
      
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
        
        {/* Navbar with iOS-style blur */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'bg-white/70 dark:bg-gray-950/70' : 'bg-white/40 dark:bg-gray-950/40'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20 shadow-lg shadow-purple-500/5' : 'border-purple-200/30 shadow-lg shadow-purple-200/20'}`}
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)'
          }}>
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${darkMode ? 'from-purple-500 to-purple-700' : 'from-purple-500 to-purple-600'} flex items-center justify-center shadow-lg shadow-purple-500/30 transform hover:scale-110 transition-transform duration-300`}>
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Arkana <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Website</span>
                  </span>
                </div>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#home" className={`px-4 py-2 rounded-xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>Home</a>
                <a href="#about" className={`px-4 py-2 rounded-xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>About</a>
                <a href="#services" className={`px-4 py-2 rounded-xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>Services</a>
                <a href="#tech" className={`px-4 py-2 rounded-xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>Tech</a>
                <a href="#contact" className={`px-4 py-2 rounded-xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>Contact</a>
                
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2.5 rounded-2xl ${darkMode ? 'bg-purple-500/20 hover:bg-purple-500/30' : 'bg-purple-100 hover:bg-purple-200'} backdrop-blur-xl transition-all hover:scale-110 border ${darkMode ? 'border-purple-400/20' : 'border-purple-200/50'} shadow-lg`}
                  >
                    {darkMode ? <Sun className="w-5 h-5 text-purple-300" /> : <Moon className="w-5 h-5 text-purple-600" />}
                  </button>
                  
                  <a href="#contact" className={`px-6 py-2.5 rounded-2xl bg-gradient-to-r ${darkMode ? 'from-purple-500 to-purple-600' : 'from-purple-500 to-purple-600'} text-white font-semibold backdrop-blur-xl border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all hover:scale-105`}>
                    Get Started
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-2xl ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'} backdrop-blur-xl border ${darkMode ? 'border-purple-400/20' : 'border-purple-200/50'}`}
                >
                  {darkMode ? <Sun className="w-5 h-5 text-purple-300" /> : <Moon className="w-5 h-5 text-purple-600" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-2xl ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'} ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 mx-4 ${darkMode ? 'bg-gray-950/90' : 'bg-white/90'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-2xl p-6`}
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)'
            }}>
              <div className="flex flex-col space-y-2">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 rounded-2xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 rounded-2xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>About</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 rounded-2xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>Services</a>
                <a href="#tech" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 rounded-2xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>Tech Stack</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 rounded-2xl ${darkMode ? 'text-gray-300 hover:text-white hover:bg-purple-500/10' : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50'} transition-all font-medium`}>Contact</a>
                <a href="#contact" className={`mt-2 px-6 py-3 rounded-2xl bg-gradient-to-r ${darkMode ? 'from-purple-500 to-purple-600' : 'from-purple-500 to-purple-600'} text-white font-semibold text-center shadow-lg shadow-purple-500/30`}>
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section with Advanced Slider */}
        <section id="home" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`relative overflow-hidden rounded-[2.5rem] ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-violet-900/30' : 'bg-gradient-to-br from-purple-50/50 to-violet-50/50'} backdrop-blur-2xl border ${darkMode ? 'border-purple-500/20 shadow-2xl shadow-purple-500/10' : 'border-purple-200/30 shadow-2xl shadow-purple-200/20'}`}
            style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)'
            }}>
              <div className="relative h-[500px] md:h-[650px]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-purple-900/95 via-purple-800/90 to-violet-900/95' : 'from-purple-600/90 via-purple-500/85 to-violet-600/90'} z-10`} />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
                      <div className="text-center max-w-5xl">
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                          <Sparkles className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">Premium Web Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-purple-100 mb-10 font-light">
                          {slide.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <a href="#contact" className={`group px-10 py-4 rounded-2xl bg-white text-purple-600 font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2`}>
                            Konsultasi Gratis
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </a>
                          <a href="#services" className={`px-10 py-4 rounded-2xl bg-purple-500/20 text-white backdrop-blur-2xl border border-white/30 font-semibold text-lg shadow-2xl transition-all hover:scale-105 hover:bg-purple-500/30`}>
                            Lihat Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Slider Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                  }}
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                  }}
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
                
                {/* Slider Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-white w-10'
                          : 'bg-white/40 hover:bg-white/60 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`${darkMode ? 'bg-gray-900/30' : 'bg-white/30'} backdrop-blur-2xl rounded-[2.5rem] border ${darkMode ? 'border-purple-500/20 shadow-2xl shadow-purple-500/10' : 'border-purple-200/30 shadow-2xl shadow-purple-200/20'} p-10 md:p-16`}
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
                  <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                    Mitra Terpercaya untuk <span className={`bg-gradient-to-r ${darkMode ? 'from-purple-400 to-violet-400' : 'from-purple-600 to-violet-600'} bg-clip-text text-transparent`}>Transformasi Digital</span>
                  </h2>
                  <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Arkana Website adalah penyedia jasa pembuatan website profesional yang berfokus pada kualitas, kecepatan, dan kepuasan klien. Dengan pengalaman bertahun-tahun, kami telah membantu ratusan bisnis untuk hadir secara digital dengan tampilan yang memukau.
                  </p>
                  <p className={`text-lg mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Kami menggunakan teknologi terkini dan mengikuti standar industri terbaik untuk memastikan website Anda tidak hanya indah dipandang, tetapi juga cepat, aman, dan mudah dikelola.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
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
                
                <div className="grid grid-cols-2 gap-6">
                  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30' : 'bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300'} backdrop-blur-xl rounded-3xl p-10 border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300`}
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                  }}>
                    <h3 className={`text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-3`}>200+</h3>
                    <p className={`text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Project Selesai</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30' : 'bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300'} backdrop-blur-xl rounded-3xl p-10 border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300`}
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                  }}>
                    <h3 className={`text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-3`}>150+</h3>
                    <p className={`text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Klien Puas</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30' : 'bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300'} backdrop-blur-xl rounded-3xl p-10 border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300`}
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                  }}>
                    <h3 className={`text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-3`}>5+</h3>
                    <p className={`text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tahun Pengalaman</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30' : 'bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300'} backdrop-blur-xl rounded-3xl p-10 border ${darkMode ? 'border-purple-400/20' : 'border-purple-300/30'} shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300`}
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                  }}>
                    <h3 className={`text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'} mb-3`}>24/7</h3>
                    <p className={`text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-xl border border-purple-300/20">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                <span className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} text-sm font-semibold`}>
                  Layanan Kami
                </span>
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Solusi Website untuk <span className={`bg-gradient-to-r ${darkMode ? 'from-purple-400 to-violet-400' : 'from-purple-600 to-violet-600'} bg-clip-text text-transparent`}>Setiap Kebutuhan</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                Dari company profile hingga e-commerce kompleks, kami siap mewujudkan website impian Anda
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative ${darkMode ? 'bg-gray-900/30 hover:bg-gray-900/50' : 'bg-white/30 hover:bg-white/50'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-2xl p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/20`}
                  style={{
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    transform: 'perspective(1000px) rotateX(0deg)',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                  
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/30`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-3xl font-bold mb-5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed text-lg`}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className={`px-4 py-2 rounded-xl ${darkMode ? 'bg-purple-500/20 text-purple-300 border-purple-400/20' : 'bg-purple-50 text-purple-600 border-purple-200/50'} text-sm font-semibold flex items-center gap-2 border`}>
                        <Check className="w-4 h-4" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section with 3D Effect and Popup Modal */}
        <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-xl border border-purple-300/20">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                <span className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} text-sm font-semibold`}>
                  Technology Stack
                </span>
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Teknologi <span className={`bg-gradient-to-r ${darkMode ? 'from-purple-400 to-violet-400' : 'from-purple-600 to-violet-600'} bg-clip-text text-transparent`}>Modern & Powerful</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                Menggunakan tools dan framework terbaik untuk hasil optimal
              </p>
            </div>
            
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="flex gap-8 overflow-x-hidden py-8"
                style={{ 
                  scrollBehavior: 'auto',
                  maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
                }}
              >
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedTech(tech)}
                    className={`cursor-pointer flex-shrink-0 w-64 ${darkMode ? 'bg-gradient-to-br from-purple-900/40 to-purple-800/40 hover:from-purple-800/60 hover:to-purple-700/60' : 'bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/30 hover:border-purple-400/50' : 'border-purple-300/40 hover:border-purple-400/60'} shadow-2xl hover:shadow-purple-500/40 p-8 transition-all duration-500 group flex flex-col items-center justify-center relative overflow-hidden`}
                    style={{
                      transform: 'perspective(1000px) rotateY(0deg)',
                      transformStyle: 'preserve-3d',
                      backdropFilter: 'blur(40px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const centerX = rect.width / 2;
                      const rotateY = (x - centerX) / 10;
                      e.currentTarget.style.transform = `perspective(1000px) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0px) scale(1)';
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-6 group-hover:scale-110 transition-all duration-300 drop-shadow-2xl`}
                    style={{ filter: 'drop-shadow(0 10px 20px rgba(168, 85, 247, 0.3))' }}>
                      {tech.icon}
                    </div>
                    <p className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                      {tech.name}
                    </p>
                    <p className={`text-sm text-center ${darkMode ? 'text-purple-300' : 'text-purple-600'} font-semibold px-3 py-1 rounded-full ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                      {tech.category}
                    </p>
                    
                    <div className={`mt-4 text-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      Click untuk detail
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Popup Modal */}
        {selectedTech && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
            onClick={() => setSelectedTech(null)}
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <div 
              className={`relative max-w-2xl w-full ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-2xl rounded-[2.5rem] border ${darkMode ? 'border-purple-500/30' : 'border-purple-300/40'} shadow-2xl p-10 transform transition-all duration-500 scale-100`}
              onClick={(e) => e.stopPropagation()}
              style={{
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                animation: 'modalSlideIn 0.5s ease-out'
              }}
            >
              <button
                onClick={() => setSelectedTech(null)}
                className={`absolute top-6 right-6 w-12 h-12 rounded-2xl ${darkMode ? 'bg-purple-500/20 hover:bg-purple-500/30' : 'bg-purple-100 hover:bg-purple-200'} flex items-center justify-center transition-all hover:scale-110`}
              >
                <CloseIcon className={`w-6 h-6 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`} />
              </button>
              
              <div className="text-center mb-8">
                <div className={`inline-flex ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-6`}
                style={{ filter: 'drop-shadow(0 15px 30px rgba(168, 85, 247, 0.4))' }}>
                  {selectedTech.icon}
                </div>
                <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  {selectedTech.name}
                </h3>
                <span className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-600'} text-sm font-semibold`}>
                  {selectedTech.category}
                </span>
              </div>
              
              <div className={`${darkMode ? 'bg-purple-500/10' : 'bg-purple-50'} rounded-2xl p-6 mb-6`}>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Deskripsi</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {selectedTech.description}
                </p>
              </div>
              
              <div className={`${darkMode ? 'bg-purple-500/10' : 'bg-purple-50'} rounded-2xl p-6 mb-6`}>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Keunggulan</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {selectedTech.details}
                </p>
              </div>
              
              <div>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Use Cases</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedTech.useCases.map((useCase, index) => (
                    <span key={index} className={`px-4 py-2 rounded-xl ${darkMode ? 'bg-purple-500/20 text-purple-300 border-purple-400/20' : 'bg-purple-50 text-purple-600 border-purple-200/50'} text-sm font-medium border`}>
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`${darkMode ? 'bg-gradient-to-br from-purple-900/40 to-violet-900/40' : 'bg-gradient-to-br from-purple-100/60 to-violet-100/60'} backdrop-blur-2xl rounded-[2.5rem] border ${darkMode ? 'border-purple-500/20 shadow-2xl shadow-purple-500/10' : 'border-purple-200/30 shadow-2xl shadow-purple-200/20'} p-10 md:p-16`}
            style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)'
            }}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-xl border border-purple-300/20">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                  <span className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} text-sm font-semibold`}>
                    Hubungi Kami
                  </span>
                </div>
                <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Mari Mulai <span className={`bg-gradient-to-r ${darkMode ? 'from-purple-400 to-violet-400' : 'from-purple-600 to-violet-600'} bg-clip-text text-transparent`}>Project Anda</span>
                </h2>
                <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                  Konsultasi gratis untuk membahas kebutuhan website bisnis Anda
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className={`group ${darkMode ? 'bg-gray-900/40 hover:bg-gray-900/60' : 'bg-white/40 hover:bg-white/60'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-xl p-8 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                style={{
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                }}>
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all`}>
                    <Mail className="w-9 h-9 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>info@arkanawebsite.com</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>support@arkanawebsite.com</p>
                </div>

                <div className={`group ${darkMode ? 'bg-gray-900/40 hover:bg-gray-900/60' : 'bg-white/40 hover:bg-white/60'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-xl p-8 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                style={{
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                }}>
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all`}>
                    <Phone className="w-9 h-9 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Telepon</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>+62 812-3456-7890</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Senin - Jumat: 09.00 - 18.00</p>
                </div>

                <div className={`group ${darkMode ? 'bg-gray-900/40 hover:bg-gray-900/60' : 'bg-white/40 hover:bg-white/60'} backdrop-blur-2xl rounded-3xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} shadow-xl p-8 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                style={{
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                }}>
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all`}>
                    <MapPin className="w-9 h-9 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Alamat</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Jakarta Selatan</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Indonesia 12345</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${darkMode ? 'bg-gray-950/60' : 'bg-white/60'} backdrop-blur-2xl border-t ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} py-16 px-4 sm:px-6 lg:px-8`}
        style={{
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)'
        }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${darkMode ? 'from-purple-500 to-purple-700' : 'from-purple-500 to-purple-600'} flex items-center justify-center shadow-lg shadow-purple-500/30`}>
                    <Code2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Arkana <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Website</span>
                  </h3>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed text-lg`}>
                  Mewujudkan website impian Anda dengan teknologi terkini dan desain modern. Partner terpercaya untuk transformasi digital bisnis Anda.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className={`w-12 h-12 rounded-2xl ${darkMode ? 'bg-purple-500/20 hover:bg-purple-500/30' : 'bg-purple-100 hover:bg-purple-200'} flex items-center justify-center transition-all hover:scale-110 shadow-lg`}>
                    <Instagram className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  </a>
                  <a href="#" className={`w-12 h-12 rounded-2xl ${darkMode ? 'bg-purple-500/20 hover:bg-purple-500/30' : 'bg-purple-100 hover:bg-purple-200'} flex items-center justify-center transition-all hover:scale-110 shadow-lg`}>
                    <Github className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  </a>
                  <a href="#" className={`w-12 h-12 rounded-2xl ${darkMode ? 'bg-purple-500/20 hover:bg-purple-500/30' : 'bg-purple-100 hover:bg-purple-200'} flex items-center justify-center transition-all hover:scale-110 shadow-lg`}>
                    <Linkedin className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Menu</h4>
                <ul className="space-y-3">
                  <li><a href="#home" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors text-base`}>Home</a></li>
                  <li><a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors text-base`}>About</a></li>
                  <li><a href="#services" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors text-base`}>Services</a></li>
                  <li><a href="#tech" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors text-base`}>Tech Stack</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Kontak</h4>
                <ul className="space-y-4">
                  <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start gap-3 text-base`}>
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>info@arkanawebsite.com</span>
                  </li>
                  <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start gap-3 text-base`}>
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>+62 812-3456-7890</span>
                  </li>
                  <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start gap-3 text-base`}>
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Jakarta, Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={`border-t ${darkMode ? 'border-purple-500/20' : 'border-purple-200/30'} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center md:text-left`}>
                © 2026 Arkana Website. All rights reserved.
              </p>
              <div className="flex gap-8">
                <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>Privacy Policy</a>
                <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}