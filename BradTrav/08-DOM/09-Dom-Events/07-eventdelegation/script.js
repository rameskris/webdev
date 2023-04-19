
const listItems=document.querySelectorAll('li')
const ul=document.querySelector('ul')
// listItems.forEach(li=>{
//   li.addEventListener('click',()=>{
//      li.remove()
//   })
// })

ul.addEventListener('click',(e)=>{
  if(e.target.tagName==='LI'){
    e.target.remove()
  }
})