document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Show sections with animation on scroll
        document.querySelectorAll('section').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#ff6347';
            item.style.fontSize = '20px';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '';
            item.style.fontSize = '';
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Trigger animation on load
    window.dispatchEvent(new Event('scroll'));
});
