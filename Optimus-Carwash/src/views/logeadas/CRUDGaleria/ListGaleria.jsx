import React from 'react'
import GaleriaTable from '../../../Components/TablaControl/GaleriaTable.jsx'

import { useState, useEffect } from 'react'
import { ObtenerURLImg, eliminarURLImg } from '../../../services/GaleriaServices.js'//funciones del GaleriaService
import Swal from 'sweetalert2'
import {deleteFile} from '../../../services/firebase/storageGaleriaService.js'
import './ListGaleria.css';

const ListGaleria = () => {

    const [galeria, setGaleria] = useState([])

    useEffect(() => {
        try {
            // Aquí se haría la petición a la API para obtener la galería
            const ListarGaleria = async () => {
                const galeria = await ObtenerURLImg();
                setGaleria(galeria);
            }
            ListarGaleria();
        } catch (error) {
            console.error(error);
        }
    }, [])

    const handleEliminar = async (id, img) => {
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

                //eliminamos desde galeriaServices

                await eliminarURLImg(id);
                await deleteFile(img);

                //Obtenemos lo opuesto al id a eliminar y actualizamos el setGaleria
                setGaleria((prevGaleria) => prevGaleria.filter(item => item.id !== id));
                Swal.fire("¡Eliminado!", "El elemento ha sido eliminado.", "success");
            }
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            Swal.fire({
                title: "Error",
                text: "No se pudo eliminar el producto. Inténtalo nuevamente.",
                icon: "error",
            });
        }
    }


    return (
        <>
            <h1 className='text-center'>Galeria</h1>
            <GaleriaTable galeria={galeria} handleEliminar={handleEliminar} />
        </>
    )
}

export default ListGaleria