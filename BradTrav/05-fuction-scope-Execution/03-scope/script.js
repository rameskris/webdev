//global

//global variables can access from anywhere
//browser has window object
//window.alert or alert window is the topmost dont need window.

//access from anywhere

//console.log(Window.innerWidth)

const x=100

if(true){
    const y=50
    console.log(x + y)
}

//console.log(y)

for(let i=0;i<=10;i++){
    console.log(i)
}

//console.log(i)

//var is not blocked scope

if(true){
    const a=10;
    let b=90;
    var c=40
}
//console.log(a)
//console.log(b)
console.log(c)

//var is fucntion scoped

function run(){
    var d=100
    console.log(d)
}

//console.log(d) error

//if we dcalre var on global its get added to window object but not added with const or let
var s=30
console.log(window)

