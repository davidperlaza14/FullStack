import React, {useState} from 'react'
import PropTypes from 'prop-types'

const GreetingF = (props) => {

    // Breve introduccion a useState
    // const [variable, metodo para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(29);

    const birthday = () => {
        // Actualizamos el State
        setage(age + 1);
    }


    return (
        <div>       

            <h1>
                Hola! {props.name} Desde componente funcional!
            </h1>
            
            <h2>
                Tu edad es: {age}
            </h2>

            <div>
                <button onClick={birthday}>
                    Cumplir anios
                </button>
            </div>
            
        </div>
    );
};

GreetingF.propTypes = {
    name: PropTypes.string
};

export default GreetingF;
