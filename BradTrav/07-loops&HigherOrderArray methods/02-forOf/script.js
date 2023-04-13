//for of -loops through the values of an iterable object
//string , array,map,set etc --NOT object
//unlike for each wwe can use break and continue

const items=['book','table','kite','chair']

const users=[{name:'Brad'},{name:'Kate'},{name:'Steve'}]

for(const item of items){
    console.log(item)
}

for(const user of users){
    console.log(user.name)
}

const mapTest=new Map()
mapTest.set('name','ramesh')
mapTest.set('age',34)

for(const [k,v] of mapTest){
    console.log(k,v)
}


const fruits=['apple','orange','pears']

const longName='Ramesh krishnan part III'

let shortName=''

for (const letter of longName){
    if(letter === " "){
        continue
    }else{
        shortName+=letter
    }
}

console.log(shortName)