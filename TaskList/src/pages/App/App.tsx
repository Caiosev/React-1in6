import * as C from './App.styles'
import {useEffect, useState} from 'react'
import {Item} from '../../types/item'
import { ListItem } from '../../components/ListItem'
import {AddArea} from '../../components/addArea'

export const App = () =>{

  const [list, setList] = useState<Item[]>([
    { id: 0, time:'10:00', name: 'Comprar o pão na padaria', done: false },
    { id: 1, time:'20:00', name: 'Dominar a Russia', done: true },
  ])
  
  const handleAddTask = (taskname:string,tasktime:string) =>{
    let newList = [...list];  
    newList.push({
      id:list.length + 1,
      time:tasktime,
      name:taskname,
      done:false

    });
    setList(newList)
    console.log(newList)
  }

    const handleCheck = (id:number, done:boolean ) =>{
      let newList =[...list]
      for(let i in newList) {
        if(newList[i].id == id) {
          newList[i].done = done;
        }
    } 
    setList(newList)
    console.log(list)
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
            <ListItem key={index} item={item} onChange={handleCheck} realtime={stateTime} />
            ))}
       
        </C.Area>

        <C.Foooter>
            <em><h2>DailyTasks</h2></em>
        </C.Foooter>
    </C.Container>
  )
  
}