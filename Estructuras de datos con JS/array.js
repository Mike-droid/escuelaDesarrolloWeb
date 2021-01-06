//const array = ["Diego","Miguel","Antonio"];

class MyArray{
    constructor(){
        this.lenght = 0
        this.data = {} // * Aquí guardaré los elementos del array, en un JSON
    }

    get(index){
        return this.data[index]
    }

    push(item){ //*Agrega un elemento al final del arreglo
        this.data[this.lenght] = item
        this.lenght++
        return this.data
    }

    pop(){ //* Elemina el último elemento del arreglo
        const lastItem = this.data[this.lenght - 1]
        delete this.data[this.lenght - 1]
        this.lenght--
        return lastItem
    }

    delete(index){ //* Borra un elemento específico del array
        const item = this.data[index]
        this.shiftIndex(index)
        return item
    }

    shiftIndex(index){ //* Reordena los índices
        for(let i = index; i < this.lenght-1; i++){ //* longitud de 3; 0,1,2
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.lenght-1]
        this.lenght--
    }

    shift(){ //* Elimina el primer elemento del array
        return this.delete(0)
    }

    unshift(item){ //* Agrega un elemento al inicio del array
        for (let i = this.lenght; i > 0; i--) {
            this.data[i] = this.data[i-1]
        }
        this.data[0] = item
        this.lenght++
        return this.data
    }
}

const myArray = new MyArray();