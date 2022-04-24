import { ReactNode } from 'react'
import { Header } from '../Header'
import * as S from './styles'

type Props = {
    children: ReactNode
}

export const Theme=({children}:Props)=>{
    return(
        <S.Container>
            <S.Area>
                <Header />
                <S.Steps>
                    <S.Sidebar>
                        ... 
                    </S.Sidebar>
                    <S.Page>
                        {children}
                    </S.Page>
                </S.Steps>
            </S.Area>
        </S.Container>
    )
}