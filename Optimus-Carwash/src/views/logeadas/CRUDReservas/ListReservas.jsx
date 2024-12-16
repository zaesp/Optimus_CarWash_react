import React from 'react'
import ReservasTable from '../../../Components/TablaControlReservas/ReservasTable'
import { useState, useEffect } from 'react'
import { ObtenerReservas } from '../../../services/ReservasServices'

const ListReservas = () => {

    const [reserva, setReserva] = useState([]); //es un array de elementos

    useEffect(() => {
        try {
            // Aquí se haría la petición a la API para obtener la galería
            const ReservasObtenidas = async () => {
                const reserva = await ObtenerReservas();
                setReserva(reserva);
            }
            ReservasObtenidas();
        } catch (error) {
            console.error(error);
        }
    }, [])



    return (
        <>
            <h1 className='text-center'>Listado de Reservas</h1>
            <ReservasTable  reserva={reserva}/>
        </>

    )
}

export default ListReservas
