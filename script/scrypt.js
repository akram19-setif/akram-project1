let right = document.querySelector(".landing .right");
let left = document.querySelector(".landing .left");
let imageLanding = document.querySelector(".landing");
let bullets =document.querySelectorAll(".landing-bulls li");

// console.log(bullets[0].classList);
var i = 0,
  time = 3500;
let images = [
  "url('../images/landing.jpg')",
  "url('../images/landing2.jpg')",
  "url('../images/landing3.jpg')",
];

// Change the images Auto

function changeIMG() {
  imageLanding.style.backgroundImage = images[i];
  if (i < images.length - 1) {
    i++;
    imageLanding.style.backgroundImage = images[i];
    for (let index = 0; index < bullets.length; index++) {
      bullets[index].classList.remove("active");
    }
    bullets[i].classList.add("active");

  } else {
    i = 0;
    imageLanding.style.backgroundImage = images[i];
    for (let index = 0; index < bullets.length; index++) {
      bullets[index].classList.remove("active");
    }
    bullets[i].classList.add("active");
  }
  setTimeout("changeIMG()", time);
}
window.onload = changeIMG;

// Change the images with even
right.addEventListener("click", function () {
  if (i < images.length - 1) {
    i++;
    imageLanding.style.backgroundImage = images[i];
    for (let index = 0; index < bullets.length; index++) {
      bullets[index].classList.remove("active");
    }
    bullets[i].classList.add("active");
  } else {
    i = 0;
    imageLanding.style.backgroundImage = images[i];
    for (let index = 0; index < bullets.length; index++) {
      bullets[index].classList.remove("active");
    }
    bullets[i].classList.add("active");
  }
});
left.addEventListener("click", function () {
  if (i > 0) {
    i--;
    imageLanding.style.backgroundImage = images[i];
  } else {
    i = images.length - 1;
    imageLanding.style.backgroundImage = images[i];
  }
});


// menuToggle
// ==========menu-toggle =======
let menutoggle=document.querySelector('.toggle-menu');
let MenuItems= document.getElementById('MenuItems');

menutoggle.addEventListener("click", function () {
  if(MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight='200px';
 }
 else
 {
   MenuItems.style.maxHeight='0px';
 }
      
});