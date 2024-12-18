import React from "react";
import "../TablaControl/GaleriaTable.css";
import { Link } from "react-router-dom";


const GaleriaTable = ({ galeria, handleEliminar }) => {


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
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {galeria.length > 0 ? (
                            galeria.map(({ titulo, descripcion, img, id }) => (
                                <tr key={id}>
                                    <td>{titulo}</td>
                                    <td>{descripcion}</td>
                                    <td>
                                        <img src={img} alt={titulo} style={{
                                            maxWidth: "auto",
                                            height: "30px",
                                            display: "block",
                                            margin: "0 auto"
                                        }} />
                                    </td>
                                    <td className="d-flex justify-content-center align-items-center">
                                        <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(id, img)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No hay imágenes disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GaleriaTable;
