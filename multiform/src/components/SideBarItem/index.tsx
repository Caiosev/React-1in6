import { Link } from 'react-router-dom'
import * as S from './styles'
import ProfileSVG from '../../svg/profile.svg'
import BookSVG from '../../svg/book.svg'
import MailSVG from '../../svg/mail.svg'

type Props = {
    title:string,
    desc:string,
    icon:string,
    path:string,
    active:boolean
}

export const SidebarItem = ({title,desc,icon,path,active}:Props) =>{
    return(
        <S.Container>
        <Link to={path}>
            <S.Info>
                <S.Title>{title}</S.Title>
                <S.Desc>{desc}</S.Desc>
            </S.Info>
            <S.IconArea active={active}>
                {icon === 'profile' &&
                    <img src={ProfileSVG} width={24}
                    height={40} color='white' className='white'/>
                }
            
                {icon === 'book' &&
                    <img src={BookSVG} width={24}
                    height={40} color='white' className='white'/>
                }

                {icon === 'mail' &&
                    <img src={MailSVG} width={24}
                    height={40} color='white' className='white'/>
                }
            </S.IconArea>
            <S.Point active={active}></S.Point>
        </Link>
        </S.Container>

    )
}