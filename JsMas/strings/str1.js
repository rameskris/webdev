//string

const first='This is a string'
const second="This is a string"
const third= `This is a string`

const sum=(a,b)=>a+b

const total=`total value is ${sum(2,2)}`
console.log(total)


//string properties

console.log(first[0])
//length
console.log(first[first.length-1])

//uppercase and lowercase
const mixed="hello How are you"
console.log(mixed.toLocaleLowerCase()) 
console.log(mixed.toUpperCase()) 

//searching for a substring
const hobbies="I love html css and js"
//indexof

console.log(hobbies.indexOf("js",23)) //-1 not finding it

//include
console.log(hobbies.includes('js')) 

//startsWith()
console.log(hobbies.startsWith('i')) 

//endsWith()
console.log(hobbies.endsWith('s')) 

//getting a substring

console.log(hobbies.slice(0,hobbies.indexOf('h')))

//split a string

const exampleString='dog love cat'
const chars=exampleString.split("")
console.log(chars)//['d', 'o', 'g', ' ', 'l', 'o', 'v', 'e', ' ', 'c', 'a', 't']
console.log(exampleString.split(" "))// ['dog', 'love', 'cat']

//reverse a string

console.log(exampleString.split(" ").reverse().join(" "))

//repeat
console.log(exampleString.repeat(7))

//excercise
const guestList='our guest are:emma ,jacob,isabella,ethen'

const guestListLength=guestList.length
console.log(guestListLength)

const upperCasedguestList=guestList.toUpperCase()
console.log(upperCasedguestList)

console.log(upperCasedguestList.includes('ETHEN'))

const subStringGuest=upperCasedguestList.slice(upperCasedguestList.indexOf(':')+1)

const guests=subStringGuest.split(",")
console.log(guests)