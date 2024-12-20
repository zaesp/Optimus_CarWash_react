import React from "react";
import "../TablaControlReservas/ReservasTable.css";
import { Link } from "react-router-dom";



const ReservasTable = ({ reserva, handleEliminar }) => {
    return (
        <div className="table-wrapper">

            <div className="table-header">
                <h2 className="title" >Tabla de Reservas</h2>
                <Link className="btn-add" to={"/reservas"}>
                    Añadir Nuevo
                </Link>
            </div>

            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                            <th>Vehiculo</th>
                            <th>Servicio</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Notas</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reserva.length > 0 ? ( //nombre, email, telefono, vehiculo, servicio, fecha, hora, notas
                            reserva.map(({ nombre, email, telefono, vehiculo, servicio, fecha, hora, notas, id }) => (
                                <tr key={id}>
                                    <td>{nombre}</td>
                                    <td>{email}</td>
                                    <td>{telefono}</td>
                                    <td>{vehiculo}</td>
                                    <td>{servicio}</td>
                                    <td>{fecha}</td>
                                    <td>{hora}</td>
                                    <td>{notas}</td>

                                    <td>
                                        <button className="btn btn-danger btn-sm-8 icon" onClick={() => handleEliminar(id)}  >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">No hay contenido disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReservasTable;
