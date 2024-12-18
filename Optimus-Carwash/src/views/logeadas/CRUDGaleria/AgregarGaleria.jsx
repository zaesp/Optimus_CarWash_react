import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GaleriaForm from '../../../Components/TablaControl/GaleriaForm'

import { agregarURLImg } from '../../../services/GaleriaServices.js'
import { uploadFile } from '../../../services/firebase/storageGaleriaService.js'

import Swal from 'sweetalert2'; //npm install sweetalert2

let ImagenGaleria
const AgregarGaleria = () => {

  const [imagen, setImagen] = useState({
    titulo: '',
    descripcion: '',
    img: ''
  });

  const navigate = useNavigate();

  //manejador de imagen
  const hadleImage = (ev) => {
    ImagenGaleria = ev.target.files[0];
    console.log("HadleImage", ImagenGaleria);
  }

  //manejador de valores 
  const handleValues = (ev) => {
    const nombrePropiedad = ev.target.name; //calcular la propiedad del atributo q esta
    const valorPropiedad = ev.target.value; //calcular el valor de la propiedad q esta

    //creamos un nuevo producto con los valores actuales del estado y el nuevo valor de la propiedad
    const nuevoGaleria = {

      ...imagen,//para ya no poner cada atributo, (manten cursos para entender)

      [nombrePropiedad]: valorPropiedad //asignamos el nuevo valor al atributo
    }

    //actualizar los valores del estados
    setImagen(nuevoGaleria);
  };

  //manejador de envio
  const handleSumit = async (ev) => {
    try {
      ev.preventDefault(); //un manejo si se gravo exitosamente

      const { titulo, descripcion } = imagen;
      if (!titulo || !descripcion) {
        Swal.fire({
          title: 'faltan datos para el envio',
          text: 'Todos los campos son obligatorios',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
        return; //para que no continue el codigo, por que sino si enviaba nada xd
      }

      const loading = Swal.fire({
        title: 'Espere un momoento...',
        text: 'Guardando el producto',
        icon: 'info',
        showConfirmButton: false,
        timer: 200000, //cierra automaticamente
        allowOutsideClick: false
      })


      //subiendo la imagen al storage

      const urlImagen = await uploadFile(ImagenGaleria);
      console.log(urlImagen);

      //construyendo el nuevo prouctoc con la url imagen
      let newImagen = {
        ...imagen,
      }

      if (urlImagen) {
        newImagen.img = urlImagen;
      }


      //Crando el nuevo producto con la url de la imagen
      const resultado = await agregarURLImg(newImagen); //cambiamos el values por el nuevo producto de la url osea newProducto
      console.log(resultado);



      // alert("El producto se gravo satisfactoriamente"); //Cambiado por Swal
      loading.close(); //HASTA ACA HACE SU CARGA



      Swal.fire({
        title: 'Imagen agregada con exito en el servidor!',
        text: `La imagen: "${imagen.titulo}" se agregó correctamente`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {
      Swal.fire({
        title: 'Error al subir la imagen',
        text: 'No se pudo subir la imagen, intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return; // Evita continuar si falla la subida
    }
    navigate("/");
  }


  return (
    <>
      <GaleriaForm
        handleSumit={handleSumit}
        handleValues={handleValues}
        hadleImage={hadleImage}
        imagen={imagen}
        title="Agregar Imagens"
      />
    </>
  )
}

export default AgregarGaleria