import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&family=Roboto:ital,wght@0,400;0,700;1,300&display=swap');

    
`;

export const ContainerLeft = styled.div`
    height: 100vh;
    width: 40vw;
    background-color: #6C6CFF;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    @media (max-width: 480px){
     display: none;
    }
`;

export const ContainerLeftTitle = styled.h1`
    font-size: 3rem;
`;

export const ContainerRight = styled.div`
    height: 100vh;
    width: 60vw;
    background-color: #212121;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & form{
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 400px;
        margin-top: 2rem;
    }
    & input{
        background-color: #fff;
        padding-left: 1rem;
        height: 2.5rem;
        border: 0;
        margin-bottom: 1rem;
        font-size: 1rem;
    }
    & button{
        background-color: #6c6cff;
        border: 0;
        height: 2.5rem;
        color: #fff;
        font-size: 1rem;
    }
    & div{
        margin-top: 1rem;
    }

    & a{
        color: #6c6cff;
        margin-top: 1rem;
    }
    @media (max-width: 480px){
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 100vw;
     height: 100vh;

     & strong{
         display: none;
     }
    }
`;

export const ContainerRightTitle = styled.h1`
    font-family: 'Quicksand', sans-serif;
    
    @media (max-width: 480px){
        font-size: 1.5rem;
        text-align: center;
    }

`;

