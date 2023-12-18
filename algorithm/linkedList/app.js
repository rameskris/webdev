/**
 * {
 * value:4,
 * next:null
 * }
 * 
 * {
 * value:7,
 * next:{
 * value:4,
 * next:null
 * }
 * }
 */ 

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=this.head
        this.length=1
    }
    //push
    push(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
           
            
        }
         this.length++
        return this
    }
    //pop
    pop(){
        let temp=this.head
        let pre=this.head;
        if(!this.head ){
            return undefined
        }

        
      
        while(temp.next){
            pre=temp
            temp=temp.next   
        }
        this.tail=pre
        this.tail.next=null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
            
        }
       return temp
    }
    //shift
    shift(){
        let temp=this.head
       //no items
         if(!this.head ){
            return undefined
        }

        this.head=this.head.next
        temp.next=null
        this.length--
       if(this.length === 0){
        this.tail=null
       }
        return temp 
    }

    //get
    get(index){
       if(index<0 || index>=this.length){
        return undefined
       }
       let temp=this.head
       for(let i=0;i<index;i++){
        temp=temp.next
       }
       return temp
    }
    //set

    set(index,value){
        let temp=this.get(index)
        if(temp){
            temp.value=value
            return true
        }
        return false
    }

    insert(index,value){
        if(index===0){
            return this.unshift(value)
        }
        if(index===this.length){
            return this.push(value)
        }
        if(index<0 || index >this.length){
            return false
        }
        //middle
        const newNode=new Node(value)
        const temp=this.get(index-1)
        newNode.next=temp.next
        temp.next=newNode
        this.length++
        return true
    }

    //remove

    remove(index){
        if(index===0){
            return this.shift()
        }
         if(index===this.length-1){
            return this.pop()
        }
         if(index<0 || index >this.length){
            return false
        }
       
       const pre=this.get(index-1)
       const temp=pre.next
       pre.next=temp.next
       temp.next=null
        this.length--   
        return temp
    }

    //reverse

    
}

//
const linkedList=new LinkedList(4)
linkedList.push(5)
linkedList.push(7)


console.log(linkedList.set(0,1))
console.log(linkedList.set(0,9))
console.log(linkedList)
