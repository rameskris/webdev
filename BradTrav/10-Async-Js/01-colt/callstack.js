// const multiply=(x,y)=>x*y;

// const square=(x)=>multiply(x,x)

// const isRightTriangle=(a,b,c)=>{
//     return square(a) +square(b)===square(c)
// }


// console.log(isRightTriangle(3,4,5))

function repeat(text,times){
    let temp='';
    for(let i=0;i<times;i++){
       temp+=text
    }
    return temp
}
function getText(str){
    return str.toUpperCase()+' !!!'
}

function getRantText(phrase){
    let text=getText(phrase)
    let rant=repeat(text,8)
    return rant
}

function makeRant(pharse,el){
    const h1=document.createElement('h1')
    h1.innerText=getRantText(pharse)
    el.appendChild(h1)
}

makeRant('Hello',document.body)
//makeRant('Vanakam',document.body)
/**
 * Browsers comes with web apis that are able to handle certain tasks in the background(like making requests or setTimeout)
 * the js call stack recognizes these webapi functions and passes them off to the browser to take care of
 * once the browser finishes those tasks they return and are pushed ontto the sack as a callback
 */

