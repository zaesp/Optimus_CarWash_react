//pantalla principal (acaba ba el main el header el footer)
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //npm i react-r

import Navigation from './Components/Components-Navbar/Navigation';

import Home from './views/Home/Home';
import Promociones from './views/Servicios/Promociones';
import Servicios from './views/Servicios/Servicios';
//reservas = CreateReservas
import Galeria from './views/Servicios/GaleriaC.jsx';
//perfil
//reservas admi
//usuarios admi
//galeria admi


//import Login from './views/Users/InicioSesion.jsx';
//import Registro from './views/Users/RegistroUsuario.jsx';

import InicioSesion from './views/Users/InicioSesion.jsx';
import RegistroUsuario from './views/Users/RegistroUsuario.jsx';

import Perfil from './views/logeadas/Perfil.jsx';//mi perfil

//Gestion de Usuarios
import ListUsuario from './views/logeadas/CRUDusuarios/ListUsuarios.jsx';
import ListUserComent from './views/logeadas/CRUDusuarios/ListUserComent.jsx'

//Gestion de Galeria
import ListGaleria from './views/logeadas/CRUDGaleria/ListGaleria.jsx'
import AgregarGaleria from './views/logeadas/CRUDGaleria/AgregarGaleria.jsx'


//Gestion de Reservas
import CreateReservas from './views/logeadas/CRUDReservas/CreateReservas.jsx';
import ListReservas from './views/logeadas/CRUDReservas/ListReservas.jsx';

import Footer from './Components/Components-Footer/Footer';


const App = () => {

  const [user, setUser] = useState(null); //estado global del usuario

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser)); // Actualiza el estado global si el usuario es válido
      } catch (e) {
        console.error("Error al parsear el usuario:", e);
        localStorage.removeItem("user"); // Si el JSON es inválido, elimínalo
      }
    } else {
      setUser(null); // Si no hay usuario en el localStorage, se elimina el estado global
    }
  }, []);

  return (
    <Router>
      <Navigation user={user} setUser={setUser} />

      {console.log("Usuario actual:", user)}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/:id" element={<Home />} />{/*El home con id de usuario para futuras configuraciones*/}

        <Route path="/promociones" element={<Promociones />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/galeria" element={<Galeria />} />


        <Route path="/login" element={<InicioSesion setUser={setUser} />} /> {/*Para configurar el estado de logeado*/}
        <Route path="/registro" element={<RegistroUsuario />} />


        <Route path="/perfil/:id" element={user?.tipo === "cliente" ? <Perfil user={user} /> : <Home />} />{/*devemos pasarle el estado global para que agarre el id*/}



        {/*Todo para Gestionar Galeria */}
        <Route path="/galeria-admin" element={user?.tipo === "administrador" ? <ListGaleria /> : <Home />} />
        <Route path="agregarGaleria" element={user?.tipo === "administrador" ? <AgregarGaleria /> : <Home />} />

        {/*Todo para Gestionar Reservas */}
        <Route path="/reservas-admin" element={user?.tipo === "administrador" ? <ListReservas /> : <Home />} />
        <Route path="/reservas" element={<CreateReservas user={user} />} />

        {/*Todo para Gestionar Usuarios */}
        <Route path="/usuarios-admin" element={user?.tipo === "administrador" ? <ListUsuario /> : <Home />} />
        <Route path='/usuario-comentario/:id' element={<ListUserComent />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App