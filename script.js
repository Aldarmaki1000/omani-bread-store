const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Fetch images and reviews dynamically here