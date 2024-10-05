document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous messages
    document.getElementById('response').innerText = '';
    document.getElementById('loading').style.display = 'none';

    // Get values from the form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic input validation
    if (!name || !email || !message) {
        document.getElementById('response').innerText = 'All fields are required.';
        return;
    }

    // Validate email format using a regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('response').innerText = 'Please enter a valid email address.';
        return;
    }

    // Show loading indicator
    document.getElementById('loading').style.display = 'block';

    // Fetch API to send data to the server
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Handle success response
        document.getElementById('response').innerText = data.message || 'Your message has been sent successfully!';
        document.getElementById('contact-form').reset(); // Reset the form
    })
    .catch((error) => {
        // Handle error response
        document.getElementById('response').innerText = 'Error: ' + error.message;
    })
    .finally(() => {
        // Hide loading indicator
        document.getElementById('loading').style.display = 'none';
    });
});
