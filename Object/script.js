//Object basics

//object literal syntax {}
//dot notation

const Person={
    name:'ramesh',
    age:25,
    married:true,
    sibilings:['anna','krishnan'],
    greet:function(){
        console.log(`hello my name is ${name}`)
    },
    sayHello(name){
        console.log("first")
    }
}

console.log(Person.name)

console.log(delete Person.sibilings)//true delete returns boolean


//nested objects
//set variable as property value
//dot notation vs bracket notation

const age=60
//
const random='random-value'
const Person1={
    name:'ramesh',
    //if property value matches we just use shorthand
    age,
    married:true,
    sibilings:['anna','krishnan'],
    greet:function(){
        console.log(`hello my name is ${name}`)
    },
    sayHello(name){
        console.log("first")
    },
    job:{
        title:'dev',
        company:{
            name:'ca',
            ph:12345
        }
    },
    'random-value':45 
    
}

//if we used keys in string just use square brackets

console.log(Person1[random])//here why we dont use quotes because we've already store it a random using quote
console.log(Person1['age'])



///................
//this
//points to the left dot

////.............


const john={
    firstName:'jhon',
    lastName:'andreson',
    fullName(){
        console.log(this.firstName,this.lastName)
    }
}

/*
in regular function(not arrow) this determind by how a fucntion is invoked(left of .)

defaults to global -window
arrow functions-pump the breaks

*/

console.log(this)//global object


/*
Blu print
factory functions and constructor functions
factory functions

*/

function createPerson(name,age){
    return{
        name,
        age,
        greet(){
            console.log(`${this.name} age is ${this.age}`)
        }
    }
}

let p1=createPerson('ramesh',35)

p1.greet()

//constructor function
//new -creates new object, points to it, return it

function Person2(fN,lN){
   this.firstName=fN
   this.lastName=lN
   this.fullName=function(){
           console.log(`${this.firstName} age is ${this.lastName}`)
   }
}


const ramesh=new Person2('ramesh','krishnan')


console.log(ramesh)


/*
prototypal inheritance modal
javascript uses protypal inheritance modal.that means that every constructor function/class 
has aprotype property that is shared by every instance of constructor/class
so any propeties and methods or prototype can be accessed by eevery instance.prototype property
raturns a object
*/

//es6 classes

//call apply bind

//call runs instantly,arguments-list of items

const jhon={
    name:'jhon',
    age:24,
    greet(){
      console.log(this)
      console.log(this.name ,this.age)
    }
}

const sus={
    name:'sus',
    age:24
}

function greet(city){
      console.log(this)
      console.log(this.name ,this.age,city)
    }

   // greet.call(sus)

greet.call({name:'peter',age:30})

//jhon.greet.call(sus)

//apply
//arguments array of items


// greet.apply({name:'lol',age:30})
greet.apply(sus,["rp"])