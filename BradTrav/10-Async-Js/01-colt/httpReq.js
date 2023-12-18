// const firstReq=new XMLHttpRequest()
// firstReq.addEventListener('load',()=>{
//    const data=JSON.parse(firstReq.responseText)
//    for(let planet of data.results){
//     console.log(planet.name)
//    }
// })

// firstReq.addEventListener('error',()=>{
//     console.log("error")
// })

// firstReq.open("GET", "https://swapi.dev/api/planets");
// firstReq.send();

//fetch


// const prom=fetch("https://swapi.dev/api/planets")
// prom
// .then((response)=>{
//      return response.json()
// }).then((res)=>{
//    return  fetch(res.results[0].films[0])
// }).then((next)=>{
    
//     return next.json()
// }).then((nextData)=>{
//     if(!next.ok)
//       throw new Error('stsrus')
//     console.log(nextData.titl)
// })
// .catch((res)=>{
// console.log("nope")
// })

async function greet(){
  return 4+9
}

greet().then((res)=>{
  console.log('prommise resolved with',res)
})