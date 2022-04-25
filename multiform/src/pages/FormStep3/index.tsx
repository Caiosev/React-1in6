import { Theme } from '../../components/Theme'
import * as S from'./style'
import {useNavigate,Link} from 'react-router-dom'
import { useForm,FormAction } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'



export const FormStep3 = () =>{
    let navigate = useNavigate()
    const {state,dispatch} = useForm()


    const handleNextStep = () =>{
        if(state.email !== '' && state.github!== ''){
            alert('Cadastrado com sucesso')
            console.log(state)
            //window.location.reload();
        }else{
            alert('Preencha os dados')
        }
        
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setEmail,
            payload: e.target.value
        })
    }


    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setGithub,
            payload: e.target.value
        })
    }

    useEffect(() =>{
        if(state.name ===''){
            navigate('/')
        }else{
            dispatch({
                type:FormAction.setCurrentStep,
                payload:3
            })
        }
    },[])

    return(
        <Theme>
            <S.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}!, aonde te encontramos?</h1>
                <p>Preencha os dados abaixo</p>
                <hr />

                <label>Qual seu Email?
                    <input type="text" 
                            autoFocus
                            onChange={handleEmailChange}
                            value={state.email}/>
                </label>


                <label>Qual seu Github?
                    <input type="text" 
                            autoFocus
                            onChange={handleGithubChange}
                            value={state.github}/>
                </label>
                <Link to='/step2'><button className='back' onClick={handleNextStep}>Voltar</button></Link> 
                <button onClick={handleNextStep}>Finalizar</button>
            </S.Container>
        </Theme>
    )


}