//manejador de imagen       getStorage, ref, uploadbytes son de la documentacion de firebase
import { storage } from '../../config/connectfb'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { nameFileUUID } from '../../utils/utils';

const uploadFile =async (imagen)=>{
    try {
        
        const nameWithExtension= nameFileUUID(imagen.name);
        const restAchico= ref(storage, nameWithExtension);

        const resultado=await uploadBytes(restAchico, imagen);
        //const refArchivo=await uploadBytes(refArchivo,imagen);
        
        //URL de la imagen
        const urlArchivo= await getDownloadURL(restAchico); //lo de parentesis en si es lo q retorna
        return urlArchivo;
    }
    catch(error){
        console.log(error);
    }
}

export {
    uploadFile
}