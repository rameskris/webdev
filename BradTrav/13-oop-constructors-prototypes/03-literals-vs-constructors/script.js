const strLit='Hello'
const strObj=new String("HI")

console.log(strLit,typeof strLit)
console.log(strObj,typeof strObj)

//Boxing

console.log(strLit.toUpperCase())

//unboxing
console.log(strObj.valueOf(),typeof strObj.valueOf() )

///

console.log(strLit.constructor)
console.log(strObj.constructor)

//
console.log(strLit instanceof String)//false
console.log(strObj instanceof String)//true

//
const funcObj=new Function('x','return x*x')

console.log(funcObj(2))