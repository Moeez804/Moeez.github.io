<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdul Moeez - Ethical Hacker Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Abdul Moeez - Ethical Hacker</h1>
        <nav>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="projects">
            <h2>Projects</h2>
            <!-- Projects will be dynamically loaded here -->
        </section>
        <section id="skills" class="animate-on-scroll">
            <h2>Skills</h2>
            <p>Ethical Hacking, Web Development, Network Security, Penetration Testing, and more.</p>
        </section>
        <section id="contact" class="animate-on-scroll">
            <h2>Contact</h2>
            <form id="contactForm">
                <label for="name">Name:</label>
                <input type="text" id="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    <div id="projectModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modalTitle"></h2>
            <p id="modalDescription"></p>
            <a id="modalLink" target="_blank">View Project</a>
        </div>
    </div>
    <footer>
        <p>&copy; 2024 Abdul Moeez</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

