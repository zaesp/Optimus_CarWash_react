import React from 'react'
import GaleriaTable from '../../../Components/TablaControl/GaleriaTable.jsx'

import { useState,useEffect } from 'react'
import {ObtenerURLImg} from '../../../services/GaleriaServices.js' //necesario para obtener la URL de la imagen


const ListGaleria = () => {

    const [galeria, setGaleria] = useState([])

    useEffect(() => {
        try {
            // Aquí se haría la petición a la API para obtener la galería
            const ListarGaleria = async () =>{
                const galeria = await ObtenerURLImg();
                setGaleria(galeria);
            }
            ListarGaleria();
        } catch (error) {
                console.error(error);
        }
    }, [])



    return (
        <>
        <h1 className='text-center'>Listado de Galerias</h1>
            <GaleriaTable galeria={galeria} setGaleria={setGaleria} />
        </>
    )
}

export default ListGaleria