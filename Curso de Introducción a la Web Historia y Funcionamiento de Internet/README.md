# Curso de Introducción a la Web: Historia y funcionamiento de internet

La práctica será el **80% del esfuerzo**.

## El Lenguaje de la computadora

### ¿Cómo empezó todo?

- 2000 aC: Ábaco
- 1600's: Calculadoras mecánicas
- 1700's: Computadoras humanas, después libros con cálculos (precomputation table)
- 1940's: Primeras computadoras
- 1960's: Tarjetas perforadas
- 1960's: Lenguaje de Máquina (Machine Code)
- 1970's: Lenguajes de programación

### Inputs y outputs

Entrada(Input) -> Proceso -> Salida(Output)

### Binario

Sistema de conteo: 0 y 1

Este sistema como base el número 2

128, 64, 32, 16, 8, 4, 2, 1

Decimal 70 = Binario 1000110

### Bit & bytes

Bit : cada 1 y 0
Byte: 8 bits

Transistores: uno de los grandes inventos de la humanidad. Funcionan con ON(True,1) y OFF(False,0)

### ASCII

American Standard Code for Information Interchange

161 72 111 108 97 33 = ¡Hola!

1 0 1 0 0 0 0 1 = ¡

0 1 0 0 1 0 0 0 = H

0 1 1 0 1 1 1 1 = o

0 1 1 0 1 1 0 0 = l

0 1 1 0 0 0 0 1 = a

0 0 1 0 0 0 0 1 = !

### UNICODE

Código con todos los alfabetos y caracterés especiales e incluso emojis

### RGB

Cada pixel está hecho de 3 subpixels, RGB (Red, Green, Blue).
Sus tonalidades van desde 0 hasta 255.

rgb(178, 80, 228) es Plum Purple

178 = 10110010

80 = 01010000

228 = 11100100

```css
/*Hexadecimal colors*/

#ffffff /*white*/

#000000 /*black*/

#ff0000 /*red*/

#00ff00 /*green*/

#0000ff /*blue*/
```

## Cómo funciona internet

### ¿De dónde viene el internet?

El internet viene de los cables de cobre. La mayoría de estos están en el mar.

Internet viene de ARPANET(Advanced Research Projects Agency Network) en los años 70.

### Protocolos

TCP / IP (Transmission Control Protocol / Internet)

Hay 5 niveles:

1. Application : HTTP/IP
2. Transport : TCP, UDP
3. Network : IP, ROUTERS
4. Data Link : ETHERNET, SWITCHES
5. Physical : CABLES

### ISP

Internet Service Provider

A cada computadora se la da un IP Address. Así sabemos a quién le estamos hablando.

### DNS

Domain Name System. Se crean para saber a quién contactar sin escrir el número del IP Address. Por ejemplo 172.217.7.23 es [google.com](https://www.google.com)

## Historia de la web

### El primer desarrollador web

Tim Berners-Lee. Él propuso el WWW. Todo lo generó en una computadora NEXT. Él escribio HTML, URL y HTTP. Él construyó el primer servidor y el primer navegador.

### W3C

World Wide Web Consortium. Se encarga de trabajar con las tecnologías para la evolución de la web. Están comprometidas con Google, Amazon, etc.

[Lista de miembros de la W3C](https://www.w3.org/Consortium/Member/List)

### Web Broswer

- Mosaic: el primero con gráfico y textos
- Netscape: de aquí salió JavaScript
- Internet Explorer : El de Microsoft
- IBM
- Safari: el de Apple
- Chrome : el de Google. De aquí sale V8 y NodeJS

### Evolución del protocolo HTTP

Hypertext Transfer Protocol y HTTPS, "S" es para Secure. Es el estándar de hacer las buenas prácticas de las páginas web.

Cliente envia Request al Servidor

Servidor envia Response al Cliente

Métodos HTTP:

- Get: Solicita datos
- Post : Envía datos
- Put : Crea o reemplaza datos
- Delete : Borra datos específicos

### Estándares web

Son tecnologías para crear productos web.

- HTML5
- CSS
- JavaScript
- WebAssembly; Diciembre 2019. Es un compilador.

### ¿Dónde estamos ahora? (Febrero 2021)

Multiplataforma. Más de 4000 millones de dispositivos conectados a internet. Responsive design y mobile first.

- IOT = Internet Of Things
- AI & ML
- 5G : Mayor velocidad de internet

## Cómo funciona el navegador

### DOM

Document Object Model : HTML

#### CSSOM

CSS Object Model : CSS

### Render tree

DOM + CSSOM

### Layout

Es la maqueta del proyecto y mostrará dónde se distribuyen las áreas de las etiquetas en las pantallas.

### Paint

Detalles finales que muestran los estilos de las páginas web.

### JavaScript engine

JS tiene que ir al final del HTML.

JS Engine convierte el código JS a machine code o bytecode.

## Examen

En binario ¿cómo se representaría el string “Hola”?: 0 1 0 0 1 0 0 0 0 1 1 0 1 1 1 1 0 1 1 0 0 0 0 1 0 1 1 0 0 0 0 1

¿Cuáles fueron las tres tecnologías que dieron nacimiento a la web como la conocemos hoy en día?: html, url y http

¿Qué significa WWW?: world wide web

En binario ¿cómo se representaría el número 38?: 100110

HTML y CSS son dos de los principales estándares web: verdadero

¿Cuántos bits tiene un byte?: 8 bits

¿Cuáles son todas las partes de un Critical Rendering Path?: DOM, CSSSOM, RENDER TREE, JS ENGINE, LAYOUT, PAINT

¿Cómo convierte una computadora texto en unos y ceros?: ascii y unicode

¿En qué paso del Critical Rendering Path, se combina el DOM y el CSSOM?: Render tree

¿Cuál es el protocolo que utilizamos para poder enviar y recibir peticiones en la web?: http

¿Quién creó el primer navegador?: Tim Berners-Lee

¿Cuáles son periféricos de entrada?: teclado bla bla

¿Qué es ISP?: Internet Service Provider

¿En qué paso del Critical Rendering Path comenzamos a crear la estructura del proyecto sin diseño?: layout

¿Para qué servían las tarjetas perforadas?: Para almacenar información e ingresar instrucciones a una computadora

¿Cómo se forma un pixel?: RGB

¿Cómo representamos el color rojo en RGB?: 255,0,0

¿Cuáles son periféricos de salida?: monitor bla bla
