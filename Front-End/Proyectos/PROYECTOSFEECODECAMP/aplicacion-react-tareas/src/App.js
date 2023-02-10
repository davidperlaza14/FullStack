import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        {/* <Tarea texto='Aprender React'/> */}
        {/* <TareaFormulario/> */}
        <ListaDeTareas/>
      </div>
    </div>
  );
}
// import ListaDeTareas from './componentes/ListaDeTareas';

export default App;
