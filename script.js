//////////////////////////////////////////////

let toggle_btn = document.querySelector(".toggle-btn");
let toggle_btn_icon = document.querySelector(".toggle-btn i");
let ul = document.querySelector("ul");
let link = document.querySelectorAll(".link");

//Toggle the Menu-bar
toggle_btn.addEventListener("click", () => {
  ul.classList.toggle("active");

  const isactive = ul.classList.contains("active");
  toggle_btn_icon.classList = isactive ? "bx bx-x" : "bx bx-menu";
});

//When click on each links menu-bar is removed
link.forEach((lnk) => {
  lnk.addEventListener("click", () => {
    ul.classList.remove("active");
    const isactive = ul.classList.contains("active");
    toggle_btn_icon.classList = isactive ? "bx bx-x" : "bx bx-menu";
  });
});


////////////Mouse Move Effect/////////////////


function update(e) {
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)

////////////// Preloading ////////////////////

const preLoader = document.querySelector('.preloader');
window.addEventListener('load', () => {
  preLoader.classList.add('remove');
})