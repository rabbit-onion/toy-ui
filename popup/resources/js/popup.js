const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".material-symbols-outlined");
const overlay = document.querySelector(".overlay");

// const openModal = () => {
//   overlay.classList.add("active");
// };

// const closeModal = () => {
//   overlay.classList.remove("active");
// };

const openModal = () => {
  overlay.style.display = "flex";
};

const closeModal = () => {
  overlay.style.display = "none";
};

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
