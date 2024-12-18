import axios from "axios";
const API_URL = import.meta.env.VITE_ENDPOINT_BASE; //API de json server

//AGREGAR Reservanueva
const nuevaReserva = async (reserva) => { //lo que va necesitar (enviaremos usuario)
    try {
        const respuesta = await axios.post(`${API_URL}/reservas`, reserva);
        console.log(respuesta);
    } catch (error) {
        throw error;
    }
}

//todas las reservas
const ObtenerReservas = async () => {
    try {
        const respuesta = await axios.get(`${API_URL}/reservas`);
        return respuesta.data; //nos llega todas las reservas
    } catch (ev) {
        console.error("Error al obtener las Reservas", ev);
        throw ev;
    }
}

const eliminarReserva = async (id) => {
    try {
        const respuesta = await axios.delete(`${API_URL}/reservas/${id}`);
        return respuesta.data;
        console.log(respuesta);
    } catch (error) {
        throw error;
    }

}


export {
    nuevaReserva,
    ObtenerReservas,
    eliminarReserva
};

