// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const openModel=document.querySelector('.modal-btn')
const clsoeModel=document.querySelector('.close-btn')
const modal_overlay=document.querySelector('.modal-overlay')

openModel.addEventListener('click',()=>{
     modal_overlay.classList.add('open-modal')
     
})
clsoeModel.addEventListener('click',()=>{
    modal_overlay.classList.remove('open-modal')
})
