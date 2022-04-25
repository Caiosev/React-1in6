import styled from "styled-components";


export const Container = styled.div`

    margin: 30px 0;
    cursor: pointer;
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;

`

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 20px;
    color: #fff;


`

export const Desc = styled.div`

    text-align: right;
    font-size: 15px;
    color: #b8b8d4;

`

export const IconArea = styled.div<{active:boolean}>`

    width: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#24cd89' : '#494A7c'};
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    transition: 1s ease;
    transform: ${props => props.active ? 'scale(1.2)' : 'scale(0.9)'};

    .white{
        filter: invert(94%) sepia(0%) saturate(6865%) hue-rotate(344deg) brightness(107%) contrast(105%);
    }
`

export const Point = styled.div<{active:boolean}>`

    width: 8px;
    height: 8px;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -7px;
    background-color: ${props => props.active ? '#25cd89' : '#02044a'};
`