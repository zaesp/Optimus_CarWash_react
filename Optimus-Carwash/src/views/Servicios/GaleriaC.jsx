import React from "react";
import "./GaleriaC.css";

import { useState, useEffect } from "react";
import { ObtenerURLImg } from "../../services/GaleriaServices.js";

const GaleriaServicios = () => {

  const [galeria, setGaleria] = useState([])

  useEffect(() => {
    try {
      const ListarGaleria = async () => {
        const galeria = await ObtenerURLImg();
        setGaleria(galeria);
      }
      ListarGaleria();
    } catch (error) {
      console.error(error);
    }
  }, [])


  return (
    <div className="galeria-container full-width">
      {galeria.map(({titulo,descripcion,img, id}) => (
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

/*

  const servicios = [
    {
      id: 1,
      titulo: "Lavado Premium",
      descripcion: "Un lavado completo con atención al detalle.",
      img: "https://via.placeholder.com/300x300",
    },
    {
      id: 2,
      titulo: "Pulido y Encerado",
      descripcion: "Protección y brillo para tu vehículo.",
      img: "https://via.placeholder.com/300x300",
    },
    {
      id: 3,
      titulo: "Desinfección Interior",
      descripcion: "Elimina gérmenes y olores del interior.",
      img: "https://via.placeholder.com/300x300",
    },
    {
      id: 4,
      titulo: "Protección de Pintura",
      descripcion: "Mantén tu pintura como nueva.",
      img: "https://via.placeholder.com/300x300",
    },
    {
      id: 5,
      titulo: "Limpieza de Motor",
      descripcion: "Un motor limpio es un motor eficiente.",
      img: "https://via.placeholder.com/300x300",
    },
    {
      id: 6,
      titulo: "Tratamiento Cerámico",
      descripcion: "Máxima protección y brillo duradero.",
      img: "https://via.placeholder.com/300x300",
    },
    {
      id: 7,
      titulo: "Protección de Pintura",
      descripcion: "Mantén tu pintura como nueva.",
      img: "https://via.placeholder.com/300x300",
    },
    {
      id: 8,
      titulo: "Limpieza de Motor",
      descripcion: "Un motor limpio es un motor eficiente.",
      img: "https://via.placeholder.com/300x300",
    },
    {
      id: 9,
      titulo: "Tratamiento Cerámico",
      descripcion: "Máxima protección y brillo duradero.",
      img: "https://via.placeholder.com/300x300",
    },
  ];

*/