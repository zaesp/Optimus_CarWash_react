import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imagenes from '../../assets/imagenes';
import '../Components-Navbar/Navigation.css';

const Navigation = ({ user }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false); //dato booleano

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Menú Hamburguesa */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>

        {/* Logo */}
        <div className="navbar-logo">
          <img src={imagenes.img3} alt="Logo" className="logo" />
        </div>

        {/* Opciones del menú sin iniciar sesion*/}
        <ul className="menu-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/promociones">Promociones </Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/reservas">Reservas</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>


          {/* Opciones para clientes  (&& verifica si user existe y si es cliente)*/}
          {user?.tipo === "cliente" && (
            <li>
              <Link to={`/perfil/${user.id}`}>Mis Datos</Link>
            </li>
          )}


          {/* Opciones para administradores */}
          {user?.tipo === "administrador" && (
            <>
              <li>
                <Link to="/reservas-admin">ReservasAdmi</Link>
              </li>
              <li>
                <Link to="/usuarios-admin">UsuarioAdmi</Link>
              </li>
              <li>
                <Link to="/galeria-admin">GaleriaAdmi</Link>
              </li>
            </>
          )}


        </ul>


        {/* Botón de Iniciar Sesión */}
        <div className="login-button">
          <Link to="/login" className="btn-login">
            <i class="fa-solid fa-user"></i> {/* Ícono de usuario */}
          </Link>
        </div>

      </div>





      {/* Menú Desplegable (Hamburguesa) */}
      {isMenuOpen && (
        <div className="overlay-menu">
          <button className="close-menu" onClick={toggleMenu}>
            &times;
          </button>

          <ul className="menu-links-mobile">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/promociones" onClick={toggleMenu}>
                Promociones
              </Link>
            </li>
            <li>
              <Link to="/servicios" onClick={toggleMenu}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/reservas" onClick={toggleMenu}>
                Reservas
              </Link>
            </li>

            <li>
              <Link to="/galeria" onClick={toggleMenu}>
                Galeria
              </Link>
            </li>

            {/* Opciones para clientes */}
            {user?.tipo === "cliente" && (
              <li>
                <Link to={`/perfil/${user.id}`} onClick={toggleMenu}>
                  Mis Datos
                </Link>
              </li>
            )}


            {/* Opciones para administradores */}
            {user?.tipo === "administrador" && (
              <>
                <li>
                  <Link to="/reservas-admin" onClick={toggleMenu}>
                    Reservas Admi
                  </Link>
                </li>
                <li>
                  <Link to="/usuarios-admin" onClick={toggleMenu}>
                    Mis Usuarios
                  </Link>
                </li>
                <li>
                  <Link to="/galeria-admin" onClick={toggleMenu}>
                    Galería Admi
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navigation;