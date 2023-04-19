const logo=document.querySelector('img')
const onClick=()=>console.log('Click event')

const doubleClick=()=>{
   

   if(document.body.style.backgroundColor!='pink'){
      document.body.style.backgroundColor='pink'
   document.body.style.color='white'
   }else{
      document.body.style.backgroundColor='white'
   document.body.style.color='black'
   }
}
const onRightClick=()=>console.log("right click")
const onmouseDown=()=>console.log("Mouse Down")
const onmouseUp=()=>console.log("mouse Up")
const onmouseWheel=()=>console.log("mouse wheel")

const onDragStart=()=>console.log('Drag start')

logo.addEventListener('click',onClick)
logo.addEventListener('dblclick',doubleClick)
logo.addEventListener('contextmenu',onRightClick)
logo.addEventListener('mousedown',onmouseDown)

logo.addEventListener('mouseup',onmouseUp)
logo.addEventListener('wheel',onmouseWheel)
logo.addEventListener('dragstart',onDragStart)
