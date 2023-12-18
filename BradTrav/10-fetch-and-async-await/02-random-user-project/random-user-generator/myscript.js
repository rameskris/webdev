//'https://randomuser.me/api/'
const userDiv=document.querySelector('#user')
const textCenter=document.querySelector('.textCenter')
function fetchUser(){
    userDiv.innerHTML=''
fetch('https://randomuser.me/api/')
.then(response=>{
    if(response.status!==200){
        throw new Error("something went wrong")
    }
    return response.json()

}).then(data=>{
     userData=data.results[0]
     if(userData.gender==='female'){
        document.body.style.backgroundColor='purple'
     }else{
        document.body.style.backgroundColor='blue'
     }
    
    const p=document.createElement('p')
    
    p.innerText=`
    Name:${userData.name.first} ${userData.name.last}
    Email:${userData.email}
    Gender:${userData.gender}
    Phone:${userData.phone}
    Age:${userData.dob.age}`
    p.style.flex='0 0 calc(50% - 2rem)'
    
    const img=document.createElement('img')
    img.src=userData.picture.thumbnail

    img.className='.img'
    userDiv.appendChild(img)
    userDiv.appendChild(p)
    
    
}).catch(err=>console.log(err))
}



document.querySelector('button').addEventListener('click',fetchUser)