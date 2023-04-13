//filter

const num=[1,2,4,5,6]

const evenNum=num.filter(function(item){
    return item%2===0
})

console.log(evenNum)

//shorter way

const evenNumShort=num.filter(item=>item%2==0)
console.log(evenNumShort)


//not for filter
let result=[];
 num.forEach(function(n){
      

    if(n%2===0){
     result.push(n)
    }
 })

 console.log(result)

 //shorter way

 num.forEach((it)=>{
   if(it%2===0){
    result.push(it)
   }
 })
 console.log(result)

 const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];


const rc=companies.filter(retailCompany=>retailCompany.category==='Retail')

console.log(rc)

//
const yc=companies.filter(rcy=>rcy.start>=1980 && rcy.end<=2005)
console.log(yc)

const tenYe=companies.filter(te=>te.end-te.start>=10)
console.log(tenYe)

//does return new aray
//can manipulate the size of new array unlike map 
//returns based on condition

const people=[
    {name:'BOB',age:40,position:'developer'},
    {name:'murugan',age:45,position:'Manager'},
    {name:'vengat',age:70,position:'CTO'},
    {name:'Biss',age:30,position:'developer'},
]

const yP=people.filter((ppl)=>ppl.age<40)
console.log(yP)