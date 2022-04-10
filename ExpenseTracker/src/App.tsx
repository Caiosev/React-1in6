import * as S from './App.styles'
import {Item} from './types/Item'
import {Category} from './types/Category'
import {categories} from './data/categories'
import {items} from './data/items'
import { useState, useEffect } from 'react'
import {getCurrentMonth} from './helpers/dateFilter'

const App = () =>{

  const [list,setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth());


  useEffect(()=>{
    
  },[list,currentMonth])


  return(
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Finaneiro</S.HeaderText>
      </S.Header>
      <S.Body>
        {/* Area de Info */}
        {/* Area de Insert */}
        {/* Tabela */}
      </S.Body>
    </S.Container>
  );
}

export default App