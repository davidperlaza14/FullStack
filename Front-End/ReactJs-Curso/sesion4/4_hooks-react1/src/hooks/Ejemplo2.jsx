/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect,} from 'react'

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // cada uno en un estado diferente
    const [constador1, setConstador1] = useState(0);
    const [constador2, setConstador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setConstador1(constador1 + 1);
    };

    function incrementar2(){
        setConstador2(constador2 + 1);
    };

    /**
     * Trabajando con UseEffect
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando Referencia a elemento del DOM');
    //     console.log(miRef);
    // })

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie  contador2, no habra ejecucion
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR1');
    //     console.log('Mostrando Referencia a elemento del DOM');
    //     console.log(miRef)
        
    // }, [constador1]);

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */
    
    useEffect(() => {
            console.log('CAMBIO EN EL ESTADO DEL CONTADOR1 o  CONTADOR2');
            console.log('Mostrando Referencia a elemento del DOM');
            console.log(miRef)
            
        }, [constador1, constador2]);



    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>CONTADOR1: {constador1}</h2>
            <h2>CONTADOR2: {constador2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador2</button>
            </div>

        </div>
    )
}

export default Ejemplo2

    

    
    

    

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // }, [contador1]);

    



    









           
            
            
            {/* Botones para cambiar los contadores */}
