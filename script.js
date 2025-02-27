// script.js

// مثال لإضافة تفاعل على زر
document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".cta");
  ctaButton.addEventListener("click", () => {
    alert("استكشاف الدورات قادم قريبًا!");
  });

  const courseButtons = document.querySelectorAll(".course-card button");
  courseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("يجب تسجبل الدخول للانتقال لهذه الصفحة!");
    });
  });
});

const hamMenu = document.querySelector('.br-menu');

const offScreenMenu = document.querySelector('.nav-links');

hamMenu.addEventListener('click',() => {
  hamMenu.classList.toggle('open');
  offScreenMenu.classList.toggle('open');
})