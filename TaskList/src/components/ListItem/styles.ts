import { useState } from 'react';
import styled from 'styled-components'


type ContainerProps = {
    done:boolean;
    time:string;
    realtime:string;
    bg:string;
}



export const Container = styled.div(({done,bg}: ContainerProps) =>`

    
    ::after{
        content: '';
        transform: ${done?'translateY(-35px)':'translateY(-15px)'};
        height: 2px;
        width: 100%;
        transition: ease 1s;
        background: #ccc;
        display: block;
        z-index:1;
    }

        #time{
            color: ${bg};
            margin-right:20px;
        }
          .item-content{
            display: flex;
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 10px;
            align-items: center;
            color: black;
            
        }
        label{
           color: black;
           opacity:${done?'0.3':'1'};

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
            cursor:pointer;
            
        }
    `


);