const itemForm=document.getElementById('item-form')
const itemInput=document.getElementById('item-input')
const itemList=document.getElementById('item-list')
const clrBtn=document.getElementById('clear')
const filterBtn=document.getElementById('filter')
const formBtn=itemForm.querySelector('.btn')
let isEditMode=false;

function displayItems(){
    const items=getItemfromStorage()
    items.forEach(item=>addItemToDom(item))
    checkUi()
}
function onAddItemSubmit(e){
    e.preventDefault()
    const newItem=itemInput.value
    if(newItem===''){
        alert('not empty')
        return
    }
    //check for updated element
    if(isEditMode){
        const itemToUpdate=document.querySelector('.edit-mode')
        removeItemFromStorage(itemToUpdate.textContent)
        itemToUpdate.classList.remove('.edit-mode')
        itemToUpdate.remove()

        isEditMode=false
    }else{
        if(itemAlreadyExist(newItem)){
            alert('item already available')
            return
        }
    }
    //create item dom element
    addItemToDom(newItem)
    //add items to storage
    addItemToStorage(newItem)
    //checkUi
    checkUi()
    itemInput.value=''
}
//add item
function addItemToDom(newItem){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(newItem))
    
    const button=createButton('remove-item btn-link text-red')
    li.appendChild(button)
    const icon=createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    itemList.appendChild(li)
}
//add item to storage

function addItemToStorage(item){
    const itemFromStorage=getItemfromStorage()

    itemFromStorage.push(item)
    localStorage.setItem('items',JSON.stringify(itemFromStorage))
}

//get item from storage
function getItemfromStorage(){
     let itemFromStorage

    if(localStorage.getItem('items')===null){
        itemFromStorage=[]
        
    }else{
        itemFromStorage=JSON.parse(localStorage.getItem('items'))
    }
    return itemFromStorage
}
//create button
function createButton(classes){
    const button=document.createElement('button')
    button.className=classes

    return button

}
function createIcon(classes){
    const icon=document.createElement('i')
    icon.className=classes
    
    return icon

}
function onClickItem(e){

  if(e.target.parentElement.classList.contains('remove-item')){
   removeItem(e.target.parentElement.parentElement)
   
  }else{
    setItemToEdit(e.target)
  }
}
function setItemToEdit(item){
    isEditMode=true
    itemList.querySelectorAll('li').forEach(i=>i.classList.remove('edit-mode'))
    item.classList.add('edit-mode')
    formBtn.innerHTML='<i class="fa-solid fa-pen"></i> Update Item'
    formBtn.style.backgroundColor='green'
    itemInput.value=item.textContent
}

//remove item
function removeItem(item){
   //console.log(e.target.parentElement.parentElement)
       if(confirm('Are ou sure?')){
        item.remove()
        //remove item from storage
        removeItemFromStorage(item.textContent)
        //checkui
        checkUi()
  
       }
}
//local storage rmoval
function removeItemFromStorage(item){
    let ittemFromStorage=getItemfromStorage()

    ittemFromStorage= ittemFromStorage.filter(i=>i!==item)
    localStorage.setItem('items',JSON.stringify(ittemFromStorage))
}
//clearAll
function clearAll(){
    if(confirm('Are ou sure?'))
   while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild)
   }
   localStorage.removeItem('items')
   checkUi()
}
//check ui
function checkUi(){
    const items=itemList.querySelectorAll('li')
    if(items.length===0){
        clrBtn.style.display='none'
        filterBtn.style.display='none'
    }else{
        clrBtn.style.display='block'
        filterBtn.style.display='block'
    }
     formBtn.innerHTML='<i class="fa-solid fa-plus"></i> Add Item'
    formBtn.style.backgroundColor='black'

    isEditMode=false
    
}

//chcek item already exits
function itemAlreadyExist(item){
    let itemFromStorage=getItemfromStorage(item)
    return itemFromStorage.includes(item)
}

//filter items
function filterItems(e){
    const text=e.target.value
    const items=itemList.querySelectorAll('li')
    items.forEach(item=>{
        const itemName=item.firstChild.textContent.toLocaleLowerCase()
        if(itemName.indexOf(text)!==-1){
          item.style.display='flex'
        }else{
           item.style.display='none'
        }
    })
}


//Event listener

itemForm.addEventListener('submit',onAddItemSubmit)

itemList.addEventListener('click',onClickItem)
clrBtn.addEventListener('click',clearAll)
filterBtn.addEventListener('input',filterItems)
document.addEventListener('DOMContentLoaded',displayItems)
checkUi()

//localStorage
// localStorage.setItem('name','ramesh')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')

//local storage
//webstorage API -provided by browser
//session storage,loacal storage
//setItem,getItem,removeItem,clear

// localStorage.setItem('name','jhon')
// sessionStorage.setItem('name','jhon')

/*
localStorage.setItem('name','ramesh')
localStorage.setItem('friend','krishnan')//if same key means replaced
localStorage.setItem('job','Developer')

const name=localStorage.getItem('name')
console.log(name)
localStorage.removeItem('name')
*/

//JSON.stringify(),JSON.parse
/*
const friends=['ramesh','suresh','mani']
localStorage.setItem('freinds',JSON.stringify(friends))
const fri=JSON.parse(localStorage.getItem('freinds'))
let fruits

if(localStorage.getItem('fruits')){
    fruits=JSON.parse(localStorage.getItem('fruits'))
}else{
    fruits=[]
}

//fruits.push('apple')
fruits.push('oranges')
localStorage.setItem('fruits',JSON.stringify(fruits))

*/