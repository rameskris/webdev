//arrow funtion

const add=(a,b)=>{
    return a+b
}

console.log(add(5,6))

//implicit return
const subtract=(a,b)=>a-b
console.log(subtract(2,1))

const double=(a)=>a*2  //or a => a*2 for single param

//returniing object

const reObj=()=>({
    name:'ram'
})
console.log(reObj());


//iife imdiate invoke function //use to avoid global scope pollutin

(function(){
const user='raam'
console.log(user)
})();