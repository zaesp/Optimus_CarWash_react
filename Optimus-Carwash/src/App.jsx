//pantalla principal (acaba ba el main el header el footer)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //npm i react-r
import Navigation from './Components/Components-Navbar/Navigation';
import Footer from './Components/Components-Footer/Footer';
import Home from './views/Home/Home';
import Servicios from './views/Servicios/Servicios';
import Reservas from './views/Servicios/Reservas';
import Puntos from './views/Servicios/Puntos';
import Promociones from './views/Servicios/Promociones';

//importar todos los componentes(vistas) que se veran 


const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/servicios" element={<Servicios />} /> {/*Añadir las rutas que estan en views*/}
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/puntos" element={<Puntos/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App