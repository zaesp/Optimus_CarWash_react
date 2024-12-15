import React from "react";
import "./GaleriaC.css";

const GaleriaServicios = () => {
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

  return (
    <div className="galeria-container full-width">
      {servicios.map((servicio) => (
        <div className="card" key={servicio.id}>
          <img src={servicio.img} alt={servicio.titulo} />
          <div className="overlay">
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaleriaServicios;
