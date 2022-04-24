import * as S from './App.styles'
import {Char} from './components/char'


const App = () =>{


  return(
    <S.Container>
      <S.Map>
        <Char x={5} y={0}></Char>
      </S.Map>
    </S.Container>
  )
}

export default App;