import styled from "styled-components";

export const Main = styled.main `

    background-color: #5C76E4;
    color: #797a81;
    min-height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 5vw 90vw 5vw;
    grid-template-rows: 5vh 90vh 5vh;

    h3{
        color: #5C76E4;
        margin-bottom: 50px;
    }
    
    .show{
        display: block;
        right: 0;
    }
`
export const MainContainer = styled.section`

    grid-column: 2/3;
    grid-row: 2/3;
    background-color: white;
    border-radius: 30px;
    padding: 70px 50px;
`
export const Area = styled.section`
  
        max-height: 500px;
        overflow: auto;
    
        
    
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .date-time{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    
    h1{
        font-size: 1.5rem;
    }
    h2{
        font-size: 1rem;
        margin-left: 3px;
    }
    .add-btn{
        height: 35px;
        width: 35px;
        background-color: #5C76E4;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: ease 1s;
        :active{
           
            transform: scale(3);
        }
        span{
            font-size: 1.5rem;
            color: white;
            
        }
    }
`

export const AddArea = styled.section `
    position: fixed;
    right: -100%;
    background-color: black;
    height: 100vh;
    width: 50vw;
    transition: ease 1s;
    .add-inputs{
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
        font-size: 2.5rem;

            button{
            border: 1px solid #555;
            border-radius: 20px;
            padding: 10px;
            }
        .input{
            width: 40vw;
        }
    }
    z-index: 10;
   

`

export const Foooter = styled.footer`
  color: white;
  margin-top: 10px;
  justify-self: end;
  grid-column: 2/4;
  grid-row: 3/4;
`