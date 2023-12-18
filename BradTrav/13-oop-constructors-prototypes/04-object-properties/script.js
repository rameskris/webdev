function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1=new Rectangle('rectangle1',20,20)

//add property
rect1.color='red'

rect1.perimeter=()=>2*(rect1.width+rect1.height)

console.log(rect1.perimeter)

//delete property
delete rect1.perimeter

//check for property
console.log(rect1.hasOwnProperty('color'))

//get keys
console.log(Object.keys(rect1))
//get values
console.log(Object.values(rect1))

//get entries
console.log(Object.entries(rect1)[0])
console.log(rect1)

for(let [k,v] of Object.entries(rect1)){
  console.log(`Hello ${k}`)
}