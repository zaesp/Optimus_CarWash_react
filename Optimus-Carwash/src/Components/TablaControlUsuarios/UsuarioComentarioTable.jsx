import React from "react";
import "../TablaControl/GaleriaTable.css";

const UsuarioComentarioTable = ({ comentarios, handleEliminar }) => {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <h2>Comentarios del usuario: </h2>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>IdComentario</th>
              <th>Comentario</th>
              <th>Fecha</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {comentarios.length > 0 ? (
              comentarios.map(({ id, comentario, usuario, fecha }) => (
                <tr key={id}>
                  <td>{usuario}</td>
                  <td>{id}</td>
                  <td>{comentario}</td>
                  <td>{fecha}</td>
                  <td className="d-flex justify-content-center align-items-center gap-2">
                    <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">El usuario No realizo algun comentario</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsuarioComentarioTable;
