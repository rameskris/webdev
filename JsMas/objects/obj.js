//object is an unordered collection
//of related data
//in form of key value pairs
const firstName='Jhony'
const person={
    firstName,
    lastName:'Cruise',
    age:40,
    car:{
        brand:'toyota',
        year:2015,
        color:'red'
    },
    'this-is-a-key-with':true

}
console.log(person.firstName)
person.dog={
    name:'Fluffy'
}
console.log(person.dog.name)

//square bracket 
console.log(person['firstName'])
const property='age'
const property1='car'
const property2='year'
console.log(person[property1][property2])
console.log(person['this-is-a-key-with'])

//object methods
const myobj={
    myMethod:()=>{

    },
    myMethod1:function(){
  //cannot use this on arrow function
    },
    myMethod2(){

    }

}

//built in object methods

const employess={
    boss:'Michel',
    secretary:'pam',
    sales:'jim',
    accountant:'oscar'
}
//object.keys() create an array containg the keys of an object
const positions=Object.keys(employess)
console.log(positions)

//object.values() create an array containg the value of an object

const names=Object.values(employess)
console.log(names)

//OBJECT.ENTRIES CREATE AN NESTEd array key value pairs
const entries=Object.entries(employess)
console.log(entries)
entries.forEach(entry=>{
    let key=entry[0]
    let value=entry[1]
    console.log(`${key}:${value}`)
})

//Object.freeze() prevents modification
//to properties and values of an object
//and prevernts properties from beind
//added or removed from an object

//initialize an object

const user={
    username:'Jhon',
    password:'123'
}

//const admin=Object.freeze(user)

//admin.username='rames'

//console.log(admin)

//objects.seal() prevents new properties
//from being added to an object
//but allows the modification of existing properties

const newUser=Object.seal(user)

newUser.password='test123'
newUser.active=true

console.log(newUser)
console.log(user)