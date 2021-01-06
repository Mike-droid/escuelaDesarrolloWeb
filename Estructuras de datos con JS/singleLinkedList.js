class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class MySingleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head //* Tiene la misma lógica

        this.lenght = 1 //* Tiene la longitud de 1
    }

    append(value){ //* Inserta al final
        const newNode = new Node(value)

        this.tail.next = newNode
        this.tail = newNode
        this.lenght++

        return this
    }

    prepend(value){ //*Inserta al inicio
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode

        this.lenght++

        return this
    }

    insert(index, value){ //*Inserta en un orden en específico
        if (index >= this.lenght) {
            return this.append(value)
        }

        if (index === 0) {
            return this.prepend(value)
        }

        const newNode = new Node(value)
        const firstPointer = this.getTheIndex(index-1)
        const holdingPointer = firstPointer.next
        firstPointer.next = newNode
        newNode.next = holdingPointer

        this.lenght++

        return this
    }

    getTheIndex(index){
        let counter = 0
        let currentNode = this.head

        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    remove(index){
        if(index >= this.length) {
            console.error("index is out of limits of the array");
        } else if(index === 0) { //* si es el primero
            this.head = this.head.next;
            this.length--
        }
        else if(index  === this.length - 1){ //* si es el último
            const firstPointer = this.getTheIndex(index - 1);
            firstPointer.next = null;
            this.tail = firstPointer;
            this.length--;
        } else { //* Si es uno de en medio
            const firstPointer = this.getTheIndex(index - 1);
            const pointerToRemove = firstPointer.next;
            firstPointer.next = pointerToRemove.next;
            this.length--;
        }
    }
}

let myLinkedList = new MySingleLinkedList(1) //* Forzosamente la lista comenzará con un primer elemento