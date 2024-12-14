import React from "react";
import { useParams } from "react-router-dom";

const Perfil = ({ user }) => {
  const { id } = useParams(); // Captura el ID de la URL

  console.log("Usuario recibido:", user);
  console.log("ID de la URL:", id);

  // Validación: Verifica si el ID en la URL coincide con el del usuario logueado
  if (!user || user.id.toString() !== id) {
    return <div>Inicia sesión para ver tu perfil</div>;
  }
  return (
    <div>
      <h1>Bienvenido, {user.usuario}</h1>
      <p>Email: {user.email}</p>
      <p>Tipo de usuario: {user.tipo}</p>
      {/* Agrega más datos según sea necesario */}
    </div>
  );
};

export default Perfil;
