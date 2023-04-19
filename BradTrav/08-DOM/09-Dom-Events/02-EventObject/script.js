const logo=document.querySelector('img')
function onClick(e){
   console.log(e)
   console.log(e.target)//img
   console.log(e.currentTarget)//img
   console.log(e.type)
   console.log(e.timeStamp)
   e.target.style.backgroundColor='black'
}
logo.addEventListener('click',onClick)

document.body.addEventListener('click',function(e){
   console.log(e.target)
   console.log(e.currentTarget)

})
function onDrag(e){
   document.querySelector('h1').textContent=`X ${e.clientX} Y ${e.clientY}`
}
logo.addEventListener('drag',onDrag)
/**
 * target-the element that triggered the event
 * currentTarget-the element that the event listener is attached to
 * type-type of event that was triggerd
 * timeStamp-the time that the event was triggerd
 */
/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/