//manejador de imagen       getStorage, ref, uploadbytes son de la documentacion de firebase
import { storage } from '../../config/connectfb'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { nameFileUUID } from '../../utils/utils';

const uploadFile =async (imagen)=>{
    try {
        //nombre unico para el archivo
        const nameWithExtension= nameFileUUID(imagen.name);
        
        //subiendo archivo a la carpeta
        const fileRef = ref(storage, `CW-galeria/${nameWithExtension}`);

        const resultado=await uploadBytes(fileRef, imagen);
        //const refArchivo=await uploadBytes(refArchivo,imagen);
        
        //URL de la imagen
        const urlArchivo= await getDownloadURL(fileRef); //lo de parentesis en si es lo q retorna
        return urlArchivo;
    }
    catch(error){
        console.log(error);
    }
}

export {
    uploadFile
}