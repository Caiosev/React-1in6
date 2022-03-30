import * as C from './App.styles'
import {useState} from 'react'
import {Item} from '../../types/item'
import { ListItem } from '../../components/ListItem'
import {AddArea} from '../../components/addArea'

export const App = () =>{

  const [list, setList] = useState<Item[]>([
    {
      id: 1,name:'a',done:false
    },
    {
      id: 2,name:'n',done:true
    }
  ])


  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>
        <AddArea />

        {list.map((item,index) =>(
         <ListItem key={index} item={item}/>
         ))}

      </C.Area>
    </C.Container>
  )
}