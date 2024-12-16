import { Button, Carousel } from 'react-bootstrap';
import imagenes from "../../assets/imagenes.js"
import "../Componentes-Centrales/Carrousel.css"
import { useNavigate } from 'react-router-dom';

const CarouselComponent = () => {
    
    const navigate = useNavigate();

    return (
        <Carousel fade>
            <Carousel.Item className='Ventana'>
                <img
                    className="h-100 w-100"
                    src={imagenes.img1}
                    alt="Primer slide"
                    fluid
                />
                <Carousel.Caption className='contenidoCarousel'>
                    <h3>Ubicanos</h3>
                    <p>Nos pueden encontrar en la av. Alameda a la altura del primer techado rojo</p>
                    {/*<Link Link to="/" className='btn.text-nowrap boton_ventana'>Ver Servicios</Link>*/}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='Ventana'>
                <img
                    className="h-100 w-100"
                    src={imagenes.img5}
                    alt="Segundo slide"
                    fluid
                />
                <Carousel.Caption className='contenidoCarousel'>
                    <h3>Servicios</h3>
                    <p>Tenemos variedad de servicios y precios que les pueden interesar, he incluso promociones y descuentos que pueden aprovechar.</p>
                    <Button className='btn.text-nowrap  boton_ventana' onClick={() => navigate('/servicios')}>Ver Servicios</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='Ventana'>
                <img
                    className="h-100 w-100"
                    src={imagenes.img4}
                    alt="Segundo slide"
                    fluid
                />
                <Carousel.Caption className='contenidoCarousel'>
                    <h3>Infraestructura</h3>
                    <p>Contamos con una infraestructura moderna, para su comodidad, contamos con aire acondicionado, television satelitar e internet... y mucho mas</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='Ventana'>
                <img
                    className="h-100 w-100"
                    src={imagenes.img6}
                    alt="Segundo slide"
                    fluid
                />
                <Carousel.Caption className='contenidoCarousel'>
                    <h3>Promociones</h3>
                    <p>Contamos con distintas promociones para universitarios y nuestros amigos mototaxistas, aun que no es la unica forma de conseguirlos. </p>
                    <Button onClick={() => navigate('/promociones')} className='boton_ventana '>Ver Promociones</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='Ventana'>
                <img
                    className="h-100 w-100"
                    src={imagenes.img2}
                    alt="Segundo slide"
                    fluid
                />
                <Carousel.Caption className='contenidoCarousel'>
                    <h3>Haga su Reserva</h3>
                    <p>Puedes hacer sus reservas desde este boton.</p>
                    <Button to="/reservas" className='btn.text-nowrap  boton_ventana'>Realizar Reserva</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent 