//pantalla principal (acaba ba el main el header el footer)
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //npm i react-r
import Navigation from './Components/Components-Navbar/Navigation';
import Footer from './Components/Components-Footer/Footer';
import Home from './views/Home/Home';
import Servicios from './views/Servicios/Servicios';
//import Reservas from './views/Servicios/Reservas';
import Puntos from './views/Servicios/Puntos';
import Promociones from './views/Servicios/Promociones';

import Login from './views/Users/InicioSesion.jsx';
import Registro from './views/Users/RegistroUsuario.jsx';

import Perfil from './views/logeadas/Perfil.jsx';
import Productos from './views/logeadas/Productos.jsx';
import ReservasAdmi from './views/logeadas/ReservasAdmi.jsx';
import Usuarios from './views/logeadas/Usuarios.jsx';
import Galeria from './views/Servicios/GaleriaC.jsx';

//formularios de gestion
import ListGaleria from './views/logeadas/CRUDGaleria/ListGaleria.jsx'
import AgregarGaleria from './views/logeadas/CRUDGaleria/AgregarGaleria.jsx'
//editar

//reservas
import CreateReservas from './views/logeadas/CRUDReservas/CreateReservas.jsx';


const App = () => {

  const [user, setUser] = useState(null); //estado global del usuario

  return (
    <Router>
      <Navigation user={user} />

      {console.log("Usuario actual:", user)}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/:id" element={<Home />} />{/*El home con id de usuario para futuras configuraciones*/}

        <Route path="/promociones" element={<Promociones />} />
        <Route path="/servicios" element={<Servicios />} />
        {/*<Route path="/reservas" element={<Reservas user={user} />} /> */}
        <Route path="/puntos" element={<Puntos />} />
        <Route path="/galeria" element={<Galeria />} />

        <Route path="/login" element={<Login setUser={setUser} />} /> {/*Para configurar el estado de logeado*/}
        <Route path="/registro" element={<Registro />} />

        <Route path="/perfil/:id" element={user?.tipo === "cliente" ? <Perfil user={user} /> : <Home />} />{/*devemos pasarle el estado global para que agarre el id*/}


        <Route path="/productos" element={user?.tipo === "administrador" ? <Productos /> : <Home />} />

        <Route path="/reservas-admin" element={user?.tipo === "administrador" ? <ReservasAdmi /> : <Home />} />

        <Route path="/usuarios" element={user?.tipo === "administrador" ? <Usuarios /> : <Home />} />

        {/*Todo para Gestionar Galeria */}
        <Route path="/galeria2" element={user?.tipo === "administrador" ? <ListGaleria /> : <Home />} />
        <Route path="agregarGaleria" element={user?.tipo === "administrador" ? <AgregarGaleria /> : <Home />} />

        {/*Todo para Gestionar Reservas */}
        <Route path="/reservas" element={<CreateReservas user={user} />} />

        {/*Todo para Gestionar Usuarios */}


      </Routes>
      <Footer />
    </Router>
  )
}

export default App