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
let star = 'Hola soy un crack'
console.log(star.substring(0,4))
let starEdit = star.substring(0,5) //Hay que añadir una posición más
console.log(starEdit)
console.log(starEdit.split(""))

//Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
let miNumeroFavString = toString(miNumeroFav)
console.log(typeof miNumeroFav)
console.log(typeof miNumeroFavString)

//Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.
const pupil = 'Don José'
console.log(`Mi alumno es ${pupil} y es un crack`)
let resExam = `Mi alumno es ${pupil} y es un crack`
console.log(resExam)

//Muestra por consola la variable PI hasta los 2 primeros decimales
console.log(PI.toFixed(2));



// PARTE 2 ARRAYS

//Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = []

//Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9]

//Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0,2,4,6,8]

//Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

//Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ['Hola','Mundo']

//Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
const loGuardoTodo = ['hola','que',23,42.33,'tal']

//Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [[759,'nombre'],[225,'apellido'],[298,'direccion']]

//Muestra por consola la longitud del array “loGuardoTodo”
console.log(loGuardoTodo.length)

//Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
loGuardoTodo.push(99);
console.log(loGuardoTodo)

//Muestra por consola el valor ‘que’ de la variable loGuardoTodo
console.log(loGuardoTodo[1])

//Añade el valor ‘Euralio’ en la array loGuardoTodo y muestrala por consola
loGuardoTodo.push('Euralio');
console.log(loGuardoTodo)

// PARTE 3 OBJETOS

//Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const Coche = {
    marca: 'seat',
    modelo: 'cupra',
    matricula: 'v1092CX'
}
//Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
const Casa = {
    codPostal: 46815,
    calle: 'Avenida Uno',
    portal: 6,
    piso: 4
}
//Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)
const FullStackDeveloper = {
    lenguajes: ['javascript','php','java'],
    proyectos: ['mi página personal','ejercicios javascript']
}

//Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
const Perro = {
    nombre: 'chispis',
    raza: 'salchicha',
    color: 'negro',
    edad: 1
}
//Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
const Noticia = {
    titular:'TA del BoootCamp FullStack asesina a alumno con un portaideas',
    cuerpo: 'El official T.A Frederik von Arval,a las 11:22 del 6o día del RampUp acabó con la vida de uno de los alumnos presentes en la clase. Según relatan los testigos,la víctima intentó acceder a la pizarra digital de la clase para configurar el volumen de los altavoces, cosa que llevó a la locura al citado T.A que aprovechó para frenar tan osada acción empleando un portaideas que casualmente se encontraba junto a la pizarra. Afortunadamente el objeto no sufrió daño alguno al estar envuelto en su plástico de protección.'
}
//Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
const Persona = {
    nombre: 'Kel' ,
    apellidos: 'Palazzi Montelli',
    edad: 35,
}
//Muestra por consola el nombre de la variable Persona
console.log(Persona.nombre)

//Muestra por consola el lenguaje javascript de la variable FullStackDevelope
console.log(FullStackDeveloper.lenguajes[0])

//Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
let Portatil = {
    marca: 'Toshiba',
}
console.log(Portatil.marca)

//Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log(Portatil['marca'])

//Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const Concierto = {
    grupos:['U2','Fugees','Bonney M'],
}
console.log(Concierto.grupos)

//Crea un objeto de nombre Led, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola. La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’]
const Led = {
    lampara1: 'rojo',
    lampara2: 'verde',
    lampara3: 'azul',
       }
const RGB = [Led.lampara1, Led.lampara2, Led.lampara3]
console.log(RGB)

//Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola
const O_Error = {
    codigo: 'error',
}
console.log(O_Error.codigo)

//Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes
const grupo = {
    integrantes: ['Jose', 'Isma', 'Fede']
};
const integrantes = grupo.integrantes[1];
console.log(integrantes);

//Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
const impresora = {
    tinta: {
        rojo: 'medio',
        verde: 'bajo',
        azul: 'alto',
    },
};
const nivelesTinta = [impresora.tinta.rojo, impresora.tinta.verde,impresora.tinta.azul]
console.log('los niveles de tinta son ' + nivelesTinta);

//Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
const Movil = {
    especificaciones: 'Intel I9, 16GB Ram, 1Tb SSD',
}
const especificaciones = Movil.especificaciones
console.log(especificaciones)
//NOTA También vale: 
// const especificaciones = movil["especificaciones"] ??;

//Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
Portatil.marca = 'MSI'
console.log(Portatil.marca)

//Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
Concierto.grupos.push('Guns N\' Roses');
console.log(Concierto.grupos)

//Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy, investiga que es new Date y como usarlo), consolea el resultado
Concierto.fecha = 'Mayo 78'
Concierto.fecha =  new Date()

console.log(Concierto.fecha)

//Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
grupo.integrantes.pop([2]);
console.log(grupo.integrantes.length);