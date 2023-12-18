const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const simpleColor=document.querySelector('.color')
const change_btn=document.getElementById('btn')

change_btn.addEventListener('click',()=>{
    let setText=colors[Math.floor(Math.random()*colors.length)]
    document.body.style.backgroundColor=setText
    simpleColor.textContent=setText
})
