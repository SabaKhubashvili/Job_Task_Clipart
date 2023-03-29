import {CarouselData} from '../Constants/index'



const wrapper = document.querySelector('#slider-wrapper')

if(wrapper){

    wrapper.innerHTML = ''

    CarouselData.map((carousel,index)=>{

        const singleCarousel = document.createElement('div')
        singleCarousel.classList.add('swiper-slide')
        singleCarousel.classList.add('relative')
        singleCarousel.innerHTML= `
        <div class="relative h-full">
          <img
            src="./src/Assets/Sliders/${carousel.image}"
            class="h-full w-full rounded-lg max-h-[40rem]"
            alt=""
          />

          <div class="md:hidden flex w-full h-full absolute top-0">
            <div
              class="absolute top-[50%] transform -translate-y-[50%] bg-white left-5 rounded-lg"
            >
              <div class="swiper-button-prev-carousel cursor-pointer sm:w-auto !w-10 !px-2 !h-8"></div>
            </div>
            <div
              class="absolute top-[50%] transform -translate-y-[50%] bg-white right-5 rounded-lg px-3 py-1.5"
            >
              <div class="swiper-button-next-carousel cursor-pointer  !w-4 !px-2 !h-4"></div>
            </div>
          </div>
        </div>

        <div
          class="bg-white md:absolute extramd:w-1/2 extramd:pb-20 z-10 md:bottom-5 extramd:left-5 extramd:mx-0 md:mx-4 rounded-lg px-2 py-3 flex flex-col justify-between gap-3"
        >
          <div class="text-primary font-FiraGo_Regular font-[600] text-sm">
            ${carousel.category}
            <span class="text-gray-400"> &#x2022; ${carousel.date} </span>
          </div>
          <h1 class="md:text-lg text-[20px] font-FiraGo_Semibold">
           ${carousel.description}
          </h1>
        </div>
        <div
          class="md:flex hidden bg-gray-200 extramd:bottom-8 extramd:top-auto extramd:left-7 left-7 top-5 z-20 absolute rounded-lg px-4 w-[136px] justify-between items-center"
        >
          <!-- Navigation Carousel -->
          <div class="swiper-button-prev-carousel cursor-pointer"></div>
          <div class="text-center font-[700] w-[90px] tracking-[0.1px] leading-[25px] text-[16px]">
            ${index + 1 }/4
          </div>
          <div class="swiper-button-next-carousel cursor-pointer"></div>
        </div>
      `
      wrapper.appendChild(singleCarousel)
        
    })
}