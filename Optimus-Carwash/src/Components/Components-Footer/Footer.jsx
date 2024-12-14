// Footer.js
import './Footer.css';
import imagenes from '../../assets/imagenes.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // Manejar el cambio del input de suscripción
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Manejar el envío del formulario de suscripción
  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      navigate(`/registro?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Enlaces rápidos */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/promociones">Promociones</a></li>
            <li><a href="/reservas">Reservas</a></li>
            <li><a href="/contacto">Contáctanos</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <p>Teléfono: +51 926 066 728</p>
          <p>Email: <a href="mailto:optimuscarwash2024@gmail.com">optimuscarwash2024@gmail.com</a></p>
          <p>Dirección: Av. Alameda (frente al primer redondo techado), <br /> Puerto Maldonado, Perú, 17001</p>
        </div>

        {/* Redes sociales */}
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

        {/* Boletín de suscripción */}
        <div className="subscription-section">
          <h3>Suscríbete</h3>
          <p>¡Recibe nuestras últimas promociones y noticias!</p>
          <form onSubmit={handleSubscription}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              value={email} 
              onChange={handleEmailChange} 
            />
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; Optimus CarWash. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;