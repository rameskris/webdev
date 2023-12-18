const question=document.querySelectorAll('.question')
const qutionBtn=document.querySelectorAll('.question-btn')

// qutionBtn.addEventListener('click',(e)=>{
//     if(e.target.classList.contains('fa-plus-square')){
     
//         question.classList.add('show-text')

//     }else{
//          question.classList.remove('show-text')
//     }
// })

// qutionBtn.forEach(item=>{
//     item.addEventListener('click',(e)=>{
//          if(e.target.classList.contains('fa-plus-square')){
     
//        // question.classList.add('show-text')
//          question.forEach(item=>item.classList.add('show-text'))

//     }else{
//          //question.classList.remove('show-text')
//           question.forEach(item=>item.classList.remove('show-text'))

//     }
//     })
// })

qutionBtn.forEach(item=>{
    item.addEventListener('click',(e)=>{
        
        // if(e.target.classList.contains('fa-plus-square')){
        //    item.parentElement.parentElement.classList.add('show-text')
        // }else{
        //      item.parentElement.parentElement.classList.remove('show-text')
        // }
        //or
        const showQ= item.parentElement.parentElement
        showQ.classList.toggle('show-text')
        
    })
})