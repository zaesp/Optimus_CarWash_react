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
            <h3>Amigo Universitario</h3>
            <p>¡Aprovecha esta oportunidad! con tu carnet universitario solicite la lavada de su moto a un precio comodo de 8 soles (promocion valida para cada miecoles) </p>
            <img src={imagenes.img7} alt="Promoción 1" />
          </div>

          <div className="promocion">
            <h3>Amigo Taxista</h3>
            <p>Para nuestros amigos trabajadores taxistas, obtenga un lavado de su herramienta de trabajo con el comodo precio de 8 soles, ¡No lo Piense mas y APROVECHA!!!</p>
            <img src={imagenes.img8} alt="Promoción 2" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Promociones