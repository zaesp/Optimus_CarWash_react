import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UsuarioComentarioTable from '../../../Components/TablaControlUsuarios/UsuarioComentarioTable.jsx';
import { ObtenerComentriosID, EliminarComentario } from '../../../services/ComentariosServices.js';
import Swal from 'sweetalert2';
import './LisUserComent.css';

const ListUserComent = () => {
  const { id } = useParams();//obtenido del ver comentarios
  const [comentarios, setComentarios] = useState([]); //no ponemos valores iniciales a ninguno

  useEffect(() => {
    const ComentariosObtenidos = async () => {
      try {
        const comentarios = await ObtenerComentriosID(id);
        setComentarios(comentarios);
      } catch (error) {
        console.log(error);
      }
    };
    ComentariosObtenidos();
  }, [id]);//observas

  const handleEliminar = async (idComentario) => {
    try {
      const confirmacion = await Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (confirmacion.isConfirmed) {
        await EliminarComentario(idComentario);
        setComentarios((prevComentarios) => prevComentarios.filter((c) => c.id !== idComentario));
        Swal.fire("¡Eliminado!", "El comentario ha sido eliminado.", "success");
      }
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
      Swal.fire("Error", "No se pudo eliminar el comentario.", "error");
    }
  };

  return (
    <>
      <h2 className='titulo_comentario'>Listado de Comentarios por Usuario</h2>
      <UsuarioComentarioTable comentarios={comentarios} handleEliminar={handleEliminar} />
    </>
  );
};

export default ListUserComent;
