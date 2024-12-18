import React from 'react'
import ReservasTable from '../../../Components/TablaControlReservas/ReservasTable'
import { useState, useEffect } from 'react'
import { obtenerUsuario, eliminarusuario } from '../../../services/UserServices.js'
import Swal from 'sweetalert2'

const ListUsuario = () => {

    const [usuario, setUsuario] = useState([]); //es un array de elementos

    useEffect(() => {
        try {
            // Aquí se haría la petición a la API para obtener la galería
            const UsuariosLogueados = async () => {
                const usuarios = await obtenerUsuario();
                setUsuario(usuarios);
            }
            UsuariosLogueados();
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
                await eliminarusuario(id)                //Obtenemos lo opuesto al id a eliminar y actualizamos el setGaleria
                setUsuario((preUsuarios) => preUsuarios.filter(item => item.id !== id));
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
            <h1 className='text-center'>Listado de Reservas</h1>
            <ReservasTable reserva={usuario} handleEliminar={handleEliminar} />
        </>
    )
}

export default ListUsuario
