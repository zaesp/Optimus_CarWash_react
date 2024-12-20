import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsuario } from "../../services/UserServices.js"; // Servicio para obtener el usuario
import Login from "../../Components/Usuarios_Form/Login.jsx"; // Componente del formulario
import Swal from "sweetalert2"; // Para las alertas
import Zoom from 'react-reveal/Zoom';

const InicioSesion = ({ setUser }) => {
  const [sesion, setSesion] = useState({
    email: "",
    password: "", // Inicializa como cadena vacía
  });

  const navigate = useNavigate();

  const handleValues = (ev) => {
    const { name, value } = ev.target;
    setSesion({
      ...sesion,
      [name]: value,
    });
  };

  const handleSumit = async (ev) => {
    ev.preventDefault();

    const { email, password } = sesion;

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
      const usuarioObtenido = await obtenerUsuario(email, password);

      if (usuarioObtenido) {
        Swal.fire({
          title: "Bienvenido",
          text: `Hola, ${usuarioObtenido.usuario}`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });

        localStorage.setItem("user", JSON.stringify(usuarioObtenido)); // Almacenamos en el localstorage.
        console.log("Cuenta de usuario", usuarioObtenido);
        setUser(usuarioObtenido);

        navigate(`/`);
      } else {
        Swal.fire({
          title: "Error",
          text: "usuario o contraseña incorrectos",
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
    <Zoom>
      <Login
        handleSumit={handleSumit}
        handleValues={handleValues}
        sesion={sesion}
      />
    </Zoom>
  );
};

export default InicioSesion;
