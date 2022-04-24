import * as S from './styles'

type Props = {
    x:number;
    y:number
}

export const Char = ({x,y}:Props) =>{

    const size= 30

    return(
        <S.Container
            left={x*size}
            top={y*size}
            size={size}
        >


        </S.Container>

    )
}