//loop through object values use for in loop
//for in loop-iterate over object properties
//not advised used it on arrays esspecially order is important
//on arrays use for of loop instead
const colorObj={
    color1:'red',
    color2:'blue',
    color3:'orange',
    color4:'red'
}


for (const color in colorObj){
    console.log(colorObj[color])
}

const colorArry=['red','blue','orange']

for(const c in colorArry){
    console.log(c)//0 1 2 gives index
    console.log(colorArry[c])//now it gives values
}