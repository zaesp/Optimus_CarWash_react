import React from "react";
import "./Registro.css";

const Registro = ({ handleValues, handleSumit, user }) => {
  return (
    <div className="registro-container2">
      <h2 className="h2">Registro</h2>
      <form className="form" onSubmit={handleSumit}>
        <label className="label">Usuario</label>
        <input
          type="text"
          name="usuario"
          placeholder="Ingresa tu nombre de usuario"
          value={user.usuario}
          onChange={handleValues}
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={user.email}
          onChange={handleValues}
          required
        />

        <label className="label">Tipo de Usuario</label>
        <select
          className="select"
          name="tipo"
          value={user.tipo}
          onChange={handleValues}
          required
        >
          <option value="">Selecciona un tipo</option>
          <option value="cliente">Cliente</option>
          <option value="administrador">Administrador</option>
        </select>

        <label className="label">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={user.password}
          onChange={handleValues}
          required
        />

        <button className="button" type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
      </p>
    </div>
  );
};

export default Registro;
