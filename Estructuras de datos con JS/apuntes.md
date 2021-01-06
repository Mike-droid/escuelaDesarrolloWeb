# Curso de estrucuta de datos con JS

## Introducción a las estructuras de datos

### ¿Qué son las estructuras de datos?

Es una forma de guarpar y estructurar la información.

Las estructuras de datos son colecciones de valores, las relaciones entre ellos y las funciones u operaciones que se pueden aplicar a los datos.

### Memoria y cómo se guardan los datos

Tenemos un memory slot, dentro de él tenemos un Byte, que son 8 bits.

Address|Data
---|---
0 | 00010110
1 | valor binario
2 | valor binario

## Arrays y strings

### Arrays

Índice|Valor
---|---
0|Diego
1|Miguel
2|Juan

Método|Acción
---|---
push|Agregar un elemento al final del array
pop|Borra el último elemento
unshift|Agrega un elemento al inico del array
shift|Borra el primer elemento
splice|Agregar un elemento en una parte del array

Hay 2 tipos de arrays:

- Estáticos
- Dinámicos

JS por defecto maneja arrays dinámicos.

#### Array estático

array nums = [4,8,5];

#### Array dinámico

array nums = [4,8,5,,,];

Es importante tomar en cuenta que si hacemos crecer mucho un array dinámico se puede agotar la memoria y NO queremos eso.

### Strings

Los strings son inmutables en JS (y en muchos otros lenguajes de programación).

const saludo = "Hola";

Address|Data
---|---
0|H
1|o
2|l
3|a

## Hash Table

### Hash tables

Hash Tables en otros lenguajes

Lenguaje|Hash Table
---|---
JavaScript|Objetos
Python|Diccionarios
Java|Maps
Go|Maps
Rubdy|Hashes

Hay una ligera diferencia entre una hash table y un objeto en JS. En JS, el objeto tiene un paso extra, las hash functions.

#### Métodos de Hash Table

Método|Acción
---|---
insert|Insertar un elemento en la tabla
search|Buscar un elemento por key
delete|Borrar un elemento

#### Colisión de hash table

A veces puedes cometer el error de guardar 2 valores en un hash, casi siempre es imposible de evitar esto.
Pero para eso existen las listas 😎.

#### ¿Qué es un hash?

Según la definición de Kaspersky:

>“Una función criptográfica hash- usualmente conocida como “hash”- es un algoritmo matemático que transforma cualquier bloque arbitrario de datos en una nueva serie de caracteres con una longitud fija. Independientemente de la longitud de los datos de entrada, el valor hash de salida tendrá siempre la misma longitud.”

## Linked list

### Linked List

### Métodos de linked List

Método|Acción
---|---
prepend|Agregar un nodo al inicio
append|Agregar un nodo al final
lookup/search|Buscar un nodo
insert|Insertar un nodo en la lista
delete|Borrar un nodo

## Stacks

### Stack

Usa el LFIO - Last In, First Out

### Métodos de stack

Método|Acción
---|---
pop|Remover el último elemento
push|Agregar un elemento al final
peek|Tomar al último elemento de la línea

## Queues

### Queue

FIFO - Fisrt In, First Out

### Métodos de la queue

Método|Acción
---|---
enqueue|Agregar un elemento al final de la línea
dequeue|Remover al primer elemento de la línea
peek|Tomar el primer elemento de la línea

## Trees

### Tree

- Root: Raíz
- Parent: Padre
- Child: Hijo
- Leaf: Hoja
- Subling: Hermano
- Sub Tree: Subárbol
- Binary tree: Árboles binarios

### Métodos del binary tree

Métodos|Acciones
---|---
search|Buscar por un nodo
insert|Insertar por un nodo
delete|Borrar un nodo

## Graphs

### Grafos

Son nodos entreconectados.  (Node) Vértice y Edge(Borde)

Hay grafos dirigidos y no dirigidos. Los grafos dirigidos son usados en, por ejemplo, redes sociales.

Hay grafos ponderados y no ponderados. Usar los bordes con menos peso se usan en optimización.

Hay grafos cíclicos y acíclicos.

En este curso se hará un grafo NO dirigido.

## Examen

¿Qué es un Grafo acíclico?:c
¿Los arrays de JS son?:c
¿Qué son las estructuras de datos?:b
¿Cuál es el nombre que reciben los siguientes niveles de un Binary Tree?:c
¿Cuál es una de las principales reglas de un Binary Search Tree?:c
¿A qué nos referimos cuando cuando hablamos de un “unbalance tree”?:b
¿Cómo funciona un array dinámico?:a
¿Cuál es una de las principales características de un Binary Tree?:a
¿Qué es un ”edge” en un grafo?:b
¿Cuál es el patrón de un Queue?:a
¿Cuál es el patrón de un Stack?:a
¿Cuál es la diferencia entre un array estático y uno dinámico?:c
¿Cuántos bytes puede guardar un memory slot?:c
¿Para qué utilizamos el método de dequeue?:b
¿Cuál es la forma en que se van guardando los datos en una LinkedList?:a
¿Qué es un “Vertex” en un grafo?:a
¿Qué es un Grafo dirigido?:a
