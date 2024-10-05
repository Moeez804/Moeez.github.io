// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Fetch and load project data from JSON file
document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects');
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectsContainer.appendChild(projectElement);
                
                // Add click event to show modal
                projectElement.addEventListener('click', () => {
                    document.getElementById('modalTitle').innerText = project.title;
                    document.getElementById('modalDescription').innerText = project.description;
                    document.getElementById('modalLink').href = project.link;
                    document.getElementById('projectModal').style.display = 'block';
                });
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});

// Modal functionality
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close');

closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Enhanced form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple email regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
    } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for your message, " + name + "!");
        this.reset(); // Clear the form
    }
});

// Scroll Animation for elements
const elements = document.querySelectorAll('.animate-on-scroll');

const scrollAnimation = () => {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);
