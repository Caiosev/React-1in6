import { ReactNode } from 'react'
import { Header } from '../Header'
import { SidebarItem } from '../SideBarItem'
import {useForm} from '../../contexts/FormContext'
import * as S from './styles'

type Props = {
    children: ReactNode
}

export const Theme=({children}:Props)=>{

    const {state} = useForm()


    return(
        <S.Container>
            <S.Area>
                <Header />
                <S.Steps>
                    <S.Sidebar>
                        <SidebarItem title="Pessoal" desc="Se Identifique" icon="profile" path='/' active={state.currentStep===1}/>
                        <SidebarItem title="Profissional" desc="Seu nivel" icon="book" path='/step2' active={state.currentStep===2}/>
                        <SidebarItem title="Contato" desc="Como te achar" icon="mail" path='/step3' active={state.currentStep===3}/>
                    </S.Sidebar>
                    <S.Page>
                        {children}
                    </S.Page>
                </S.Steps>
            </S.Area>
        </S.Container>
    )
}