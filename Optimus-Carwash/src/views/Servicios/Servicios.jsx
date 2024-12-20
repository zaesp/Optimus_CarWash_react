import { Card } from 'react-bootstrap';
import imagenes from '../../assets/imagenes.js';
import '../Servicios/Servicios.css';
import '../Servicios/Servicios.scss';


const Servicios = () => {
  return (
    <>
      <section className="servicios_section">
        <h2 className="servicios_title">Nuestros Servicios</h2>
        <div className="row justify-content-center">

          {/* Servicios de 2 ruedas */}
          <div className="col-12 servicios_categoria">
            <h3>Servicios de 2 ruedas</h3>
            <div className="row justify-content-center">
              <Card className="servicio_card col-md-4 col-sm-12">
                <Card.Img variant="top" src={imagenes.img6} />
                <Card.Body>
                  <Card.Title className='servicio_card_title'>2 ruedas Básico</Card.Title>
                  <Card.Text className='servicio_card_text'>
                    Lavado exterior rápido con secado profesional. Ideal para quienes buscan rapidez y calidad.
                  </Card.Text>
                  <p className="servicio_card_price">Precio: S/20.00</p>
                </Card.Body>
              </Card>

              <Card className="servicio_card col-md-4 col-sm-12">
                <Card.Img variant="top" src={imagenes.img5} />
                <Card.Body>
                  <Card.Title className='servicio_card_title'>2 ruedas Óptimo</Card.Title>
                  <Card.Text className='servicio_card_text'>
                    Lavado completo con cera y pulido para un acabado brillante que protege tu vehículo.
                  </Card.Text>
                  <p className="servicio_card_price">Precio: S/40.00</p>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Servicios de 3 ruedas */}
          <div className="col-12 servicios_categoria">
            <h3>Servicios de 3 ruedas</h3>
            <div className="row justify-content-center">
              <Card className="servicio_card col-md-4 col-sm-12">
                <Card.Img variant="top" src={imagenes.img6} />
                <Card.Body>
                  <Card.Title className='servicio_card_title'>3 ruedas Básico</Card.Title>
                  <Card.Text className='servicio_card_text'>
                    Lavado rápido exterior con atención personalizada para un acabado impecable.
                  </Card.Text>
                  <p className="servicio_card_price">Precio: S/30.00</p>
                </Card.Body>
              </Card>

              <Card className="servicio_card col-md-4 col-sm-12">
                <Card.Img variant="top" src={imagenes.img4} />
                <Card.Body>
                  <Card.Title className='servicio_card_title'>3 ruedas Óptimo</Card.Title>
                  <Card.Text className='servicio_card_text'>
                    Lavado completo con tratamiento de pintura y desengrasado para un brillo duradero.
                  </Card.Text>
                  <p className="servicio_card_price">Precio: S/50.00</p>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Servicios de 4 ruedas */}
          <div className="col-12 servicios_categoria">
            <h3>Servicios de 4 ruedas</h3>
            <div className="row justify-content-center">
              <Card className="servicio_card col-md-4 col-sm-12">
                <Card.Img variant="top" src={imagenes.img4} />
                <Card.Body>
                  <Card.Title className='servicio_card_title'>4 ruedas Básico</Card.Title>
                  <Card.Text className='servicio_card_text'>
                    Lavado exterior con aspirado rápido interior para dejar tu vehículo impecable.
                  </Card.Text>
                  <p className="servicio_card_price">Precio: S/50.00</p>
                </Card.Body>
              </Card>

              <Card className="servicio_card col-md-4 col-sm-12">
                <Card.Img variant="top" src={imagenes.img5} />
                <Card.Body>
                  <Card.Title className='servicio_card_title'>4 ruedas Óptimo</Card.Title>
                  <Card.Text className='servicio_card_text'>
                    Lavado completo con encerado y desodorización interior para un confort total.
                  </Card.Text>
                  <p className="servicio_card_price">Precio: S/80.00</p>
                </Card.Body>
              </Card>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Servicios;
