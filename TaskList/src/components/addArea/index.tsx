import * as C from './styles'
import { useState, KeyboardEvent } from 'react'


export const AddArea = () =>{

    const [inputText,setInputText] = useState ('')

    const handleKeyUp =(e:KeyboardEvent)=>{

    }
    return(
        <C.Container>
            <div className='image'>➕</div>
            <input type="text" 
            placeholder='Adicionar uma tarefa' 
            value={inputText}
            onChange = {e=>setInputText(e.target.value)}
            onKeyUp={handleKeyUp}/>
        </C.Container>
    )
}