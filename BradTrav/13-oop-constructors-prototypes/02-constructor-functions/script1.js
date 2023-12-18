// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal

// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// };

// console.log(Object.getPrototypeOf(longEar))

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit={
//     __proto__:animal,
//     name:"whr"
// }

// rabbit.sleep()

// console.log(rabbit.isSleeping)
// console.log(animal.isSleeping)


let head = {
  glasses: 1
};

let table = {
    __proto__:head,
  pen: 3
};

let bed = {
    __proto__:table,
  sheet: 1,
  pillow: 2
};

let pockets = {
    __proto__:bed,
  money: 2000
};
Object.setPrototypeOf(table,head)
console.log(Object.getPrototypeOf(head))

// let hamster = {


//   stomach: [] 
// ,

//   eat(food) {

//          this.stomach.push(food);
//     }
     
    
    
  
// }

// let speedy = {
//     stomach:[],
//   __proto__: hamster
// };

// let lazy = {
//     stomach:[],
//   __proto__: hamster
// };

// This one found the food
// speedy.eat("apple");
// console.log("speedy" + speedy.stomach ); // apple

// // This one also has it, why? fix please.
// console.log( lazy.stomach ); // apple

// let lastYear=new Date('1900-10-10').getFullYear()
// console.log(lastYear-1)

Date.prototype.lastYear=function(){
  console.log(this.getFullYear()-1)

}

Array.prototype.map=function(){
  for(let i=0;i<this.length;i++){
    console.log(this[i]+"@")
  }
}

function Shape(name){
  this.name=name
}
Shape.prototype.logName=function(){
   console.log(this.name)
}
function Rectangle(name,height){
  Shape.call(this,name)
  this.height=height
}
 Rectangle.prototype=Object.create(Shape.prototype)
  //now contructor also change so use
 Rectangle.prototype.constructor=Rectangle
const rect=new Rectangle('rectangle1', 2)
console.log(rect)



rect.logName()