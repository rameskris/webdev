class CalorieTracker{
    constructor(){
        this._caloriesLimit=2200
        this._totalCalories=0
        this._meals=[]
        this._workouts=[]
        this._displayCalories()
        this._displayCaloriesLimit()
        this._displayCaloriesConsumed()
        this._displayCaloriesBurned()
        this._displayCaloriesRemaining()
        this._displayCaloriesProgress()
    }

    addMeal(meal){
        
      this._meals.push(meal)
      this._totalCalories+=meal.calories
      this._displayNewmeal(meal)
      this._render()
    }
    
    addWorkout(workout){
      this._workouts.push(workout)
      this._totalCalories-=workout.calories
      this._displayWorkoutl(workout)
     this._render()
    }

    
  removeMeal(id) {
    const index = this._meals.findIndex((meal) => meal.id === id);
    if (index !== -1) {
      const meal = this._meals[index];
      this._meals.splice(index, 1);
      this._totalCalories -= meal.calories;
      this._render();
    }
  }

  removeWorkout(id) {
    const index = this._workouts.findIndex((workout) => workout.id === id);
    if (index !== -1) {
      const workout = this._workouts[index];
      this._workouts.splice(index, 1);
      this._totalCalories += workout.calories;
      this._render();
    }
  }

    _displayCalories(){
        const totalCaloriesEl=document.getElementById('calories-total')
        totalCaloriesEl.innerHTML=this._totalCalories

    }
     _displayCaloriesLimit(){
       const calorieLimitEl=document.getElementById("calories-limit")
       calorieLimitEl.innerHTML=this._caloriesLimit
    }

    _displayCaloriesConsumed(){
        const caloriesConsumedEl=document.getElementById('calories-consumed')
        
        const consumed=this._meals.reduce((total,meal)=>{
               return total+meal.calories
        },0)
        
        caloriesConsumedEl.innerHTML=consumed
    }

     _displayCaloriesBurned(){
        const caloriesBurnedEl=document.getElementById('calories-burned')
       
        const burned=this._workouts.reduce((total,workout)=>{
               return total+workout.calories
        },0)
        
        caloriesBurnedEl.innerHTML=burned
    }

    _displayCaloriesRemaining(){
        const caloriesRemainingEl=document.getElementById('calories-remaining')
        const progressEl=document.getElementById('calorie-progress')
        const remaining=this._caloriesLimit-this._totalCalories
        
          caloriesRemainingEl.innerHTML=remaining
        if(remaining<=0){
            caloriesRemainingEl.parentElement.parentElement.classList.remove('bg-light')
            caloriesRemainingEl.parentElement.parentElement.classList.add('bg-danger')
            progressEl.classList.add('bg-danger')
            progressEl.classList.remove('bg-success')
        }else{
             caloriesRemainingEl.parentElement.parentElement.classList.remove('bg-danger')
            caloriesRemainingEl.parentElement.parentElement.classList.add('bg-light')
             progressEl.classList.add('bg-success')
            progressEl.classList.remove('bg-danger')
        }
    }

    _displayCaloriesProgress(){
         const progressEl=document.getElementById('calorie-progress')
         const percentage=(this._totalCalories/this._caloriesLimit)*100
         const width=Math.min(percentage,100)
         progressEl.style.width=`${width}%`

    }

  _displayNewmeal(meal){
    const mealsEl=document.getElementById('meal-items')
    const mealEl=document.createElement('div')
    mealEl.classList.add('card','my-2')
    mealEl.setAttribute('data-id',meal.id)
    mealEl.innerHTML=`<div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <h4 class="mx-1">${meal.name}</h4>
                  <div
                    class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
                  >
                    ${meal.calories}
                  </div>
                  <button class="delete btn btn-danger btn-sm mx-2">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>`

              mealsEl.appendChild(mealEl)
              console.log(mealEl)

  }

    _displayWorkoutl(workout){
    const workoutsEl=document.getElementById('workout-items')
    const workoutEl=document.createElement('div')
workoutEl.classList.add('card','my-2')
workoutEl.setAttribute('data-id',workout.id)
workoutEl.innerHTML=`<div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <h4 class="mx-1">${workout.name}</h4>
                  <div
                    class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
                  >
                    ${workout.calories}
                  </div>
                  <button class="delete btn btn-danger btn-sm mx-2">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>`

            workoutsEl.appendChild(workoutEl)
              console.log(workoutEl)

  }
    _render(){
        this._displayCalories()
        this._displayCaloriesConsumed()
        this._displayCaloriesBurned()
        this._displayCaloriesRemaining()
        this._displayCaloriesProgress()
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








class App{
    constructor(){
        this._tracker=new CalorieTracker()
        document.getElementById('meal-form').addEventListener('submit',this._newItem.bind(this,'meal'))
        document.getElementById('workout-form').addEventListener(
          'submit',this._newItem.bind(this,'workout'))

        document.getElementById('meal-items').addEventListener('click',this._removeItems.bind(this,'meal'))

        document.getElementById('workout-items').addEventListener('click',this._removeItems.bind(this,'workout'))

        document.getElementById('filter-meals').addEventListener('keyup',this._filterItems.bind(this,'meal'))

        document.getElementById('filter-workouts').addEventListener('keyup',this._filterItems.bind(this,'workout'))

    }
    _newItem(type,e){
       e.preventDefault();
       const name=document.getElementById(`${type}-name`)
       const calories=document.getElementById(`${type}-calories`)

       if(name.value===''||calories.value===''){
        alert('please fill in all fields')
        return
       }
       if(type==='meal'){
          const meal=new Meal(name.value,+calories.value)
       this._tracker.addMeal(meal)
       }else{
           const workout=new Workout(name.value,+calories.value)
           this._tracker.addWorkout(workout)
       }
      

       name.value=''
       calories.value=''
       
       const collapseItem=document.getElementById(`collapse-${type}`)
       const bsCollapse=new bootstrap.Collapse(collapseItem,{
        toggle:true
       })
    }

    _removeItems(type,e){

       if(e.target.classList.contains('delete')){
         if(confirm('Are you sure?')){
           const id=e.target.closest('.card').getAttribute('data-id')

           type==='meal'?this._tracker.removeMeal(id):
           this._tracker.removeWorkout(id)

           e.target.closest('.card').remove()
         }
       }
    }

    _filterItems(type,e){
     const text= e.target.value.toLowerCase()
     
    }

    //  _newWorkout(e){
    //    e.preventDefault();
    //    const name=document.getElementById('workout-name')
    //    const calories=document.getElementById("workout-calories")

    //    if(name.value===''||calories.value===''){
    //     alert('please fill in all fields')
    //     return
    //    }

    //    const workout=new Workout(name.value,+calories.value)
    //    this._tracker.addWorkout(workout)

    //    name.value=''
    //    calories.value=''

    //    const collapseWorkout=document.getElementById('collapse-workout')
    //    const bsCollapse=new bootstrap.Collapse(collapseWorkout,{
    //     toggle:true
    //    })

    // }


}

const app=new App()
  