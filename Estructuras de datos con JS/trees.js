class Node{
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode
        }else{
            let currentNode = this.root
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    search(value){
        if (this.root === null) {
            console.error("The tree is empty")
        }else{
            let currentNode = this.root
            while(value !== currentNode.value){
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        console.log(`El nodo ${value} no existe`)
                    }
                    currentNode = currentNode.left
                }else{
                    if(!currentNode.right){
                        console.log(`El nodo ${value} no existe`)
                    }
                    currentNode = currentNode.right
                }
            }
            if (value === currentNode.value) {
                console.log(`El nodo ${value} si existe`)
                return currentNode
            }
        }
    }
}

const tree = new BinarySearchTree()