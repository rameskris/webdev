function sayHello(){
    //function body
    console.log('Hello world')
}

sayHello()//invoking or calling a function

function add(num1,num2){   //definig function
    console.log(num1+num2)
}

add(5,10)//arguments

function subtract(num1,num2){
    return num1-num2
}



//function expression
const addSignPlus=function(value){
    return `$${value}`
}