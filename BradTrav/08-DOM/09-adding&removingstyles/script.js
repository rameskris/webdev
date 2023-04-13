const text=document.querySelector('p')
const itemList=document.querySelector('.item-list')
const items=document.querySelector('li')

function run(){
    console.log(itemList.className)
   // text.className='card dark'
   itemList.classList.forEach((c)=>console.log(c))
//    text.classList.add('dark')
//    text.classList.remove('dark')
text.classList.toggle('hidden')
}

document.querySelector('button').onclick=run