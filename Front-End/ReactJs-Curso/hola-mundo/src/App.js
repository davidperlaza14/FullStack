import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF  from './components/pure/greetingF';
import Task_list from './components/container/task_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Hola!"></Greeting> */}
        {/* <GreetingF name="David"></GreetingF> */}
        
        {/* Componente de listado de tareas */}
        <Task_list></Task_list>
      </header>
    </div>
  );
}

export default App;
