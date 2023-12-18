const burger=document.getElementById("burger")
const showli=document.querySelector(".clickAs")
const close=document.querySelector(".close-btn")
console.log(burger)
console.log(showli)

burger.addEventListener('click',()=>{
  console.log( showli.classList.add('asl'))
   console.log("first")
})

close.addEventListener('click',()=>{
  console.log( showli.classList.toggle('asl'))
   console.log("first")
})