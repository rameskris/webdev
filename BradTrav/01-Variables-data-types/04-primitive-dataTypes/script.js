/*Primimtive Data Types
string-Sequence of characters Must be in quotes or backticks
Number-Integers as well as floating point numbers
Boolean-logical entity/true or false
null-intenstional absence of any object value
Undefined-A variable that has not yet been defined/assigned
symbol-built in oobject whose constructor returns a unique symbol
BigInt-Numbers that re grate than the Number type can handle

*/

/*Reference Data Types
rdt or objects are a non-primitive value and when assigned to a variable ,
the varaible is given a reference to that value

Objects literals,arrays and functions are all reference types
check screen shot
*/

//String

const first='ramesh'

const output=first
console.log(output,typeof output)

//number
const inte=10

//boolean
const hasKidz=true;

//null
const aptNumber=null//typeof is object null is not object its a primitive its just a mistakes

//symbol

const id=Symbol('id');

//BigInt
const n=9007199254740991n;

//Reference types

const numbers=[1,2,3,4] //type f object

const person={
    name:'Brad',

}

function sayHello(){

}



//reference vs primitive

let name="ramesh";
let newName=name;
newName='shiv'

let newPerson=person
newPerson.name='Gandhi'

console.log(newPerson,person)