import React from "react";
import "./Login.css";

const Login = ({ handleValues, handleSumit, sesion }) => {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleSumit}>
        <label>Email</label>
        <input
          type="email"
          name="email" // Importante para que handleValues pueda actualizar el estado
          placeholder="Ingresa tu email"
          value={sesion.email}
          onChange={handleValues}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="password" // Importante para que handleValues pueda actualizar el estado
          placeholder="Ingresa tu contraseña"
          value={sesion.password}
          onChange={handleValues}
          required
        />

        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default Login;
