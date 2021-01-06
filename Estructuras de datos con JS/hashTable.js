class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
            //* key.charCodeAt(i) genera un número aleatorio del 0 al 65535 (UTF-16)
        }
        return hash
    }

    set(key,value){
        const address = this.hashMethod(key)
        if (!this.data[address]) { //* Si la información no existe, agrégalo a un nuevo array
            this.data[address] = []
        }
        this.data[address].push([key,value]) //* Si ya existe, no queremos que reescriba la información, queremos que se guarden juntas aunque haya colisión
        return this.data
    }

    get(key){
        const address = this.hashMethod(key)
        const currentBucket = this.data[address] //* Me tiene que regresar el valor que existe en este índice

        if (currentBucket) {
            for(let i=0; i < currentBucket.length; i++){
                //* Recorrerá el array hasta encontrar la coincidencia
                if (currentBucket[i][0] === key) { //* 0 es key
                    return currentBucket[i][1] //* 1 es value
                }
            }
        }
        return undefined
    }

    delete(key){
        const address = this.hashMethod(key)
        const currentBucket = this.data[address] //* Me tiene que regresar el valor que existe en este índice

        if (currentBucket) {
            for(let i=0; i < currentBucket.length; i++){
                //* Recorrerá el array hasta encontrar la coincidencia
                if (currentBucket[i][0] === key) { //* 0 es key
                    const deletedValue = this.data[address][i]
                    this.data[address].splice(i,1)
                    return deletedValue
                }
            }
        }
        return undefined
    }

    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0]);
                }
            }
        }
        return keys;
    }

}

const myHashTable = new HashTable(10) //*50 espacios libres (buckets)