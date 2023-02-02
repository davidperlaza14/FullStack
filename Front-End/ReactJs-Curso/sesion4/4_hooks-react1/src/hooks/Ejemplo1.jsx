/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react'
    
const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorIncial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre : 'David',
        email: 'david@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL u PERSONA INICIAL sean
     * parte del estado del componente para asi gestionar su cambio
     * y que este se vea reflejado en la vista del componente.
     * 
     * conts [nombreVariable, funcionPraCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorIncial);
    const [persona, setPersona] = useState(personaInicial);    
    
    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }
    
    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona(nombre) {
        setPersona(
            {
                nombre: 'Ivana',
                emai: 'ivan@gmail.com'
            }
        )
    }





    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    )
}

export default Ejemplo1

    

    {/* Bloque de botones para actualizar el estado del componente */}
