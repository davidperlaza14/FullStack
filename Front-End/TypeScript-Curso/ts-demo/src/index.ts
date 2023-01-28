// Esto es un comentario TS

/**
 * Esto es un comentario
 * Multilinea.
 */

console.log("Hola David Stiven Perlaza");

// Devlaracion de variables:

var nombre: string = "Martin";

console.log("Hola, " + nombre);
console.log("Que tal ", nombre, "?");
console.log(`Como han ido las vacaciones, ${nombre}?`);


let email= "davidperlaza@.gmail.com" // Variable de ambito local
console.log(`Email de ${nombre} es ${email}`);

const PI: number = 3.1416;


var apellido: any = "Perlaza"; // Tipo any hace que la variable pueda cambiar de tipo
apellido = 3;

var error: boolean;
error = false

console.log(`Hay error?: ${error}`);

// Instaciacion multiple de variables

let a:string,b:boolean,c:number; // Instancia 3 variables sin valor inicial.
a = "TypeScript";
b = true;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null y undefined

// Tipos mas complejos

// Tipos mas complejos
let listaTarea: string[] = ["Tarea 1", "Tarea 2"];

// Combinacion de tipos en listas
let valor: (string | number | boolean)[] = [false, "Hola", true, 56];

// Enumerados

enum Estados {
    "Completado",
    "Incompleto",
    "Pendiente"
}

enum PuestoCarrera {
    "Primero",
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMarato:PuestoCarrera = PuestoCarrera.Segundo;


// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}
console.log(`Tarea: ${tarea1.nombre}`);
// Types de TypeScript

type Producto = {
    nombre: string
    precio: number,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}

//  ** Condicionales:

// Operadores Ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo`: `Coche: ${coche.nombre} es nuevo` );


// if - else
if(error){
    console.log("Hay un error");
} else {
    console.log("No hay un error");
}

//  If - else if- else
if(coche.anio < 2010){
    console.log(`Coche: ${coche.nombre} es viejo`)
} else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`)
} else {
    console.log(`Coche: ${coche.nombre} es nuevo`)
}