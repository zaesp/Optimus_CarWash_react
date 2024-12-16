//manejador de imagen       getStorage, ref, uploadbytes son de la documentacion de firebase
import { storage } from '../../config/connectfb'
import { ref, uploadBytes, getDownloadURL, deleteObject  } from "firebase/storage";

import { nameFileUUID } from '../../utils/utils';

//de la imagen se sube a firebase y obtendremos la URL
const uploadFile = async (imagen) => {
    try {
        //nombre unico para el archivo
        const nameWithExtension = nameFileUUID(imagen.name);

        //subiendo archivo a la carpeta
        const fileRef = ref(storage, `CW-galeria/${nameWithExtension}`);

        const resultado = await uploadBytes(fileRef, imagen);

        //URL de la imagen
        const urlArchivo = await getDownloadURL(fileRef); //lo de parentesis en si es lo q retorna
        return urlArchivo;
    }
    catch (error) {
        console.log(error);
    }
}

// Eliminar una imagen existente
const deleteFile = async (urlImagen) => {
    try {
        // Crear referencia a partir de la URL
        const filePath = decodeURIComponent(urlImagen.split("/o/")[1].split("?")[0]); // Extrae el path del archivo
        console.log(filePath);

        const fileRef = ref(storage, filePath);

        // Eliminar el archivo
        await deleteObject(fileRef);
        console.log("Imagen eliminada con éxito");
    } catch (error) {
        console.error("Error al eliminar la imagen:", error);
        throw error;
    }
};

// Modificar una imagen existente (eliminar + subir nueva)
const modifyFile = async (antiguaURL, NuevaImageFile) => {
    try {
        // Eliminar imagen antigua
        await deleteFile(antiguaURL);

        // Subir nueva imagen
        const newImageUrl = await uploadFile(NuevaImageFile);

        return newImageUrl; // Retorna la URL de la nueva imagen
    } catch (error) {
        console.error("Error al modificar la imagen:", error);
        throw error;
    }
};

export {
    uploadFile,
    deleteFile,
    modifyFile
}