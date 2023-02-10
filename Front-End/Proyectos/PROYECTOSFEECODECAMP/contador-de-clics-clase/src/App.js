import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import FreeCodeCampLogo from './imagenes/freecodecamp-logo.png'
// import { useState } from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    };

  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  };

  

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render() {
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
          className='freecodecamp-logo'
          src={FreeCodeCampLogo}
          alt='Logo de freeCodeCamp'
          />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics = {this.state.numClics} />
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

// function App() {

//   const [numClics, setNumClics] = useState(0);


//   const manejarClic = () => {
//     setNumClics(numClics + 1);
//   };

//   const reiniciarContador = () => {
//     setNumClics(0);
//   };

  
// }

export default App;
