// 1. NAVBAR - MOBILE TOGGLE
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// 2. BACK-TO-TOP BUTTON
const backBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    backBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
});

backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. PROJECT FILTER TABS
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// 4. CONTACT FORM VALIDATION
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Proper RFC-friendly email pattern: text@text.text (no spaces, valid domain shape)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        formStatus.textContent = '⚠️ Please fill in all fields.';
        formStatus.className = 'error';
        return;
    }

    if (!EMAIL_REGEX.test(email)) {
        formStatus.textContent = '⚠️ Please enter a valid email address.';
        formStatus.className = 'error';
        return;
    }

    formStatus.textContent = '✅ Message sent successfully!';
    formStatus.className = 'success';
    contactForm.reset();

    setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = '';
    }, 5000);
});

// 5. SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 6. NAVBAR SHADOW ON SCROLL
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

console.log('🚀 Portfolio loaded successfully!');