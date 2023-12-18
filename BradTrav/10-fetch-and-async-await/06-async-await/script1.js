// async function getUsers(){
//     const res=await fetch('https://jsonplaceholder.typicode.com/users')

//     const data=await res.json()

//     console.log(data)
// }

const getUsers=async()=>  {
    const res=await fetch('https://jsonplaceholder.typicode.com/users')

    const data=await res.json()

    console.log(data)
}
getUsers()


try{
    console.log(x)
}catch(error){
    console.log('Error'+error)
}