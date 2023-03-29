import './Components/Icons'
import './Components/Categories'
import './Components/Slider'
import './Components/Blog'

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');

const Nav = document.querySelector('#smallScreenNavbar')
let isToggled:boolean = false;

if(hamburger && Nav && close){

    hamburger.addEventListener('click',()=>{
        isToggled = !isToggled;
        
        if(isToggled){
            Nav.classList.remove('-translate-y-[40rem]')
            Nav.classList.add('translate-y-0')
            Nav.classList.add('top-0')
       }else{      
            Nav.classList.add('-translate-y-[40rem]')
            Nav.classList.remove('top-0')
            Nav.classList.remove('translate-y-0')
        }
        console.log(isToggled);
    })

    close.addEventListener('click',()=>{
        Nav.classList.add('-translate-y-[40rem]')
        Nav.classList.remove('top-0')
        Nav.classList.remove('translate-y-0')
    })
    

}


var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination-carousel",
        type: "fraction",
      },

    navigation: {
      nextEl: ".swiper-button-next-carousel",
      prevEl: ".swiper-button-prev-carousel",
    },
  });