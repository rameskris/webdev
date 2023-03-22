//object literal

//A common datastructure that holds key/value pair

const person={
    name:'ramesh krishnan',
    age:30,
    location:'Boston',
    address:{
        street:'Dubai Santhu',
        city:'Gorja',
        state:'mexico'
    },
    hobbies:['music','sports']
}



let x;

x=person['age']
x=person.address.street
x=person.hobbies[0]

//to update
person.name='krishnan'
x=person.name
//add new property
person['isAdmin']=true
person.hasChildren=false

//to delete
delete person.isAdmin

//to use sapce between words
const person2={
    'first name':"ram",
    'second name':"God"
}

console.log(person)

console.log(person2['first name'])

//other ways to crate objects
//const todo={}
const todo=new Object()
todo.id=1
let y=todo;
console.log(y)

//spread operator
const obj1={id:2}
const obj2={yd:3}

let spObj={...obj1,...obj2} //if same key name means not working

spObj=Object.assign({},obj1,obj2)

//to get keys from objects as arrayformat
spObj=Object.keys(person)

//to get values
spObj=Object.values(person.address)
//to get key value pairs single by dingle array format
spObj=Object.entries(person)
console.log(spObj)

//DESTUCTING

const ageD=30;
const dName='krish'
const lName='raja'

const nPerson={
    ageD,
    dName,
    lName
}
console.log(nPerson.ageD)

const td={
    bd:1,
    title:"hello world",
    user:{
      name:'jh'
    }
}

const {
     bd:kd, //rename
     title,
     user:{name}
    } = td
console.log(kd,title,name)

//destrucre arrays

const desArray=[1,2,3,4]

const [g,h,...rest]=desArray

console.log(g,h,rest)