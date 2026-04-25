// Sahifa ochilganda yozib chiqish effekti
const text = "Fullstack Developer";
const p = document.querySelector('.hero p:first-of-type');


let i = 0;

function type() {
  if (i < text.length) {
    p.textContent += text[i];
    i++;
    setTimeout(type, 100);
  }
}

type();

// Scroll animatsiya
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

sections.forEach(section => {
  if (!section.classList.contains('hero')) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  }
});


function modniOzgartir() {
  document.body.classList.toggle("light");
  const btn = document.getElementById("mod-btn");
  if (document.body.classList.contains("light")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}
function menuOchir() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("open");
}
// Linkga bosganda menyu yopilsin
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('open');
  });
});

