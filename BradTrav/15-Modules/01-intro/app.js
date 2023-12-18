//common js modules
// const message=require('./utils')

const { capitalizeWords, message } = require("./utils")
const Person=require('./Person')

// console.log(message.text)



//const capitalizeWords=require('./utils')
//const { capitalizeWords,message}=require('./utils')
console.log(capitalizeWords('hello'))
console.log(message.id)

const person=new Person('ram',32)
console.log(person.name)