import axios from "axios";
const API_URL = import.meta.env.VITE_ENDPOINT_BASE; //API de json server

//AGREGAR USUARIO NUEVO
const nuevoUsuario = async (usuario) => { //lo que va necesitar (enviaremos usuario)
    try {
        const respuesta = await axios.post(`${API_URL}/usuarios`, usuario);
        console.log(respuesta);
    } catch (error) {
        throw error;
    }
}

//OBTNER USUARIO DE LA BD
const obtenerUsuario = async (email, password) => {
    try {
        const respuesta = await axios.get(`${API_URL}/usuarios`);
        const usuarios = respuesta.data;

        // Buscar el usuario por email y contraseña
        const usuario = usuarios.find((u) => u.email === email && u.password === password);
        return usuario || null; // Devuelve el usuario encontrado o null si no coincide
    } catch (error) {   
        throw new Error("Error al validar el usuario");
    }
};








export {
    nuevoUsuario,
    obtenerUsuario
};

