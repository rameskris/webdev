const div=document.createElement('div')
div.className='my-element'
div.id='my-element'
div.setAttribute('title','my-element')
//div.innerText="hello" //innertext is best for already availabel element if u want new one create new node

const text=document.createTextNode('Hello World')

div.appendChild(text)
document.body.appendChild(div)
console.log(div)