import * as S from './styles'
import { Sides } from '../../Types/sides'
type Props = {
    x:number;
    y:number
    side: Sides
}

export const Char = ({x,y,side}:Props) =>{

    const size= 30
    const sides = {
        down:0,
        left:-30,
        right:-60,
        up:-90
    }


    return(
        <S.Container
            left={x*size}
            top={y*size}
            size={size}
            sidePos={sides[side] ??0}
        >


        </S.Container>

    )
}