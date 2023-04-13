const age=19

//using if statement
if(age>18){
    console.log('You can Vote')
}else{
    console.log("You can't vote")
}

//using ternary

age>18?console.log('You can Vote'):console.log("You can't vote")


//assiging conditional value to a variable
const canVote=age>18?"yes":"Nope"
console.log(canVote)

const auth=true;
let redirect

redirect=auth?(Window.alert('Welcome to the Dashboard'),'/Dash'):(Window.alert('Denied'),'/redirct')

console.log(redirect)