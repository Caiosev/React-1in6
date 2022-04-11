import * as S from './styles'
import{formatCurrentMonth} from '../../helpers/dateFilter'
import {ResumeItem} from '../ResumeItem/index'
type Props = {
    currentMonth:string;
    onMonthChange:(newMonth:string)=>void;
    income:number;
    expense:number;
}

export const InfoArea = ({currentMonth, onMonthChange,expense,income}:Props) =>{


    const handlePrevMonth = () =>{
        let [year , month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth(currentDate.getMonth()-1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);

    }


    const handleNextMonth = () =>{
        let [year , month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) +1, 1)
        currentDate.setMonth(currentDate.getMonth()-1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);

    }

    return(
        <S.Container>
            <S.MonthArea>
                <S.MonthArrow onClick={handlePrevMonth}>⬅️</S.MonthArrow>
                <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
                <S.MonthArrow onClick={handleNextMonth}>➡️</S.MonthArrow>
            </S.MonthArea>
            <S.ResumeArea>
            <ResumeItem title="Receitas" value={income}></ResumeItem>
            <ResumeItem title="Despesas" value={expense}></ResumeItem>
            <ResumeItem title="Balanço" value ={income-expense}
                color={(income-expense) <0 ? 'darkred':'green'}></ResumeItem>
            </S.ResumeArea>
        </S.Container>
    )
}