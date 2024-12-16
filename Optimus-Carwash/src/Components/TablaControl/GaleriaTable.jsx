import React from "react";
import "../TablaControl/GaleriaTable.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';



const GaleriaTable = ({ galeria, setGaleria }) => {
    return (
        <div className="table-wrapper">

            <div className="table-header">
                <h2>Galería de Servicios</h2>
                <Link className="btn-add" to={"/agregarGaleria"}>
                    Añadir Nuevo
                </Link>
            </div>

            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>URL Imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {galeria.map(({ titulo, descripcion, img, id }) => (
                            <tr key={id} >
                                <td>{titulo}</td>
                                <td>{descripcion}</td>
                                <td >
                                    <img src={img} alt={titulo} style={{
                                        maxWidth: "auto",
                                        height: "30px",
                                        display: "block",
                                        margin: "0 auto"
                                    }} />

                                    {console.log(img)}
                                </td>
                                <td className="d-flex justify-content-center align-items-center gap-2">
                                    <Link className="btn btn-primary btn-sm" to={`/editarproducto/${id}`}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(id)}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GaleriaTable;
