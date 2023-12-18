const rectanglePrototypes={
    area:function(){
     return this.width * this.height
    },
    perimeter:function(){
        return 2*(this.width+this.height)
    },
    isSquare:function(){
        return this.height===this.width
    }
}

function createRectangle(height,width){
    return Object.create(rectanglePrototypes,{
        height:{
            value:height
        },
        width:{
            value:width
        }
    })
}

const rect=createRectangle(10,20)
console.log(rect)
console.log(rect.area())

const rect1=createRectangle(20,20)
console.log(rect1)
console.log(rect1.isSquare())