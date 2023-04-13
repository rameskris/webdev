//insertAdjacentElement Example
function insertElement(){
    const filter=document.querySelector('.filter')
    const h1=document.createElement('h1')
    h1.textContent='Hello'
    filter.insertAdjacentElement('beforebegin',h1)
}
//insertAdjacentText Example
//insertAdjacentHtml Example
function insertHtml(){
    const clrBtn=document.getElementById('clear')

    clrBtn.insertAdjacentHTML('afterend','<h2>gho</h2>')
}
//insertBefore Example
function insertBeforeItem(){
    const ul=document.querySelector('ul')
    const li=document.createElement('li')
    li.textContent="nope"
    const thirdItem=document.querySelector('li:nth-child(3)')

    ul.insertBefore(li,thirdItem)
}
//inserAfter
function insertAfterItem(newEl,existingEl){
   existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling)
   
}
//
 const firstItem=document.querySelector('li')
 const li=document.createElement('li')
 li.textContent="insertAfter"
 insertElement()
 insertHtml()


insertBeforeItem()
insertAfterItem(li,firstItem)


/**
// beforebegin
<p>
// afterbegin
foo
// beforeend
</p>
//afterend
 */