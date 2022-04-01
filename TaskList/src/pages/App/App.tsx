import * as C from './App.styles'
import {useEffect, useState} from 'react'
import {Item} from '../../types/item'
import { ListItem } from '../../components/ListItem'
import {AddArea} from '../../components/addArea'

export const App = () =>{

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
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

    const handleCheck = (id:number, done:boolean) =>{
      let newList =[...list]
      for(let i in newList) {
        if(newList[i].id == id) {
          newList[i].done = done;
        }
    } 
    setList(newList)
  }

  let Time= new Date().toLocaleDateString()
  const [stateTime,setStateTime] = useState(Time);

  const UpdateTime = () =>{
    let time = new Date().toLocaleTimeString()
    setStateTime(time);
  }

  setInterval(UpdateTime,1000)
  return(
    <C.Container>
        <C.Header>
            <h1>{stateTime}</h1>
            <C.AddArea>
             <AddArea onEnter={handleAddTask} />
             
            </C.AddArea>
        </C.Header>

        <C.Area>
         
            {list.map((item,index) =>(
            <ListItem key={index} item={item} onChange={handleCheck}/>
            ))}
       
        </C.Area>

        <C.Foooter>
            <em><h2>DailyTasks</h2></em>
        </C.Foooter>
    </C.Container>
  )
  
}