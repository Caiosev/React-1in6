type Props = {
    name:string
}


export function Header({name}:Props){
    return(
        <header>
            <h1>Oi,{name}</h1>
        </header>
    )
}