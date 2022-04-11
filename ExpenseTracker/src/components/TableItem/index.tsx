import * as S from './styles'
import {Item} from '../../types/Item'
import {formatDate} from '../../helpers/dateFilter'
type Props ={
    item:Item
}

export const TableItem = ({item}:Props) =>{
    return(
        <S.Tableline>
            <S.TableColumn>{formatDate(item.date)}</S.TableColumn>
            <S.TableColumn>{item.category}</S.TableColumn>
            <S.TableColumn>{item.title}</S.TableColumn>
            <S.TableColumn>{item.value}</S.TableColumn>
        </S.Tableline>
    )
}