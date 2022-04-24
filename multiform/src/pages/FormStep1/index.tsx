import { Theme } from '../../components/Theme'
import * as S from'./style'
import {useNavigate} from 'react-router-dom'
import { useForm,FormAction } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'



export const FormStep1 = () =>{
    let navigate = useNavigate()
    const {state,dispatch} = useForm()


    const handleNextStep = () =>{
        if(state.name !== ''){
            navigate('/step2')
        }else{
            alert('Preencha os dados')
        }
        
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setName,
            payload: e.target.value
        })
    }

    useEffect(() =>{
        dispatch({
            type:FormAction.setCurrentStep,
            payload:1
        })
    },[])

    return(
        <Theme>
            <S.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />

                <label>Seu nome Completo
                    <input type="text" 
                            autoFocus
                            onChange={handleNameChange}
                            value={state.name}/>
                </label>
                <button onClick={handleNextStep}>Proximo</button>
            </S.Container>
        </Theme>
    )


}