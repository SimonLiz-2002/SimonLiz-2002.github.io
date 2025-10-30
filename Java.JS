// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if(href.startsWith("#")) {
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = href;
        }
    });
});

// Typing effect for hero headline (homepage only)
const heroElement = document.querySelector('.hero h2');
if(heroElement && !heroElement.classList.contains('about-hero')) {
    const heroText = heroElement.textContent;
    heroElement.textContent = "";
    let index = 0;
    function typeHero() {
        if (index < heroText.length) {
            heroElement.textContent += heroText.charAt(index);
            index++;
            setTimeout(typeHero, 100);
        }
    }
    typeHero();
}

// Scroll-triggered animation for feature cards
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
