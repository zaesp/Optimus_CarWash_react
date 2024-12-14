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

export {
    getComentarios,
    agregarComentario
}