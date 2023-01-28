// Bifurcaciones if ...else

// ========================

// if - else

// let saldo = 50;
// let efectivo = 100;

// if (efectivo < saldo) {
//     console.log("Puedes sacar dinero");
// }
// if (efectivo < saldo) {
//     console.log("Puedes sacar dinero")
// } else {
//     console.log("Saldo insuficiente");
// }

// ================================

// If else + if else

/*let nota = 40;

if (nota == 5) {
    console.log("Enhorabuena, has obtenido un sobresaliente.")
} else if (nota == 4) {
    console.log("Buen trabajo");
} else if (nota == 3) {
    console.log("Has obtenido un suficiente");
} else if (nota == 2) {
    console.log("No has aprobado por poco");
} else if (nota == 1) {
    console.log("No has reprobado.");
} else {
    console.log("Error, introduce una nota entre 1 y 5");
}
*/

// ==============================================
// Sentencias Switch

let nota = 4;
switch (nota) {
    case 5:
        console.log("Enhorabuena, has obtenido un sobresaliente.");

        break;
    case 4:
        console.log("Buen trabajo");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has reprobado.");
        break;

    default:
        console.log("Error, introduce una nota entre 1 y 5");

        break;
}

