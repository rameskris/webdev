// //Aynsc
// //Governs how we perform tasks which take some time to complete(eg data from a database)
// // const getTodos=(resource,callback)=>{
// // const request=new XMLHttpRequest()
// // request.addEventListener('readystatechange',()=>{
// //    if(request.readyState===4 && request.status===200){
// //       //callback()
// //       const data=JSON.parse(request.responseText)
// //       callback(undefined,data)

// //    }else if(request.readyState===4 && request.status===404){
// //     // document.write(`<h1>${request.status} couldn't fetch data</h1> `)
// //     //callback()
// //     callback("couldn't fetch data",undefined)

// //    }
// // })
// // //https://jsonplaceholder.typicode.com/todos/
// // request.open('GET',resource)
// // request.send();
// // }



// //callback
// // getTodos('todos/ramesh.json',(err,data)=>{
// //     console.log(err,data)
// //     getTodos('todos/mario.json',(err,data)=>{
// //     console.log(err,data)
// //         getTodos('todos/rambo.json',(err,data)=>{
// //     console.log(err,data)
    
// //    })
// //    })
// // })

// //promise example

// const getSomething=()=>{
//    return new Promise((resolve,reject)=>{
//       //fetch something
//       resolve('some data')
//       //reject('some error')
//    })
// }

// // getSomething().then((data)=>{
// //    console.log(data)
// // },(err)=>{
// // console.log(err)
// // })

// // getSomething().then((data)=>{
// //    console.log(data)
// // }).catch((err)=>{
// //    console.log(err)
// // })


// const getTodos=(resource)=>{

//    return new Promise((resolve,reject)=>{
//       const request=new XMLHttpRequest()
// request.addEventListener('readystatechange',()=>{
//    if(request.readyState===4 && request.status===200){
//       //callback()
//       const data=JSON.parse(request.responseText)
//       resolve(data)

//    }else if(request.readyState===4 && request.status===404){
//     // document.write(`<h1>${request.status} couldn't fetch data</h1> `)
//     //callback()
//     reject("couldn't fetch data",undefined)

//    }
// })
// //https://jsonplaceholder.typicode.com/todos/
// request.open('GET',resource)
// request.send();
//    })

// }

// getTodos('todos/ramesh.json').then((data)=>{
//    console.log(data)
//    return getTodos('todos/mario.json')
// }).then((data)=>{
//    console.log(data)
//    return getTodos('todos/ramb.json')
// }).then((data)=>{
//    console.log(data)
   
// })
// .catch((err)=>{
//    console.log(err)
// })


//fetch api

fetch('todos/ramesh.json').then((response)=>{
   console.log('resolved',response)
   return response.json()
}).then(data=>console.log(data))
.catch((err)=>{
console.log('rejected',err)

})

//async await

//asyn functon always return promises

const getTodos=async ()=>{
   const response=await fetch('todos/ramesh.json')
   const data=await response.json()
  return data
}

getTodos().then((data)=>{
console.log(data)
})
