
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = window.scrollY > 100 ? '#1A2B48' : 'rgba(26,43,72,0.9)';
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
});

document.querySelectorAll('.service-card, .testimonial-card').forEach(card => observer.observe(card));
