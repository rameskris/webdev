const animals=['dogs','cats']
const otherAnimals=animals
otherAnimals.push('lion')
console.log(animals)

//cloning array
//1st way spread operator
//2nd way array.slice

const numbers=[1,2,3,4,5]

//const cloneNumbers=[...numbers]
const cloneNumbers=numbers.slice()
const copiedNumbers=numbers

numbers.push(6)
console.log(numbers)
console.log(cloneNumbers)
console.log(copiedNumbers)

//cloning objects //shawllow cloning
//1st way spread operator
//2nd way Object.assign

const person={name:'ramesh',age:20}
//const otherPerosn={...person}
const otherPerosn=Object.assign({},person)

console.log(otherPerosn===person)

//
const person1={
    name:'Emma',
    car:{
        brand:"BMW",
        color:'blue',
        wheels:4
    }
}

const otherPerosn1={...person1,car:{...person1.car}}//we have to remove reference from inner car object
otherPerosn1.name='Krish'
otherPerosn1.car.color='yellow'
console.log(otherPerosn1)
console.log(person1)

//deep clone
const newPerson=JSON.parse(JSON.stringify(person))
console.log(newPerson)