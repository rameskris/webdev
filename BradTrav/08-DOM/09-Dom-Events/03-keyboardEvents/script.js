const itemInput=document.getElementById('item-input')

onKeyPress=(e)=>console.log('keyPress')
onKeyUp=(e)=>console.log('keyup')
onKeydown=(e)=>{
   //Key
   console.log(e.key)
   //document.querySelector('h1').innerText=e.key
    if(e.key==='Enter'){
      alert('you pressed enter')
    }
   //keyCode
      
   if(e.keyCode===13){
      alert('you pressed enter')
   }
   //code
   console.log(e.code)//if we press 1 its log Digit1
   console.log('shift: ' + e.shiftKey)
}
itemInput.addEventListener('keypress',onKeyPress)
itemInput.addEventListener('keyup',onKeyUp)
itemInput.addEventListener('keydown',onKeydown)