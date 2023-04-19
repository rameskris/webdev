    // <!-- Use `defer` when you put script in head -->
    // <script src="./script.js" defer></script>

    //document.querySelector('h1').textContent='Hello world'


    //caught TypeError: Cannot set properties of null (setting 'textContent')
 //to aviod this use load
    window.addEventListener('load',()=>document.querySelector('h1').textContent='Hello world')

    //as soon as dom parsed it will load
    window.addEventListener('DOMContentLoaded',()=>document.querySelector('h1').textContent='Hi')

    window.addEventListener('resize',(e)=>{
        document.querySelector('h1').innerText=`Resized to ${window.innerWidth} * ${window.innerHeight}`
    })

    window.addEventListener('scroll',()=>{
      console.log(`${window.scrollX} and ${window.scrollY}`)
      if(window.scrollY > 70){
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
      }else{
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
      }
    })


    window.addEventListener('focus',()=>{
      document.body.style.color='blue'
    })
     window.addEventListener('blur',()=>{
      document.body.style.color='black'
    })