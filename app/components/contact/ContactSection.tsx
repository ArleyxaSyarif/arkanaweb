'use client';

import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await res.json();

        if (res.ok) {
            alert('Message sent successfully!');
            formRef.current?.reset();
        } else {
            alert('Failed to send message. Please try again.');
        }
    }

    return (
        <div className="bg-[#f7f6f8] text-[#140d1b] min-h-screen flex flex-col font-sans selection:bg-[#7f13ec] selection:text-white">
            <main className="flex-grow flex items-center justify-center py-12 px-6 lg:px-20 xl:px-40">
                <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col space-y-8 lg:sticky lg:top-32">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                                Let&apos;s Start a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-purple-400">Conversation</span>
                            </h1>
                            <p className="text-lg text-[#6b7280] leading-relaxed max-w-md">
                                Have a project in mind? We&apos;d love to hear from you. Fill out the form or reach us via email, phone, or visit our office.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            {/* Email */}
                            <div className="flex items-center gap-4 group">
                                <div className="flex items-center justify-center size-12 rounded-xl bg-white shadow-sm border border-gray-100 text-[#7f13ec] group-hover:scale-110 group-hover:bg-[#7f13ec] group-hover:text-white transition-all duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Email us</span>
                                    <a className="text-lg font-medium hover:text-[#7f13ec] transition-colors" href="mailto:hello@modernbrand.com">hello@modernbrand.com</a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4 group">
                                <div className="flex items-center justify-center size-12 rounded-xl bg-white shadow-sm border border-gray-100 text-[#7f13ec] group-hover:scale-110 group-hover:bg-[#7f13ec] group-hover:text-white transition-all duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Call us</span>
                                    <a className="text-lg font-medium hover:text-[#7f13ec] transition-colors" href="tel:+15551234567">+1 (555) 123-4567</a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4 group">
                                <div className="flex items-center justify-center size-12 rounded-xl bg-white shadow-sm border border-gray-100 text-[#7f13ec] group-hover:scale-110 group-hover:bg-[#7f13ec] group-hover:text-white transition-all duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Visit us</span>
                                    <span className="text-lg font-medium">123 Innovation Dr, Tech City</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-8">
                            <p className="text-sm font-semibold mb-4 text-[#6b7280]">Follow us on social media</p>
                            <div className="flex gap-4">
                                <a className="size-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-[#7f13ec] hover:text-[#7f13ec] transition-all shadow-sm hover:shadow-[0_4px_20px_-2px_rgba(127,19,236,0.1)]" href="#">
                                    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
                                </a>
                                <a className="size-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-[#7f13ec] hover:text-[#7f13ec] transition-all shadow-sm hover:shadow-[0_4px_20px_-2px_rgba(127,19,236,0.1)]" href="#">
                                    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                </a>
                                <a className="size-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-[#7f13ec] hover:text-[#7f13ec] transition-all shadow-sm hover:shadow-[0_4px_20px_-2px_rgba(127,19,236,0.1)]" href="#">
                                    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.527c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="relative w-full">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7f13ec]/20 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl opacity-60"></div>

                        <div className="relative bg-[#ffffff] rounded-2xl shadow-[0_4px_20px_-2px_rgba(127,19,236,0.1)] p-8 lg:p-10">
                            <h3 className="text-2xl font-bold mb-6 text-[#140d1b]">Send us a message</h3>
                            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#140d1b]" htmlFor="name">Full Name</label>
                                        <div className="relative">
                                            <input
                                                className="w-full px-4 py-3 rounded-lg bg-[#f7f6f8] border border-gray-200 text-[#140d1b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7f13ec] focus:border-transparent transition-all"
                                                id="name"
                                                required
                                                name="name"
                                                placeholder="John Doe"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-[#140d1b]" htmlFor="email">Email Address</label>
                                        <div className="relative">
                                            <input
                                                className="w-full px-4 py-3 rounded-lg bg-[#f7f6f8] border border-gray-200 text-[#140d1b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7f13ec] focus:border-transparent transition-all"
                                                id="email"
                                                required
                                                name="email"
                                                placeholder="john@example.com"
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#140d1b]" htmlFor="subject">Subject</label>
                                    <div className="relative">
                                        <input
                                            className="w-full px-4 py-3 rounded-lg bg-[#f7f6f8] border border-gray-200 text-[#140d1b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7f13ec] focus:border-transparent transition-all"
                                            id="subject"
                                            required
                                            name="subject"
                                            placeholder="How can we help?"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#140d1b]" htmlFor="message">Your Message</label>
                                    <div className="relative">
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg bg-[#f7f6f8] border border-gray-200 text-[#140d1b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7f13ec] focus:border-transparent transition-all resize-none"
                                            id="message"
                                            required
                                            name="message"
                                            placeholder="Tell us more about your project..."
                                            rows={5}
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    className="group relative w-full h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#7f13ec] to-purple-600 text-white font-bold text-base tracking-wide overflow-hidden shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50 hover:scale-[1.01] active:scale-[0.99]"
                                    type="submit"
                                >
                                    <span className="absolute w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                                    <span className="flex items-center gap-2">
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
}