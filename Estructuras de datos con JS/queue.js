class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor() {
        this.first = null
        this.last = null
        this.lenght = 0
    }

    enqueue(value){
        const newNode = new Node(value)
        if (this.lenght === 0) {
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.lenght++
        return this
    }

    dequeue(){
        if (this.lenght === 0) {
            console.error("The queue is already empty")
        }else if(this.lenght === 1){
            this.first = null
            this.last = null
            this.lenght = 0
        }else{
            this.first = this.first.next
            this.lenght--
        }
        return this
    }

    peek(){
        return this.first
    }
}

const myQueue = new Queue()