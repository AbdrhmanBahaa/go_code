// Constants
let navbar = document.querySelector('.navbar');

const hamburger = document.querySelector('.hamburger')

const links_scroll = document.querySelectorAll(".container div a.smooth-sc")

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}


// toggle the animation of the hamburger menu
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
})



const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});

// window.onscroll = () =>{
//   navbar.classList.remove('active');
//   icons.classList.remove('active');
//   searchForm.classList.remove('active');
//   cartItem.classList.remove('active');
// }

