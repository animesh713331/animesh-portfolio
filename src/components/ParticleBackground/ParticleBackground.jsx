import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        let particles = [];
        const particleCount = 60; // Standard stars
        const symbolCount = 20; // Special symbols
        const connectionDistance = 150;
        const mouseDistance = 200;

        let mouse = { x: null, y: null };

        // Symbols for Physics, CSE, Blockchain
        const symbols = [
            "E=mc²", "ℏ", "Ψ", "λ", "∫", "∑", // Physics
            "0", "1", "</>", "{}", "&&", "||", // CSE
            "0x", "₿", "Ξ", "#" // Blockchain
        ];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Warp Speed Logic
        let isWarping = false;

        const handleMouseDown = () => { isWarping = true; };
        const handleMouseUp = () => { isWarping = false; };

        class Particle {
            constructor(isSymbol = false) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? "#b026ff" : "#00f3ff";

                this.isSymbol = isSymbol;
                if (isSymbol) {
                    this.text = symbols[Math.floor(Math.random() * symbols.length)];
                    this.size = Math.random() * 10 + 10;
                    this.opacity = Math.random() * 0.5 + 0.1;
                }
            }

            update() {
                // Apply Warp Speed multiplier
                const speedMultiplier = isWarping ? 8 : 1;

                this.x += this.vx * speedMultiplier;
                this.y += this.vy * speedMultiplier;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse Repulsion (only when not warping for better effect)
                if (!isWarping && mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const directionX = forceDirectionX * force * 3;
                        const directionY = forceDirectionY * force * 3;

                        this.vx -= directionX * 0.05;
                        this.vy -= directionY * 0.05;
                    }
                }
            }

            draw() {
                if (this.isSymbol) {
                    ctx.font = `${this.size}px monospace`;
                    // When warping, stretch opacity or color
                    ctx.fillStyle = `rgba(${this.color === "#b026ff" ? "176, 38, 255" : "0, 243, 255"}, ${this.opacity})`;
                    ctx.fillText(this.text, this.x, this.y);
                } else {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            }
        }

        const init = () => {
            resizeCanvas();
            particles = [];

            // Create regular stars
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(false));
            }
            // Create symbols
            for (let i = 0; i < symbolCount; i++) {
                particles.push(new Particle(true));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw connections ONLY between regular stars (not symbols)
                if (!particles[i].isSymbol) {
                    for (let j = i; j < particles.length; j++) {
                        if (!particles[j].isSymbol) {
                            const dx = particles[i].x - particles[j].x;
                            const dy = particles[i].y - particles[j].y;
                            const distance = Math.sqrt(dx * dx + dy * dy);

                            if (distance < connectionDistance) {
                                ctx.beginPath();
                                ctx.strokeStyle = `rgba(176, 38, 255, ${1 - distance / connectionDistance})`;
                                ctx.lineWidth = 0.5;
                                ctx.moveTo(particles[i].x, particles[i].y);
                                ctx.lineTo(particles[j].x, particles[j].y);
                                ctx.stroke();
                            }
                        }
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        // Warp control listeners
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchstart", handleMouseDown);
        window.addEventListener("touchend", handleMouseUp);

        init();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);

            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchstart", handleMouseDown);
            window.removeEventListener("touchend", handleMouseUp);

            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen bg-transparent"
        />
    );
};

export default ParticleBackground;
