import React from 'react';
import './GaleriaForm.css';

const GaleriaForm = ({ handleSumit, handleValues, hadleImage, imagen, title }) => {
  return (
    <div className="galeria-form-container">

      <h2 className="form-title">{title}</h2>

      <form onSubmit={handleSumit} className="galeria-form">
        {/* Título de imagen */}
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-input"
            placeholder="Ingresa el título de la imagen"

            name="titulo"
            value={imagen.titulo}
            onChange={handleValues}
            required
          />
        </div>

        {/* Descripción de la imagen */}
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <input
            type="text"
            id="descripcion"
            className="form-input"
            placeholder="Ingresa una descripción"

            name="descripcion"
            value={imagen.descripcion}
            onChange={handleValues}
            required
          />
        </div>

        {/* Imagen para la galeria */}
        <div className="form-group">
          <label htmlFor="foto">Imagen</label>
          <input
            type="file"
            accept="image/*" 
            id="foto"
            className="form-input-file"

            onChange={hadleImage}
            required
          />
        </div>

        <button type="submit" className="form-submit-btn">Subir</button>
      </form>
    </div>
  );
};

export default GaleriaForm;