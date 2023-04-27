const overlay = document.querySelector(".overlay");

function fadeOut() {
  overlay.style.opacity = "1";
  setTimeout(() => {
    overlay.classList.add("active");
  }, 100);
}

function fadeIn() {
  overlay.classList.remove("active");
  setTimeout(() => {
    overlay.style.opacity = "0";
  }, 500);
}

function slideLeft() {
  const container = document.querySelector(".container");
  container.style.transform = "translateX(-100vw)";
  setTimeout(() => {
    window.location.href = "social.html";
  }, 500);
}

function slideRight() {
  const container = document.querySelector(".container");
  container.style.transform = "translateX(0)";
  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
}

const socialLink = document.querySelector(".social a");
const aboutMeLink = document.querySelector(".aboutme");

if (socialLink) {
  socialLink.addEventListener("click", (event) => {
    event.preventDefault();
    fadeOut();
    slideLeft();
  });
}

if (aboutMeLink) {
  aboutMeLink.addEventListener("click", (event) => {
    event.preventDefault();
    fadeOut();
    slideRight();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  fadeIn();
});
