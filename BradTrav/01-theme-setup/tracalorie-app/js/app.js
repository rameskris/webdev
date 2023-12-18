class CalorieTracker{
    constructor(){
        this._calorieLimit=2300
        this._totalCalories=0;
        this._meals=[];
        this._workouts=[]
        this._displayCaloriesLimit()
        this._displayCaloriesTotal()
    }
  
    //public methods
    addMeal(meal){
        this._meals.push(meal)
        this._totalCalories+=meal.calories
        this._render()
    }

    addworkout(workout){
        this._workouts.push(workout)
        this._totalCalories-=workout.calories
        this._render()
    }
    //private methods
    _displayCaloriesTotal(){
       const totalCaloriesEl=document.getElementById("calories-total")
       totalCaloriesEl.innerHTML=this._totalCalories
    }

      _displayCaloriesLimit(){
       const calorieLimitEl=document.getElementById("calories-limit")
       calorieLimitEl.innerHTML=this._calorieLimit
    }
    _render(){
        this._displayCaloriesTotal()
    }

}

class Meal{
    constructor(name,calories){
        this.id=Math.random().toString(16).slice(2)
        this.name=name
        this.calories=calories
    }
}

class Workout{
    constructor(name,calories){
        this.id=Math.random().toString(16).slice(2)
        this.name=name
        this.calories=calories
    }
}

const tracker=new CalorieTracker()
const breakFast=new Meal("Breakfast",400)
tracker.addMeal(breakFast)
const run=new Workout("morning Run",300)
tracker.addworkout(run)

console.log(tracker._meals)
console.log(tracker._workouts)
console.log(tracker._totalCalories)