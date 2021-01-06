class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

/*
IMPORTANTE TOMAR EN CUENTA: LA LÓGICA DE ESTE STACK ES QUE EL APUNTADOR VA HACÍA ABAJO, POR EJEMPLO:
|"luis"⬇| <- TOP
|"angel"⬇|
|"jose"⬇| <- BOTTOM
---------
La flecha hacía abajo indica a dónde apunta this.next
*/

class Stack{
    constructor() {
        this.top = null
        this.bottom = null
        this.lenght = 0
    }

    peek(){
        return this.top
    }

    push(value){
        const newNode = new Node(value)

        if (this.lenght === 0) {
            this.bottom = newNode
            this.top = newNode
        }else{
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.lenght++
        return this
    }

    pop(){
        if (this.lenght === 0) {
            console.error("The stack is already empty")
        }else if(this.lenght === 1) {
            this.bottom = null
            this.top = null
            this.lenght = 0
        }else{
            this.top = this.top.next
            this.lenght--
        }
    }
}

const myStack = new Stack()