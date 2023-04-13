//select single element
const output=document.getElementById("app-title")
console.log(document.getElementById("app-title").getAttribute('id'))



//set attribute
//document.getElementById("app-title").id='new-id'
document.getElementById("app-title").title='new id'
document.getElementById("app-title").setAttribute('class','title')

//get or change content
const title=document.getElementById('app-title')
console.log(title.textContent)
title.textContent="Hello World"
title.innerText="Hello Again"
title.innerHTML="<strong>Coders Stop</strong>"
//change styles
title.style.color="red"

//document.querySelector()
console.log(document.querySelector('h1'))
console.log(document.querySelector('#app-title'))
console.log(document.querySelector('.container'))
console.log(document.querySelector('input[type="text"]'))
console.log(document.querySelector('li:nth-child(2)').innerText)

//use these methods on other elements
const list=document.querySelector('ul')
list.querySelector('li:nth-child(4)').style.color='red'

//queryselector all
//retrun nodelist 
const listItems=document.querySelectorAll('.item')
// console.log(listItems)

listItems.forEach((item,index)=>{
    item.style.color='red'
    if(index===1){
        item.remove()
    }
    if(index===0){
        item.innerHtml=` <li class="item">
          grapes
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>`
    }
})

//get eleemnts bt classname
//retrun html collection
const listItems1=document.getElementsByClassName("item")
const listItemsArray=Array.from(listItems1)
listItemsArray.forEach((item)=>{
    console.log(item.innerText)
})
console.log(listItemsArray)


