// Glassy stars background, responsive
function createGlassyStars(numStars = 110) {
  const container = document.getElementById('stars-bg');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 1.5 + 0.6; // 0.6px - 2.1px
    star.style.position = 'absolute';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.background = 'rgba(255,255,255,0.85)';
    star.style.borderRadius = '50%';
    star.style.opacity = 0.5 + Math.random() * 0.5;
    star.style.boxShadow = `0 0 7px 1.5px #fff8, 0 0 ${1.5 + Math.random()}px 0 #ffa60055`;
    star.style.filter = `blur(${Math.random()}px)`;
    star.style.animation = `twinkle ${1.6 + Math.random() * 2.5}s infinite alternate ${Math.random()}s`;
    container.appendChild(star);
  }
}

// Twinkle animation
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes twinkle {
  from { opacity: 0.5; }
  to { opacity: 1; }
}
`;
document.head.appendChild(styleSheet);

window.addEventListener('DOMContentLoaded', () => {
  createGlassyStars(110);

  // Responsive: re-generate stars on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => createGlassyStars(110), 350);
  });

  // Fun Fact Slideshow
  const funfacts = [
    "I started coding clueless about computers, and discovering how they work has been an exciting journey 🧩",
    "I've watched every Star Wars movie at least 5 times ⭐",
    "I code better with lo-fi music playing in the background 🎵",
    "I once debugged code for hours only to find out it was a missing semicolon 😅",
    "I see both coding and modeling as forms of creativity—one builds logic, the other builds expression 🎨",
    "📸 When I’m not coding, I like capturing moments through photography."
  ];
  let funfactIndex = 0;
  const funfactNum = document.getElementById("funfact-num");
  const funfactText = document.getElementById("funfact-text");
  const funfactDots = document.getElementById("funfact-dots");

  function renderFunFact(idx) {
    if (!funfactNum || !funfactText || !funfactDots) return;
    funfactNum.textContent = `#${idx+1}`;
    funfactText.textContent = funfacts[idx];
    funfactDots.innerHTML = '';
    for (let i = 0; i < funfacts.length; i++) {
      const dot = document.createElement('button');
      dot.className = 'funfact-dot' + (i === idx ? ' active' : '');
      dot.onclick = () => {
        funfactIndex = i;
        renderFunFact(i);
      };
      dot.setAttribute('aria-label', `Show fun fact ${i + 1}`);
      funfactDots.appendChild(dot);
    }
  }
  renderFunFact(funfactIndex);
  setInterval(() => {
    funfactIndex = (funfactIndex + 1) % funfacts.length;
    renderFunFact(funfactIndex);
  }, 4000);
});
