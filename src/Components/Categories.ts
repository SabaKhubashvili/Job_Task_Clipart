import { CategoriesData } from "../Constants"

export {}

const category = document.querySelector("#categories")
const SmallScreencategories = document.querySelector('#smallScreenCategories')
const categoryDropdown = document.querySelector("#category-dropdown")
const sliced = CategoriesData.slice(-3)


if(category){
    

    CategoriesData.map(categoryLoop=>{
        const Singlecategory = document.createElement('div');
        Singlecategory.innerText = categoryLoop
        Singlecategory.classList.add('cursor-pointer')
        sliced.map(slice=>{
            if(categoryLoop == slice){
                Singlecategory.classList.add('removable')
            }
        })

        category.appendChild(Singlecategory)
    })
}

function updateCategoryDisplay() {
    if(category && categoryDropdown){
        
        const RemovableCategory = document.querySelectorAll('.removable');

        if (window.innerWidth < 1240) {
     
            
          
            RemovableCategory.forEach(element => {
                category.removeChild(element);
            });
 
            
  
  
      RemovableCategory.forEach(category => {
          const option = document.createElement('li');
          option.innerText = category.innerHTML;
          option.classList.add('dropdown-item')
          option.classList.add('cursor-pointer')
          option.classList.add('py-1')
          categoryDropdown.appendChild(option); 
        });
    }
  
        // if(window.innerWidth > 1240 ){


        //         RemovableCategory.forEach(categoryElement=>{
        //             const div = document.createElement('div')
        //             div.innerHTML = categoryElement.innerHTML
        //             div.classList.add('text-[14px]')
        //             div.classList.add('cursor-pointer')
        //             category.appendChild(div)   
        //             console.log('shevida');
                    
        //         })
        //         RemovableCategory.forEach(category=>{
        //             categoryDropdown.removeChild(category)
        //         })
        //     }
            
    
}
}

if(SmallScreencategories){

    if(window.innerWidth < 1024){
        CategoriesData.map(categoryLoop=>{

            const Singlecategory = document.createElement('div');
            Singlecategory.innerText = categoryLoop
            Singlecategory.classList.add('cursor-pointer')

            SmallScreencategories.appendChild(Singlecategory)
    })
}
}

updateCategoryDisplay();

window.addEventListener('resize', updateCategoryDisplay);
  
  