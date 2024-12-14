import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsuario } from "../../services/UserServices.js"; // Servicio para obtener el usuario
import Login from "../../Components/Usuarios_Form/Login.jsx"; // Componente del formulario
import Swal from "sweetalert2"; // Para las alertas

const InicioSesion = ({ setUser }) => {
  const [sesion, setSesion] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Para redirecciones

  // Manejar cambios en los campos del formulario
  const handleValues = (ev) => {
    const { name, value } = ev.target;
    setSesion({
      ...sesion,
      [name]: value,
    });
  };


  // Manejador del envío del formulario
  const handleSumit = async (ev) => {
    ev.preventDefault();

    const { email, password } = sesion;

    // Validar campos vacíos
    if (!email || !password) {
      Swal.fire({
        title: "Campos Vacíos",
        text: "Todos los campos son obligatorios",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      
      const usuario = await obtenerUsuario(email, password);   // Validar usuario en la base de datos  
      if (usuario) {
        Swal.fire({
          title: "Bienvenido",
          text: `Hola, ${usuario.usuario}`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });

        setUser(usuario); // Actualiza el estado global del usuario
        navigate(`/`); // Redirigir al home con el ID del usuario  /:id
      } else {
        Swal.fire({
          title: "Error",
          text: "Email o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al validar el usuario",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <Login
      handleSumit={handleSumit}
      handleValues={handleValues}
      sesion={sesion}
    />
  );
};

export default InicioSesion;
