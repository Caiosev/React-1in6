import * as C from './App.styles'
import {useState} from 'react'
import {Item} from '../../types/item'
import { ListItem } from '../../components/ListItem'
import {AddArea} from '../../components/addArea'

export const App = () =>{

  const [list, setList] = useState<Item[]>([
   
  ])
  
  const handleAddTask = (taskname:string) =>{
    let newList = [...list];  
    newList.push({
      id:list.length + 1,
      name:taskname,
      done:false

    });
    setList(newList)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>
        <AddArea onEnter={handleAddTask}/>

        {list.map((item,index) =>(
         <ListItem key={index} item={item}/>
         ))}

      </C.Area>
    </C.Container>
  )
}