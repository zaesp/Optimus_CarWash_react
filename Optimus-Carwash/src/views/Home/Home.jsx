import imagenes from '../../assets/imagenes'
import CarouselComponent from '../../Components/Componentes-Centrales/Carrousel.jsx'
import Comentarios  from '../../Components/Componentes-Centrales/Comentarios.jsx' //cuando se exporta con defaul no es necesario llaves, pero si es directamente en la funcion si lo es

import '../Home/home.css'

const Home = ({ user }) => {
  return (
    <div className='cuerpo'>
      <CarouselComponent />
      <section className='Empresa'>
        
        <div className="presentacion">


          <div className="informacion">
            <h2>Optimus Carwash</h2> <span></span>
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

      <section className="servicios">
        <div className="servicios_info">
          <h2>Nuestros Servicios</h2>
          <p>
            Con la comodidad que te mereces, te ofrecemos una sala de espera con Smart TV, aire acondicionado,
            servicios higiénicos y Wifi 6 de alta velocidad.
          </p>
          <p>
            - Servicios de dos ruedas desde <strong>S/.10</strong><br />
            - Servicios de tres ruedas desde <strong>S/.15</strong><br />
            - Servicios de cuatro ruedas desde <strong>S/.30</strong>
          </p>

          <button className='btn_Servicios'>
            Ver todos nuestros servicios
          </button>

        </div>
        <div className="servicios_img">
          <img src={imagenes.img13} alt="Nuestros servicios" />
        </div>
      </section>

      <Comentarios user={user}/>

    </div>
  )
}

export default Home