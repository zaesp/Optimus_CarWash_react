import React from 'react'
import ReservasForm from "../../../Components/TablaControlReservas/ReservasForm.jsx"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { nuevaReserva } from '../../../services/ReservasServices.js'


const CreateReservas = ({ user }) => {
    const [reserva, setReserva] = useState({
        nombre: user?.usuario || "",
        email: user?.email || "",
        telefono: "",
        vehiculo: "",
        servicio: "",
        fecha: "",
        hora: "",
        notas: "",
    });

    const navigate = useNavigate();

    const handleValues = (ev) => {
        const NombrePropiedad = ev.target.name;
        const ValorPropiedad = ev.target.value;

        const nuevaReserva = {
            ...reserva,
            [NombrePropiedad]: ValorPropiedad
        }

        setReserva(nuevaReserva);
    }

    const handleSubmit = async (ev) => {
        try {
            ev.preventDefault();

            const { nombre, email, telefono, vehiculo, servicio, fecha, hora, notas } = reserva;

            if (user) {
                if (!nombre || !email || !telefono || !vehiculo || !servicio || !fecha || !hora || !notas) {
                    Swal.fire({
                        title: 'Error',
                        text: 'Todos los campos son obligatorios',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                    return;
                }
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Por favor, inicia sesión o regístrate para continuar',
                    icon: 'warning',
                    confirmButtonText: 'Registrarse',
                    preConfirm: () => { //al dar confirmacion redirigiremos
                        navigate("/login");
                    }
                });
                return;
            }


            const loading = Swal.fire({
                title: 'Espere un momoento...',
                text: 'Guardando el producto',
                icon: 'info',
                showConfirmButton: false,
                timer: 2000, //cierra automaticamente
                allowOutsideClick: false
            })

            let newReserva = {
                ...reserva,
            }

            const resultado = await nuevaReserva(newReserva); //cambiamos el values por el nuevo producto de la url osea newProducto
            console.log(resultado);


            loading.close();

            Swal.fire({
                title: 'Reserva Registrada!',
                text: `La reserva de : ${reserva.nombre} se registro correctamente`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });

        } catch (error) {
            Swal.fire({
                title: 'Error la mandar la reserva',
                text: 'No se pudo realizar su Reserva',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return; // Evita continuar si falla la subida
        }
        navigate("/");
    }


    return (
        <>
            <ReservasForm
                handleSubmit={handleSubmit}
                handleValues={handleValues}
                reserva={reserva}
                user={user}
                title="Reserva tu servicios"
            />
        </>
    )
}

export default CreateReservas