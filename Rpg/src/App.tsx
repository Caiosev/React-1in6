import { useEffect } from 'react'
import * as S from './App.styles'
import {Char} from './components/char'
import {useChar}from './hooks/useChar'

const App = () =>{
  const char = useChar()

  useEffect(() =>{
    window.addEventListener('keydown',handleKeyDown)
  },[])


  const handleKeyDown = (e:KeyboardEvent) =>{
    switch (e.code){
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft()
      break

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()
      break

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()
      break

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
      break
    }
  }

  return(
    <S.Container>
      <S.Map>
        <Char x={char.x} y={char.y} side={char.side}></Char>
      </S.Map>
    </S.Container>
  )
}

export default App;