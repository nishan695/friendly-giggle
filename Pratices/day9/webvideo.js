// Simple button interaction to show JS is wired up
const ctaBtn = document.getElementById("ctaBtn");

ctaBtn.addEventListener("click", () => {
  alert("Welcome! Let's start learning 🚀");
});

// Example: hide the scroll cue once the user scrolls down
const scrollCue = document.querySelector(".scroll-cue");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollCue.style.opacity = "0";
  } else {
    scrollCue.style.opacity = "0.7";
  }
});