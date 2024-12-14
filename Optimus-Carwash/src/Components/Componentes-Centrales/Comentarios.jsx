import { useState, useEffect } from 'react'
import '../Componentes-Centrales/Comentarios.css'
import { getComentarios, agregarComentario } from '../../services/ComentariosServices.js'



const Comentarios = ({ user }) => {

    const [comentarios, setComentarios] = useState([]); // Estado local para comentarios
    const [nuevoComentario, setNuevoComentario] = useState(""); // Para manejar el input del comentario

    //cargamos comentarios desde el local storage
    useEffect(() => {
        const cargarComentarios = async () => {
            try {
                const respuesta = await getComentarios();
                setComentarios(respuesta);
            } catch (err) {
                console.error("Error al cargar los comentarios de la BD", err);
            }
        };
        cargarComentarios();
    }, []);

    // Función para manejar el envío de un comentario
    const ValidarComentario = async () => {

        const nuevo = {
            id: Date.now(), // Generar ID basado en timestamp
            comentario: nuevoComentario,
            usuarioId: user.id,
            usuario: user.usuario,
            fecha: new Date().toLocaleDateString("es-ES"), // Fecha en formato local
        };

        if (!nuevoComentario.trim()) return; // Validar que no esté vacío
        if (!user) {
            alert("Debes iniciar sesión para comentar.");
            return;
        }

        try {
            await agregarComentario(nuevo);
            setComentarios([nuevo, ...comentarios]); // Agregamos el nuevo comentario de Primero

            setNuevoComentario(""); // Limpiamos el input al enviar el comentario
        } catch (error) {
            console.error("Error a la hora de subir el comentario", error);
        }

    };



    return (
        <>
            <section className="comentarios">
                <h2>Comentarios</h2>

                <div className="comentarios_input">
                    <input
                        type="text"
                        placeholder={user ? "Escribe tu comentario..." : "Inicia sesión para comentar" /*validar si esta registrado*/}
                        className="input_comentario"

                        value={nuevoComentario}
                        onChange={(e) => setNuevoComentario(e.target.value)} // mandamos el valor cuando vea cambios en el input
                        disabled={!user} // Deshabilitar si no hay un usuario logueado
                    />
                    <button className="btn_enviar" onClick={ValidarComentario} disabled={!user} >Enviar</button>
                </div>

                {/*Comentarios Cargados*/}
                <div className="comentarios_container">
                    {comentarios.length > 0 ? (
                        comentarios.map((comentario) => (
                            <div className="comentario" key={comentario.id}>
                                <h3>{comentario.usuario}</h3>
                                <p>{comentario.comentario}</p>
                                <span>{comentario.fecha}</span>
                            </div>
                        ))
                    ) : (
                        <p>No hay comentarios. ¡Sé el primero en comentar!</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Comentarios;

/*
Ejemplos de comentarios




                    <div className="comentario">
                        <h3>Maria López</h3>
                        <p>
                            Muy buena atención, el personal es amable y el lugar está limpio y cómodo.
                        </p>
                        <span>10/12/2024</span>
                    </div>
                    <div className="comentario">
                        <h3>Pedro Sánchez</h3>
                        <p>
                            Realmente satisfecho con el resultado, volveré pronto para otro lavado.
                        </p>
                        <span>08/12/2024</span>
                    </div>
                    <div className="comentario">
                        <h3>Pedro Sánchez</h3>
                        <p>
                            Realmente satisfecho con el resultado, volveré pronto para otro lavado.
                        </p>
                        <span>08/12/2024</span>
                    </div>
                    <div className="comentario">
                        <h3>Pedro Sánchez</h3>
                        <p>
                            Realmente satisfecho con el resultado, volveré pronto para otro lavado.
                        </p>
                        <span>08/12/2024</span>
                    </div>
                    <div className="comentario">
                        <h3>Pedro Sánchez</h3>
                        <p>
                            Realmente satisfecho con el resultado, volveré pronto para otro lavado.
                        </p>
                        <span>08/12/2024</span>
                    </div>
                    <div className="comentario">
                        <h3>Pedro Sánchez</h3>
                        <p>
                            Realmente satisfecho con el resultado, volveré pronto para otro lavado.
                        </p>
                        <span>08/12/2024</span>
                    </div>
*/