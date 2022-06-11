import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&family=Roboto:ital,wght@0,400;0,700;1,300&display=swap');
    background-color: #212121;
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
    align-items: center;
    
    @media (max-width: 480px){
        width: 100vw;
    }

    & form{
        width: 90%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }

    & textarea{
        height: 6.5rem;
        margin-bottom: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-family: 'roboto';
        font-size: 16px;
        background-color: #fff;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        padding-top: 10px;


    }
`;

export const BtnSubmit = styled.button`
    background-color: #6C6CFF;
    border: 0;
    height: 40%;
    border-radius: 5px;
    margin-bottom: 1rem;
    color: #fff;
    font-size: 1rem;

    @media (max-width: 480px){
        height: 30%;
    }
`;

export const ContainerRightTitle = styled.h1`
    font-family: 'Quicksand';
    margin-top: 2rem;

    @media (max-width: 480px){
        text-align: center;
        font-size: 19px;
    }
`;

export const ContainerRightListArea = styled.div`
    background-color: #353535;
    width: 90%;
    max-width: 400px;
    padding: 0.8rem;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10px;

    @media (max-width: 480px){
        padding-top: 3px ;
    }

    & p{
        margin-bottom: 0.8rem;
        @media (max-width: 480px){
            font-size: 14px;
        }
    }

    & div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: -7px;
    }

    & button{
        background-color: transparent;
        margin-right: 1%;
        border-radius: 2px;
        height: 1.3rem;
        width: 4rem;
        border: 1px solid #efcb68;
        color: #fff;
        border-radius: 10px;
        
        &:hover{
        background-color: #efcb68;
        margin-right: 1%;
        border-radius: 2px;
        height: 1.3rem;
        width: 4rem;
        color: #000;
        border-radius: 10px;
        }
    }
    & .concluir{
        background-color: transparent;
        border: 0;
        margin-right: 4%;
        border-radius: 2px;
        height: 1rem;
        width: 4rem;
        color: #6C6CFF;
        font-weight: 600;

        &:hover{
            background-color: #6C6CFF;
            border: 0;
            margin-right: 4%;
            border-radius: 10px;
            height: 1.3rem;
            width: 4rem;
            color: #fff;
            font-weight: 600;
        }
    }
`;

export const BtnLogout = styled.button`
    position: absolute;
    right: 3%;
    bottom: 3%;
    border: 0;
    height: 2.8rem;
    width: 3rem;
    border-radius: 100%;
    background-color: #6C6CFF;
    color: #fff;
    font-weight: bold;

    @media (max-width: 480px){
        display: none;
    }
`;

