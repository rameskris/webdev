class Person{
    constructor(firstName,lastName){
        this._firstName=firstName
        this._lastName=lastName
    }

    get firstName(){
        return this.captialize(this._firstName)
    }
      get lastName(){
        return this.captialize(this._lastName)
    }

    // set firstName(value){
    //     this._firstName=value.charAt(0).toUpperCase()+value.slice(1)
    // }

     set firstName(value){
        this._firstName=this.captialize(value)
    }
       set lastName(value){
        this._lastName=this.captialize(value)
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    captialize(value){
        return value.charAt(0).toUpperCase()+value.slice(1)
    }
}

const per1=new Person('rhon','doe')
per1
               //no parathethis
console.log(per1.firstName)
per1.firstName='boo'
console.log(per1.firstName)
console.log(per1.fullName)