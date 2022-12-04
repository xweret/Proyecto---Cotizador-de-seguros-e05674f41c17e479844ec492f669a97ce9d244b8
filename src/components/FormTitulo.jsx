import '../estilos/Form.css';
import Peticion from './Peticion';
import Precio from './Precio';
function FormTitulo() {
  return (
    <main className='card'>
      <h3 className='subtitulo'>Completa los datos solicitados</h3>
      <div className='container'>
       <Peticion />
       <Precio />
      </div>
    </main>
  );
}
export default FormTitulo;