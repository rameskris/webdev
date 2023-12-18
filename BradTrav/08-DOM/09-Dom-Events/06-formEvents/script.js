const form=document.getElementById('item-form')

  
function onSubmit(e){
  e.preventDefault()
  const item=document.getElementById('item-input').value
  
  const priority=document.getElementById('priority-input').value

  if(item === ' ' || priority=== '0'){
    alert('fill in necesary fileds')
    return

  }
console.log('form submitted')
}

//method2 using formdata function

function onSubmit2(e){
  e.preventDefault()
  const formData=new FormData(form)
  const item=formData.get('item')//name atribute from html parameter as get method
  const priority=formData.get('priority')
  const itemEntries=formData.entries()

  for(let entry of itemEntries){
    console.log(entry[1])
  }
  // console.log(itemEntries)
  // console.log(item,priority)
}
form.addEventListener('submit',onSubmit2)