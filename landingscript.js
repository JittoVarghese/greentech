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
