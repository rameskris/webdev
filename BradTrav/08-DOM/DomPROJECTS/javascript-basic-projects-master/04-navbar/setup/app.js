// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const ul=document.querySelector('.links')
 const hamMenu=document.querySelector('.nav-toggle')

hamMenu.addEventListener('click',()=>{
   ul.classList.toggle('show-links')
   
})