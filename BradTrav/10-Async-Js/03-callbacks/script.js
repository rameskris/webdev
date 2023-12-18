// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];


function getPost(){
  setTimeout(()=>{
    posts.forEach(post=>{
      const div=document.createElement('div')
      div.innerHTML=`<p><strong>${post.title}</strong> - ${post.body}</p>`
      document.querySelector("#posts").appendChild(div)
    })
  },1000)
}



function createPost(newPost){
  return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let error=false
          if(!error){
             posts.push(newPost)
            resolve()
          }else{
            reject()
          }
    
  },2000)
  })


}

createPost({ title: 'Post three', body: 'This is post three' })
.then(getPost)
.catch(showError)

function showError(){
  const h1=document.createElement('h1')
  h1.innerHTML="something went wrong"
  document.querySelector("#posts").appendChild(h1)
}

