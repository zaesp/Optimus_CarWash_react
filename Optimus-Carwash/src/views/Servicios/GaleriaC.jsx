import React, { useState, useEffect } from "react";
import "./GaleriaC.css";
import { ObtenerURLImg } from "../../services/GaleriaServices.js";
import imagenes from "../../assets/imagenes.js";

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

      {/* Imágenes adicionales estáticas */}
      <div className="card">
        <img src={imagenes.img21} alt="Imagen estática 1" />
        <div className="overlay">
          <h3>Proceso de lImpieza</h3>
          <p>Contamos con las ultimas tecnologias de limpieza</p>
        </div>
      </div>
      <div className="card">
        <img src={imagenes.img22} alt="Imagen estática 2" />
        <div className="overlay">
          <h3>Proceso de secado</h3>
          <p>El Gran Matias xD</p>
        </div>
      </div>
      <div className="card">
        <img src={imagenes.img23} alt="Imagen estática 2" />
        <div className="overlay">
          <h3>Equipo en Accion parte2</h3>
          <p>Proceso de hechado de champoo</p>
        </div>
      </div>
      <div className="card">
        <img src={imagenes.img24} alt="Imagen estática 2" />
        <div className="overlay">
          <h3>Equipo en Accion</h3>
          <p>Proceso de Enjuage</p>
        </div>
      </div>
      <div className="card">
        <img src={imagenes.img25} alt="Imagen estática 2" />
        <div className="overlay">
          <h3>Lavado de Moto Optimo</h3>
          <p>Proceso de Lavado</p>
        </div>
      </div>
      <div className="card">
        <img src={imagenes.img26} alt="Imagen estática 2" />
        <div className="overlay">
          <h3>Equipo</h3>
          <p>Siempre unidos, lograremos mas cosas</p>
        </div>
      </div>
      <div className="card">
        <img src={imagenes.img27} alt="Imagen estática 2" />
        <div className="overlay">
          <h3>Cliente Satisfecho</h3>
          <p>Al servicio de la Ciudadania</p>
        </div>
      </div>
      <div className="card">
        <img src={imagenes.img28} alt="Imagen estática 2" />
        <div className="overlay">
          <h3>Personal de Equipo de Trabajo</h3>
          <p>Equipazo</p>
        </div>
      </div>
      <div className="card">
        <img src={imagenes.img29} alt="Imagen estática 2" />
        <div className="overlay">
          <h3>Infraestructura a tu comodidad</h3>
          <p>Por que queremos que esten bien comodo</p>
        </div>
      </div>
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