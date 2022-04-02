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
    
    return(
        <C.Container done={item.done} time={item.time} realtime={realtime}>
            
        <input 
        type="checkbox" 
        checked={item.done}
        onChange={e => onChange(item.id , e.target.checked)}
        />     
        <label>{item.time} - {item.name} </label>   
        
        </C.Container>
    )
}