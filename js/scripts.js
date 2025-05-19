// Navbar dinámica al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = window.scrollY > 50 ? '#1A2B48' : 'rgba(26,43,72,0.95)';
});

// Animaciones al hacer scroll (Intersection Observer)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .testimonial-card, .why-us, .contact-form')
.forEach(el => observer.observe(el));
