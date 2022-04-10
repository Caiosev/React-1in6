import * as C from './styles'
import { useState, KeyboardEvent } from 'react'

type Props ={
    onEnter:(taskName:string, taskTime:string) => void
    handleShow:()=>void
}


export const AddArea = ({onEnter,handleShow}:Props) =>{

    const [inputText,setInputText] = useState ('')
    const [inputTime, setInputTime] = useState('')

    const handleKeyUp =(e:KeyboardEvent)=>{
        if(e.code == 'Enter' && inputText !==''){
            onEnter(inputText,inputTime);
            setInputText('');
            setInputTime    ('');
        }
    }

    const handleClick = () =>{
        onEnter(inputText,inputTime)
        setInputText('');
        setInputTime('');
    }
    return(
        <div className='add-inputs'>
            <div onClick={handleShow} className='close'>
            <i className='bx bx-x-circle'></i>
            </div>
            <C.Container>
                <div className="input">
                    <input type="text" 
                    placeholder='Adicionar uma tarefa' 
                    value={inputText}
                    onChange = {e=>setInputText(e.target.value)}
                    onKeyUp={handleKeyUp}/>
                </div>
            </C.Container>
            <C.Container>
                <input type="time" 
                placeholder='Adicione a Hora' 
                value={inputTime}
                onChange = {e=>setInputTime(e.target.value)}
                onKeyUp={handleKeyUp}/>
            </C.Container>
            <button onClick={handleClick}>Cadastrar Tarefa</button>
        </div>
        
    )
}