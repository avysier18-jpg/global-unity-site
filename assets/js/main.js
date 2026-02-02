document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.main-nav');

    if(toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mega Menu Backdrop Toggle
    const megaMenuTriggers = document.querySelectorAll('.has-mega-menu');
    const backdrop = document.querySelector('.mega-menu-backdrop');

    if (backdrop && megaMenuTriggers.length) {
        megaMenuTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => {
                backdrop.classList.add('active');
            });
            trigger.addEventListener('mouseleave', () => {
                backdrop.classList.remove('active');
            });
            // Keyboard accessibility: also toggle on focus-within
            trigger.addEventListener('focusin', () => {
                backdrop.classList.add('active');
            });
            trigger.addEventListener('focusout', (e) => {
                // Only remove if focus moved outside this trigger
                if (!trigger.contains(e.relatedTarget)) {
                    backdrop.classList.remove('active');
                }
            });
        });
    }

    // Placeholder Live Counter Animation (Optional Visual)
    const counterElement = document.querySelector('.counter-placeholder');
    if(counterElement) {
        // Just a static example, in a real app this would fetch data
        counterElement.textContent = "1,240";
    }
});
