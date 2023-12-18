const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos=function(){
    fetch(apiUrl+'?_limit=5')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(todo=>addTodoDOm(todo))
    })
}

const addTodoDOm=(todo)=>{
     const div=document.createElement('div')
           div.appendChild(document.createTextNode(todo.title))
           div.classList.add('todo')
           div.setAttribute('data-id',todo.id)
           if(todo.completed){
            div.classList.add('done')
           }
           document.getElementById('todo-list').appendChild(div)
}


const createTodo=(e)=>{
    
    e.preventDefault()
    let newTodo;
    if(e.target.firstElementChild.value){
        newTodo={
         title:e.target.firstElementChild.value,
         completed:false
        }
        e.target.firstElementChild.value=''
        fetch(apiUrl,{
            method:'POST',
            body:JSON.stringify(newTodo),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>addTodoDOm(data))
    }else{
        alert("empty values not accepted")
    }
    
}

const toggleCompleted=(e)=>{
    if(e.target.classList.contains('todo')){
       e.target.classList.toggle('done')
       updateTodo(e.target.dataset.id,e.target.classList.contains('done'))
    

}
}

const updateTodo=(id,completed)=>{
   fetch(`${apiUrl}/${id}`,{
        method:'PUT',
        body:JSON.stringify({
         
            completed
        }),
        headers:{
           'Content-Type':'application/json'
        }
       })
       
 }

const deleteTodo=(e)=>{
   if(e.target.classList.contains('todo')){
    const id=e.target.dataset.is
    fetch(`${apiUrl}/${id}`,{
        method:"DELETE",
        
    }).then(res=>res.json())
    .then(()=>e.target.remove())
   }
}

const init=()=>{
    document.addEventListener('DOMContentLoaded',getTodos)
    document.querySelector('#todo-form').addEventListener('submit',createTodo)
    document.querySelector('#todo-list').addEventListener('click',toggleCompleted)
    document.querySelector('#todo-list').addEventListener('dblclick',deleteTodo)
}

init()