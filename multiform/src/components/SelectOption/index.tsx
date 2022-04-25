import * as S from './style'

type Props = {
    title:string,
    desc:string,
    icon:string,
    select:boolean,
    onClick: () => void
}

export const SelectOption = ({title,desc,icon,select,onClick}:Props) =>{



    return(
        <S.Container onClick={onClick}select={select}>
           <S.Icon>{icon}</S.Icon>
           <S.Info>
               <S.Title>{title}</S.Title>
               <S.Desc>{desc}</S.Desc>
           </S.Info>
        </S.Container>
    )
}