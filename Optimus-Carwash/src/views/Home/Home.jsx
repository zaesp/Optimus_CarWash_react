import imagenes from '../../assets/imagenes'
import CarouselComponent from '../../Components/Componentes-Centrales/Carrousel'

const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <section>
        <div className="presentacion d-flex">
          <div className="informacion">
            <h1>Optimus Carwash</h1> <span></span>
            <p>
              Somos una empresa, que brinda el servicio de lavado de vehículos menores y mayores, con una infraestructura única en el sector, con insumos de calidad y máquinas profesionales, pero sobre todo un servicio óptimo.
              <br />
              Trabajamos con los mejores pulimentos, ceras y selladores de pintura del mercado, para asi poder garantizara nuestros clientesel mejor servicio y satisfaccion posible.Con nosotros podras "Transformar" un vehiculo sucio, desgastado y despreocupado, a uno totalmente limpio, brillante y resulciente.
              <br />
              ¡tendrás una experiencia diferente!
            </p>
          </div>
          <div className="imagenInfo">
            <img src={imagenes.img3} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="servicios_info">
          <h2>Nuestros Servicios</h2>
          <p>Con la comodidad que te mereces te ofrecemos una sala de espera, Smart tc, aire acondicionado, servicios higienicos y Wifi 6</p>
          <p>Tenemos servicios de dos ruedas desde S/.10
            <br />
            y servicios de tres ruedas desde S/.15
            <br />
            Y servicios de cuatro ruedas desde S/.30
          </p>
        </div>
        <div className="servicios_img">
          <img src={imagenes.img13} alt="" />
        </div>
      </section>

      <section>
        <div className="horario_info">
          <h2>Horario de Atención</h2>
          <p>
            Lunes a Sabado: 9:00am a 6:00pm
            <br />
            Domingos: 9:00am a 4:30pm
          </p>
        </div>
        <div className="horario_img">
          <img src={imagenes.img12} alt="OptimusCarwash" />
        </div>
      </section>


    </div>
  )
}

export default Home