const library=[
    {
        title:'Gold Rush',
       author:'ramesh',
       status:{
              own:true,
              reading:false,
              read:false
       }
    }
]
library[0].status.read=true
library[0].status.reading=true


//destructing
const { title:firstBook } =library[0]
console.log(firsBook)
//fb.title='first book'

//const libStr=JSON.stringify(library)

//console.log(libStr)