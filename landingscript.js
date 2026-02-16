const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");
const toggleBtn = document.getElementById("popupToggleBtn");

/* Show popup on page load */
window.addEventListener("load", () => {
  popupOverlay.style.display = "flex";
});

/* Close popup */
closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

/* Toggle popup */
toggleBtn.addEventListener("click", () => {
  if (popupOverlay.style.display === "flex") {
    popupOverlay.style.display = "none";
  } else {
    popupOverlay.style.display = "flex";
  }
});
// Walkthrough Vide


function toggleVideo() {
  const video = document.getElementById("walkVideo");
  const btn = document.getElementById("videoBtn");
  const overlay = document.querySelector(".video-overlay");

  if (video.paused) {
    video.play();
    btn.innerHTML = "⏸";
    overlay.style.display = "none";
  } else {
    video.pause();
    btn.innerHTML = "▶";
  }
}
// gallery Section




const items = document.querySelectorAll('.carousel-item');
let current = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    const offset = index - current;

    if (offset === 0) {
      item.style.transform = "translateX(0) rotateY(0deg) scale(1)";
      item.style.opacity = "1";
      item.style.zIndex = "3";
    } 
    else if (offset === -1 || offset === items.length - 1) {
      item.style.transform = "translateX(-60%) rotateY(40deg) scale(0.8)";
      item.style.opacity = "0.6";
      item.style.zIndex = "2";
    } 
    else if (offset === 1 || offset === -(items.length - 1)) {
      item.style.transform = "translateX(60%) rotateY(-40deg) scale(0.8)";
      item.style.opacity = "0.6";
      item.style.zIndex = "2";
    } 
    else {
      item.style.transform = "translateX(0) scale(0)";
      item.style.opacity = "0";
      item.style.zIndex = "1";
    }
  });
}

function moveSlide(direction) {
  current += direction;

  if (current < 0) {
    current = items.length - 1;
  }

  if (current >= items.length) {
    current = 0;
  }

  updateCarousel();
}

updateCarousel();
