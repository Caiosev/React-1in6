import styled from 'styled-components'


type ContainerProps = {
    done:boolean;
    time:string;
    realtime:string;
}

export const Container = styled.div(({done,time,realtime}: ContainerProps) =>(`

        display: flex;
        background-color:  #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;
        background-color: ${parseInt(time)<parseInt(realtime)&&'red'};

        label{
           color: #ccc;
           text-decoration: ${done?'line-through':'initial'}

        }

        input{
            width: 25px;
            height: 25px;
            margin-right: 5px;
        
        }
    `


));