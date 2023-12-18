const sidebar_toggle=document.querySelector('.sidebar-toggle')
const close_btn=document.querySelector('.close-btn')
const sidebar=document.querySelector('.sidebar')

sidebar_toggle.addEventListener('click',()=>{
     
     
    sidebar.classList.toggle('show-sidebar')
       
    // if(sidebar.style.transform==='translate(-100%)'){

    //     sidebar.classList.toggle('show-sidebar')
    //     sidebar.style.transform='translate(0)'
    // }else{
    //     sidebar.style.transform='translate(-100%)'
    // }
     
})
close_btn.addEventListener('click',()=>{
sidebar.classList.remove('show-sidebar')
})