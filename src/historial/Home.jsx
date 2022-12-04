import '../estilos/Footer.css';
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const link = useNavigate();
  return (
    <>
      <div className="Footer">
        <footer className="footer">
          <button onClick={() => { link("Historial"); document.querySelector(".card").style="display:none"}} className="historial-link">Historial de cotizaciones</button>
        </footer>
      </div>
    </>
  );
}
export default Home;

