
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation menu
  const menuBtn = document.querySelector("#menu-btn");
  const navLinks = document.querySelector("#nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Typing animation
  const typingText = document.querySelector("#typing-text");
  const words = [
    "Custom Tattoos",
    "Creative Tattoo Art",
    "Unique Designs",
    "Professional Tattooing"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    if (!typingText) return;

    const word = words[wordIndex];

    typingText.textContent = word.substring(0, charIndex);

    if (!deleting && charIndex < word.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (!deleting) {
      deleting = true;
      setTimeout(typeEffect, 1200);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300);
    }
  }

  typeEffect();

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });

        if (navLinks) {
          navLinks.classList.remove("active");
        }
      }
    });
  });

  // Reveal sections when scrolling
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Current year in the footer
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Back-to-top button
  const topBtn = document.querySelector("#top-btn");

  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
