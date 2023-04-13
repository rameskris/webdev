//everything in adom is a node
//get child elements from parent
let output
const parent=document.querySelector('.parent')
output=parent.children
output=parent.children[1].innerText
output=parent.children[1].className
output=parent.children[1].innerText='child Two'


parent.firstElementChild.innerText='child one'
parent.lastElementChild.innerText='child three'

//get parent eleemnts from child
const child=document.querySelector('.child')
output=child.parentElement.style.border='1px solid black'
child.parentElement.style.padding='10px'
// console.log(child.parentElement)

//sibiling element
const secondItem=document.querySelector('.child:nth-child(2)')
output=secondItem.previousElementSibling
secondItem.nextElementSibling.style.color='red'


/** <div class="parent">
      <!-- comment -->
      <div class="child">Child 1</div>
      <div class="child">Child 2</div>
      <div class="child">Child 3</div>
    </div> */

    //clg is 
    /**NodeList(9)
0: text     //whitespace is consider as text node
1: comment
2: text
3: div.child
4: text
5: div.child
6: text
7: div.child
8: text
length: 9 */

const p1=document.querySelector('.parent')
output=p1.childNodes
console.log(output[0].textContent)
console.log(output[0].nodeName)
console.log(output[3].outerHTML)

console.log(output[0].textContent='p')
console.log(p1.lastChild.textContent='hello')