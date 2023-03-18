let d;
d=new Date();
//console.log(d ,typeof d) //2023-03-17T11:10:55.268Z object

d=d.toString()
d=new Date(2021,0,10)
d=new Date('2021-7-10')
d=Date.now()
//d=new Date('07-10-2022 12:30:00')
//d=d.getTime()
//d=d.valueOf()
d=new Date(1657436400000)
//tiime stamps in seconds
d=Math.floor(Date.now()/1000)
console.log(d ,typeof d) 

/*some methods on date object */

let x;
d=new Date('2023/03/17') //2023/03/17
x=d.getTime()
x=d.valueOf()
x=d.getFullYear()
x=d.getMonth()+1//starts from 0
x=d.getDate()
x=d.getSeconds()
x=d.getMilliseconds()
console.log(x,typeof x) 
x=d.getDate()
x=Intl.DateTimeFormat('en-IN').format(d)
 
x=d.toLocaleString('default',{year:'long',day:'long'})
console.log(x,typeof x) 