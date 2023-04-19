function onClear(){
    const ul=document.querySelector('ul')
   // ul.remove()
   //ul.innerHTML=''
   const items=document.querySelectorAll('li')
//    items.forEach(item=>item.remove())
   while(ul.firstChild){
    ul.removeChild(ul.firstChild)
   }
}

const clrBtn=document.querySelector('#clear')

// clrBtn.onclick=function(){
//     alert('clear')
// }

// clrBtn.addEventListener('click',function(){
//     alert('clcik')
// })

clrBtn.addEventListener('click',onClear)

// setTimeout(()=>{
//     clrBtn.removeEventListener('click',onClear)
// },5000)
