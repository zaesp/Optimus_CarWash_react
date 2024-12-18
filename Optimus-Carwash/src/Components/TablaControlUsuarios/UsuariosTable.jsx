import React from "react";
import "../TablaControl/GaleriaTable.css"
import { Link } from "react-router-dom";


const UsuariosTable = ({ usuario, handleEliminar }) => {


    return (
        <div className="table-wrapper">

            <div className="table-header">
                <h2>Nuestros Usuarios</h2>
            </div>

            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>usuario</th>
                            <th>email</th>
                            <th>tipo</th>
                            <th>opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuario.length > 0 ? (
                            usuario.map(({ usuario, email, tipo, id }) => (
                                <tr key={id}>
                                    <td>{usuario}</td>
                                    <td>{email}</td>
                                    <td>{tipo}</td>

                                    <td className="d-flex justify-content-center align-items-center gap-2">
                                        <Link className="btn btn-primary btn-sm" to={`/`}>{/* /${id} para ver */}
                                            <i class="fa-solid fa-eye"></i>{/*libreria de font awesome icons*/}
                                        </Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(id)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No hay contenido disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsuariosTable;
