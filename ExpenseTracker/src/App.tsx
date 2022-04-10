import * as S from './App.styles'
import {Item} from './types/Item'
import {Category} from './types/Category'
import {categories} from './data/categories'
import {items} from './data/items'
import { useState, useEffect } from 'react'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'
import {TableArea} from './components/TableArea'

const App = () =>{

  const [list,setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth());


  useEffect(()=>{
    setFilteredList(filterListByMonth(list,currentMonth))
  },[list,currentMonth])

  console.log(getCurrentMonth())
  console.log(filteredList)
  return(
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Finaneiro</S.HeaderText>
      </S.Header>
      <S.Body>
        {/* Area de Info */}
        {/* Area de Insert */}
        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
}

export default App