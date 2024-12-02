import React from 'react';
import './Footer.css';
import imagenes from '../../assets/imagenes';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de enlaces rápidos */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/promociones">Promociones</a></li>
            <li><a href="/reservas">Reservas</a></li>
            <li><a href="/contacto">Contáctanos</a></li>
          </ul>
        </div>

        {/* Sección de contacto */}
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <p>Teléfono: +51 926 066 728</p>
          <p>Email: optimuscarwash2024@gmail.com</p>
          <p>Dirección: Av. Alameda (frente al primer redondo techado), Puerto Maldonado, Peru,17001</p>
        </div>

        {/* Sección de redes sociales */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
          <a href="https://www.facebook.com/people/Optimus-Car-Wash/61562874897222/" target="_blank" rel="noopener noreferrer">
              <img src={imagenes.img9} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={imagenes.img10} alt="Instagram" />
            </a>
            <a href="https://whatsapp.com/dl/" target="_blank" rel="noopener noreferrer">
              <img src={imagenes.img11} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Optimus CarWash. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
