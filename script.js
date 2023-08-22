const navbar = document.querySelector(".nav_links");
const hamburger = document.querySelector(".hamburger");
const contact = document.querySelector(".contactBtn");
const profile = document.querySelector(".profile")
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); 
  navbar.classList.toggle("active"); 
  contact.classList.toggle("active");
  profile.classList.toggle("active");
})
