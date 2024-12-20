    import React from 'react'
    import ReservasTable from '../../../Components/TablaControlReservas/ReservasTable'
    import { useState, useEffect } from 'react'
    import { ObtenerReservas, eliminarReserva } from '../../../services/ReservasServices.js'
    import Swal from 'sweetalert2'

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

        const handleEliminar = async (id) => {
            try {
                const confirmacion = await Swal.fire({
                    title: "¿Estás seguro?",
                    text: "No podrás revertir esta acción",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Sí, eliminar",
                    cancelButtonText: "Cancelar"
                });

                if (confirmacion.isConfirmed) {

                    //eliminamos desde ReservaServices
                    await eliminarReserva(id) //Obtenemos lo opuesto al id a eliminar y actualizamos el setGaleria
                    setReserva((preReservas) => preReservas.filter(item => item.id !== id));
                    Swal.fire("¡Eliminado!", "El elemento ha sido eliminado.", "success");
                }
            } catch (error) {
                console.error("Error al eliminar la Reserva: ", error);
                Swal.fire({
                    title: "Error",
                    text: "No se pudo eliminar la reserva. Inténtalo nuevamente.",
                    icon: "error",
                });
            }
        }
        
        return (
            <>
                <h1 className='text-center'>Reservas</h1>
                <ReservasTable reserva={reserva} handleEliminar={handleEliminar} />
            </>
        )
    }

    export default ListReservas
