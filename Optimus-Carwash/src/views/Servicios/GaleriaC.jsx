import React, { useState, useEffect } from "react";
import "./GaleriaC.css";
import { ObtenerURLImg } from "../../services/GaleriaServices.js";

const GaleriaServicios = () => {
  const [galeria, setGaleria] = useState([]);

  // Cargar la galería de imágenes desde el servicio
  useEffect(() => {
    const ListarGaleria = async () => {
      try {
        const data = await ObtenerURLImg();
        setGaleria(data);
      } catch (error) {
        console.error("Error al obtener la galería:", error);
      }
    };
    ListarGaleria();
  }, []);

  return (
    <div className="galeria-container full-width">
      {galeria.map(({ titulo, descripcion, img, id }) => (
        <div className="card" key={id}>
          <img src={img} alt={titulo} />
          <div className="overlay">
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default GaleriaServicios;

