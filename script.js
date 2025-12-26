// const header = document.getElementById("header");

// let ticking = false;

// function handleScroll() {
//   if (window.scrollY > 0) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
//   ticking = false;
// }

// window.addEventListener("scroll", () => {
//   if (!ticking) {
//     window.requestAnimationFrame(handleScroll);
//     ticking = true;
//   }
// });
const header = document.querySelector("#header");
let ticking = false;
function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  ticking = false;
}
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});
