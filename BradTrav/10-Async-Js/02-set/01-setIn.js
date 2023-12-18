// const start=document.querySelector('#start')
// const stop=document.querySelector('#stop')
// let colors=["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let stopChange


// start.addEventListener('click',()=>{
//  stopChange=setInterval(()=>{
//    document.body.style.background=colors[Math.floor(Math.random()*colors.length)]
// },1000)   
// })

// stop.addEventListener('click',()=>{
//  clearInterval(stopChange)
//  document.body.style.background=''  
// })

let intervalId;
let selectColor=''
function startChange(){
    if(!intervalId)
    intervalId=setInterval(changeRandomColor,1000)
}
// function changeColor(){
//    if(document.body.style.backgroundColor==='white'){
    
    
//     document.body.style.backgroundColor='black'
//     document.body.style.color='white'
//    }else{
//     document.body.style.backgroundColor='white'
//     document.body.style.color='black'
//    }
// }
function changeRandomColor(){
    const randomColor=Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor="#"+randomColor
}
function stopChange(){
    clearInterval(intervalId)
    document.body.style.backgroundColor=""
}
document.querySelector("#start").addEventListener('click',startChange)
document.querySelector("#stop").addEventListener('click',stopChange)