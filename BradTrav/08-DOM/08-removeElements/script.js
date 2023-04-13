function removeClearButton(){
    const clrBtn=document.querySelector("#clear")
    clrBtn.remove()
}
removeClearButton()

//remove Child

// function removeFirstItem(){
//     const ul=document.querySelector('ul')
//     const firstItem=document.querySelector('li:first-child')
//     ul.removeChild(firstItem)
// }
// removeFirstItem()

function removeItem(itemNumber){
      const ul=document.querySelector('ul')
      const li=document.querySelector(`li:nth-child(${itemNumber})`)
      ul.removeChild(li)
   
  
}
removeItem(1)