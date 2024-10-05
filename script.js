// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });
    });
});

// Mobile Navigation Toggle
const nav = document.querySelector('nav');
const toggleButton = document.createElement('button');
toggleButton.innerText = '☰'; // Hamburger icon
toggleButton.classList.add('toggle-button');
document.body.insertBefore(toggleButton, nav);

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle navigation visibility
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.close-button');

const projectElements = document.querySelectorAll('.project');

projectElements.forEach(project => {
    project.addEventListener('click', () => {
        const title = project.querySelector('h3').innerText;
        const description = project.querySelector('p').innerText;
        const imgSrc = project.querySelector('img').src;

        modalTitle.innerText = title;
        modalDescription.innerText = description;
        modalImage.src = imgSrc;

        modal.style.display = 'block'; // Show the modal
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Close the modal
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Here you can implement the logic to send the form data to a server
        formMessage.innerText = 'Thank you for your message!';
        formMessage.style.color = 'green';
        form.reset(); // Reset the form
    } else {
        formMessage.innerText = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    }
});
