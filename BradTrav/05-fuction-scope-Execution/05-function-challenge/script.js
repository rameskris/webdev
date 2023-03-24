function getCelsius(temp){
    return (temp-32)*5/9+'\xB0'
}

const getC=temp=> (temp-32)*5/9+'\xB0'

const getCtutor=(temp)=>{
      const celcius=(temp-32)*5/9
      return Math.round(celcius)
} 

console.log(getCelsius(52))
console.log(`the temperature is ${getCtutor(53)}\xB0C` )

//challenge 2
const minMax=(...num)=>{
    const min=Math.max(...num)
    const max=Math.min(...num)
    return {
      min,
      max
    }
}

console.log(minMax(55, 32, 43, 54, 65, 76, 87, 98, 109));

//challenge 3

(
    function(len,wid){
     return `The area of a rectangle with a length of ${len} and a width of ${wid} is ${len*wid}.`
    }
)(5,10)