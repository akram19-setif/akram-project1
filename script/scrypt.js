// /* MENU SHOW */

// const showMenu=(toggleId,navId) =>{
//  const toggle=document.getElementById(toggleId);
//  nav=document.getElementById(navId);
//   if(toggle && nav){
//   toggle.addEventListener('click', ()=>{
//     nav.classList.toggle('show');
//   })
// }
// }
// showMenu('nav-toggle','nav-menu');
// /*   Active And Remove Menu */
// const navLink=document.querySelectorAll('.nav_link');
// function linkAction(){
//   navLink.forEach(n =>n.classList.remove('active'));
//   this.classList.add('active');
//   //  remove Menu Mobile
//   const navMenu=document.getElementById('nav-menu');
//   navMenu.classList.remove('show');
// }
// navLink.forEach(n => n.addEventListener('click',linkAction))


// // SCROLL REVIAL ANIMATION
// const sr=ScrollReveal({
//   origin:'top',
//   distance:'80px',
//   duration: 2000,
//   reset:true
// })
// //Scroll Home 
// sr.reveal('.home__title',{})
// sr.reveal('.button',{delay:150})
// sr.reveal('.home_img',{delay:350})
// sr.reveal('.home_social-icon',{interval:150})
// //Scroll About 
// sr.reveal('about_img',{})
// sr.reveal('.about_subtitle',{delay:150})
// sr.reveal('.about_text',{delay:350})
// //Scroll Skills
// sr.reveal('.skills_subtitle',{})
// sr.reveal('.skills_text',{delay:150})
// sr.reveal('.skills_data',{interval:150})
// sr.reveal('.skills_img',{delay:350})
// //Scroll Work
// sr.reveal('.work_img',{interval:150})
// //Scroll Contact
// sr.reveal('.contact_input',{interval:150})