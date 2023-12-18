const joke=document.querySelector("#joke")
const jokeBtn=document.querySelector("#joke-btn")



  
  
  const getJoke=()=>{
     let data;
      const xhr=new XMLHttpRequest()
  
  xhr.open('GET','https://api.chucknorris.io/jokes/ranom')
 
  xhr.onreadystatechange=function(){
    if(xhr.status===200 & xhr.readyState===4){
     data=JSON.parse(this.responseText)
      joke.innerHTML=data.value
    }else{
      data='Chcuks Says No more jokes'
      joke.innerHTML=data
    }
  }

  xhr.send()
    
  }
 jokeBtn.addEventListener('click',getJoke)
