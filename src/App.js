import './App.css';
import FormTitulo from './components/FormTitulo';
import './estilos/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="container App">
              <h1 className='titulo'>Proyecto Untref - Gabriel Garofalo</h1>
      <header className="App-header">
        <FormTitulo />
        <div>
        </div>
      </header>
    </div>
  );
}


