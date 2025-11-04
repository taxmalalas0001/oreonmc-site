// Show the intro when the page starts loading
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");
  if (intro) {
    intro.style.display = "flex";
    intro.style.opacity = "1";
    intro.style.transition = "opacity 0.6s ease";
  }
});

// Hide the intro once everything is fully loaded
window.addEventListener("load", () => {
  const intro = document.querySelector(".intro");
  if (!intro) return;

  // Fade it out smoothly
  intro.style.opacity = "0";

  // Remove from view once fade-out is done
  intro.addEventListener(
    "transitionend",
    () => {
      intro.style.display = "none";
    },
    { once: true }
  );
});
