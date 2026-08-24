// Toggle Navigation Menu (Hamburger)
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

document.getElementById('hamburger').addEventListener('click', toggleMenu);


// Smooth Scrolling for Internal Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        document.getElementById('nav-menu').classList.remove('active');
    });
});


// Project Filter Feature
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


// Lightbox Effect for Project Images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});


// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    let isValid = true;

    // Name Validation
    if (name.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Message Validation
    if (message.value.trim() === '') {
        document.getElementById('message-error').textContent = 'Message is required.';
        isValid = false;
    } else {
        document.getElementById('message-error').textContent = '';
    }

    // Success Action
    if (isValid) {
        alert('Thank you for your message! Your form has been successfully submitted.');
        contactForm.reset();
    }
});