//post request

//https://jsonplaceholder.typicode.com/posts'

function createPost({title,body}){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title,
            body
        }),
        headers:{
            'content-type':'application/json',
            token:'abc123'
        }

    })
    .then(res=>res.json())
    .then(data=>console.log(data.body))

}

createPost({title:"myPost",body:'THis is my post'})