function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
 
}

Rectangle.prototype.area=function(){
     return this.width * this.height;
}
const rect = new Rectangle('Rect', 10, 10);

const rect1=new Rectangle('Rect1',3,3)
console.log(rect)
console.log(rect.area())
console.log(rect1.area())
