const socials=['twitter','instagram','gmail']

socials.forEach(function(item){
    console.log(item)
})


socials.forEach((item,i,arr)=>console.log(item,i,arr))

//for each
//does not return new array

const people=[
    {name:'BOB',age:40,position:'developer'},
    {name:'murugan',age:45,position:'Manager'},
    {name:'vengat',age:70,position:'CTO'}
]

function showPerson(person){
    console.log(person.position.toUpperCase())
}

people.forEach(showPerson)

people.forEach(function(item){
console.log(item.position.toUpperCase())
})

people.forEach(item=>console.log(item.position.toLowerCase()))