import { Button, Card } from 'react-bootstrap'
import imagenes from '../../assets/imagenes.js'

const Servicios = () => {
  return (
    <>
      <h2>Servicios</h2>
      <div className="row">

        <div className="Servicios2R col-12 ">

          <h3>Servicios de 2 ruedas</h3>

          <div className="2ruedas row">
            <Card style={{ width: '18rem' }} className=' col-md-6 col-sm-12'>
              <Card.Img variant="top" src={imagenes.img6} />
              <Card.Body>
                <Card.Title>2 ruedas Basico</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ver Precio</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='col-6 col-sm-12'>
              <Card.Img variant="top" src={imagenes.img5} />
              <Card.Body>
                <Card.Title>2 ruedas Optimo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ver Precio</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="Servicios3R col-12">

          <h3>Servicios de 3 ruedas</h3>

          <div className="3ruedas row">
            <Card style={{ width: '18rem' }} className='col-6 col-sm-12'>
              <Card.Img variant="top" src={imagenes.img6} />
              <Card.Body>
                <Card.Title>3 ruedas basico</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ver Precio</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='col-6 col-sm-12'>
              <Card.Img variant="top" src={imagenes.img4} />
              <Card.Body>
                <Card.Title>3 ruedas Optimo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ver Precio</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="Servicios4R col-12">

          <h3>Servicios de 4 ruedas</h3>

          <div className="4ruedas row">
            <Card style={{ width: '18rem' }} className='col-6 col-sm-12'>
              <Card.Img variant="top" src={imagenes.img4} />
              <Card.Body>
                <Card.Title>4 ruedas basico</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ver Precio</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='col-6 col-sm-12'>
              <Card.Img variant="top" src={imagenes.img5} />
              <Card.Body>
                <Card.Title>4 ruedas Optimo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Ver Precio</Button>
              </Card.Body>
            </Card>
          </div>
        </div>


      </div>
    </>
  )
}

export default Servicios