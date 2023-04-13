//Quick and dirty

function createListItem(item){
const newLi=document.createElement('li')
newLi.innerHTML=` 
                ${item}
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `
document.querySelector('.items').appendChild(newLi)
}


//createListItem('Ammu')

//clean and proficient

function createElement1(item){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(item))

    // const button=document.createElement('button')
    // button.className='remove-item btn-link text-red'

    const button=createButton('remove-item btn-link text-red')

//    const icon=document.createElement('i')
//     icon.classList='fa-solid fa-xmark'


    // button.appendChild(icon)
 
    li.appendChild(button)
    document.querySelector('.items').appendChild(li)
     
}

//refactoring

function createButton(classes){
    const button=document.createElement('button')
    button.className=classes
    const icon=createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    console.log(button)
    return button
}

function createIcon(classes){
    const icon=document.createElement('i')
    icon.className=classes
    return icon
}

createElement1('gh')
createElement1('pani poori')


