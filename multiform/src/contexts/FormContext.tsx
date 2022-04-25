// Context, Reducer, Provider, Hook

import {createContext,ReactNode,useContext,useReducer} from 'react'


type State = {
    currentStep: number
    name:string,
    level:0 | 1,
    email:string,
    github:string
}

type Action = {
    type:FormAction,
    payload:any
}

const initialData:State = {
    currentStep:0,
    name:'',
    level:0,
    email:"",
    github:''
}

type ContextType={
    state:State,
    dispatch:(action:Action) => void
}

type FormProviderProps ={
    children:ReactNode
}

const FormContext = createContext<ContextType | undefined>(undefined)

export enum FormAction{
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const FormReducer = (state:State,action:Action) =>{
    switch(action.type){
        case FormAction.setCurrentStep:
                return {...state, currentStep: action.payload}
        case FormAction.setName:
                return{...state, name: action.payload}
        case FormAction.setLevel:
                return{...state, level: action.payload}
        case FormAction.setEmail:
                return{...state, email: action.payload}
        case FormAction.setGithub:
                return{...state, github: action.payload}
        default:
            return state
    }
}

export const FormProvider = ({children}:FormProviderProps) =>{

    const [state,dispatch] = useReducer(FormReducer,initialData)
    const value = {state,dispatch}
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}


export const useForm = () =>{
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error ('Error')
    }
    return context
}