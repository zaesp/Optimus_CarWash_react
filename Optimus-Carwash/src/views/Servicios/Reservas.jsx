import React, { useState } from "react";
import './Reservas.css';
import imagenes from "../../assets/imagenes";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    vehiculo: "",
    servicio: "",
    fecha: "",
    hora: "",
    notas: "",
  });

  const [error, setError] = useState("");

  const servicios = ["Lavado Básico", "Pulido", "Lavado Completo", "Desinfección"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.servicio || !formData.fecha || !formData.hora) {
      setError("Por favor, complete todos los campos obligatorios.");
      return;
    }
    setError("");
    console.log("Datos enviados:", formData);
    alert("Reserva realizada con éxito. ¡Gracias!");
  };

  return (
    <div className="reservationFormPage">
      <div className="reservationFormContainer">
        <div className="formHeader">
          <img src={imagenes.img3} alt="Logo" className="formImage" />
        </div>
        <h2 className="formTitle">Reserva tu Servicio</h2>
        <form onSubmit={handleSubmit} className="reservationForm">
          {error && <p className="errorMessage">{error}</p>}
          <div className="formColumn">
            <div className="formGroup">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Ingresa tu teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="vehiculo">Tipo de vehículo</label>
              <select id="vehiculo" name="vehiculo" value={formData.vehiculo} onChange={handleChange}>
                <option value="">Selecciona una opción</option>
                <option value="Auto">Auto</option>
                <option value="Moto">Moto</option>
                <option value="Camioneta">Camioneta</option>
              </select>
            </div>
          </div>

          <div className="formColumn">
            <div className="formGroup">
              <label htmlFor="servicio">Servicio</label>
              <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange}>
                <option value="">Selecciona un servicio</option>
                {servicios.map((servicio, index) => (
                  <option key={index} value={servicio}>
                    {servicio}
                  </option>
                ))}
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="fecha">Fecha</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="hora">Hora</label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="notas">Notas adicionales</label>
              <textarea
                id="notas"
                name="notas"
                placeholder="Agrega comentarios o instrucciones (opcional)"
                value={formData.notas}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="submitButton2">
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
