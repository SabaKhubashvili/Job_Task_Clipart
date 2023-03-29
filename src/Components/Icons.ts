import { IconsData } from "../Constants"



const IconsElement = document.querySelector('#icons');

if(IconsElement){
    IconsElement.innerHTML = '';

    IconsData.map((Icon)=>{
        const SingleIcon = document.createElement('img');
        SingleIcon.src = `./src/assets/Icons/${Icon}`
        SingleIcon.classList.add('cursor-pointer')
        SingleIcon.alt = 'Social'
        
        IconsElement.appendChild(SingleIcon)
})
}