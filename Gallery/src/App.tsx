import * as S from './app.style'
import * as P from './services/photos'
import { useState,useEffect } from 'react'
import {Photo} from './types/Photo'

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

  return(
    <S.Container>
      <S.Area>
        <S.Header>
          Galeria
        </S.Header>
        {/* Upload*/}
        {loading &&
          <S.Loading>
            <div className='emoji'>✋</div>
            <div>Carregando</div>
          </S.Loading>
        }
      </S.Area>
    </S.Container>
  )
}

export default App;