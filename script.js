// Sahifa ochilganda yozib chiqish effekti
const text = "Fullstack Developer";
const p = document.querySelector('.hero p');
p.textContent = '';

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
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
  observer.observe(section);
});
