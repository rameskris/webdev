const names=['jon','Jenny','Jhonny']

names.forEach((name,i)=>{
    console.log(name,i)
})//return undefiend

//use when
//you want to do something with each element of the array

//dont use when
//you want to stop pr break the loop when some condition is true
//you're working with async code

let sum=0
const numbers=[56,44,12,4]

numbers.forEach((number)=>{
     sum+=number
})
console.log(sum)


//array map
const inventory=[
    {price:5,name:'eggs'},
    {price:4,name:'ham'},
    {price:3,name:'mayo'},
    {price:5,name:'bread'}
]

//
const prices=inventory.map((item)=>item.price)
const items=inventory.map((item)=>item.name)
console.log(items)


//araay filter

const numbersTo=[10,-10,9,56,-89]

const ps=numbersTo.filter(item=>item>0)
console.log(ps)

//array find
//The find method for arrays returns the
//first value that satisfies the condition

const states=['Alaska','California','Colorado','Hawaai']

const c=states.find(state=>(state.startsWith('C')))
console.log(c)

//array includes
const arr1=[1,2,3]
console.log(arr1.includes('3'))

//array sort=>alphabetically
//mutestes the original array

const nameTosort=['Anne','carl','bob','dean']
const numbersTosort=[1,2,55,6,7,19,5]
nameTosort.sort()
console.log(nameTosort)
console.log(numbersTosort.sort())//[1, 19, 2, 5, 55, 6, 7]
console.log(numbersTosort.sort((a,b)=>a-b))//[1, 2, 5, 6, 7, 19, 55]//to sort asecend
console.log(numbersTosort.sort((a,b)=>b-a))//[55, 19, 7, 6, 5, 2, 1]//to sort decend


//sum and Every
//check some eleement greter than 100
console.log(numbersTosort.some(number=>number>100))

//array Every
//returns true all elements
//every element greter than 0 return true
console.log(numbersTosort.every(number=>number>0))


//array reduce
const groceryList=[29,12,45,35,87,110]
//console.log(groceryList.reduce((cur,nex)=>cur+nex))
const tot=groceryList.reduce((acc,cur)=>{
    //acc=0 cur=29 0+29
    //acc=29 cur=12 29+12
    //acc=41 cur=45 41=45
  return acc+=cur
},0)
const tot2=groceryList.reduce((acc,nex)=>acc+nex,0)
console.log(tot)
let sum1=0;
groceryList.forEach((item)=>{
    
    sum1+=item
    
})
console.log(sum1)
