const calculator=(num1,num2,operator)=>{
    switch(operator){
        case '+':
            return num1+num2
        case '-':
            return num1-num2
        case '*':
            return num1*num2
        case '/':
            return num1/num2
        default:
            console.error("Please enter a valid operator")
    }

}

console.log(calculator(5,2,'+'))
console.log(calculator(5,2,'-'))
console.log(calculator(5,2,'*'))
console.log(calculator(5,2,'/'))
console.log(calculator(5,2,'%'))