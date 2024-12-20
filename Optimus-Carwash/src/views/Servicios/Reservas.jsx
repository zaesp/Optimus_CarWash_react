import React, { useState } from "react";
import './Reservas.scss';
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
    setError(""); // Limpiar mensaje de error si no hay problemas
    console.log("Datos enviados:", formData);
    alert("Reserva realizada con éxito. ¡Gracias!");
  };
  

  return (
    <div className="reservationFormPage2">
      <div className="reservationFormContainer2">
        <div className="formHeader2">
          <img src={imagenes.img3} alt="Logo" className="formImage2" />
        </div>
        <h2 className="formTitle2">Reserva tu Servicio</h2>
        <form onSubmit={handleSubmit} className="reservationForm2">
  <p className={`errorMessage2 ${error ? "visible" : ""}`}>{error}</p>
  <div className="formColumnsWrapper2">
    <div className="formColumn2">
      {/* Columna izquierda */}
      <div className="formGroup2">
        <label className="label4" htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup2">
        <label className="label4" htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup2">
        <label className="label4" htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Ingresa tu teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup2">
        <label className="label4" htmlFor="vehiculo">Tipo de vehículo</label>
        <select id="vehiculo" name="vehiculo" value={formData.vehiculo} onChange={handleChange}>
          <option value="">Selecciona una opción</option>
          <option value="Auto">Auto</option>
          <option value="Moto">Moto</option>
          <option value="Camioneta">Camioneta</option>
        </select>
      </div>
    </div>

    <div className="formColumn2">
      {/* Columna derecha */}
      <div className="formGroup2">
        <label className="label4" htmlFor="servicio">Servicio</label>
        <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange}>
          <option value="">Selecciona un servicio</option>
          {servicios.map((servicio, index) => (
            <option key={index} value={servicio}>
              {servicio}
            </option>
          ))}
        </select>
      </div>
      <div className="formGroup2">
        <label className="label4" htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup2">
        <label className="label4" htmlFor="hora">Hora</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup2">
        <label className="label4" htmlFor="notas">Notas adicionales</label>
        <textarea
          id="notas"
          name="notas"
          placeholder="Agrega comentarios o instrucciones (opcional)"
          value={formData.notas}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>

  <button type="submit" className="submitButton3">
    Reservar
  </button>
</form>

      </div>
    </div>
  );
};

export default ReservationForm;