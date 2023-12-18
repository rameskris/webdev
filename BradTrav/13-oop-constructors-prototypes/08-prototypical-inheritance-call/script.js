function Shape(name){
    this.name=name
}

Shape.prototype.logName=function(){
    console.log(`Hello ${this.name}`)
}


function Rectangle(name,height,width){
    Shape.call(this,name)
    this.height=height
    this.width=width
}
//inherite shape properties
Rectangle.prototype=Object.create(Shape.prototype)

//set protype constructor
Rectangle.prototype.constructor=Rectangle


const rect=new Rectangle('Rectangle',20,20)
console.log(rect)
rect.logName()



function Circle(name,height){
    Shape.call(this,name)
    this.height=height
    
}


Circle.prototype=Object.create(Shape.prototype)

//set protype constructor
Circle.prototype.constructor=Circle

const cir=new Circle('cir',20)
cir.logName()

// 
console.log("HI",rect.constructor)