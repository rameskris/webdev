//json light weight data interchange format
const post={
    id:1,
    title:'post one',
    body:'this is the body'
}
const posts=[
    {
    id:1,
    title:'post one',
    body:'this is the body'
    },
      {
    id:2,
    title:'post two',
    body:'this is the body'
    }
]

//conveert to json string

const str=JSON.stringify(posts)

//convert back to obj
let obj=JSON.parse(str)
console.log(str)
console.log(obj)