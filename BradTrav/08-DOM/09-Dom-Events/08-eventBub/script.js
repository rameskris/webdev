
const button=document.querySelector('button')
const div=document.querySelector('form div:nth-child(2)')
const emp=document.querySelector('.emp')
console.log(div)
button.addEventListener('click',(e)=>{
  alert('button was clicked')
  e.stopPropagation()
}
)
div.addEventListener('click',()=>alert('div was clicked'))
emp.addEventListener('click',()=>alert('empty dude'))
  