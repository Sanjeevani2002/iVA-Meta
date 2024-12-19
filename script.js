// script.js

const textArray = [
  "Welcome to My Website",
  "Discover Beautiful Places",
  "Explore the Wonders of Nature",
  "Let's Create Something Amazing!"
];
const typewriterElement = document.getElementById("typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typewriterElement.textContent += textArray[textIndex][charIndex];
    charIndex++;
    setTimeout(typeText, 100); // Adjust typing speed (100ms per character)
  } else {
    setTimeout(eraseText, 2000); // Wait 2 seconds before erasing
  }
}

function eraseText() {
  if (charIndex > 0) {
    typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50); // Adjust erasing speed (50ms per character)
  } else {
    textIndex = (textIndex + 1) % textArray.length; // Move to the next text
    setTimeout(typeText, 500); // Start typing the next text after 0.5 seconds
  }
}
// Start the typewriting effect
typeText();

//COUNTING EFFECT
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / 200;
          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 10);
          } else {
              counter.innerText = target + ' +';
          }
      };
      updateCount();
  });
});

//footer
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

