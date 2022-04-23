import * as S from './app.style'
import * as P from './services/photos'
import { useState,useEffect, FormEvent } from 'react'
import {Photo} from './types/Photo'
import {PhotoItem} from './components/PhotoItem'

const App = () =>{

  const [loading,setLoading] =useState(false)
  const [photos,setPhotos] = useState<Photo[]>([])
  const [uploading,setUploading] = useState(false)



  useEffect(() =>{

    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await P.getAll())
      setLoading(false)
    }
    getPhotos()
  },[])


  const handleFormSubmit = async (e:FormEvent<HTMLFormElement>) =>{

    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File
    const name = formData.get('name') as string

    if(file && file.size >0){
      setUploading(true)
      let result = await P.insert(file,name)
      setUploading(false)

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`)

      }else{
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }

  return(
    <S.Container>
      <S.Area>
        <S.Header>
          Galeria
        </S.Header>
        <S.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type='file' name='image'></input>
          <input type='text'  name='name'></input>
          <input type='submit' value='Enviar'></input>
          {uploading && "Enviando...."}
        </S.UploadForm>



        {loading &&
          <S.Loading>
            <div className='emoji'>✋</div>
            <div>Carregando</div>
          </S.Loading>
        }


        {!loading && photos.length >0 &&
          <S.PhotoList>
            {photos.map((item,index)=>(
             <PhotoItem key={index} url={item.url} name={item.name}/>
            ))}
          </S.PhotoList>
        }

        {!loading && photos.length ===0 &&
           <S.Loading>
           <div className='emoji'>😔</div>
           <div>Nao Foram Cadastradas nenhuma foto</div>
         </S.Loading>
        
        }

      </S.Area>
    </S.Container>
  )
}

export default App;