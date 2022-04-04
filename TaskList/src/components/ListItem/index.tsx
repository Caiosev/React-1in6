import * as C from './styles'
import { Item} from '../../types/item'
import { useState } from 'react'
import styled from 'styled-components'

type Props = {
    item : Item
    onChange: (id: number, done: boolean) => void
    realtime:string
   
}



export const ListItem = ({item, onChange, realtime}: Props) =>{


    const [bg, setBg] = useState('')

    const handlebg = () =>{
        if((parseInt(item.time)) <(parseInt(realtime)) && item.done === false){
            setBg('red')
        }
        else if((parseInt(item.time)) ==(parseInt(realtime)) && item.done===false){
            setBg('yellow')
        }else{
            setBg('#20212C')
        }
      }
      setInterval(handlebg,2000)
    
    
    return(
        <C.Container done={item.done} time={item.time} realtime={realtime} bg={bg}>
            
        <input 
        type="checkbox" 
        checked={item.done}
        onChange={e => onChange(item.id , e.target.checked)}
        
        />     
        <label>{item.time} - {item.name} </label>   
        
        </C.Container>
    )
}