//Array literal
const number=[12,34,45]

//array constructor
const fruits=new Array('apple','orange','grape')

let x;
x=number.length
fruits[2]='pear'


fruits.length=2;
x=fruits

//added to end of array
fruits[fruits.length]='orange'
fruits[fruits.length]='grape'
console.log(fruits)

//array methods
let y;
const arr=[1,2,3,4]
arr.push(5)
arr.pop();
arr.unshift(99)//added to zero index
arr.shift()//99  is gone
//arr.reverse()

arr.includes(4)//true
arr.indexOf(15)
arr.indexOf(301)//-1 means not there
y=arr.slice(1)//start from 1 give remaiinig //returns array //doenot alter original(start,end)

//y=arr.splice(1,2)//[2,3,4]
// console.log(y,arr)//[2,3,4],[1]//splice changing original value
//go over 2 (inclusive) 
//if we want to delete [1,2,3,4,5] 4 in this array use splice
y=arr.splice(3,1) //from3 how may element
console.log(y,arr)//[4],[1,2,3] return deleted item

y=arr.splice(1,2).reverse().toString().charAt(0)
console.log(y)

//concat
let fr1=['apple','orange','pear']
let fr2=['avacado','grapes','kiwi','water melon']
let n=[1,2,3,4]

let op=fr1.concat(fr2)//concated into single array

//speard operator
op=[...fr1,...n]

console.log(op)

//flatten array
const fla=[1,2,[3,4],5,6,[7,8,9]]
console.log(fla.flat()) //its just flatten in to one array

console.log(Array.isArray(fla))//true
console.log(Array.from('ramesh'))//[ 'r', 'a', 'm', 'e', 's', 'h' ]

//Array.of
//create array from variables
const a=1
const b=2
const c=3
console.log(Array.of(a,b,c))//[ 1, 2, 3 ]

//challenge

let result;
const chalArr=[1,2,3,4,5]
chalArr.push(6)
chalArr.unshift(0)
console.log(chalArr.reverse())


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//solution 1
let arr3;
arr3=arr1.concat(arr2)

console.log(arr3.splice(4,1))
console.log(arr3)
//solutin2

arr3=[...arr1,...arr2]
arr3.splice(4,1)
console.log(arr3)

//solution3
arr3=[arr1.slice(0),arr2.splice(0)].flat()
arr3.splice(4,1)
console.log(arr3)

