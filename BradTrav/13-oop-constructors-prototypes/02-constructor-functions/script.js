function Rectangle(name,width,height){
    this.name=name
    this.width=width
    this.height=height
    this.area=function(){
        return this.height*this.width
    }
}
// when we use new keyeprd 4 thing happen
// A new empty obj is created
//constructor function is called with the argument that we passes in
//this keyword is set to the new empty object
//new obje is returned from the constructor function

const rect1=new Rectangle("Rectangle1",20,20)
const rect2=new Rectangle("Rectangle2",30,20)
console.log(rect1.area())

console.log(rect1.constructor)
console.log(rect1 instanceof Rectangle)