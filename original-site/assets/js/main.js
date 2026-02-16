// Cedar Nest Web Studio - Premium Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    // initScrollEffects(); // Disabled to remove scroll animations
    initMobileMenu();
    // initAnimations(); // Disabled to fix alignment issues
    initContactForm();
    // initAdvancedEffects(); // Disabled - only keep for hero if needed
});

// Initialize advanced visual effects
function initAdvancedEffects() {
    // Initialize particle system ONLY in hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        new ParticleSystem(heroSection, {
            particleCount: 60,
            particleSize: 3,
            speed: 0.3,
            color: '#00D4FF',
            opacity: 0.7,
            connectionDistance: 150
        });

        // Add interactive gradient ONLY to hero
        new InteractiveGradient(heroSection);

        // Add floating elements ONLY to hero
        new FloatingElements(heroSection, {
            count: 6,
            shapes: ['circle', 'triangle', 'hexagon'],
            colors: ['rgba(0, 212, 255, 0.3)', 'rgba(255, 255, 255, 0.2)'],
            speed: 0.3
        });
    }

    // Initialize scroll animations
    new ScrollAnimations();

    // Add magnetic effect to buttons
    initMagneticButtons();

    // Add text reveal animations
    initTextReveal();

    // Add parallax sections
    initParallaxSections();
}

// Magnetic button effect
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });

        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// Text reveal animations
function initTextReveal() {
    const textElements = document.querySelectorAll('.hero-title, .section-title');

    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = text.split('').map((char, i) =>
            `<span style="display: inline-block; opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.03}s;">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');

        // Trigger animation
        setTimeout(() => {
            element.querySelectorAll('span').forEach(span => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            });
        }, 100);
    });
}

// Parallax sections - DISABLED to fix alignment
function initParallaxSections() {
    // Disabled - causing alignment issues
    return;
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"], a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // No header offset needed since header is not sticky
                const targetPosition = targetSection.offsetTop;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header scroll effects and active navigation
function initScrollEffects() {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if (header) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;

            // Header background effect
            if (scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }

            // Active navigation highlighting
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                const sectionHeight = section.offsetHeight;

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');

            // Animate hamburger menu
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (mobileToggle.classList.contains('active')) {
                    if (index === 0) {
                        span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    } else if (index === 1) {
                        span.style.opacity = '0';
                    } else if (index === 2) {
                        span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    }
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });

        // Close mobile menu when clicking on links
        const mobileNavLinks = navLinks.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');

                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });
    }
}

// Initialize scroll-triggered animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Apply specific animation based on scroll transition class
                if (entry.target.classList.contains('scroll-reveal')) {
                    entry.target.classList.add('scroll-reveal-active');
                } else if (entry.target.classList.contains('scroll-slide-left')) {
                    entry.target.classList.add('scroll-slide-left-active');
                } else if (entry.target.classList.contains('scroll-slide-right')) {
                    entry.target.classList.add('scroll-slide-right-active');
                } else if (entry.target.classList.contains('scroll-scale')) {
                    entry.target.classList.add('scroll-scale-active');
                }

                // Add stagger effect for child elements
                const children = entry.target.querySelectorAll('.stagger-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Animation observation disabled to fix alignment issues
    // const animateElements = document.querySelectorAll(
    //     '.expertise-card, .process-step, .benefit-item, .stat-item'
    // );

    // animateElements.forEach(element => {
    //     element.classList.add('animate-on-scroll');
    //     observer.observe(element);
    // });

    // Counter animation for trust numbers
    const trustNumbers = document.querySelectorAll('.trust-number, .stat-number');

    const numberObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                numberObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    trustNumbers.forEach(number => {
        numberObserver.observe(number);
    });
}

// Animate numbers counting up
function animateNumber(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/[^0-9]/g, ''));

    if (isNaN(number)) return;

    const suffix = text.replace(/[0-9]/g, '');
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;

        if (current >= number) {
            element.textContent = number + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, duration / steps);
}

// Contact form functionality
function initContactForm() {
    // Add mailto functionality with enhanced UX
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Optional: Add analytics tracking here
            console.log('Contact email clicked');

            // Show success message (optional)
            showContactMessage('Opening your email client...');
        });
    });
}

// Show contact message
function showContactMessage(message) {
    // Create temporary message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--primary-cyan);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    document.body.appendChild(messageEl);

    // Fade in
    setTimeout(() => {
        messageEl.style.opacity = '1';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        messageEl.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 300);
    }, 3000);
}

// Performance optimization: Throttled scroll handler
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add enhanced custom styles for animations
const enhancedAnimationStyles = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-link.active {
        color: var(--primary-cyan) !important;
    }

    .nav-link.active::after {
        width: 100% !important;
    }

    /* Enhanced card hover effects */
    .expertise-card {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .expertise-card:hover {
        transform: translateY(-10px) rotateX(5deg);
        box-shadow: 0 25px 50px rgba(0, 212, 255, 0.15);
    }

    /* Floating animation keyframes */
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(5deg);
        }
    }

    .floating-element {
        animation: float 6s ease-in-out infinite;
    }

    .floating-element:nth-child(even) {
        animation-delay: -3s;
        animation-direction: reverse;
    }

    /* Glowing effects */
    .btn-primary {
        position: relative;
        overflow: hidden;
    }

    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: left 0.5s;
    }

    .btn-primary:hover::before {
        left: 100%;
    }

    /* Parallax elements */
    .parallax-element {
        transition: transform 0.1s ease-out;
    }

    /* Mobile responsive animations */
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-top: 1px solid rgba(0, 212, 255, 0.1);
        }

        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }

        .nav-links li {
            margin: 0.5rem 0;
        }

        .nav-link {
            font-size: 1.1rem;
            padding: 0.75rem 0;
        }

        .expertise-card:hover {
            transform: translateY(-5px);
        }
    }

    /* Reduced motion preferences */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;

// Inject enhanced animation styles
const enhancedStyleSheet = document.createElement('style');
enhancedStyleSheet.textContent = enhancedAnimationStyles;
document.head.appendChild(enhancedStyleSheet);

// Preloader with particle effect
window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.add('loaded');

    // Add a subtle loading completion effect
    const loadingIndicator = document.createElement('div');
    loadingIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-cyan), #0099CC);
        z-index: 10000;
        animation: loadingComplete 1s ease-out forwards;
    `;

    const loadingKeyframes = `
        @keyframes loadingComplete {
            0% { transform: translateX(-100%); }
            70% { transform: translateX(0%); }
            100% { transform: translateX(100%); opacity: 0; }
        }
    `;

    const loadingStyleSheet = document.createElement('style');
    loadingStyleSheet.textContent = loadingKeyframes;
    document.head.appendChild(loadingStyleSheet);

    document.body.appendChild(loadingIndicator);

    setTimeout(() => {
        document.body.removeChild(loadingIndicator);
    }, 1000);

    console.log('Cedar Nest Web Studio - Advanced effects loaded successfully!');
});

// Error handling for images with fallback
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('error', function() {
        console.warn('Image failed to load:', this.src);
        // Create a placeholder with brand colors
        this.style.background = 'linear-gradient(135deg, var(--primary-cyan), #0099CC)';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.color = 'white';
        this.style.fontSize = '12px';
        this.innerHTML = 'CN';
    });
});

// Export enhanced functionality
window.CedarNest = {
    showContactMessage,
    initSmoothScrolling,
    initScrollEffects,
    initAdvancedEffects,
    ParticleSystem,
    FloatingElements,
    ScrollAnimations,
    InteractiveGradient
};