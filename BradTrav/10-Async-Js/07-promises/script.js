//prommise
//its an object its represent a eventual completion or failure of async operation

const promise=new Promise((resolve,reject)=>{
    //do some asyn tasks
    setTimeout(()=>{
       console.log('async taks complete')
       resolve()
    },1000)
})

promise.then(()=>{
    console.log("first")
})