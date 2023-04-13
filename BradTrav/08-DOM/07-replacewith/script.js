//replace item

const firstItem=document.querySelector('li')
const newLi=document.createElement('li')
newLi.textContent='replaced item'

firstItem.replaceWith(newLi)

function replaceSecondItem(){
    const secondItem=document.querySelector('li:nth-child(2)')


secondItem.outerHTML='<li>replaced second item</li>'


}
replaceSecondItem()

function replaceAllItems(){
    const ul=document.querySelectorAll('li')
//    ul.forEach(item=>{
//     item.outerHTML='<p>Hi</p>'
//    })
  ul.forEach((item,index)=>item.outerHTML=(index===1)?`<li>Nope</li>`:`<li>Replace</li>`)
    
}
replaceAllItems()


function replaceChild(){
    const header=document.querySelector('header')
    const h1=document.querySelector('header h1')
    const h2=document.createElement('h2')
    h2.id='app-title'
    h2.textContent='New Shopping'
    header.replaceChild(h2,h1)
    
}

replaceChild()