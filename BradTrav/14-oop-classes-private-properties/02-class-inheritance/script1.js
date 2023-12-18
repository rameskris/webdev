//parent class
class Shape{
    constructor(name){
        this.name=name
    }
    logName(){
        console.log("shape name is" + this.name)
    }
}
//sub
class Rectangle extends Shape{
    constructor(name,height,width){
        super(name)
        this.width=width
        this.height=height
    }

}

class Circle extends Shape{
    constructor(name,radius){
        super(name)
        this.radius=radius
    }
    // logName(){
    //     console.log("first"+ this.name)
    // }
}
const rect=new Rectangle('Rectangle',20,30)

console.log(rect.logName())

const cir=new Circle('circle',20)
cir.logName()
console.log(rect instanceof Rectangle)
console.log(rect instanceof Shape)