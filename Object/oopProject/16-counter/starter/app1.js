class Counter{
    constructor(element,value){
        this.element=element
   this.value=value
   this.resetBtn=element.querySelector('.reset')
   this.increaseBtn=element.querySelector('.increase')
   this.decreaseBtn=element.querySelector('.decrease')
   this.valueDom=element.querySelector('.value')
   this.valueDom.textContent=this.value;
       this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
    }

    decrease(){
    console.log("first")
    this.value--
    this.valueDom.textContent=this.value
}
increase(){
    this.value++
    this.valueDom.textContent=this.value
}
reset(){
    this.value=0
    this.valueDom.textContent=this.value
}
}
function getElement(selection){
    const element=document.querySelector(selection)
    if(element){
        
        return element
    }
    throw new Error(`check your selection "${selection}" selector`)
}
const firstCounter=new Counter(getElement(".first-counter"),100)
const secondCounter=new Counter(getElement(".second-counter"),200)