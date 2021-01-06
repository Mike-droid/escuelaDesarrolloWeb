class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class MyDoubleLinkedList{
    constructor(value) {
        this.head = {
            value:value,
            next:null,
            prev:null,
        }
        this.tail = this.head

        this.lenght = 1
    }

    append(value){//* Inserta al final
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.lenght++

        return this
    }

    prepend(value){//*Inserta al inicio
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.lenght++
        return this
    }

    insert(index,value){
        if (index >= this.lenght) {
            //*Si el índice introducido es mayor que la longitud de la lista, simplemente lo insertará al final
            return this.append(value)
        }

        if (index === 0) {
            //* Si el índice es 0, simplemente lo introducirá al inicio
            return this.prepend(value)
        }

        const newNode = new Node(value)
        const firstPointer = this.getTheIndex(index-1)
        const holdingPointer = firstPointer.next
        firstPointer.next = newNode
        newNode.next = holdingPointer //?
        newNode.prev = firstPointer

        this.lenght++

        return this
    }

    getTheIndex(index){
        let counter = 0
        let currentNode = this.head

        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    remove(index){
        if (index >= this.lenght) {
            console.error("Index is out of limits of array")

        }else if(index === 0){ //* Si es el primer elemento
            this.head = this.head.next //* Apunta a sí mismo
            //!No hace falta this.tail=null porque así empieza
            this.lenght--

        }else if(index === this.lenght-1){ //* Si es el último
            const firstPointer = this.getTheIndex(index-1)
            firstPointer.next = null
            this.tail = firstPointer
            this.tail.prev = null
            this.lenght--

        }else{ //* Si es uno de en medio
            const firstPointer = this.getTheIndex(index-1)
            const nextPointer = this.getTheIndex(index+1)
            let pointerToRemove1 = this.getTheIndex(index)
            let pointerToRemove2 = this.getTheIndex(index)
            pointerToRemove1 = firstPointer.next
            firstPointer.next = pointerToRemove1.next
            pointerToRemove2 = nextPointer.prev
            nextPointer.prev = pointerToRemove2.prev
            this.lenght--
        }
    }
}

let myDoubleLinkedList = new MyDoubleLinkedList(1)