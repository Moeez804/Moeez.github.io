// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in Effect for Sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in');
});

// Modal Functionality
const projects = document.querySelectorAll('.project');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.close-button');

projects.forEach(project => {
    project.addEventListener('click', () => {
        modalTitle.innerText = project.getAttribute('data-title');
        modalDescription.innerText = project.getAttribute('data-description');
        modalImage.src = project.getAttribute('data-image');
        modal.style.display = 'block';
    });
});

// Close Modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Contact Form Validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formMessage.innerText = 'Thank you for your message!';
        formMessage.style.color = 'green';
        form.reset(); // Reset the form
    } else {
        formMessage.innerText = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    }
});
