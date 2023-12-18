//getters and setters for constructor fuction and object literal

function Person(firstName,lastName){
    this._firstName=firstName
    this._lastName=lastName
    
    Object.defineProperty(this,'firstName',{
        get:function(){
            return this.captialize(this._firstName)
        },
        set:function(value){
            this._firstName=value
        }

    })

     Object.defineProperty(this,'lastName',{
        get:function(){
            return this.captialize(this._lastName)
        },
        set:function(value){
            this._lastName=value
        }

    })

    Object.defineProperty(this,'fullName',{
        get:function(){
            return this.firstName + this.lastName
        }
    })
}
Person.prototype.captialize=function(value){
     return value.charAt(0).toUpperCase()+value.slice(1)
}
const per1=new Person("ram","krish")
console.log(per1.firstName)
console.log(per1.lastName)
console.log(per1.fullName)

//object litral

const PersonObj={
    _firstName:'jane',
    _lastName:'doe',

    get firstName(){
        return Person.prototype.captialize(this._firstName)
    },
    
       set firstName(value){
        this._firstName=value
    }, 
    set lastName(value){
        this._lastName=value
    },
     get lastName(){
        return Person.prototype.captialize(this._lastName)
    },

 

    get fullName(){
       return this._firstName + this._lastName
    }

}

const per2=Object.create(PersonObj)

console.log(per2.firstName)
console.log(per2.lastName)