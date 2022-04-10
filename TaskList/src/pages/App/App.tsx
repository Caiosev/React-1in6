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
    contadorFunc();
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
    contadorFunc()
    console.log(list)
  }

  let Time= new Date().toLocaleDateString()
  const [stateTime,setStateTime] = useState(Time);

  const UpdateTime = () =>{
    let time = new Date().toLocaleTimeString()
    setStateTime(time);
  }
  setInterval(UpdateTime,1000)


  const handleDelete = (id:number) =>{
    let newList = [...list]
    
    for(let i in newList){
      if(newList[i].id == id){
        console.log(newList)
        newList.splice(parseInt(i),1)
        console.log(newList)
        setList(newList)
        contadorFunc()
      }
    }
  }

  let data = new Date();
  let dia = String(data.getDate()).padStart(2, '0');
  let mes = String(data.getMonth() + 1).padStart(2, '0');
  let ano = data.getFullYear();
  let semana =''
  if(data.getDay() == 0){
    semana ='Dom'
  } else if(data.getDay() == 1){
    semana ='Seg'
  } else if(data.getDay() == 2){
    semana ='Ter'
  } else if(data.getDay() == 3){
    semana ='Qua'
  }  else if(data.getDay() == 4){
    semana ='Qui'
  }  else if(data.getDay() == 5){
    semana ='Sex'
  } else if(data.getDay() == 6){
    semana ='Sab'
  } 
  let contador =0

  const contadorFunc = () =>{
    for (let index = 0; index < list.length; index++) {
      if(list[index].done == false){
        contador++
      } 
    }
  }
  contadorFunc()


  const [showMenu, setShowMenu] = useState(false)
  const handleShow = () =>{
    setShowMenu(showMenu => !showMenu)
  }
  let toggleClass = showMenu ? ' show' : '';

    list.sort((a,b) =>{
     if(a.time > b.time){
       return 1
     } else{
       return -1
     }
   })

   
    return(
    <C.Main>
       <C.AddArea className={`add-menu${toggleClass}`}>
             <AddArea onEnter={handleAddTask} handleShow={handleShow} />
       </C.AddArea>
      <C.MainContainer>
        <C.Header>
          <div className='date-time'>
            <h1>{stateTime}</h1>
            <h2>{`${dia}/${mes}/${ano} ${semana} `}</h2>
          </div>
          
          <div className='add-btn' onClick={handleShow}>
            <span>+</span>
          </div>
        </C.Header>
        <h3>{contador} Tarefas a serem feitas</h3>
        <C.Area className='list'>
         
            {list.map((item,index) =>(
            <ListItem key={index} item={item} onChange={handleCheck} realtime={stateTime} handleDelete={handleDelete} />
            ))}
       
        </C.Area>
      </C.MainContainer>
      <C.Foooter>
            <em><h2>DailyTasks</h2></em>
      </C.Foooter>
    </C.Main>
  )
  
}