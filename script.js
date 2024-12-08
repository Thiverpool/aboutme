const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialize theme
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  
  // Toggle icon
  themeToggle.innerHTML = isDarkMode
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
});

// Set default mode
body.className = 'light-mode';
