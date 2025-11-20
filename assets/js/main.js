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

    // Placeholder Live Counter Animation (Optional Visual)
    const counterElement = document.querySelector('.counter-placeholder');
    if(counterElement) {
        // Just a static example, in a real app this would fetch data
        counterElement.textContent = "1,240";
    }
});
