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

//OBTNER USUARIO con user y password
const obtenerUsuario = async (usuario, password) => {
    try {
        const respuesta = await axios.get(`${API_URL}/usuarios`);
        const usuarios = respuesta.data;

        // Buscar el usuario por email y contraseña
        const usuarioObtenido = usuarios.find((u) => u.usuario === usuario && u.password === password);
        return usuarioObtenido || null; // Devuelve el usuario encontrado o null si no coincide
    } catch (error) {
        throw new Error("Error al validar el usuario");
    }
};

const obtenerTodosUsuarios = async () => {
    try {
        const respuesta = await axios.get(`${API_URL}/usuarios`);
        return respuesta.data;
    } catch (error) {
        throw new Error("Error al validar el usuario");
    }
};



const eliminarusuario = async (id) => {
    try {
        const respuesta = await axios.delete(`${API_URL}/usuarios/${id}`);
        return respuesta.data;
    } catch (error) {
        throw error;
    }

}






export {
    nuevoUsuario,
    obtenerUsuario,
    obtenerTodosUsuarios,
    eliminarusuario
};

