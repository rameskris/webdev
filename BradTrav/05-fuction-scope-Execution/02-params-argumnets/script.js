function registerUser(user='ramesh'){//default parameters
    return `${user} is registerd`
}

console.log(registerUser())



//rest parameters

function sum(...numbers){
    return numbers
}

console.log(sum(1,2,3,4,5))//[1,2,3,4,5]

//object as params

function loginUser(user){
    return `${user.name} has id of ${user.id}`

}

const user={
    id:1,
    name:'ramesh'
}

console.log(loginUser(user))

//arrays as param
function randomNumber(number){
    return number[Math.floor(Math.random()*number.length)]
}

console.log(randomNumber([1,2,3,4,5]))