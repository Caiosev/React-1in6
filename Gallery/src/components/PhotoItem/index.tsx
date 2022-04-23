import * as S from './styles'


type Props = {
    url:string,
    name:string
}

export const PhotoItem = ({url, name}:Props) =>{

    return(
        <S.Container>
            <img src={url} alt={name} />
            <h1>{name}</h1>
        </S.Container>
    )
}