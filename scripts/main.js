// PARTE 1 VARIABLES

//Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
//alert("JavaScript funcionando correctamente")

//Comenta el código que muestra el cuadro de diálogo

//Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor
console.log(typeof variableSinValor)

//Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true
let booleano2 = false
console.log(typeof booleano1 , typeof booleano2)
//Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14
console.log(typeof PI)

//Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 2*PI
console.log(TAU)

//Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = 'Johannes'
console.log(miNombre , typeof miNombre)

//Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = 33
console.log(typeof miNumeroFav)

//Crea una variable de tipo booleano
let aprobado = false
console.log(typeof aprobado)

//Muestra por consola la longitud de la variable miNombre
console.log(miNombre.length)

//Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFav)

//Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
console.log('Mi nombre es '+ miNombre + ' y mi número favorito es ' + miNumeroFav)
console.log(`Mi nombre es ${miNombre} y mi número favorito es ${miNumeroFav}`)

//Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
console.log('Seré un crack en JavaScript al terminar el bootcamp')

//Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”

//Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable

//Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.

//Muestra por consola la variable PI hasta los 2 primeros decimales

// PARTE 2 ARRAYS

//Crear variable de nombre arrayVacio cuyo valor sea un array vacío

//Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

//Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)

//Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

//Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

//Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

//Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

//Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

//Muestra por consola la longitud del array “loGuardoTodo”

//Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

//Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo

//Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola

// PARTE 3 OBJETOS

//Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores

//Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

//Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

//Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores

//Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores

//Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores

//Muestra por consola el nombre de la variable Persona

//Muestra por consola el lenguaje javascript de la variable FullStackDevelope

//Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola

//Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola

//Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

//Crea un objeto de nombre Led, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola. La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’]

//Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

//Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

//Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola

//Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola

//Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado

//Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado

//Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy, investiga que es new Date y como usarlo), consolea el resultado