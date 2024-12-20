import React from "react";
import "./Login.css";

const Login = ({ handleValues, handleSumit, sesion }) => {
  return (
    <div className="login-container2">
      <h2 className="h3">Iniciar Sesión</h2>

      <form className="form2" onSubmit={handleSumit}>
        <label className="label1">email</label>
        <input
          type="email"
          name="email" // Importante para que handleValues pueda actualizar el estado
          placeholder="Ingresa tu correo de usuario"
          value={sesion.email || ""} // Asegura que se maneje correctamente el valor inicial
          onChange={handleValues}
          required
        />

        <label className="label1">Contraseña</label>
        <input
          type="password"
          name="password" // Importante para que handleValues pueda actualizar el estado
          placeholder="Ingresa tu contraseña"
          value={sesion.password || ""} 
          onChange={handleValues}
          required
        />

        <button className="button3" type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default Login;