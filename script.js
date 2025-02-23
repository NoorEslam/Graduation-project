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
        alert("تفاصيل الدورة ستظهر قريبًا!");
      });
    });
  });