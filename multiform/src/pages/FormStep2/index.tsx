import { Theme } from '../../components/Theme'
import * as S from'./style'
import {useNavigate,Link} from 'react-router-dom'
import { useForm,FormAction } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'



export const FormStep2 = () =>{
    let navigate = useNavigate()
    const {state,dispatch} = useForm()


    const handleNextStep = () =>{
        if(state.level == 0 || state.level == 1){
            navigate('/step3')
        }else{
            alert('Preencha os dados')
        }
        
    }
    useEffect(() =>{
        if(state.name ===''){
            navigate('/')
        }else{
            dispatch({
                type:FormAction.setCurrentStep,
                payload:2
            })
        }
    },[])

    const setLevel = (level:number) =>{
        dispatch({
            type:FormAction.setLevel,
            payload:level
        })
    }

    return(
        <Theme>
            <S.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve voce?</h1>
                <p>Selecione uma das opções abaixo</p>
                <hr />
                <SelectOption
                    title = "Sou Inciante"
                    desc = 'Comecei a programar há menos de 2 anos'
                    icon='😅'
                    onClick={() => setLevel(0)}
                    select={state.level ===0}
                />
                <SelectOption
                    title = "Sou Programador"
                    desc = 'Programo há 2 anos ou mais'
                    icon='😎'
                    select={state.level ===1}
                    onClick={() => setLevel(1)}
                />

               <Link to='/'><button className='back' onClick={handleNextStep}>Voltar</button></Link> 
                <button onClick={handleNextStep}>Proximo</button>  
            </S.Container>
        </Theme>
    )


}