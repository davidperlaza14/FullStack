import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';

function App() {
const contactoPrueba = {
  nombre: 'David',
  apellido: 'Balotelli',
  email: '4572@bootcamp.com',
  conectado: false
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba}/>
      </header>
    </div>
  );
}

export default App;
