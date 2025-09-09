// Theme toggle functionality
const toggleBtn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(night) {
  if (night) {
    document.body.classList.add('night');
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    document.body.classList.remove('night');
    toggleBtn.textContent = '🌙 Dark Mode';
  }
  localStorage.setItem('theme', night ? 'night' : 'day');
}

// Set theme on load from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme === 'night');
} else {
  setTheme(prefersDark);
}

toggleBtn.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('night'));
});

// Fun greeting (for demo)
window.addEventListener('DOMContentLoaded', () => {
  const greet = [
    "Welcome, Tech Innovator!",
    "Hello, World Changer!",
    "Empowering Women in Tech 💜",
    "Let's code something amazing!"
  ];
  document.title = greet[Math.floor(Math.random() * greet.length)] + ' | Buyiswa Asanda Zozi';
});
