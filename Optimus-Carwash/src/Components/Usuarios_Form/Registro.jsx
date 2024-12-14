
// Registro.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Registro.css";

const Registro = ({ handleValues, handleSumit, user }) => {
  const location = useLocation();
  const [emailFromQuery, setEmailFromQuery] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");
    if (email) {
      setEmailFromQuery(email);
    }
  }, [location.search]);

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form onSubmit={handleSumit}>
        <label>Usuario</label>
        <input
          type="text"
          name="usuario"
          placeholder="Ingresa tu nombre de usuario"
          user={user.usuario}
          onChange={handleValues}
          required
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Ingresa tu email"
          value={emailFromQuery || user.email}
          onChange={(e) => {
            setEmailFromQuery("");
            handleValues(e);
          }}
          required
        />

        <label>Tipo de Usuario</label>
        <select name="tipo" user={user.tipo} onChange={handleValues}>
          <option value="cliente">Cliente</option>
          <option value="administrador">Administrador</option>
        </select>

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder=""
          user={user.password}
          onChange={handleValues}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
      </p>
    </div>
  );
};

export default Registro;
