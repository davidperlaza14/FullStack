import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF  from './components/pure/greetingF';
// import Task_list from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1.jsx';
import Ejemplo2 from './hooks/Ejemplo2.jsx';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Hola!"></Greeting> */}
        {/* <GreetingF name="David"></GreetingF> */}
        
        {/* Componente de listado de tareas */}
        {/* <Task_list></Task_list> */}
        {/* =========================== */}
        
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* // <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre = 'Martin'>
            <h3>Ejemplo de CHILDREN PROPS</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
