let dato = 10;
let resultado = dato;
let i = 1;

while ( i < dato) {
    
    resultado = resultado * i;
    
    if(i == 6){
        
        break;
    }
    i++;
    console.log(resultado);
}