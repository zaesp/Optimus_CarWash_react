import './Footer.css';
import imagenes from '../../assets/imagenes';

const Footer = () => {
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
          <form>
            <input type="email" placeholder="Tu correo electrónico" />
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
