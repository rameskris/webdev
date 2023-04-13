const cart=[
    {id:1,name:'product1',price:130},
    {id:1,name:'product1',price:160},
    {id:1,name:'product1',price:170}
]
//reduce
//iterates over array,use callback function
//reduce to a single value
//accepts two parameter
//1st parameter acc total of all calculation
//2nd parameter cur current iteration/value

const people=[
    {name:'bob',age:20,position:'developer',id:1,salary:150},
    {name:'ram',age:20,position:'developer',id:1,salary:250},
    {name:'krsih',age:20,position:'designer',id:1,salary:350},
    {name:'nan',age:20,position:'devops',id:1,salary:550},
]

const sal=people.reduce(function(acc,cur){
    
    return acc+cur.salary
},0)


console.log(sal)
const numbers=[1,2,3,4,5,6,6,7,8]
const total=numbers.reduce(function(acc,current){
    return acc+current

},0)

const sum=numbers.reduce((acc,cur)=>acc+cur,0)
console.log(sum)