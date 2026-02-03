'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ParticleBackground() {
    const [darkMode, setDarkMode] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Check system preference for dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Set initial size
        handleResize();

        window.addEventListener('resize', handleResize);

        interface Particle {
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            opacity: number;
        }

        const particles: Particle[] = [];
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

        let animationId: number;

        function animate() {
            if (!ctx || !canvas) return;
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
            particles.forEach((particle) => {
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
                for (let j = 0; j < particles.length; j++) {
                    if (particles[j] === particle) continue;
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

            animationId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    },);

    return (
        <div className={`fixed inset-0 transition-colors duration-500 pointer-events-none -z-10`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}
