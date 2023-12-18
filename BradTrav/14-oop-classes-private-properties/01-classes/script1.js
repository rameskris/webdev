class Rectangle{
    
    constructor(name,width,height){
        this.name=name;
        this.width=width;
        this.height=height
     console.log("first")
    }
    area(){
        return this.height*this.width
    }

    logArea(){
        return('Rectangle' + this.area())
    }
}

const rect1=new Rectangle('rectangle1',20,20)
console.log(rect1)
console.log(Object.getPrototypeOf(rect1))
console.log(rect1.logArea())