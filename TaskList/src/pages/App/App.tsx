import * as C from './App.styles'
import {useState} from 'react'
import {Item} from '../../types/item'
import { ListItem } from '../../components/ListItem'


export const App = () =>{

  const [list, setList] = useState<Item[]>([
    {
      id: 1,name:'a',done:false
    },
    {
      id: 2,name:'n',done:false
    }
  ])


  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>
        {/* Add tarefa*/}

        {list.map((item,index) =>(
         <ListItem key={index} item={item}/>
         ))}

      </C.Area>
    </C.Container>
  )
}