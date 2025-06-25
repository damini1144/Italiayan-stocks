// script.js - Enhancing interactions and functionality

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll-triggered styling for future use
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 50;
    document.body.classList.toggle("scrolled", scrolled);
  });

  // Basic form submission feedback (can be enhanced)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been received.");
      form.reset();
    });
  }

  // Responsive image fallback
  document.querySelectorAll("img").forEach(img => {
    img.onerror = function () {
      this.alt = "Image not found";
      this.style.border = "2px dashed red";
    };
  });

  // Banner transparency like Netflix effect
  const banner = document.querySelector(".banner-section");
  if (banner) {
    banner.style.position = "relative";
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.6)";
    overlay.style.zIndex = 1;
    banner.prepend(overlay);
    banner.style.background = "url('StockLearnPro banner.jpg') center/cover no-repeat";
    banner.style.color = "white";
    banner.style.zIndex = 2;
  }
});
