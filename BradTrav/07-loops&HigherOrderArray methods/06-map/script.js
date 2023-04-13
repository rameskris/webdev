const array1 =[1,2,3,4,5,6,7,8,9,10]

const double=array1.map(ele=>ele*2)

console.log(double)

//
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

//array of companies

const companyList=companies.map(comp=>comp.name)

const companyList1=companies.map(function(comp){
    return comp.name
})

console.log(companyList1)

//array of object company and category

const companyList3=companies.map(function(comp){
    return {
        name:comp.name,
        category:comp.category
    }
})

const companyList4=companies.map((comp)=>{
    return {
        name:comp.name,
        category:comp.category
    }
})
console.log(companyList4)

//
const companyList5=companies.map((comp)=>{
    return {
        name:comp.name,
        length:comp.end-comp.start
    }
})
console.log(companyList5)

//sqrt double
const sq=array1.map((item)=>{
    return Math.sqrt(item)
}).map(item=>item*2)
console.log(sq)

//chaining differnct methods

const sqd=array1.filter((item)=>item%2==0).map(item=>item*2).map(item=>item/2)
console.log(sqd)

//map
//does return new array
//doesnot change the sze of original array
//uses values from original array when making new one

const people=[
    {name:'BOB',age:40,position:'developer'},
    {name:'murugan',age:45,position:'Manager'},
    {name:'vengat',age:70,position:'CTO'},
    {name:'Biss',age:30,position:'developer'},
]

const ages=people.map(function(person){
   console.log(person)
})

console.log(ages)