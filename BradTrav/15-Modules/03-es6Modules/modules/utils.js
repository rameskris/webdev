function capitalizeWords(str){
    return str.toLowerCase()
              .split(' ')
              .map(word=> word[0].toUpperCase()+word.substr(1))
              .join(' ')
}

function makeMoney(amount){
    return `$${amount }`
}

//if only sigle export
//export default capitalizeWords

//multiple export

export {
    capitalizeWords,
    makeMoney
}