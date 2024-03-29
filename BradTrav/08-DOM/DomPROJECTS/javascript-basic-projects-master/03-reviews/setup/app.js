// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


const personImg=document.querySelector('#person-img')
const name=document.querySelector('#author')
const job=document.querySelector('#job')
const text=document.querySelector('#info')

const prev_btn=document.querySelector('.prev-btn')
const next_btn=document.querySelector('.next-btn')
const random_btn=document.querySelector('.random-btn')
let count=0;
window.addEventListener('DOMContentLoaded',()=>{
  personImg.src=reviews[count].img
  name.textContent=reviews[count].name
  job.textContent=reviews[count].job
  text.textContent=reviews[count].text
})

random_btn.addEventListener('click',()=>{
  
  const randomNumber=getRandomnumber()
  personImg.src=reviews[randomNumber].img
  name.textContent=reviews[randomNumber].name
  job.textContent=reviews[randomNumber].job
  text.textContent=reviews[randomNumber].text

})

prev_btn.addEventListener('click',()=>{
  count--
  if(count<0){
    count=reviews.length-1
  }
  
   showPerson(count)
  
})

next_btn.addEventListener('click',()=>{
   count++
  if(count>reviews.length-1){
    count=0
  }
 showPerson(count)
    

})

function showPerson(count){
   personImg.src=reviews[count].img
  name.textContent=reviews[count].name
  job.textContent=reviews[count].job
  text.textContent=reviews[count].text
}

function getRandomnumber(){
  return Math.floor(Math.random()*reviews.length)
}
