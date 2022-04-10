import styled  from "styled-components";

export const Container = styled.div`

    border: 1px solid #555;
    border-radius: 20px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;


    .input{
        display: flex;
       
        .image{
        margin-right: 5px;
        cursor: pointer;
        width: 10%;
        }
    }
   
    input{
        border: 0px;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 15px;
        width: 90%;
        text-align: left;
    }

   
`