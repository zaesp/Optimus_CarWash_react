import { Carousel } from 'react-bootstrap';
import imagenes from "../../assets/imagenes.js"

const CarouselComponent = () => {
    return (
        <Carousel fade>
            <Carousel.Item className='vh-100'>
                <img
                    className="h-100 w-100"
                    src={imagenes.img1}
                    alt="Primer slide"
                    fluid
                />
                <Carousel.Caption>
                    <h3>Local Abierto de Optimus Carwash</h3>
                    <p>nuestro local es este :3</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='vh-100'>
                <img
                    className="h-100 w-100"
                    src={imagenes.img2}
                    alt="Segundo slide"
                    fluid
                />
                <Carousel.Caption>
                    <h3>Local Cerrado de Optimus Carwash</h3>
                    <p>Nuestro local es este :3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent 