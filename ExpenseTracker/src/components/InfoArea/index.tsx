import * as S from './styles'
import{formatCurrentMonth} from '../../helpers/dateFilter'

type Props = {
    currentMonth:string
}

export const InfoArea = ({currentMonth}:Props) =>{
    return(
        <S.Container>
            <S.MonthArea>
                <S.MonthArrow>⬅️</S.MonthArrow>
                <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
                <S.MonthArrow>➡️</S.MonthArrow>
            </S.MonthArea>
            <S.ResumeArea>

            </S.ResumeArea>
        </S.Container>
    )
}