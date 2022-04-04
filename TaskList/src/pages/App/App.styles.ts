import styled from "styled-components";

export const Container = styled.section `

    background-color: #17181F;
    color: #797a81;
    min-height: 100vh;
    @media screen and (min-width:62rem) {
        min-height: 100vh;
        overflow-x: auto;
        
    }
`

export const Area = styled.section`
        min-width: 95vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 13vh;

        @media screen and (min-width:62rem) {
            margin-top: 250px;
            max-height: 50vh;
            flex-wrap: wrap;
            align-items: flex-start;
            padding: 2rem;
            overflow-y: hidden;
            
        }
        
        @media screen and (min-width:72rem){
            max-height: 65vh;
        }

    div{
        width: 90vw;
        margin-top: 20px;
        height: 50px;

        @media screen and (min-width:62rem) {
            width: 25vw;
            margin-right: 10px;
        }
    }
        
    
`

export const Header = styled.header`
    height: 10vh;
    padding: 10px;
    h1{
        font-size: 3rem;
        text-align: center;
    }
    @media screen and (min-width:62rem) {
        h1{
            font-size: 8rem;
        }
        position: fixed;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    
`

export const AddArea = styled.section `
    display: flex;
    justify-content: center;

    .add-inputs{
        width: 85vw;
    }
`

export const Foooter = styled.footer`
    text-align: right;
    margin-top:20px;
    padding: 1rem;
`