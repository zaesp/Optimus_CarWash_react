import React from 'react'
import imagenes from '../../assets/imagenes.js'
import '../Servicios/Promociones.css'

const Promociones = () => {
  return (
    <>
      <section className="promociones_container">
        <h2 className="title_promocion">Promociones</h2>

        <div className="promociones_row">
          <div className="promocion">
            <h3>Promoción 1</h3>
            <p>¡Aprovecha nuestro lavado premium con descuento esta semana!</p>
            <img src={imagenes.img7} alt="Promoción 1" />
          </div>

          <div className="promocion">
            <h3>Promoción 2</h3>
            <p>Servicio completo de encerado al 50% de descuento.</p>
            <img src={imagenes.img8} alt="Promoción 2" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Promociones