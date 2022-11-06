import { Photo } from "../types/foto";
import {storage} from '../libs/firebase';
import {ref,listAll,getDownloadURL, uploadBytes} from 'firebase/storage';

export const getAll = async () => {
    let list:Photo[] = [];
    
    const imagesfolder = ref(storage,"images");
    const fotolist = await listAll(imagesfolder);

    for(let i in fotolist.items){
        let fotourl = await getDownloadURL(fotolist.items[i])

        list.push({
            name:fotolist.items[i].name,
            url: fotourl,
            message:fotolist.items[i].name,
        });
    }

    return list;
}
export const insert =async (file:File,name:String) => {
    if(['image/jpeg','image/png','image/jpg'].includes(file.type)){
        
        let newfile = ref(storage,`images/${name}`)
        let upload = await uploadBytes(newfile,file);

        let fotourl = await getDownloadURL(upload.ref);

        return{
            name: upload.ref.name,
            url: fotourl
        } as Photo

    }else{
        return new Error("Arquivo não é uma imagem");
    }}