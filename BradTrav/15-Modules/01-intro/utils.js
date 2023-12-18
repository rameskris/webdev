const message={
    id:1,
    text:'hello'
}
// module.exports=message

//or
// module.exports={
//     id:1,
//     text:'hello'
// }

//function

function capitalizeWords(str){
    return str.toLowerCase()
              .split(' ')
              .map(word=> word[0].toUpperCase()+word.substr(1))
              .join(' ')
}

//module.exports=capitalizeWords

//multiple exports

module.exports={
    capitalizeWords,
    message
}