import React from "react";
import { useParams } from "react-router-dom";
import './Perfil.scss';
import imagenes from "../../assets/imagenes";

const Perfil = ({ user }) => {
  const { id } = useParams();

  console.log("Usuario recibido:", user);
  console.log("ID de la URL:", id);

  // Validación: Verifica si el ID en la URL coincide con el del usuario logueado
  if (!user || user.id.toString() !== id) {
    return (
      <div className="perfil-container">
        <div className="perfil-error">
          <h2>Acceso Denegado</h2>
          <p>Por favor, inicia sesión para ver tu perfil.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <div className="perfil-header">
          <img
          //Se puede cambiar a un imagen
            src={imagenes.img20} alt="Perfil"
            alt="Imagen de perfil"
            className="perfil-avatar"
          />
          <h1>{user.usuario}</h1>
          <p className="perfil-role">{user.tipo}</p>
        </div>
        <div className="perfil-body">
          <p><i className="fas fa-user"></i> Usuario: {user.usuario}</p>
          <p><i className="fas fa-key"></i> Contraseña: {user.contrasena}</p>
          <p><i className="fas fa-envelope"></i> Email: {user.email}</p>
          <p><i className="fas fa-id-badge"></i> ID: {user.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
