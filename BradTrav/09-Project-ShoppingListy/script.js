//get elements
const form_handle=document.getElementById('item-form')
const input_handle=document.querySelector('.form-input')
const btn_handle=document.querySelector('.btn')
const ul=document.querySelector('ul')
const filtered_items=document.querySelector('#filter')

const remove_item=document.querySelector('.remove-item')
const clear_all=document.querySelector('.btn-clear')
//ad items to the list via the form
// window.addEventListener('load',()=>{
  
//     while(ul.firstElementChild){
//         ul.firstChild.remove()
//     }
// })

function onSubmit(e){
    e.preventDefault()
    const formData=new FormData(form_handle)
    const listItem=formData.get('item')
    form_handle.reset()
    //add item
    const li=document.createElement('li')
    // li.innerHTML=` ${listItem}
    //       <button class="remove-item btn-link text-red">
    //         <i class="fa-solid fa-xmark"></i>
    //       </button>`
    // ul.appendChild(li)
    const text=document.createTextNode(listItem)
    li.appendChild(text)
   const button=document.createElement('button')//.classList.add("remove-item", "btn-link", "text-red")
   button.classList.add("remove-item", "btn-link", "text-red")
   const i= document.createElement('i')
   i.classList.add('fa-solid','fa-xmark')
   console.log(button,i)
   button.appendChild(i)
   li.appendChild(button)
   ul.appendChild(li)
   
   //local storage
  

removeItem()
    

}
form_handle.addEventListener('submit',onSubmit)

//remove item
function removeItem(){
    const listItems=document.querySelectorAll('li')
       listItems.forEach(item=>{
       item.addEventListener('click',(e)=>{
        e.currentTarget.remove()
    })
})
    
}



//clear all
clear_all.addEventListener('click',()=>{
  
    while(ul.firstElementChild){
        ul.firstChild.remove()
    }
})


//filter
filtered_items.addEventListener('input',(e)=>{
    
    const lis=document.querySelectorAll('li')
    lis.forEach(li=>{
        const check=li.innerText.toLowerCase()
        
        if(check.includes(e.target.value)&& (e.target.value!==' ')){
           li.style.opacity=1
        }
        else{
            li.style.opacity=0
        }

        
    })
})

//local storage
