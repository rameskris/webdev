// //setInterval
// // alert("Hello")
// const myInterval=setInterval(()=>{
//     console.log("first")
// },1000)


// clearInterval(myInterval)

// //callback

// function aFetch(username,callback){

//     setTimeout(()=>{
//      callback({username})
//     },2000)

// }

// function aFetchPhotos(usename,callback){
//     setTimeout(()=>{
//       callback(['photo1','photo2'])
//     },2000)

// }
// function aFetchPhotoDetails(photo,callback){
//    setTimeout(()=>{
//     callback('Details...')
//    },2000)
// }

// aFetch('ramesh',(user)=>{
//    console.log(user.username)
//    aFetchPhotos(user.username,(phots)=>{
//     console.log(phots)
//     aFetchPhotoDetails(phots[0],(de)=>{
//         console.log(de)
//     })
//    })
// })

//promises
//they are object that either return
//the succesfully fetched data or error

// const fetchUser=(username)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("fetchig user..")
//        resolve({username})
//       //reject('users not found')
//     },2000)

// })
// }
const fetchUserPhoto=(photos)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`user photos of ${photos}`)
      resolve(['photo1','photo2'])
    },2000)
    })
}
const fetchUserPhotoDetails=(photo)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`photo details of ${photo}`)
      resolve('details...')
    },2000)
    })
}

// fetchUser('michel')
// .then((user)=>fetchUserPhoto(user.username))
// .then((photos)=>fetchUserPhotoDetails(photos[0]))
// .then((details)=>console.log(details))


//async fucntion retun promises
const fetchNumber=async ()=>{
    return 25
}

const fetchedNumber=async()=>{
   const number=await fetchNumber()
   console.log(number)
}

fetchedNumber()


