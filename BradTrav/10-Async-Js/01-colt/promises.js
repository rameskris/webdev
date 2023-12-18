//two things matter
// 1.how to create function that return promise
//2.how you consume or interact with promise

//promise is js object representing eventual completion or failure of an asynchronous operation

//making new promis

// const willGetYouAdog=new Promise((resolve,reject)=>{


//     //resolve()
//    // reject()
//    const random=Math.random()

//  if(random<0.5){
//     resolve()
//    }
//    else{
//     reject()
//    }
// })

// willGetYouAdog.then(()=>{
//     console.log("yep")
// })

// willGetYouAdog.catch(()=>{
//     console.log("first")
// })

//  const makeNewPromise=()=>{
// return new Promise((res,rej)=>{
//     if(random<0.5){
//     resolve()
//    }
//     else{
//      reject()
//   }
// })
// }
// makeNewPromise().then(()=>{

// }).catch(()=>{

// })


const fakeRequest=(url)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    
      const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
        const data=pages[url]
        if(data){
            resolve({status:200,data})
        }
        else{
          reject({status:404})
        }
        
    },1000)
  })
}

fakeRequest('/users').then((res)=>{
  const id=res.data[0].id
  return fakeRequest(`/users/${id}`)
}).then((res)=>{
  const postId=res.data.topPostId
  return fakeRequest(`/posts/${postId}`)
}).then((res)=>{
  console.log(res.data.title)
})
.catch((rej)=>{
  console.log(rej.status)
})