import * as S from './App.styles'
import {Item} from './types/Item'
import {Category} from './types/Category'
import {categories} from './data/categories'
import {items} from './data/items'
import { useState, useEffect } from 'react'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'
import {TableArea} from './components/TableArea'
import { InfoArea } from './components/InfoArea'

const App = () =>{

  const [list,setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth());
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)


  useEffect(()=>{
    setFilteredList(filterListByMonth(list,currentMonth))
  },[list,currentMonth])

  console.log(getCurrentMonth())
  console.log(filteredList)

  useEffect(()=>{
    let income =0
    let expense =0

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expense += filteredList[i].value;
      }else{
        income += filteredList[i].value;
      }
    }

    setIncome(income)
    setExpense(expense)
  },[filteredList])


const handleMonthChange = (newMoth:string) =>{
  setCurrentMonth(newMoth)
}

  return(
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Finaneiro</S.HeaderText>
      </S.Header>
      <S.Body>
        <InfoArea currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income} expense={expense} ></InfoArea>
        {/* Area de Insert */}
        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
}

export default App