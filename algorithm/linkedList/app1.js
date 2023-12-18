class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class MyLinkedList{
    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=this.head
        this.length=1
        
    }

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

    pop(){
        let pre=this.head
        let temp=this.head
         if(!this.head){
            return 0
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
            this.temp=null
        }
        return temp


    }

    unshift(){
       


    }
}

const ll=new MyLinkedList(4)
console.log(ll)
// ll.push(5)
// console.log(ll)
// ll.pop()
// ll.pop()
// ll.pop()
// console.log(ll.pop())
// console.log(ll)

console.log(ll.)