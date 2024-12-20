import axios from "axios";
const API_URL = import.meta.env.VITE_ENDPOINT_BASE;

//todos los comentarios
const getComentarios = async () => {
    try {
        const respuesta = await axios.get(`${API_URL}/Comentarios`);
        return respuesta.data; //nos llega todo los comentariso
    } catch (ev) {
        console.error("Error al obtener los comentarios", ev);
        throw ev;
    }
}


//nuevo comentario
const agregarComentario = async (comentario) => {
    try {
        const respuesta = await axios.post(`${API_URL}/Comentarios`, comentario);
        console.log(respuesta); //no muestra nada
    } catch (e) {
        console.error("Error al guardar el comentario", e);
        throw e;
    }
}

//OBTNER Comentario con id ususrio
const ObtenerComentriosID = async (idUser) => {
    try {
        const respuesta = await axios.get(`${API_URL}/Comentarios`);
        const Comentarios = respuesta.data;

        // Filtrar comentarios por idUser
        const ComentariosObtenidos = Comentarios.filter((c) => c.usuarioId === idUser); //devuelve todo, no como el otro que devuelve solo uno
        return ComentariosObtenidos; // Devuelve todos los comentarios del usuario
    } catch (error) {
        console.error("Error al obtener comentarios del usuario:", error);
        throw error;
    }
};


//eliminar comentario
const EliminarComentario = async (idComentario) => {
    try {
        const respuesta = await axios.delete(`${API_URL}/Comentarios/${idComentario}`);
        return respuesta.data;
    } catch (error) {
        console.log("Error al eliminar los comentarios: ",error);
        throw error;
    }
};

export {
    getComentarios,
    agregarComentario,
    ObtenerComentriosID,
    EliminarComentario
}