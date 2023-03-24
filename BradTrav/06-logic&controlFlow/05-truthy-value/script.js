//Falsy values
/**
 -false
 -0
 -""
 -NaN
 -undefined
 -null
 */

 //truthy values

 /*
 true
 '0'(0 in astring)
 " "(space in astring)
 "false"(false in astring)
 [] empty array //use length property to check empty array if you use [] this it will evaluate

 {}empty //use Object.keys(obj).length>0//objectt keys gives array 

 function(){} empty function
  */

 //loose equality

 /*
 false == 0      //true
 "" == 0         //true
 null == undefined //true
 so use === which means above are falsy
 */

 //&& -will return first falsy value or the last value

 let a;
 a=10 && 20; //20

 a=10 && 20 && 30 // 30

 a=10 && 0 && 20 //0 first falsy value


//  
const posts=['post one','post two']
posts.length > 0 && console.log(posts[0]) //Post one

// || will return the first truthy value or last value

let b;

b=0 || 0 
b=0||20
b=0||null||undefined
console.log(b)

//??-retuns the right side operand when the left is null or undefined

let c;
c=10 ?? 20
c=null ?? 20
console.log(c)