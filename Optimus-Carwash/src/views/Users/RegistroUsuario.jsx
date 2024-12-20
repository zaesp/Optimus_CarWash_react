//vista principal de Registrarse nuevoUsuario
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {nuevoUsuario} from '../../services/UserServices.js'
import Registro from '../../Components/Usuarios_Form/Registro'

import Swal from 'sweetalert2'; //npm install sweetalert2 (Alertas)


const RegistroUsuario = () => {

    //Estado inicial de usuarios
    const [user, setUser] = useState({
        usuario: "", 
        email: "", 
        tipo: "",
        password: "", 
    });

    const navigate = useNavigate();


    //manejador de valores  (obtener los valores que se ingresan)
    const handleValues = (ev) => {

        const nombrePropiedad = ev.target.name; //calcular la propiedad del atributo q esta
        const valorPropiedad = ev.target.value; //calcular el valor de la propiedad q esta

        //creamos un nuevo producto con los valores actuales y el nuevo valor de la propiedad para enviar al estado.
        const nuevoUsuario = {

            ...user,

            [nombrePropiedad]: valorPropiedad //asignamos el nuevo valor al atributo
        }

        //actualizar los valores del estados
        setUser(nuevoUsuario);
    };


    const handleSumit = async (ev) => {
        ev.preventDefault(); //un manejo si se gravo exitosamente

        const { usuario, email, tipo, password } = user;//variable con atributos


        //verificacion de datos
        if (!usuario || !email || !tipo || !password) {
            Swal.fire({
                title: 'Faltan para registrarse, verifique el formulario',
                text: 'Todos los campos son obligatorios',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            return; //para que no continue el codigo, por que sino si enviaba nada xd
        }

        const loading =Swal.fire({
            title: 'Espere un momento...',
            text: 'Creando Usuario',
            icon: 'info',
            showConfirmButton: false,
            timer: 2000, //cierra automaticamente
            allowOutsideClick: false
        })

        //traemos el user con todos los datos
        let newUser = {
            ...user,
        }



        //Crando el nuevo usuario
        const resultado = await nuevoUsuario(newUser); 
        console.log(resultado);

        // alert("El producto se gravo satisfactoriamente"); //Cambiado por Swal
        loading.close(); //HASTA ACA HACE SU CARGA


        Swal.fire({
            title: 'Usuario Registrado!',
            text: `El usuario: "${user.usuario}" se registro correctamente`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        navigate("/"); 

    }

    return (
        <>
            <Registro 
                        handleSumit={handleSumit} 
                        handleValues={handleValues}
                        user={user}
            />
        </>
    )
}

export default RegistroUsuario