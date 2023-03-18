//Type conv
// converting one value to another explicitlity string of 5 to number
//Type cosertion having type changed implicitly


//exlicipt
let amount='100'
let floatNumber='100.5'

amount=parseInt(amount)
floatNumber=parseFloat(floatNumber)

//using unary operator
amount=+amount

//using number constructor
amount=Number(amount)


///
console.log(Number(null)) //zero

console.log(amount,typeof amount)

//************change number to string***********
let newAmount=100

newAmount=newAmount.toString();

//using string constructor
newAmount=String(newAmount)

console.log(newAmount,typeof newAmount)

// special number represents not an number NaN
//property of global window object its a non writable
/*five types of operation return nan one is trying "hello" parsed to number returns Nan(its one type)
second Math.sqrt(-1)//returns nan
third 1+NaN
fourth undefined+undefined
fith ('foo'/3)


*/

//implicit

let x;

x=5+'5' //55 and type is string(implicit) here it decides coherits to string


x=5*'5' //25 and type is number(implicit) here it decides coherits to number bcoz no use in string at multiply

x=5+null//5  and type is number(implicit) here it decides coherits null to zero

x=5+true //6 Number(true)//1 truty

x=5+false //5 Number(false) //0 falsy