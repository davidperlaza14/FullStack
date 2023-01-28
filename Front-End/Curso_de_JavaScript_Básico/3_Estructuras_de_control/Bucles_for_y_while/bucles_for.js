// Estructuras de control.

// Bucles For
for (let i = 0; i < 10; i++) {
    console.log(i)
}

let lista = [1,2,3,4,5,6,7,8,9,12,800];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// Estructura for... of
for (let valor of lista) {
    console.log(valor);
}

// Estructura forEasch

lista.forEach(valor => {
    console.log(valor);
})

let persona = {
    nombre: "David",
    apellido: "Perlaza",
    edad: 29,
    IsDeveloper: true
}
for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}