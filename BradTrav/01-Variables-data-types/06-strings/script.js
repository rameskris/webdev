
let x;

const name='jhon'
const age=31
x='hello'+ name + age
//Template literals
x=`Hello my name is ${name} age is ${age}`
console.log(x)

//string methods and properties

const s= 'hello world'
//acess value by index
x=s[1]
//properties

x=s.length;
x=s.__proto__;

//methods
//new String('Hello World)
x=s.toUpperCase();
x=s.toLowerCase()

//to get chartaceter

x=s.charAt(0)//H
x=s.indexOf("H")//0


x=s.substring(0,4)//Hell
x=s.substring(4)//l...

x=s.slice(-10,-4) //Hello W

x=s.trim() //trim white space

x=s.replace('world','ramesh')

x=s.includes('ramesh')//true

x=s.valueOf()//hello world get the value of primitive

x=s.split()//["hello world"] if we not pass any delimeter
x=s.split(' ')//["hwllo",'world]
x=s.split('')//['h','e','......']

//challenge
const myString='developer'

// let y=myString.charAt(0)
// y=y.toUpperCase()
// let z=myString.slice(1)
// let mynewString=y+z

// console.log(mynewString)

//refactor challenge

let mynewString=myString.charAt(0).toUpperCase()+myString.substring(1);
//another solution
mynewString=myString[0].toUpperCase()+myString.substring(1);
//solution 3
mynewString=`${myString[0].toUpperCase()}${myString.substring(1)}`
console.log(mynewString)
