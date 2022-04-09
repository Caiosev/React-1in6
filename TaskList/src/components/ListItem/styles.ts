import { useState } from 'react';
import styled from 'styled-components'


type ContainerProps = {
    done:boolean;
    time:string;
    realtime:string;
    bg:string;

}



export const Container = styled.div(({done,time,realtime,bg}: ContainerProps) =>(`

        display: flex;
        background-color:  #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;
        background-color:${bg};


        label{
           color: #ccc;
           text-decoration: ${done?'line-through':'initial'}

        }

        input{
            width: 25px;
            height: 25px;
           
        
        }
        .name-check{
                width:90%;
                display:flex;
                align-items: center;
        }
        .image{
            width:10%;
            display:flex;
            align-items: center;
            
        }
    `


));