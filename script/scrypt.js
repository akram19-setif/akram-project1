//Select the Elements
let right = document.querySelector(".landing .right");
let left = document.querySelector(".landing .left");
let imgContainer = document.querySelector(".landing .container-img");
let bullets = document.querySelectorAll(".landing-bulls li");
let images=document.querySelectorAll('.landing .container-img img');

//Variables
let i = 1,
time = 3500,size=images[0].clientWidth,counter=0;



right.addEventListener('click', function(){
  if(counter<images.length -1){
    console.log(counter);
  imgContainer.style.transition="1s ease-out";
  counter++;
  imgContainer.style.transform=`translateX(`+ ( -size * counter) +`px)`;
  bullets.forEach((ele) => ele.classList.remove("active"));
  if(i<2){
    i++;
  bullets[i].classList.add("active");
}else{
  i=0;
  bullets[i].classList.add("active");
}
}
  else{
  i=1;
  bullets.forEach((ele) => ele.classList.remove("active"));
  bullets[i].classList.add("active");
  counter=0;
  imgContainer.style.transition="none";
  imgContainer.style.transform=`translateX(`+ ( -size * counter) +`px)`;
  }
});

left.addEventListener('click',function(){
  if(counter>0){
  imgContainer.style.transition="1s ease-out";
  counter--;
  imgContainer.style.transform=`translateX(`+ ( -size * counter) +`px)`;

  bullets.forEach((ele) => ele.classList.remove("active"));
  if(i>0){
    i--;
  bullets[i].classList.add("active");
}else{
  i=2;
  bullets[i].classList.add("active");
}
} else {
  counter=images.length -2;
  imgContainer.style.transition="none";
  imgContainer.style.transform=`translateX(`+ ( -size * counter) +`px)`;
}
});


// Change the images Auto
window.onload = changeIMG;
function changeIMG() {
  if(counter<images.length-1){
    imgContainer.style.transition="1s ease-out";
    counter++;
    imgContainer.style.transform=`translateX(`+ ( -size * counter) +`px)`;
    bullets.forEach((ele) => ele.classList.remove("active"));
    if(i<2){
    i++;
    bullets[i].classList.add("active");
  }else{
    i=0;
    bullets[i].classList.add("active");
  }
  }
    else{
    i=1;
    bullets.forEach((ele) => ele.classList.remove("active"));
    bullets[i].classList.add("active");
    counter=0;
    imgContainer.style.transition="none";
    imgContainer.style.transform=`translateX(`+ ( -size * counter) +`px)`;
    }
  
  setTimeout("changeIMG()", time);
}


// menuToggle
// ==========menu-toggle =======
let menutoggle = document.querySelector(".toggle-menu");
let MenuItems = document.getElementById("MenuItems");

menutoggle.addEventListener("click", function () {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
});
