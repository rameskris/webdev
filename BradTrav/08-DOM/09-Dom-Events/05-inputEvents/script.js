const itemInput=document.getElementById('item-input')
const priorityInput=document.getElementById('priority-input')
const checkbox=document.getElementById('checkbox')
const h1=document.querySelector('h1')


function onInput(e){
  h1.textContent=e.target.value
}

function onChecked(e){
  const checked=e.target.checked
  h1.textContent=checked?"yes":"nope"
}
function onFocus(e){
 console.log("input focused")
 itemInput.style.outlineStyle='solid'
 itemInput.style.outlineWidth='1px'
 itemInput.style.outlineColor='red'
}
function onBlur(e){
 
console.log("not focuses")
itemInput.style.outlineStyle='none'

}
itemInput.addEventListener('input',onInput)
priorityInput.addEventListener('input',onInput)//here we can use 'change' event insted of input
checkbox.addEventListener('input',onChecked)
itemInput.addEventListener('focus',onFocus)
itemInput.addEventListener('blur',onBlur)

