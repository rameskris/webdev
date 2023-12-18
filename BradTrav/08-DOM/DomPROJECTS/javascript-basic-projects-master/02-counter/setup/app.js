const value=document.getElementById('value')
const btn=document.querySelectorAll('.btn')
let count=0
btn.forEach(item=>{
    item.addEventListener('click',(e)=>{
       
        if(e.target.classList.contains('decrease')){
            count--
            
        }else if(e.target.classList.contains('increase')){
            count++
          
        }else{
            count=0
            
        }

        if(count<0){
            value.style.color='red'
        }else if(count>0){
            
            value.style.color='green'
        }else{
             value.style.color='#222'
        }
        value.textContent=count
    })
})

