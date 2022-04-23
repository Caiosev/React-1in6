import { Photo } from "../types/Photo"
import {storage} from '../libs/firebase'
import {ref,listAll,getDownloadURL,uploadBytes} from 'firebase/storage'


export const getAll = async () =>{
    let list:Photo[] = []
    const imagesFolder = ref(storage,'imgs')
    const photoList = await listAll(imagesFolder)
    for (let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i])
        list.push({
            name:photoList.items[i].name,
            url:photoUrl
        })
    }
    return list
}


export const insert = async (file:File,name:string) =>{

    if(['image/jpeg','image/jpg','image/png'].includes(file.type)){

        let newFile = ref(storage,`imgs/${name}`)
        let upload = await uploadBytes(newFile,file)
        let photourl = await getDownloadURL(upload.ref)
        
        return {
            name: name,
            url: photourl
        } as Photo

    }else{
        return new Error ('Tipo de arquivo nao permitido')
    }
}