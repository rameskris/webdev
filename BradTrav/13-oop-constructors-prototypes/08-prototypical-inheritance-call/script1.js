function Player(name){
    this.name=name
    this.lvl=1;
    this.points=0
}

Player.prototype.gainXp=function(num){
  if(num>1 && num<=10){ 
    this.points+=num
    if(this.points>=10){
        this.lvl++
        this.points=this.points-10
    }
}
}

Player.prototype.describe=function(num){

 console.log(`name ${this.name} lv1 ${this.lvl} points ${this.points}`)
}

let player1=new Player("Bob")

player1.gainXp(5)
player1.gainXp(7)
player1.gainXp(3)
 player1.gainXp(2)
player1.gainXp(8)
player1.gainXp(4)

console.log(player1.describe())