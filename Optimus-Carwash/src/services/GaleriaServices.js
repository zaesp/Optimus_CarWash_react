import axios from "axios";
const API_URL = import.meta.env.VITE_ENDPOINT_BASE; //API de json server

//Obtener Imagenes
const ObtenerURLImg = async () => {
    //promesas
    try {
        const respuesta = await axios.get(`${API_URL}/Galeria`);

        if (respuesta.status = 200) {
            return respuesta.data;
        }
        throw new Error('Error al obtener datos'); //igual al else
    } catch (error) {
        throw error;
    }

}

//Agregar Imagen

const agregarURLImg = async (direccionImg) => {
    try {
        const respuesta = await axios.post(`${API_URL}/Galeria`, direccionImg);
        console.log(respuesta);
    } catch (error) {
        throw error;
    }
    
}

//eliminar

const eliminarURLImg = async (id) => {
    try {
        const respuesta = await axios.delete(`${API_URL}/Galeria/${id}`);
        console.log(respuesta);
    } catch (error) {
        throw error;
    }

}



export {
    ObtenerURLImg,
    agregarURLImg,
    eliminarURLImg

};