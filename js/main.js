// Main JavaScript for Investment Solutions Group Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initScrollAnimations();
    initHeaderEffects();
    initMobileMenu();
    initFormAnimations();
    initCounterAnimations();
    initParallaxEffects();
    initSmoothScrolling();
    initButtonEffects();
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Add animation to hamburger menu
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    const consultationForm = document.querySelector('.consultation-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'Contact Form');
        });
    }
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'Consultation Form');
        });
    }
    
    // CTA button click handlers
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        if (!button.closest('form')) {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                    // Scroll to contact section or show contact modal
                    const contactSection = document.querySelector('#contact, .contact-form-section');
                    if (contactSection) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = contactSection.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Enhanced Intersection Observer for animations
    initIntersectionObserver();
});

// Form submission handler
function handleFormSubmission(form, formType) {
    const formData = new FormData(form);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Here you would typically send the data to your server
    // For now, we'll just show a success message
    console.log(`${formType} submitted:`, formObject);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="
            background: #dcfce7;
            border: 1px solid #22c55e;
            border-radius: 8px;
            padding: 16px;
            margin: 16px 0;
            color: #166534;
            text-align: center;
        ">
            <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
        </div>
    `;
    
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    form.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        if (successMessage.parentNode) {
            successMessage.parentNode.removeChild(successMessage);
        }
    }, 5000);
}

// Utility function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility function to validate phone number (basic)
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
    return phoneRegex.test(phone);
}

// Add loading state to buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    return function() {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Handle window resize for mobile menu
window.addEventListener('resize', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Enhanced Animation Functions

function initScrollAnimations() {
    // Add scroll-triggered animations for various elements
    const animatedElements = document.querySelectorAll('.service-card, .stat-card, .package-card, .video-card, .investment-card, .contact-card, .option-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });
}

function initHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class for styling
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        // Create hamburger animation
        navToggle.innerHTML = `
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        
        // Add hamburger styles
        const hamburgerCSS = `
            .hamburger {
                display: flex;
                flex-direction: column;
                cursor: pointer;
                padding: 8px;
            }
            .hamburger span {
                width: 25px;
                height: 3px;
                background: var(--text-black);
                margin: 3px 0;
                transition: 0.3s;
                border-radius: 2px;
            }
            .nav-toggle.active .hamburger span:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }
            .nav-toggle.active .hamburger span:nth-child(2) {
                opacity: 0;
            }
            .nav-toggle.active .hamburger span:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
            @media (max-width: 768px) {
                .nav-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-top: 1px solid var(--border-gray);
                    padding: var(--spacing-md);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    animation: slideDown 0.3s ease-out;
                }
                .nav-menu.active {
                    display: flex;
                }
                .nav-menu .nav-link {
                    padding: var(--spacing-md);
                    border-radius: 8px;
                    margin-bottom: var(--spacing-sm);
                    opacity: 0;
                    animation: fadeInStagger 0.3s ease-out forwards;
                }
                .nav-menu .nav-link:nth-child(1) { animation-delay: 0.1s; }
                .nav-menu .nav-link:nth-child(2) { animation-delay: 0.2s; }
                .nav-menu .nav-link:nth-child(3) { animation-delay: 0.3s; }
                .nav-menu .nav-link:nth-child(4) { animation-delay: 0.4s; }
                .nav-menu .nav-link:nth-child(5) { animation-delay: 0.5s; }
                .nav-menu .nav-link:nth-child(6) { animation-delay: 0.6s; }
                .nav-menu .nav-link:nth-child(7) { animation-delay: 0.7s; }
                .nav-menu .nav-link:nth-child(8) { animation-delay: 0.8s; }
            }
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInStagger {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = hamburgerCSS;
        document.head.appendChild(style);
    }
}

function initFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    const forms = document.querySelectorAll('.contact-form, .consultation-form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            // Add focus animations
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Add typing animation
            input.addEventListener('input', function() {
                this.classList.add('typing');
                clearTimeout(this.typingTimer);
                this.typingTimer = setTimeout(() => {
                    this.classList.remove('typing');
                }, 500);
            });
        });
    });
}

function initCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalNumber = parseInt(stat.textContent);
        stat.textContent = '0';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(stat, finalNumber);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16); // ~60fps
}

function initParallaxEffects() {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (heroSection.querySelector('.hero::before')) {
                heroSection.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

function initSmoothScrolling() {
    // Enhanced smooth scrolling with easing
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                smoothScrollTo(targetPosition, 800);
            }
        });
    });
}

function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        // Add ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const rippleCSS = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .cta-button {
            position: relative;
            overflow: hidden;
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = rippleCSS;
    document.head.appendChild(style);
}

function initIntersectionObserver() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.service-card, .stat-card, .package-card, .video-card, .investment-card, .contact-card, .option-card, .feature-card, .requirement-item');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
} 

// Additional Enhancement Functions

// Initialize scroll progress indicator
function initScrollProgress() {
    // Create scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-indicator';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Enhanced form validation with animations
function initFormValidation() {
    const forms = document.querySelectorAll('.contact-form, .consultation-form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                submitFormWithAnimation(this);
            } else {
                // Shake form on validation error
                this.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (fieldType === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (fieldType === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
    }
    
    if (!isValid) {
        field.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        errorElement.style.cssText = `
            color: #dc2626;
            font-size: 0.875rem;
            margin-top: 4px;
            animation: slideInError 0.3s ease-out;
        `;
        field.parentElement.appendChild(errorElement);
    }
    
    return isValid;
}

function submitFormWithAnimation(form) {
    const submitButton = form.querySelector('.cta-button');
    const originalText = submitButton.textContent;
    
    // Add loading state
    submitButton.classList.add('loading');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Remove loading state
        submitButton.classList.remove('loading');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message with animation
        showSuccessMessage(form);
        form.reset();
        
        // Remove focused states
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('focused');
        });
    }, 2000);
}

function showSuccessMessage(form) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #dcfce7, #bbf7d0);
            border: 1px solid #22c55e;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            color: #166534;
            text-align: center;
            box-shadow: 0 4px 15px rgba(34, 197, 94, 0.2);
        ">
            <strong>✓ Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
        </div>
    `;
    
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    
    // Auto-remove success message
    setTimeout(() => {
        if (successMessage.parentNode) {
            successMessage.style.animation = 'fadeOut 0.5s ease-out forwards';
            setTimeout(() => {
                successMessage.remove();
            }, 500);
        }
    }, 5000);
}

// Initialize page load animations
function initPageLoadAnimations() {
    // Add staggered animations to main sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.animation = `fadeInSection 0.8s ease-out ${index * 0.1}s forwards`;
    });
}

// Initialize typing effect for hero text
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid var(--isg-green)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Initialize all enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollProgress();
    initFormValidation();
    initPageLoadAnimations();
    // Uncomment the line below if you want the typing effect
    // initTypingEffect();
});

// Add CSS for additional animations
const additionalCSS = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes slideInError {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        animation: shake 0.3s ease-in-out;
    }
    
    .error-message {
        animation: slideInError 0.3s ease-out;
    }
`;

const additionalStyle = document.createElement('style');
additionalStyle.textContent = additionalCSS;
document.head.appendChild(additionalStyle);