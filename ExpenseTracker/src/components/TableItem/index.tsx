import * as S from './styles'
import {Item} from '../../types/Item'
import {formatDate} from '../../helpers/dateFilter'
import {categories} from '../../data/categories'
type Props ={
    item:Item
}

export const TableItem = ({item}:Props) =>{
    return(
        <S.Tableline>
            <S.TableColumn>{formatDate(item.date)}</S.TableColumn>
            <S.TableColumn>
                <S.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </S.Category>
                </S.TableColumn>
            <S.TableColumn>{item.title}</S.TableColumn>
            <S.TableColumn>{`R$${item.value}`}</S.TableColumn>
        </S.Tableline>
    )
}