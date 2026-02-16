// Advanced Particle System for Cedar Nest
class ParticleSystem {
    constructor(container, options = {}) {
        this.container = container;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];

        // Configuration
        this.config = {
            particleCount: options.particleCount || 50,
            particleSize: options.particleSize || 2,
            speed: options.speed || 0.5,
            color: options.color || '#00D4FF',
            opacity: options.opacity || 0.6,
            connectionDistance: options.connectionDistance || 120,
            mouseInfluence: options.mouseInfluence || 100,
            ...options
        };

        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        // Setup canvas
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';

        this.container.style.position = 'relative';
        this.container.appendChild(this.canvas);

        // Handle resize
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Mouse tracking
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        // Create particles
        this.createParticles();

        // Start animation
        this.animate();
    }

    resize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.speed,
                vy: (Math.random() - 0.5) * this.config.speed,
                size: Math.random() * this.config.particleSize + 1,
                opacity: Math.random() * this.config.opacity + 0.2,
                originalVx: (Math.random() - 0.5) * this.config.speed,
                originalVy: (Math.random() - 0.5) * this.config.speed
            });
        }
    }

    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.hexToRgba(this.config.color, particle.opacity);
            this.ctx.fill();
        });
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.config.connectionDistance) {
                    const opacity = (1 - distance / this.config.connectionDistance) * 0.3;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = this.hexToRgba(this.config.color, opacity);
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }

    updateParticles() {
        this.particles.forEach(particle => {
            // Mouse influence
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.config.mouseInfluence) {
                const force = (this.config.mouseInfluence - distance) / this.config.mouseInfluence;
                particle.vx += (dx / distance) * force * 0.01;
                particle.vy += (dy / distance) * force * 0.01;
            }

            // Gradually return to original velocity
            particle.vx += (particle.originalVx - particle.vx) * 0.01;
            particle.vy += (particle.originalVy - particle.vy) * 0.01;

            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.updateParticles();
        this.drawConnections();
        this.drawParticles();

        requestAnimationFrame(() => this.animate());
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
}

// Floating Geometric Elements
class FloatingElements {
    constructor(container, options = {}) {
        this.container = container;
        this.elements = [];
        this.config = {
            count: options.count || 8,
            shapes: options.shapes || ['circle', 'triangle', 'square', 'hexagon'],
            colors: options.colors || ['#00D4FF', '#0099CC', '#FFFFFF'],
            speed: options.speed || 0.5,
            ...options
        };

        this.init();
    }

    init() {
        this.createElements();
        this.animate();
    }

    createElements() {
        for (let i = 0; i < this.config.count; i++) {
            const element = document.createElement('div');
            const shape = this.config.shapes[Math.floor(Math.random() * this.config.shapes.length)];
            const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
            const size = Math.random() * 60 + 20;

            element.className = `floating-element floating-${shape}`;
            element.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                opacity: ${Math.random() * 0.3 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 0;
                transition: transform 0.3s ease;
            `;

            // Shape-specific styling
            switch(shape) {
                case 'circle':
                    element.style.borderRadius = '50%';
                    break;
                case 'triangle':
                    element.style.background = 'transparent';
                    element.style.borderLeft = `${size/2}px solid transparent`;
                    element.style.borderRight = `${size/2}px solid transparent`;
                    element.style.borderBottom = `${size}px solid ${color}`;
                    element.style.width = '0';
                    element.style.height = '0';
                    break;
                case 'square':
                    element.style.borderRadius = '8px';
                    break;
                case 'hexagon':
                    element.style.borderRadius = '12px';
                    element.style.transform = 'rotate(45deg)';
                    break;
            }

            this.elements.push({
                element,
                x: parseFloat(element.style.left),
                y: parseFloat(element.style.top),
                vx: (Math.random() - 0.5) * this.config.speed,
                vy: (Math.random() - 0.5) * this.config.speed,
                rotation: 0,
                rotationSpeed: (Math.random() - 0.5) * 2
            });

            this.container.appendChild(element);
        }
    }

    animate() {
        this.elements.forEach(item => {
            item.x += item.vx;
            item.y += item.vy;
            item.rotation += item.rotationSpeed;

            // Wrap around
            if (item.x > 100) item.x = -10;
            if (item.x < -10) item.x = 100;
            if (item.y > 100) item.y = -10;
            if (item.y < -10) item.y = 100;

            item.element.style.left = item.x + '%';
            item.element.style.top = item.y + '%';
            item.element.style.transform += ` rotate(${item.rotation}deg)`;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Advanced Scroll Animations
class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        this.observeElements();
        this.setupParallax();
        this.setupSmoothScroll();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    // Add stagger effect for child elements
                    const children = entry.target.querySelectorAll('.stagger-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all animatable elements
        document.querySelectorAll('.animate-on-scroll, .expertise-card, .process-step, .benefit-item').forEach(el => {
            observer.observe(el);
        });
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    setupSmoothScroll() {
        // Enhanced smooth scrolling with easing
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    this.smoothScrollTo(targetPosition, 1000);
                }
            });
        });
    }

    smoothScrollTo(target, duration) {
        const start = window.pageYOffset;
        const distance = target - start;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function (ease-in-out-cubic)
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

            window.scrollTo(0, start + distance * easeInOutCubic);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }
}

// Interactive Gradient Background
class InteractiveGradient {
    constructor(container) {
        this.container = container;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.mouse = { x: 0, y: 0 };
        this.gradientColors = [
            { r: 0, g: 212, b: 255 },    // Cyan
            { r: 0, g: 153, b: 204 },    // Darker cyan
            { r: 255, g: 255, b: 255 }   // White
        ];

        this.init();
    }

    init() {
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '0';
        this.canvas.style.opacity = '0.4';

        this.container.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());

        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouse.x = (e.clientX - rect.left) / rect.width;
            this.mouse.y = (e.clientY - rect.top) / rect.height;
        });

        this.animate();
    }

    resize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Create dynamic gradient based on mouse position
        const gradient = this.ctx.createRadialGradient(
            this.mouse.x * this.canvas.width,
            this.mouse.y * this.canvas.height,
            0,
            this.mouse.x * this.canvas.width,
            this.mouse.y * this.canvas.height,
            Math.max(this.canvas.width, this.canvas.height)
        );

        gradient.addColorStop(0, `rgba(${this.gradientColors[0].r}, ${this.gradientColors[0].g}, ${this.gradientColors[0].b}, 0.8)`);
        gradient.addColorStop(0.5, `rgba(${this.gradientColors[1].r}, ${this.gradientColors[1].g}, ${this.gradientColors[1].b}, 0.4)`);
        gradient.addColorStop(1, `rgba(${this.gradientColors[2].r}, ${this.gradientColors[2].g}, ${this.gradientColors[2].b}, 0.1)`);

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        requestAnimationFrame(() => this.animate());
    }
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ParticleSystem, FloatingElements, ScrollAnimations, InteractiveGradient };
} else {
    window.ParticleSystem = ParticleSystem;
    window.FloatingElements = FloatingElements;
    window.ScrollAnimations = ScrollAnimations;
    window.InteractiveGradient = InteractiveGradient;
}