// const k=document.getElementsByTagName('body')
// console.log(k)
// k[0].addEventListener('keypress',function(e){
//     const ek=e.key
//     const ekc=e.keyCode
//     const ec=e.code
//    const divs= document.querySelectorAll('.key')
//    divs[0].textContent=ek
   
//    divs[1].innerText=ekc
//    divs[2].innerText=ec
// divs[0].innerHTML=`${ek}<small>e.key<small>`
// divs[1].innerHTML=`${ekc}<small>e.key4f4<small>`
// divs[2].innerHTML=`${ec}<small>e.key<small>`
// })

//Method 1

window.addEventListener('keydown',(e)=>{
    const insert=document.getElementById('insert')
    insert.innerHTML=`  
    <div class="key">
            ${e.key===' '?e.key='Space':e.key}
            <small>e.key</small>
        </div>

        <div class="key">
            ${e.keyCode}
            <small>e.keyCode</small>
        </div>

        <div class="key">
            ${e.code}
            <small>e.code</small>
        </div>`
})

//Method2

function showKeys(e){
    const insert=document.getElementById('insert')
    insert.innerHTML=' '
    const keyCodes={
        'e.keys':e.key===' '?e.key='Space':e.key,
       'e.keyCode':e.keyCode,
       'e.code':e.code

    }
    
    console.log(keyCodes)

    for(let keys in keyCodes){
        const div=document.createElement('div')
      div.className='key4'
      const small=document.createElement('small')
      small.appendChild(document.createTextNode(keys))
       
      const textValue=document.createTextNode(keyCodes[keys])
       div.appendChild(textValue)
       div.appendChild(small)
      insert.appendChild(div)
    }
}

window.addEventListener('keydown',showKeys)