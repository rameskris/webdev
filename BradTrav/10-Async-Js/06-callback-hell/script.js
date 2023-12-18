// function getData(endPoint,cb){
// const xhr=new XMLHttpRequest()
// xhr.open('GET',endPoint)
// xhr.onreadystatechange=()=>{
//     if(xhr.readyState===4 && xhr.status===200){
        
//             const data=JSON.parse(xhr.responseText)
//              cb(data)
        
//     }
// }
// setTimeout(()=>{
// xhr.send()
// },Math.floor(Math.random()*3000)+1000)

// }

// getData('./movies.json',(data)=>{
//     console.log(data)
//     getData('./actors.json',(data)=>{
//         console.log(data)
//          getData('./directors.json',(data)=>{
//         console.log(data)
//     })
//     })
// })

function getData(endPoint){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.open('GET',endPoint)
        xhr.onreadystatechange=()=>{
        if(xhr.readyState===4){
        
            if( xhr.status===200){
             resolve(JSON.parse(xhr.responseText))
            
            }else{
                reject("something went wrong")
            }  
    }
}

setTimeout(()=>{
xhr.send()
},Math.floor(Math.random()*3000)+1000)
    })


}

// getData('./movies.json').then(data=>{
//     console.log(data)
//     return getData('./actors.json')
// }).then(data=>{
//     console.log(data)
//     return getData('./directors.json')
// }).then(data=>console.log(data))
// .catch(err=>console.log(err))

//promise all

const mvp=getData('./movies.json')
const acp=getData('./actors.json')
const dip=getData('./directors.json')

Promise.all([mvp,acp,dip])
.then((data)=>{
    console.log(data[0][0].title)
})