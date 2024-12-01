import React from 'react'
import imagenes from '../../assets/imagenes.js'
import '../Servicios/Promociones.css'

const Promociones = () => {
  return (
    <>
      <section className='container'>
        <h2 className='title_Promocion'>Promociones</h2>

        <div className="row justify-content-around promociones ">
          
          <div className="promocion col-lg-6 col-sm-12">
            <h3 >Promoción 1</h3>
            <p>Descripción de la promoción 1</p>
            <img src={imagenes.img7} alt="" />
          </div>
          
          <div className="promocion col-lg-6 col-sm-12">
            <h3>Promoción 2</h3>
            <p>Descripción de la promoción 2</p>
            <img src={imagenes.img8} alt="" />
          </div>
        
        </div>
      </section>
    </>
  )
}

export default Promociones