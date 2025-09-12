// Glassy stars background
function createGlassyStars(numStars = 80) {
  const container = document.getElementById('stars-bg');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2.2 + 1.1; // 1.1px - 3.3px
    star.className = 'glassy-star';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.opacity = 0.58 + Math.random() * 0.38;
    star.style.filter = `blur(${Math.random() * 1.5}px)`;
    star.style.animation = `twinkle ${1.2 + Math.random() * 2.5}s infinite alternate ${Math.random()}s`;
    container.appendChild(star);
  }
}

// Twinkle animation
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes twinkle {
  from { opacity: 0.6; }
  to { opacity: 1; }
}
`;
document.head.appendChild(styleSheet);

window.addEventListener('DOMContentLoaded', () => {
  createGlassyStars(80);

  // Responsive: re-generate stars on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => createGlassyStars(80), 400);
  });

  // Download CV button handler
  document.getElementById('downloadCV').onclick = () => {
    // Try to open a local PDF file. Change the URL to your hosted CV file if needed.
    window.open('Buyiswa_Asanda_Zozi_CV.pdf', '_blank');
  };
});
