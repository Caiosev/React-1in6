import * as S from './app.style'
import * as P from './services/photos'
import { useState,useEffect } from 'react'
import {Photo} from './types/Photo'
import {PhotoItem} from './components/PhotoItem'

const App = () =>{

  const [loading,setLoading] =useState(false)
  const [photos,setPhotos] = useState<Photo[]>([])



  useEffect(() =>{

    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await P.getAll())
      setLoading(false)
    }
    getPhotos()
  },[])


  const handleFormSubmit = () =>{
    
  }

  return(
    <S.Container>
      <S.Area>
        <S.Header>
          Galeria
        </S.Header>
        <S.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type='file' name='image'></input>
          <input type='submit' value='Enviar'></input>
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