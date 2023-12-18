const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const simpleColor=document.querySelector('.color')
const change_btn=document.getElementById('btn')

change_btn.addEventListener('click',()=>{
    let setText='#'
    for(let i=0;i<simpleColor.textContent.length;i++){
        if(i<6){
        setText+=hex[Math.floor(Math.random()*hex.length)]
        }
        //continue
    }
  
    document.body.style.backgroundColor=setText
    simpleColor.textContent=setText
    console.log()
})
