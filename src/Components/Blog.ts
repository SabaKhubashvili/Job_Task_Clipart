import { BlogData } from "../Constants";



const BlogWrapper = document.querySelector('#blog-wrapper')


if(BlogWrapper){

    BlogData.map(blog=>{
        const singleBlog = document.createElement('div');

        singleBlog.classList.add('rounded-lg')
        singleBlog.classList.add('flex')
        singleBlog.classList.add('flex-col')
        singleBlog.classList.add('bg-white')
        singleBlog.classList.add('gap-3')
        singleBlog.classList.add('sm:col-span-auto')
        singleBlog.classList.add('col-span-1')
        if(blog.main){
            singleBlog.classList.add('sm:col-span-2')
            singleBlog.classList.add('sm:row-span-2')
            singleBlog.classList.add('col-span')
            singleBlog.classList.add('md:!col-start-auto')
            singleBlog.classList.add('!col-start-1')
            singleBlog.classList.add('md:!row-start-auto')
            singleBlog.classList.add('!row-start-1')
        }
        singleBlog.innerHTML = `
        <img src="./src/Assets/First Section/${blog.image}" class="max-w-[100%] rounded-lg" alt="">
      
        <div class="p-3">
          
          <p class="text-gray-400">
            ${blog.type} • 18.04.2023 
            </p>
            <h1 class="text-sm font-FiraGo_Semibold">
              ${blog.description}
            </h1>
          </div>
          ${blog.main ?
        `
      
        <p class="mt-[3.4rem] p-4 flex justify-between border-t-2 border-dashed border-t-gray-200 ">
          <span class="text-primary font-FiraGo_Semibold cursor-pointer">
            ახალი ამბები
          </span>
          <span class="text-gray-400">
            18.04.2023 
          </span>
        </p>
        `
        :
        ''
        }
        `

        BlogWrapper.appendChild(singleBlog)
    })
}