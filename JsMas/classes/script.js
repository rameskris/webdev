//the new keyword-it creates new object

const person={}
const person1=new Object()

console.log(person,person1)

const n=100


//this keyword
function Sentence(words){
    this.words=words
    console.log(this)
}

//A class is a schema for an object that can save many values
const person2={
    name:'rames',
    age:24,
    isWorking:true
}

class Person{
    constructor(name,age,isWorking){
        this.name=name,
        this.age=age,
        this.isWorking=isWorking

    }
}

const person3=new Person('spiderman',24,true)

console.log(person3)