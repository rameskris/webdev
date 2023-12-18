const months=['janauray','february','april']
console.log(typeof months)
console.log(months[0])
months[2]='march'
months[3]='april'
console.log(months.length)

//array methods

const names=['rose','val','sal','palli']

//arry push

console.log(names.push('ramesh'))//return lenght of an array

//array pop

console.log(names.pop())//return last value alter the original array
console.log(names)

//array shift
console.log(names.shift())//return last value alter the original array
//console.log(names)

console.log(names.unshift('one more'))
//console.log(names)


//array splice
// names.splice(2,0,'jen','jon')
// console.log(names)
//alter original
//it adds new values or delete in any position
names.splice(2,2,'jen','jon')
// console.log(names.splice(2,2,'jen','jon'))
 console.log(names.splice(1))

//array slice
//not alter original array
//copies certain parts of an array into newly created of an array
console.log(names.slice(1))//['val', 'jen', 'jon']
console.log(names)